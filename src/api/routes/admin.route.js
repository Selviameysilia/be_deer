const router = require("express").Router();

const auth = require("../../middleware/auth");
const AdminController = require("../controller/admin.controller");

router.post("/register", AdminController.register);
router.post("/login", AdminController.login);
router.post("/request-password-reset", AdminController.requestPasswordReset);
router.post("/reset-password", AdminController.resetPassword);
router.get("/get-user", auth, AdminController.getUserInfo);

module.exports = router;
