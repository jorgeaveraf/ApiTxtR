const models = require('../database/models');

const registerIne = async (req, res) => {
  try {
    const ine = await models.Ine.create(req.body);
    return res.status(201).json({
      ine,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllInes = async (req, res) => {
    console.log('getAllInes');
  try {
    const ines = await models.Ine.findAll({
      include: [
       ]
    });
    return res.status(200).json({ ines });
    } catch (error) {
    return res.status(500).send(error.message);
    }
};

module.exports = {
    registerIne,
    getAllInes,
    };
    