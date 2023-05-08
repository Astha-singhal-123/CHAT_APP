const { register, login } = require("../handlers/userHandler");

const router=require("express").Router();
router.post("/register",register);
router.post("/login",login);
module.exports = router;