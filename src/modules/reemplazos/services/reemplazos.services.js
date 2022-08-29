const { ErrorObject } = require('../../../helpers/error')
const { Reemplazo } = require('../../../database/models')
const { getColaboradorByPk } = require('../../colaboradores/services/colaboradores.services')
const { getColaborador_PuestoByPk } = require('../../colaborador_puestos/services/colaboradores_puestos.services')

exports.getAllReemplazos = async () => {
  const reemplazo = await Reemplazo.findAll()
  return reemplazo
}

exports.getReemplazoByPk = async (id) => {
  try {
    const reemplazo = await Reemplazo.findByPk( id )
    if (!reemplazo) throw new ErrorObject('Reemplazo no existe', 404)
    return reemplazo
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createReemplazo = async (body) => {
  try {
    if (await this.getReemplazoByColaboradorIdByPuestoColaboradorId(body.colaborador_id, body.puesto_colaborador_id)) throw new ErrorObject('Reemplazo ya existe', 404)
    return await Reemplazo.create(body)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getReemplazoByColaboradorIdByPuestoColaboradorId = async (colaborador_id, puesto_colaborador_id) => {
  try {
    if (!await getColaboradorByPk(colaborador_id)) throw new ErrorObject('Colaborador no existe', 404)
    if (!await getColaborador_PuestoByPk(puesto_colaborador_id)) throw new ErrorObject('Puesto_Colaborador no existe', 404)
    return await Reemplazo.findOne({ where: { colaborador_id:colaborador_id, puesto_colaborador_id:puesto_colaborador_id } })
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateReemplazoById = async (req) => {
  try {
    const { id } = req.params
    const { colaborador_id, puesto_colaborador_id } = req.body

    if (await this.getReemplazoByColaboradorIdByPuestoColaboradorId(colaborador_id, puesto_colaborador_id)) throw new ErrorObject('Reemplazo ya existe', 404)

    if (!await Reemplazo.findByPk(id)) throw new ErrorObject('reemplazo_id no existe', 404)

    await Reemplazo.update({ colaborador_id, puesto_colaborador_id },{ where: { id } },)
    return await Reemplazo.findByPk(id)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroyReemplazo = async (id) => {
  try {
    const reemplazo = await Reemplazo.findByPk(id)
    if (reemplazo) {
      await Reemplazo.destroy({ where: { id: id } })
    } else {
      throw new ErrorObject('Area no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
