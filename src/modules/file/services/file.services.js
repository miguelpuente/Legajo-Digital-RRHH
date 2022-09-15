const { v4: uuidv4 } = require('uuid')
const { ErrorObject } = require('../../../helpers/error')
const { Archivo } = require('../../../database/models')
const { getAreaByPk } = require('../../areas/services/areas.services')
const { getCategoriaByPk } = require('../../categorias/services/categorias.services')
const { getColaborador_licenciaByPk } = require('../../colaborador_licencias/services/colaboradores_licencias.services')
const { getColaborador_PuestoByPk} = require('../../colaborador_puestos/services/colaboradores_puestos.services')
const { getColaboradorByPk } = require('../../colaboradores/services/colaboradores.services')
const { getDato_LaboralByPk } = require('../../datos_laborales/services/datos_laborales.services')
const { getEmpresaByPk } = require('../../empresas/services/empresas.services')
const { getEstado_CivilByPk } = require('../../estados_civiles/services/estados_civiles.services')
const { getFamiliarByPk } = require('../../familiares/services/familiares.services')
const { getLicencia_tipoByPk } = require('../../licencias_tipos/services/licencias_tipos.services')
const { getMotivo_InactividadByPk } = require('../../motivos_inactividades/services/motivos_inactividades.services')
const { getPuestoByPk } = require('../../puestos/services/puestos.services')
const { getReemplazoByPk } = require('../../reemplazos/services/reemplazos.services')
const { getRelacion_FamiliarByPk } = require('../../relaciones_familiares/services/relaciones_familiares.services')
const { getSexoByPk } = require('../../sexos/services/sexos.services')
const { getSindicatoByPk } = require('../../sindicatos/services/sindicatos.services')
const { getSucursalByPk } = require('../../sucursales/services/sucursales.services')
const { getUserByPk } = require('../../users/services/users.services')


const uploadFile = async (req) => {

  if (!req.files || Object.keys(req.files).length === 0) throw new ErrorObject('No se ha enviado archivo', 404)

  if (req.files.archivo.truncated) throw new ErrorObject(`El archivo es demasiado grande, permitido hasta ${process.env.MAXSIZEUPLOAD}MB`, 404)

  const archivosValidos = {
    avatar: ['jpeg', 'jpg', 'png'],
    evidencia: ['doc', 'docx', 'xls', 'pdf']
  }

  const { tipo, id, entidad } = req.params
  const { archivo } = req.files
  const nombrePartido = archivo.name.split('.')
  const extension = nombrePartido[ nombrePartido.length - 1 ]

  switch (tipo) {
    case 'avatar':
      if (!archivosValidos.avatar.includes(extension)) throw new ErrorObject(`El tipo de archivo ${ extension } no está permitido (${ archivosValidos.avatar })`, 404)
      break
    case 'evidencia':
      if (!archivosValidos.evidencia.includes(extension)) throw new ErrorObject(`El tipo de archivo ${ extension } no está permitido (${ archivosValidos.evidencia })`, 404)
      break

    default:
      throw new ErrorObject('El tipo de operación no está permitida', 404)
      break
  }

  const path = `${process.env.PATHUPLOAD}/${tipo}/${entidad}`
  const nombreArchivo = `${uuidv4()}.${extension}`
  const patharchivo = `${path}/${nombreArchivo}`

  archivo.mv(patharchivo, (error) => {
    if (error) throw new ErrorObject('No se pudo cargar el archivo', 400)
  })

}

const downloadFile = async (id) => {
  try {
    const user = await Users.findByPk( id, {
      attributes: ['id', 'email', 'avatar']
    })
    return user
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

module.exports = { uploadFile, downloadFile}
