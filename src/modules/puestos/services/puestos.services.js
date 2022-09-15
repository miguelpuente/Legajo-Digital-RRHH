const { ErrorObject } = require('../../../helpers/error')
const { Puesto } = require('../../../database/models')
const { getEmpresaByPk } = require('../../empresas/services/empresas.services')

exports.getAllPuestos = async () => {
  return await Puesto.findAll()
}

exports.getPuestoByPk = async (id) => {
  try {
    const puesto = await Puesto.findByPk( id )
    if (puesto) return puesto
    throw new ErrorObject('Puesto no existe', 404)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createPuesto = async (body) => {
  try {
    const { empresa_id } = body
    if (!(await getEmpresaByPk(empresa_id))) throw new ErrorObject('Empresa no existe', 404)
    const newPuesto = await Puesto.create(body)
    if (newPuesto) return newPuesto
    throw new ErrorObject('Falló registro de Puesto', 404)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getPuestoByEmpresaId = async (empresa_id) => {
  try {
    return await Puesto.findAll({ where: { empresa_id } })
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updatePuestoById = async (req) => {
  try {
    const { id } = req.params
    const { empresa_id, nombre, observaciones, activo, } = req.body
    if (nombre.length<3) throw new ErrorObject('Nombre debe ser más largo', 404)
    if (!(await getEmpresaByPk(empresa_id))) throw new ErrorObject('Empresa no existe', 404)
    const puesto = await Puesto.findByPk(id)
    if (!puesto) throw new ErrorObject('Puesto no existe', 404)
    await Puesto.update({ empresa_id, nombre, observaciones, activo, },{ where: { id: puesto.id } },)
    return await Puesto.findByPk(puesto.id)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroyPuesto = async (id) => {
  try {
    const puesto = await Puesto.findByPk(id)
    if (puesto) return await Puesto.destroy({ where: { id: puesto.id } })
    throw new ErrorObject('Puesto no existe', 404)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
