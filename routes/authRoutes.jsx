// // backend/routes/authRoutes.js
// const express = require("express");
// const passport = require("passport");
// const router = express.Router();

// router.get("/linkedin", passport.authenticate("linkedin"));

// router.get(
//   "/linkedin/callback",
//   passport.authenticate("linkedin", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//   })
// );

// module.exports = router;

const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/linkedin", passport.authenticate("linkedin"));

router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: "http://localhost:3000/success",
    failureRedirect: "http://localhost:3000/failure",
  })
);

module.exports = router;
