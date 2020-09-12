
const knex = require('../database/connection');
const bcrypt = require('bcryptjs')

/**
 * Encuentra al usuario que tenga el correo indicado
 */
exports.findById = (id) => {
  return knex
    .select('*')
    .from('users')
    .where('id', id)
    .first();
}

/**
 * Encuentra al usuario que tenga el correo indicado
 */
exports.findByEmail = (email) => {
  return knex
    .select('*')
    .from('users')
    .where('email', email)
    .first();
}

// Crea un nuevo Producto (pero no lo almacena en la base)
exports.create = (user)=>{
  let pass = user.password;
  pass = bcrypt.hashSync(pass,10);
  return knex('users').insert({name: user.name, email: user.email, password: pass, role: user.role})
}

exports.selectAll = () =>{
  return knex.select("*").from("users");
}
