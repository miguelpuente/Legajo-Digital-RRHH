const { ErrorObject } = require('../../../helpers/error')
const { Empresa } = require('../../../database/models')

exports.getAllEmpresas = async () => {
  const empresa = await Empresa.findAll()
  return empresa
}

exports.getEmpresaByPk = async (id) => {
  try {
    const empresa = await Empresa.findByPk( id )
    if (empresa) {
      return empresa
    } else {
      throw new ErrorObject('Empresa no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createEmpresa = async (body) => {
  try {
    const esCuit = this.verifyCuit(body.cuit)
    if (esCuit) {
      const existeEmpresa = await this.getEmpresaByCuit(body.cuit)
      if (existeEmpresa) {
        throw new ErrorObject('CUIT ya fue registrado', 404)
      }
      const newEmpresa = await Empresa.create(body)
      if (!newEmpresa) {
        throw new ErrorObject('Falló registro de empresa', 404)
      }
      return newEmpresa
    } else {
      throw new ErrorObject('CUIT no válido', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.verifyCuit = (cuit) => {
  if (cuit.length !== 11) {
    return false
  }

  let acumulado = 0
  let digitos = cuit.split('')
  let digito = parseInt(digitos.pop())

  for (let i = 0; i < digitos.length; i++) {
    acumulado += digitos[9 - i] * (2 + (i % 6))
  }

  let verif = 11 - (acumulado % 11)
  if (verif === 11) {
    verif = 0
  } else if (verif === 10) {
    verif = 9
  }

  return digito === verif
}

exports.getEmpresaByCuit = async (cuit) => {
  try {
    const empresa = await Empresa.findOne({ where: { cuit } })
    return empresa
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateEmpresaById = async (req) => {
  try {
    const { id } = req.params
    const { nombre, cuit, telefono, email, activo, } = req.body
    const empresa = await Empresa.findByPk(id)
    if (empresa) {
      //if ( this.verifyCuit(cuit) ) {
        //if (!(await this.getEmpresaByCuit(cuit)) ) {
          await Empresa.update({ nombre, telefono, email, activo, },{ where: { id: empresa.id } },)
          const newEmpresa = await Empresa.findByPk(empresa.id)
          return newEmpresa
        //} else {
        //  throw new ErrorObject('CUIT ya fue registrado', 404)
        //}
      //} else {
      //  throw new ErrorObject('CUIT no válido', 404)
      //}
    } else {
      throw new ErrorObject('Empresa no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroyEmpresa = async (id) => {
  try {
    const empresa = await Empresa.findByPk(id)
    if (empresa) {
      await Empresa.destroy({ where: { id: empresa.id } })
    } else {
      throw new ErrorObject('Empresa no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
