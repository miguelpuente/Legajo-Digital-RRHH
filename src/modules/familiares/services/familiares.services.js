const { ErrorObject } = require('../../../helpers/error')
const { Familiar } = require('../../../database/models')

exports.getAllFamiliares = async () => {
  const familiar = await Familiar.findAll()
  return familiar
}

exports.getFamiliarByPk = async (id) => {
  try {
    const familiar = await Familiar.findByPk( id )
    if (familiar) {
      return familiar
    } else {
      throw new ErrorObject('Familiar no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createFamiliar = async (body) => {
  try {
      const newFamiliar = await Familiar.create(body)
      if (!newFamiliar) {
        throw new ErrorObject('Falló registro de familiar', 404)
      }
      return newFamiliar
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateFamiliarById = async (req) => {
  try {
    const { id } = req.params
    const { colaborador_id, relacion_familiar_id, sexo_id, nombre, apellido, telefono, email, activo } = req.body
    if (nombre.length<3) {
      throw new ErrorObject('Nombre debe ser más largo', 404)
    }
    const familiar = await Familiar.findByPk(id)
    if (familiar) {
      await Familiar.update({ colaborador_id, relacion_familiar_id, sexo_id, nombre, apellido, telefono, email, activo, },{ where: { id: familiar.id } },)
      const newFamiliar = await Familiar.findByPk(id)
      return newFamiliar
    } else {
      throw new ErrorObject('Familiar no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroyFamiliar = async (id) => {
  try {
    const familiar = await Familiar.findByPk(id)
    if (familiar) {
      await Familiar.destroy({ where: { id: familiar.id } })
    } else {
      throw new ErrorObject('Familiar no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
