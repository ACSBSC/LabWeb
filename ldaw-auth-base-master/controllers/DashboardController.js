exports.index = (req, res)=>{
  let user = req.user;
  let admin = req.user.role === "admin";
  res.render("dashboard/index", {user: user, admin: admin})
}
