const { ErrorObject } = require('../../../helpers/error')
const { Sexo } = require('../../../database/models')

exports.getAllSexos = async () => {
  return await Sexo.findAll()
}

exports.getSexoByPk = async (id) => {
  try {
    const sexo = await Sexo.findByPk( id )
    if (sexo) return sexo
    throw new ErrorObject('Sexo no existe', 404)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createSexo = async (body) => {
  try {
      const newSexo = await Sexo.create(body)
      if (newSexo) return newSexo
      throw new ErrorObject('Falló registro de sexo', 404)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateSexoById = async (req) => {
  try {
    const { id } = req.params
    const { nombre, activo, } = req.body
    if (nombre.length<3) throw new ErrorObject('Nombre debe ser más largo', 404)
    const sexo = await Sexo.findByPk(id)
    if (!sexo) throw new ErrorObject('Sexo no existe', 404)
    await Sexo.update({ nombre, activo, },{ where: { id: sexo.id } },)
    return await Sexo.findByPk(id)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroySexo = async (id) => {
  try {
    const sexo = await Sexo.findByPk(id)
    if (sexo) await Sexo.destroy({ where: { id: sexo.id } })
    throw new ErrorObject('Sexo no existe', 404)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
