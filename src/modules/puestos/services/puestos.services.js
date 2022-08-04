const { ErrorObject } = require('../../../helpers/error')
const { Puesto } = require('../../../database/models')
const { getEmpresaByPk } = require('../../empresas/services/empresas.services')

exports.getAllPuestos = async () => {
  const puestos = await Puesto.findAll(  )
  return puestos
}

exports.getPuestoByPk = async (id) => {
  try {
    const puesto = await Puesto.findByPk( id )
    if (puesto) {
      return puesto
    } else {
      throw new ErrorObject('Puesto no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createPuesto = async (body) => {
  try {
    const { empresa_id } = body
    if (await getEmpresaByPk(empresa_id)) {
      const newPuesto = await Puesto.create(body)
      if (!newPuesto) {
        throw new ErrorObject('Falló registro de Puesto', 404)
      }
      return newPuesto
    } else {
      throw new ErrorObject('Empresa no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getPuestoByEmpresaId = async (empresa_id) => {
  try {
    const puestos = await Puesto.findAll({ where: { empresa_id } })
    return puestos
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updatePuestoById = async (req) => {
  try {
    const { id } = req.params
    const { empresa_id, nombre, observaciones, activo, } = req.body
    if (nombre.length<3) {
      throw new ErrorObject('Nombre debe ser más largo', 404)
    }
    if (!(await getEmpresaByPk(empresa_id))){
      throw new ErrorObject('Empresa no existe', 404)
    }
    const puesto = await Puesto.findByPk(id)
    if (puesto) {
      await Puesto.update({ empresa_id, nombre, observaciones, activo, },{ where: { id: puesto.id } },)
      const newPuesto = await Puesto.findByPk(puesto.id)
      return newPuesto
    } else {
      throw new ErrorObject('Puesto no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroyPuesto = async (id) => {
  try {
    const puesto = await Puesto.findByPk(id)
    if (puesto) {
      await Puesto.destroy({ where: { id: puesto.id } })
    } else {
      throw new ErrorObject('Puesto no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
