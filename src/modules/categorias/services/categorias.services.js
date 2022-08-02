const { ErrorObject } = require('../../../helpers/error')
const { Categoria } = require('../../../database/models')
const { getSindicatoByPk } = require('../../sindicatos/services/sindicatos.services')

exports.getAllCategorias = async () => {
  const categoria = await Categoria.findAll()
  return categoria
}

exports.getCategoriaByPk = async (id) => {
  try {
    const categoria = await Categoria.findByPk( id )
    if (categoria) {
      return categoria
    } else {
      throw new ErrorObject('Categoria no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createCategoria = async (body) => {
  try {
    const { sindicato_id } = body
    if (await getSindicatoByPk(sindicato_id)) {
      const newCategoria = await Categoria.create(body)
      if (!newCategoria) {
        throw new ErrorObject('Falló registro de categoria', 404)
      }
      return newCategoria 
    } else {
      throw new ErrorObject('Sindicato no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getCategoriaBySindicatoId = async (sindicato_id) => {
  try {
    const categorias = await Categoria.findAll({ where: { sindicato_id } })
    return categorias
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateCategoriaById = async (req) => {
  try {
    const { id } = req.params
    const { sindicato_id, nombre, activo, } = req.body
    if (nombre.length<3) {
      throw new ErrorObject('Nombre debe ser más largo', 404)
    }
    if (!(await getSindicatoByPk(sindicato_id))){
      throw new ErrorObject('Sindicato no existe', 404)
    }
    const categoria = await Categoria.findByPk(id)
    if (categoria) {
      await Categoria.update({ sindicato_id, nombre, activo, },{ where: { id: categoria.id } },)
      const newCategoria = await Categoria.findByPk(id)
      return newCategoria
    } else {
      throw new ErrorObject('Categoria no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroyCategoria = async (id) => {
  try {
    const categoria = await Categoria.findByPk(id)
    if (categoria) {
      await Categoria.destroy({ where: { id: categoria.id } })
    } else {
      throw new ErrorObject('Categoria no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
