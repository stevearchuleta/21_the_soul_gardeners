const router = require("express").Router();
const userRoutes = require("./users");
// const trefleRoutes = require("./trefle");
const harvestHelperRoutes = require("./harvestHelper");
const gardenTipsRoutes = require("./gardenTips");

// User routes
//router.use("/user", userRoutes);
// router.use("/trefle", trefleRoutes);
router.use("/harvestHelper", harvestHelperRoutes);
router.use('/gardenTips', gardenTipsRoutes);

module.exports = router;
