const { register } = require("../handlers/userHandler");

const router=require("express").Router();
router.post("/register",register);
module.exports = router;