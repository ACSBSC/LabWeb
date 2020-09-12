let UserModel = require('../models/users');

exports.index = (req, res)=>{
  let user = req.user;
  UserModel.selectAll().then((users)=>{
    res.render("users/index", {user:user, users:users})
  });
};
