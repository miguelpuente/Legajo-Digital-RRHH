const path = require('path')

exports.configSwagger = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Backend Legajo Digital - RRHH',
      description: 'Api de legajo digital',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3030',
        description: 'Server Local',
      },
    ],
  },
  apis: [`${path.join(__dirname, '../modules/**/*.js')}`],
}