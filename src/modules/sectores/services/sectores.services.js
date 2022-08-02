const { ErrorObject } = require('../../../helpers/error')
const { Sector } = require('../../../database/models')
const { getEmpresaByPk } = require('../../empresas/services/empresas.services')

exports.getAllSectores = async () => {
  const sector = await Sector.findAll(  )
  return sector
}

exports.getSectorByPk = async (id) => {
  try {
    const sector = await Sector.findByPk( id )
    if (sector) {
      return sector
    } else {
      throw new ErrorObject('Sector no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createSector = async (body) => {
  try {
    const { empresa_id } = body
    if (await getEmpresaByPk(empresa_id)) {
      const newSector = await Sector.create(body)
      if (!newSector) {
        throw new ErrorObject('Falló registro de sector', 404)
      }
      return newSector 
    } else {
      throw new ErrorObject('Empresa no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getSectorByEmpresaId = async (empresaId) => {
  try {
    const sector = await Sector.findAll({ where: { empresaId } })
    return sector
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateSectorById = async (req) => {
  try {
    const { id } = req.params
    const { empresa_id, nombre, activo, } = req.body
    if (nombre.length<3) {
      throw new ErrorObject('Nombre debe ser más largo', 404)
    }
    if (!(await getEmpresaByPk(empresa_id))){
      throw new ErrorObject('Empresa no existe', 404)
    }
    const sector = await Sector.findByPk(id)
    if (sector) {
      await Sector.update({ empresa_id, nombre, activo, },{ where: { id: sector.id } },)
      const newSector = await Sector.findByPk(sector.id)
      return newSector
    } else {
      throw new ErrorObject('Sector no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroySector = async (id) => {
  try {
    const sector = await Sector.findByPk(id)
    if (sector) {
      await Sector.destroy({ where: { id: area.id } })
    } else {
      throw new ErrorObject('Sector no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
