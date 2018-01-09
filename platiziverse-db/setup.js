'use strict'

const debug = require('debug')('platziverse:db:setup')
const db = require('./')

async function setup () {
  const config = {
    database: process.env.DB_NAME || 'platziverse',
    username: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD || 'admin',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: true
  }

  await db(config).catch(handleFatalError)

  console.log('Success!')
  process.exit(0)
}

function handleFatalError (err) {
  console.log(err.message)
  console.log(err.stack)
  process.exit(1)
}

setup()
