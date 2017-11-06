var db = require("../models");

module.exports = {

    findAll: function(req,res) {
      db.Save
        .find({})
        .then(function(dbSave){
            res.json(dbSave);
        })
    },

    delete: function(req,res) {
        db.Save.remove({url: req.params.id})
        .then(function(dbSave){
            res.json(dbSave);
        });
    },

    create: function(req, res){
        console.log(req.body);
        db.Save
          .create(req.body)
          .then(function(dbSave){
              res.json(dbSave)
          });
    }
};