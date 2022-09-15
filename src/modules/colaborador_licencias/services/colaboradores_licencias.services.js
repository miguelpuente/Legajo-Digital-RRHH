const { ErrorObject } = require('../../../helpers/error')
const { Colaborador_licencia } = require('../../../database/models')
const { getColaboradorByPk  } = require('../../colaboradores/services/colaboradores.services')
const { getLicencia_tipoByPk } = require('../../licencias_tipos/services/licencias_tipos.services')

exports.getAllColaboradores_licencias = async () => {
  const colaborador_licencia = await Colaborador_licencia.findAll()
  return colaborador_licencia
}

exports.getColaborador_licenciaByPk = async (id) => {
  try {
    const colaborador_licencia = await Colaborador_licencia.findByPk( id )
    if (!colaborador_licencia) throw new ErrorObject('Colaborador_licencia no existe', 404)
    return colaborador_licencia
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createColaborador_licencia = async (body) => {
  try {
    if (!(await getColaboradorByPk( body.colaborador_id ))) throw new ErrorObject('colaborador_id no existe', 404)

    if (!(await getLicencia_tipoByPk( body.puesto_id ))) throw new ErrorObject('puesto_id no existe', 404)
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
    if (nombre.length<3) {
      throw new ErrorObject('Nombre debe ser más largo', 404)
    }
    if (!(await getEmpresaByPk(empresa_id))){
      throw new ErrorObject('Empresa no existe', 404)
    }
    const area = await Area.findByPk(id)
    if (area) {
      await Area.update({ empresa_id, nombre, activo, },{ where: { id: area.id } },)
      const newArea = await Area.findByPk(id)
      return newArea
    } else {
      throw new ErrorObject('Area no existe', 404)
    }
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
