const { ErrorObject } = require('../../../helpers/error')
const { Datos_Laboral } = require('../../../database/models')
const { getColaboradorByPk } = require('../../colaboradores/services/colaboradores.services')
const { getMotivo_InactividadByPk } = require('../../motivos_inactividades/services/motivos_inactividades.services')

exports.getAllDatos_Laborales = async () => {
  const datos_laborales = await Datos_Laboral.findAll()
  return datos_laborales
}

exports.getDato_LaboralByPk = async (id) => {
  try {

    const dato_laboral = await Datos_Laboral.findByPk( id )
    if (dato_laboral) return dato_laboral
    throw new ErrorObject('Dato laboral no existe', 404)

  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getDato_LaboralByNroLegajo = async (nro_legajo) => {
  try {

    return await Datos_Laboral.findOne({ where: { nro_legajo } })

  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createDato_Laboral = async (body) => {
  try {

      if (!(await getColaboradorByPk(body.colaborador_id))) throw new ErrorObject('colaborador_id no existe', 404)

      const nro_legajo = Number.parseInt(body.nro_legajo, 10)
      if (!Number.isSafeInteger(nro_legajo)) throw new ErrorObject('nro_legajo no es un número entero', 404)
      if (await this.getDato_LaboralByNroLegajo(nro_legajo)) throw new ErrorObject('nro_legajo duplicado', 404)

      body.nro_legajo = nro_legajo

      const newDato_laboral = new Datos_Laboral()
      newDato_laboral.colaborador_id = body.colaborador_id
      newDato_laboral.nro_legajo = body.nro_legajo
      newDato_laboral.fecha_ingreso = body.fecha_ingreso
      newDato_laboral.telefono = body.telefono
      newDato_laboral.email = body.email

      await newDato_laboral.save()
      return newDato_laboral

  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateDato_LaboralById = async (req) => {
  try {
    const { id } = req.params
    const { colaborador_id, nro_legajo, fecha_ingreso, telefono, email } = req.body

    if (!await this.getDato_LaboralByPk(id)) throw new ErrorObject('id dato laboral no existe', 404)

    const existeColaborador = await getColaboradorByPk(colaborador_id)
    if (!(existeColaborador)) throw new ErrorObject('colaborador_id no existe', 404)

    const nrolegajo = Number.parseInt(nro_legajo, 10)
    if (!Number.isSafeInteger(nrolegajo)) throw new ErrorObject('nro_legajo no es un número entero', 404)
    const legajo = await this.getDato_LaboralByNroLegajo(nrolegajo)
    if (!legajo.id === id ) throw new ErrorObject('nro_legajo duplicado', 404)
    req.body.nro_legajo = nrolegajo

    await Datos_Laboral.update({ colaborador_id, nro_legajo, fecha_ingreso, telefono, email },{ where: { id } },)
    const newDato_Laboral = await Datos_Laboral.findByPk(id)
    return newDato_Laboral
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroyDato_Laboral = async (id) => {
  try {
    const dato_laboral = await Datos_Laboral.findByPk(id)
    if (dato_laboral) {
      await Datos_Laboral.destroy({ where: { id: dato_laboral.id } })
    } else {
      throw new ErrorObject('Dato laboral no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.Dato_Laboral_baja = async (req) => {
  try {
    const { id } = req.params

    const dato_laboral = await this.getDato_LaboralByPk(id)
    if (!(dato_laboral)) {
      throw new ErrorObject('id dato laboral no existe', 404)
    }

    const { motivo_inactividad_id, fecha_inactividad } = req.body
    const existeMotivoInactividad = await getMotivo_InactividadByPk(motivo_inactividad_id)
    if (!(existeMotivoInactividad)) {
      throw new ErrorObject('motivo_inactividad_id no existe', 404)
    }

    if (fecha_inactividad < dato_laboral.fecha_ingreso) {
       throw new ErrorObject('fecha_inactividad debe ser posterior a fecha_ingreso', 404)
    }
    
    await Datos_Laboral.update({ motivo_inactividad_id, fecha_inactividad },{ where: { id: id } },)
    return this.getDato_LaboralByPk(id)
  } catch {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
