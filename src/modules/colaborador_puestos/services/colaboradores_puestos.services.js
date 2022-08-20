const { ErrorObject } = require('../../../helpers/error')
const { Colaborador_Puesto } = require('../../../database/models')
const { getColaboradorByPk  } = require('../../colaboradores/services/colaboradores.services')
const { getPuestoByPk } = require('../../puestos/services/puestos.services')

exports.getAllColaboradores_Puestos = async () => {
  const colaboradoresPuestos = await Colaborador_Puesto.findAll()
  return colaboradoresPuestos
}

exports.getColaborador_PuestoByPk = async (id) => {
  try {
    const colaboradorPuesto = await Colaborador_Puesto.findByPk( id )
    if (colaboradorPuesto) {
      return colaboradorPuesto
    } else {
      throw new ErrorObject('colaboradorPuesto no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createColaboradorPuesto = async (body) => {
  try {
    if (!(await getColaboradorByPk( body.colaborador_id ))) throw new ErrorObject('colaborador_id no existe', 404)

    if (!(await getPuestoByPk( body.puesto_id ))) throw new ErrorObject('puesto_id no existe', 404)

    if ((await this.getAsociacionColaboradorPuesto(body.colaborador_id, body.puesto_id))) throw new ErrorObject('Ya existe asociación', 404)
    const colaboradorPuesto = new Colaborador_Puesto()
    colaboradorPuesto.colaborador_id = body.colaborador_id
    colaboradorPuesto.puesto_id = body.puesto_id
    colaboradorPuesto.fecha_inicio = body.fecha_inicio
    const newColaboradorPuesto = await colaboradorPuesto.save()
    if (!newColaboradorPuesto) throw new ErrorObject('Falló registro de Colaborador Puesto', 404)
    return this.getColaborador_PuestoByPk(newColaboradorPuesto.id)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getPuestosByColaboradorPk = async (id) => {
  try {
    const puestos = await Colaborador_Puesto.findAll( { where: { colaborador_id: id, activo: true} } )
    if (!puestos) throw new ErrorObject('Puestos del colaborador no existen', 404)
    return puestos
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateColaborador_PuestoById = async (req) => {
  try {
    const { id } = req.params

    if (!(await this.getColaborador_PuestoByPk(id))) throw new ErrorObject('Colaborador_Puesto no existe', 404)

    const { colaborador_id, puesto_id, fecha_inicio } = req.body

    if (!(await getColaboradorByPk( colaborador_id ))) throw new ErrorObject('colaborador_id no existe', 404)

    if (!(await getPuestoByPk( puesto_id ))) throw new ErrorObject('puesto_id no existe', 404)

    await Colaborador_Puesto.update({ colaborador_id, puesto_id, fecha_inicio },{ where: { id: id } },)
      const newColaboradorPuesto = await Colaborador_Puesto.findByPk(id)
      return newColaboradorPuesto
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.bajaByColaboradorByPuesto = async (req) => {
  const colaboradorPuesto = await this.getAsociacionColaboradorPuesto(req.body.colaborador_id, req.body.puesto_id)
  console.log(req.body)
  if (!colaboradorPuesto) throw new ErrorObject('colaboradorPuesto no existe', 404)
  if (colaboradorPuesto.fecha_inicio > req.body.fecha_fin) throw new ErrorObject('fecha_fin debe ser posterior a fecha_inicio', 404)
  colaboradorPuesto.fecha_fin = req.body.fecha_fin
  colaboradorPuesto.activo = false
  return await colaboradorPuesto.save()
}

exports.destroyColaborador_Puesto = async (id) => {
  try {

    const colaboradorPuesto = await Colaborador_Puesto.findByPk(id)
    if (!colaboradorPuesto) throw new ErrorObject('colaboradorPuesto no existe', 404)
    await Colaborador_Puesto.destroy({ where: { id: colaboradorPuesto.id } })

  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getAsociacionColaboradorPuesto = async (colaborador_id, puesto_id) => {
  try {
    const colaboradorPuesto = await Colaborador_Puesto.findOne({where: { colaborador_id:colaborador_id, puesto_id:puesto_id }})
    return colaboradorPuesto
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
