var router = require("express").Router();
var saveRoutes = require("./save");

router.use("/api/save", saveRoutes);

module.exports = router;