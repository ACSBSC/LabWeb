exports.authUser = (req,res,next)=>{
  if(req.user == null){
    res.status(403);
    return res.redirect("/register");
  }
  next();
};

exports.authAdmin = (req,res,next)=>{
  if(req.user.role !== "admin"){
    return res.status(403).json({
      error:"403",
    });
  }
  next();
};
