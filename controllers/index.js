const models = require('../database/models');

const registerIne = async (req, res) => {
  try {
    const user = await models.User.create(req.body);
    return res.status(201).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllInes = async (req, res) => {
    console.log('getAllInes');
  try {
    const users = await models.User.findAll({
      include: [
       ]
    });
    return res.status(200).json({ users });
    } catch (error) {
    return res.status(500).send(error.message);
    }
};

module.exports = {
    registerIne,
    getAllInes,
    };
    