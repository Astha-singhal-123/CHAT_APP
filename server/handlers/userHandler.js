const User = require("../database/userModel");
const bcrypt = require("bcrypt");
module.exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user)
      return res.json({ msg: "Invalid username or Password", status: false });
    const passcheck = await bcrypt.compare(password, user.password);
    if (!passcheck)
      return res.json({ msg: "Invalid username or Password", status: false });
    return res.json({ status: true, user });
  } catch (er) {
    next(er);
  }
};
module.exports.register = async (req, res, next) => {
  try {
    const { username, email, hashedpassword } = req.body;
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    const user = await User.create({
      username,
      email,
      password: hashedpassword,
    });
    return res.json({ status: true, user });
  } catch (er) {
    next(er);
  }
};
