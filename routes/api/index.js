const router = require("express").Router();
const userRoutes = require("./users");
const harvestHelperRoutes = require("./harvestHelper");
const gardenTipsRoutes = require("./gardenTips");
const etWaterRoutes = require("./etWater");
// const poetryRoutes = require("./inspirations");
// const isAuthenticated = require("../../controllers.authentication");

// User routes
router.use("/users", userRoutes);
router.use("/harvestHelper", harvestHelperRoutes);
router.use('/gardenTips', gardenTipsRoutes);
router.use('/etWater', etWaterRoutes);
// router.use("/inspirations", poetryRoutes);

module.exports = router;
