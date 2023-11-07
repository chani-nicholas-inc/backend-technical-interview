const db = require('../models');

const createOne = async (req, res) => {
  // TASK: Create function to add a new sign to the database
};

const getAll = async (req, res) => {
  // TASK: Create function to get an array of all signs in the database
};

const getOne = async (req, res) => {
  db.sign.findOne({
    where: {
      id: req.params.signId
    }
  }).then(sign => {
    if (sign) res.status(200).send(sign);
    else res.status(404).send('SIGN NOT FOUND');
  }).catch(err => {
    res.send(err);
  });
};

const updateOne = async (req, res) => {
  db.sign.findOne({
    where: {
      id: req.params.signId
    }
  }).then(sign => {
    if (sign) {
      db.sign.update(req.body, {
        where: {
          id: req.params.signId
        },
        returning: true,
        plain: true
      }).then(sign => {
        if (sign) res.status(200).send(sign[1]);
        else res.status(400).send('ERROR UPDATING SIGN');
      }).catch(err => {
        res.send(err);
      })
    } else {
      res.status(404).send('SIGN NOT FOUND');
    }
  }).catch(err => {
    res.send(err);
  });
};

const deleteOne = async (req, res) => {
  db.sign.findOne({
    where: {
      id: req.params.signId
    }
  }).then(sign => {
    if (sign) {
      db.sign.destroy({
        where: {
          id: req.params.signId
        },
        force: true
      }).then(() => {
        res.status(200).send('SUCCESSFUL DELETION');
      }).catch(err => {
        res.send(err);
      });
    } else {
      res.status(404).send('SIGN NOT FOUND');
    }
  }).catch(err => {
    res.send(err);
  })
};

module.exports = {
  createOne,
  getOne,
  getAll,
  updateOne,
  deleteOne
};