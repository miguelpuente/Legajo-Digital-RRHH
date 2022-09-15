const { ErrorObject } = require('../../../helpers/error')
const { Colaborador } = require('../../../database/models')
const { getSucursalByPk } = require('../../sucursales/services/sucursales.services')
const { getUserByPk } = require('../../users/services/users.services')
const { getSectorByPk } = require('../../sectores/services/sectores.services')
const { getAreaByPk } = require('../../areas/services/areas.services')
const { getCategoriaByPk } = require('../../categorias/services/categorias.services')
const { getSexoByPk } = require('../../sexos/services/sexos.services')
const { getEstado_CivilByPk } = require('../../estados_civiles/services/estados_civiles.services')
const { verifyCuit } = require('../../empresas/services/empresas.services')

exports.getAllColaboradores = async () => {
  return await Colaborador.findAll()
}

exports.getColaboradorByPk = async (id) => {
  try {
    const colaborador = await Colaborador.findByPk( id )
    if (colaborador) return colaborador
    throw new ErrorObject('Colaborador no existe', 404)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getColaboradorByCuil = async (cuil) => {
  try {
    return await Colaborador.findOne({ where: { cuil } })
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createColaborador = async (body) => {
  try {

    if (body.nombre.length<3) throw new ErrorObject('Nombre debe ser más largo', 404)
    if (body.apellido.length<3) throw new ErrorObject('Apellido debe ser más largo', 404)
    if (!body.user_id === undefined) if (!await getUserByPk(body.user_id)) ErrorObject('Usuario no existe', 404)
    if (!await getSucursalByPk(body.sucursal_id)) throw new ErrorObject('Sucursal no existe', 404)
    if (!await getSectorByPk(body.sector_id)) throw new ErrorObject('Sector no existe', 404)
    if (!await getAreaByPk(body.area_id)) throw new ErrorObject('Area no existe', 404)
    if (!body.superior_id === undefined) if (!await getColaboradorByPk(body.superior_id)) throw new ErrorObject('Superior no existe', 404)
    if (!await getCategoriaByPk(body.categoria_id)) throw new ErrorObject('Categoría no existe', 404)
    if (!await getSexoByPk(body.sexo_id)) throw new ErrorObject('Sexo no existe', 404)
    if (!await getEstado_CivilByPk(body.estado_civil_id)) throw new ErrorObject('Estado Civil no existe', 404)
    if (!verifyCuit(body.cuil)) throw new ErrorObject('CUIL no válido', 404)
    if (await this.getColaboradorByCuil(body.cuil)) throw new ErrorObject('CUIL ya fue registrado', 404)

    const colaborador = new Colaborador()
    colaborador.user_id = body.user_id
    colaborador.sucursal_id = body.sucursal_id
    colaborador.sector_id = body.sector_id
    colaborador.superior_id = body.superior_id
    colaborador.categoria_id = body.categoria_id
    colaborador.sexo_id = body.sexo_id
    colaborador.estado_civil_id = body.estado_civil_id
    colaborador.nombre = body.nombre
    colaborador.apellido = body.apellido
    colaborador.fecha_nacimiento = body.fecha_nacimiento
    colaborador.cuil = body.cuil
    colaborador.telefono = body.telefono
    colaborador.email = body.email

    return await colaborador.save()
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateColaboradorById = async (req) => {
  try {
    const { id } = req.params
    const { user_id, sucursal_id, sector_id, area_id, superior_id, categoria_id, sexo_id, estado_civil_id, nombre, apellido, fecha_nacimiento, cuil, telefono, email, activo } = req.body

    if (!await this.getColaboradorByPk(id)) ErrorObject('Colaborador no existe', 404)
    if (!verifyCuit(cuil)) throw new ErrorObject('CUIL no válido', 404)
    const colaborador = await this.getColaboradorByCuil(cuil)
    if ( colaborador && colaborador.id != id) throw new ErrorObject('CUIL ya fue registrado', 404)
    if (nombre.length<3) throw new ErrorObject('Nombre debe ser más largo', 404)
    if (apellido.length<3) throw new ErrorObject('Apellido debe ser más largo', 404)
    if (!user_id === undefined) if (!await getUserByPk(user_id)) ErrorObject('Usuario no existe', 404)
    if (!await getSucursalByPk(sucursal_id)) throw new ErrorObject('Sucursal no existe', 404)
    if (!await getSectorByPk(sector_id)) throw new ErrorObject('Sector no existe', 404)
    if (!await getAreaByPk(area_id)) throw new ErrorObject('Area no existe', 404)
    if (!superior_id === undefined ) if (!await getColaboradorByPk(superior_id)) throw new ErrorObject('Superior no existe', 404)
    if (superior_id === id) throw new ErrorObject('No pude ser su propio superior', 404)
    if (!await getCategoriaByPk(categoria_id)) throw new ErrorObject('Categoría no existe', 404)
    if (!await getSexoByPk(sexo_id)) throw new ErrorObject('Sexo no existe', 404)
    if (!await getEstado_CivilByPk(estado_civil_id)) throw new ErrorObject('Estado Civil no existe', 404)

    await Colaborador.update({ user_id, sucursal_id, sector_id, area_id, superior_id, categoria_id, sexo_id, estado_civil_id, nombre, apellido, fecha_nacimiento, cuil, telefono, email, activo, },{ where: { id: id } },)

    return await Colaborador.findByPk(id)

  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroyColaborador = async (id) => {
  try {
    const colaborador = await Colaborador.findByPk(id)
    if (!colaborador) throw new ErrorObject('Colaborador no existe', 404)
    await Colaborador.destroy({ where: { id: colaborador.id } })
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
