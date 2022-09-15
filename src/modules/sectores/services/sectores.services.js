const { ErrorObject } = require('../../../helpers/error')
const { Sector } = require('../../../database/models')
const { getEmpresaByPk } = require('../../empresas/services/empresas.services')

exports.getAllSectores = async () => {
  return await Sector.findAll()
}

exports.getSectorByPk = async (id) => {
  try {
    const sector = await Sector.findByPk( id )
    if (sector) return sector
    throw new ErrorObject('Sector no existe', 404)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createSector = async (body) => {
  try {
    if (!await getEmpresaByPk(body.empresa_id)) throw new ErrorObject('Empresa no existe', 404)
    const newSector = await Sector.create(body)
    if (newSector) return newSector
    throw new ErrorObject('Falló registro de sector', 404)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getSectorByEmpresaId = async (empresaId) => {
  try {
    return await Sector.findAll({ where: { empresaId } })
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateSectorById = async (req) => {
  try {
    const { empresa_id, nombre, activo, } = req.body
    if (nombre.length<3) throw new ErrorObject('Nombre debe ser más largo', 404)
    if (!(await getEmpresaByPk(empresa_id))) throw new ErrorObject('Empresa no existe', 404)
    const sector = await Sector.findByPk(req.params.id)
    if (!sector) throw new ErrorObject('Sector no existe', 404)
    await Sector.update({ empresa_id, nombre, activo, },{ where: { id: sector.id } },)
    return await Sector.findByPk(sector.id)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroySector = async (id) => {
  try {
    if (!await Sector.findByPk(id)) throw new ErrorObject('Sector no existe', 404)
    return await Sector.destroy({ where: { id } })
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
