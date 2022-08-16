const { ErrorObject } = require('../../../helpers/error')
const { Area } = require('../../../database/models')
const { getEmpresaByPk } = require('../../empresas/services/empresas.services')

exports.getAllAreas = async () => {
  const area = await Area.findAll()
  return area
}

exports.getAreaByPk = async (id) => {
  try {
    const area = await Area.findByPk( id )
    if (area) {
      return area
    } else {
      throw new ErrorObject('Area no existe', 404)
    }
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

    if (!newArea) throw new ErrorObject('Falló registro de area', 404)

    return newArea

  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getAreaByEmpresaId = async (empresaId) => {
  try {
    const area = await Area.findAll({ where: { empresaId } })
    return area
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
    const newArea = await Area.findByPk(id)
    return newArea

  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroyArea = async (id) => {
  try {
    const area = await Area.findByPk(id)
    if (area) {
      await Area.destroy({ where: { id: area.id } })
    } else {
      throw new ErrorObject('Area no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
