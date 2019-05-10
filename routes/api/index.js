const router = require("express").Router();
const userRoutes = require("./users");
const trefleRoutes = require("./trefle");

// User routes
router.use("/user", userRoutes);
router.use("/trefle", trefleRoutes);

module.exports = router;
