const db = require("../models");

// Defining methods for the InspirationController
module.exports = {
  findAll: async (req, res) => {
    try {
      const dbModel = await db.Inspiration.find(req.query).sort({ date: -1 });
      res.json(dbModel);
    } catch(err) {
      res.status(422).json(err);
    }
  },
  findById: async (req, res) => {
    try {
      const dbModel = await db.Inspiration.findById(req.params.id);
      res.json(dbModel);
    } catch(err) {
      res.status(422).json(err);
    }
  },
  create: async (req, res) => {
    try {
      const dbModel = await db.Inspiration.create(req.body);
      res.json(dbModel);
    } catch(err) {
      res.status(422).json(err);
    }
  },
  update: async (req, res) => {
    try {
      const dbModel = await db.Inspiration.findOneAndUpdate({ _id: req.params.id }, req.body);
      res.json(dbModel);
    } catch(err) {
      res.status(422).json(err);
    }
  },
  remove: async (req, res) => {
    try {
      const dbModel = await db.Inspiration.findById({ _id: req.params.id });
      dbModel.remove();
      res.json(dbModel);
    } catch(err) {
      res.status(422).json(err);
    }
  }
};
