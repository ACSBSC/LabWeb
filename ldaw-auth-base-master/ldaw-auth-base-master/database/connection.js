let appConfig = require('../configs/app')
const knextfile = require('../knextfile')
const knex = require('knex')(knextfile[appConfig.env])
module.exports = knex;