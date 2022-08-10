const { ErrorObject } = require('../../../helpers/error')
const { Colaborador, Colaborador_Puesto } = require('../../../database/models')
const { getPuestoByPk } = require('../../puestos/services/puestos.services')

exports.getAllColaboradores = async () => {
  const colaboradores = await Colaborador.findAll(  )
  return colaboradores
}

exports.getColaboradorByPk = async (id) => {
  try {
    const colaborador = await Colaborador.findByPk( id )
    if (colaborador) {
      return colaborador
    } else {
      throw new ErrorObject('Colaborador no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createColaborador = async (body) => {
  try {
      const newColaborador = await Colaborador.create(body)
      return newColaborador
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateColaboradorById = async (req) => {
  try {
    const { id } = req.params
    const { user_id, sucursal_id, sector_id, area_id, superior_id, categoria_id, sexo_id, estado_civil_id, nombre, apellido, telefono, email, activo } = req.body
    if (nombre.length<3) {
      throw new ErrorObject('Nombre debe ser más largo', 404)
    }
    const colaborador = await Colaborador.findByPk(id)
    if (colaborador) {
      await Colaborador.update({ user_id, sucursal_id, sector_id, area_id, superior_id, categoria_id, sexo_id, estado_civil_id, nombre, apellido, telefono, email, activo, },{ where: { id: colaborador.id } },)
      const newColaborador = await Colaborador.findByPk(colaborador.id)
      return newColaborador
    } else {
      throw new ErrorObject('Colaborador no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroyColaborador = async (id) => {
  try {
    const colaborador = await Colaborador.findByPk(id)
    if (colaborador) {
      await Colaborador.destroy({ where: { id: colaborador.id } })
    } else {
      throw new ErrorObject('Colaborador no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getPuestosByColaboradorPk = async (id) => {
  try {
    const puestos = await Colaborador_Puesto.findByPk( id )
    if (puestos) {
      return puestos
    } else {
      throw new ErrorObject('Puestos no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createColaboradorPuesto = async (req) => {
  try {
    const { colaborador_id, puesto_id } = req.params
    if (!(await getPuestoByPk(puesto_id))) {
      throw new ErrorObject('Puesto no existe', 404)
    }
    if (!(await this.getColaboradorByPk(colaborador_id))) {
      throw new ErrorObject('Colaborador no existe', 404)
    }
    if (!(await this.getAsociacionColaboradorPuesto(colaborador_id, puesto_id))) {
      const colaboradorPuesto = await Colaborador_Puesto.create({colaborador_id, puesto_id})
      return colaboradorPuesto
    } else {
      throw new ErrorObject('Ya existe asociación', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getAsociacionColaboradorPuesto = async (colaborador_id, puesto_id) => {
  try {
    const colaboradorPuesto = await Colaborador_Puesto.findOne({where: { colaborador_id, puesto_id}})
    return colaboradorPuesto
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}