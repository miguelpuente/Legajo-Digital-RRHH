const { ErrorObject } = require('../../../helpers/error')
const { Sucursal } = require('../../../database/models')
const { getEmpresaByPk } = require('../../empresas/services/empresas.services')

exports.getAllSucursales = async () => {
  return await Sucursal.findAll()
}

exports.getSucursalByPk = async (id) => {
  try {
    const sucursal = await Sucursal.findByPk( id )
    if (sucursal) return sucursal
    throw new ErrorObject('Sucursal no existe', 404)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createSucursal = async (body) => {
  try {
    if (!await getEmpresaByPk(body.empresa_id)) throw new ErrorObject('Empresa no existe', 404)
    const newSucursal = await Sucursal.create(body)
    if (!newSucursal) throw new ErrorObject('Falló registro de sucursal', 404)
    return newSucursal
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getSucursalByEmpresaId = async (empresaId) => {
  try {
    return await Sucursal.findAll({ where: { empresaId } })
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateSucursalById = async (req) => {
  try {
    const { id } = req.params
    const { empresa_id, nombre, telefono, email, activo, } = req.body
    if (nombre.length<4) throw new ErrorObject('Nombre debe ser más largo', 404)
    if (!(await getEmpresaByPk(empresa_id))) throw new ErrorObject('Empresa no existe', 404)
    const sucursal = await Sucursal.findByPk(id)
    if (!sucursal) throw new ErrorObject('Sucursal no existe', 404)
    await Sucursal.update({ empresa_id, nombre, telefono, email, activo, },{ where: { id: sucursal.id } },)
    return sucursal
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroySucursal = async (id) => {
  try {
    const sucursal = await Sucursal.findByPk(id)
    if (sucursal) return await Sucursal.destroy({ where: { id: sucursal.id } })
    throw new ErrorObject('Sucursal no existe', 404)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
