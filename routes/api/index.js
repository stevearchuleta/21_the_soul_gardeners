const router = require("express").Router();
const userRoutes = require("./users");
const harvestHelperRoutes = require("./harvestHelper");
const gardenTipsRoutes = require("./gardenTips");
// const isAuthenticated = require("../../controllers.authentication");

// User routes
//router.use("/user", userRoutes);
router.use("/harvestHelper", harvestHelperRoutes);
router.use('/gardenTips', gardenTipsRoutes);

module.exports = router;
