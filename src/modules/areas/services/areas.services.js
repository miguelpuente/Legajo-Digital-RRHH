const { ErrorObject } = require('../../../helpers/error')
const { Area } = require('../../../database/models')
const { getEmpresaByPk } = require('../../empresas/services/empresas.services')

exports.getAllAreas = async () => {
  return await Area.findAll()
}

exports.getAreaByPk = async (id) => {
  try {
    const area = await Area.findByPk( id )
    if (area) return area
    throw new ErrorObject('Area no existe', 404)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createArea = async (body) => {
  try {
    const { empresa_id } = body
    if (!(await getEmpresaByPk(empresa_id))) throw new ErrorObject('Empresa no existe', 404)
    
    const area = new Area()
    area.empresa_id = body.empresa_id
    area.nombre = body.nombre
    const newArea = await area.save()

    if (newArea) return newArea

    throw new ErrorObject('Falló registro de area', 404)

  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getAreaByEmpresaId = async (empresaId) => {
  try {
    return await Area.findAll({ where: { empresaId } })
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateAreaById = async (req) => {
  try {
    const { id } = req.params
    const { empresa_id, nombre, activo, } = req.body

    if (nombre.length<3) throw new ErrorObject('Nombre debe ser más largo', 404)

    if (!await getEmpresaByPk(empresa_id)) throw new ErrorObject('Empresa no existe', 404)

    const area = await Area.findByPk(id)

    if (!area) throw new ErrorObject('Area no existe', 404)

    await Area.update({ empresa_id, nombre, activo, },{ where: { id: area.id } },)
    return await Area.findByPk(id)

  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroyArea = async (id) => {
  try {
    const area = await Area.findByPk(id)
    if (area) throw new ErrorObject('Area no existe', 404)
    return await Area.destroy({ where: { id: area.id } })
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
