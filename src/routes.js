const router = require("express").Router();

const authRoute = require("./api/routes/auth.route");
const adminRoute = require("./api/routes/admin.route");

// route list
router.use("/api/v1/auth", authRoute);
router.use("/api/v1/admin", adminRoute);

module.exports = router;
