const { ErrorObject } = require('../../../helpers/error')
const { Relaciones_Familiar } = require('../../../database/models')

exports.getAllRelaciones_Familiares = async () => {
  return await Relaciones_Familiar.findAll()
}

exports.getRelacion_FamiliarByPk = async (id) => {
  try {
    const relacion_familiar = await Relaciones_Familiar.findByPk( id )
    if (relacion_familiar) return relacion_familiar
    throw new ErrorObject('Relacion familiar no existe', 404)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createRelacion_Familiar = async (body) => {
  try {
      const newRelacion_familiar = await Relaciones_Familiar.create(body)
      if (newRelacion_familiar) return newRelacion_familiar
      throw new ErrorObject('Falló registro de relacion familiar', 404)      
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateRelacion_FamiliarById = async (req) => {
  try {
    const { id } = req.params
    const { nombre, activo, } = req.body
    if (nombre.length<3) {
      throw new ErrorObject('Nombre debe ser más largo', 404)
    }
    const relacion_familiar = await Relaciones_Familiar.findByPk(id)
    if (!relacion_familiar) throw new ErrorObject('Relacion familiar no existe', 404)
      await Relaciones_Familiar.update({ nombre, activo, },{ where: { id: relacion_familiar.id } },)
      return await Relaciones_Familiar.findByPk(id)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroyRelacion_Familiar = async (id) => {
  try {
    const relacion_familiar = await Relaciones_Familiar.findByPk(id)
    if (relacion_familiar) return await Relaciones_Familiar.destroy({ where: { id: relacion_familiar.id } })
      throw new ErrorObject('Relacion familiar no existe', 404)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
