var router = require("express").Router();
var saveRoutes = require("./save");
const path = require("path");

router.use("/api/save", saveRoutes);

// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

module.exports = router;