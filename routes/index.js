var router = require("express").Router();
var saveRoutes = require("./save");

router.use("/save", saveRoutes);

module.exports = router;