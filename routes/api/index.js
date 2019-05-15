const router = require("express").Router();
const userRoutes = require("./users");
const trefleRoutes = require("./trefle");
const harvestHelperRoutes = require("./harvestHelper");

// User routes
//router.use("/user", userRoutes);
router.use("/trefle", trefleRoutes);
router.use("/harvestHelper", harvestHelperRoutes);

module.exports = router;
