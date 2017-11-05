var router = require("express").Router();
var saveController = require("../controllers/save");

router.get("/", saveController.findAll);
router.delete("/:id", saveController.delete);
router.post("/", saveController.create);

module.exports = router;