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
    if (dato_laboral) {
      return dato_laboral
    } else {
      throw new ErrorObject('Dato laboral no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getDato_LaboralByNroLegajo = async (nro_legajo) => {
  try {
    const legajo = await Datos_Laboral.findOne({ where: { nro_legajo } })
    return legajo
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createDato_Laboral = async (body) => {
  try {
      const existeColaborador = await getColaboradorByPk(body.colaborador_id)
      if (!(existeColaborador)) throw new ErrorObject('colaborador_id no existe', 404)

      const nro_legajo = Number.parseInt(body.nro_legajo, 10)
      if (Number.isSafeInteger(nro_legajo)) {
        const legajo = await this.getDato_LaboralByNroLegajo(nro_legajo)
        if (legajo) {
          throw new ErrorObject('nro_legajo duplicado', 404)
        } else {
          body.nro_legajo = nro_legajo
        }
      } else {
        throw new ErrorObject('nro_legajo no es un número entero', 404)
      }

      const newDato_laboral = await Datos_Laboral.create(body)
      if (!newDato_laboral) throw new ErrorObject('Falló registro de dato laboral', 404)
      return newDato_laboral
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateDato_LaboralById = async (req) => {
  try {
    const { id } = req.params

    const datoLaboral = this.getDato_LaboralByPk(id)
    if (!(datoLaboral)) throw new ErrorObject('id dato laboral no existe', 404)

    const existeColaborador = await getColaboradorByPk(req.body.colaborador_id)
    if (!(existeColaborador)) throw new ErrorObject('colaborador_id no existe', 404)

    const nrolegajo = Number.parseInt(req.body.nro_legajo, 10)
    if (Number.isSafeInteger(nrolegajo)) {
      const legajo = await this.getDato_LaboralByNroLegajo(nrolegajo)
      if (legajo.id === id ) {
        req.body.nro_legajo = nrolegajo
      } else {
        throw new ErrorObject('nro_legajo duplicado', 404)
      }
    } else {
      throw new ErrorObject('nro_legajo no es un número entero', 404)
    }

    const { colaborador_id, nro_legajo, fecha_ingreso, telefono, email } = req.body

    this.setDataValue(body.fecha_ingreso, body.fecha_ingreso.toISOString().split('T')[0] )

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
