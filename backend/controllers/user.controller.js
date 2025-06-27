const db = require("../models");
const User = db.users;

exports.create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.findAll = async (req, res) => {
  const users = await User.findAll();
  res.send(users);
};
