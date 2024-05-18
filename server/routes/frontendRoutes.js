const express = require("express");
const router = express.Router();

const path = require("path");

//Middleware
const admin = require("../middleware/isAdmin");
const staff = require("../middleware/isStaff");
const resident = require("../middleware/isResident");
const { homeRedirect } = require("../middleware/homeRedirect");

//home route
router.get("/", (req, res) => {
  homeRedirect(req, res);
});

//login route
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/login.html"));
});

// login with google route
router.get("/login-with-google", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/loginWithGoogle.html"));
});

//forgot password route
router.get("/forgot-password", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/forgotPassword.html"));
});

//reset password route
router.get("/reset-password", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/resetPassword.html"));
});

//user registration route
router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/register.html"));
});

//user Facial Registration Login route
router.get("/facialAuth", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/facialAuth.html"));
});

//user Facial Registration Registration route
router.get("/setUpFacialAuth", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/setUpFacialAuth.html"));
});

//Admin frontend route
router.get(
  "/admin",
  (req, res, next) => admin.isAdmin(req, res, next),
  (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/admin.html"));
  }
);

//Resident frontend route
router.get(
  "/resident",
  (req, res, next) => resident.isResident(req, res, next),
  (req, res) => res.sendFile(path.join(__dirname, "../../client/resident.html"))
);

//Staff frontend route
router.get(
  "/staff",
  (req, res, next) => staff.isStaff(req, res, next),
  (req, res) => res.sendFile(path.join(__dirname, "../../client/staff.html"))
);

/* Admin Frontend Routes */

//Admin page for generating registration code
router.get(
  "/admin/generateCode",
  (req, res, next) => admin.isAdmin(req, res, next),
  (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/generateCode.html"));
  }
);

//Admin page for managing users
router.get(
  "/admin/manageUsers",
  (req, res, next) => admin.isAdmin(req, res, next),
  (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/manageUsers.html"));
  }
);

//Admin page for signing in visitors
router.get(
  "/admin/checkInVisitor",
  (req, res, next) => admin.isAdmin(req, res, next),
  (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/checkInVisitor.html"));
  }
);

//Admin page for managing visitors(E.g. viewing visitor details, logging them out when they leave, etc.)
router.get(
  "/admin/visitors",
  (req, res, next) => admin.isAdmin(req, res, next),
  (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/visitors.html"));
  }
);

router.get(
  "/admin/manageVisitors",
  (req, res, next) => admin.isAdmin(req, res, next),
  (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/manageVisitors.html"));
  }
);

//admin issue fines page
router.get(
  "/admin/issueFine",
  (req, res, next) => admin.isAdmin(req, res, next),
  (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/issueFine.html"));
  }
);

//admin view fines page
router.get(
  "/admin/manageFines",
  (req, res, next) => admin.isAdmin(req, res, next),
  (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/manageFines.html"));
  }
);

//admin send notification page
router.get(
  "/admin/sendNotification",
  (req, res, next) => admin.isAdmin(req, res, next),
  (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/sendNotification.html"));
  }
);

/* Resident Frontend Routes */

//Resident page for generating visitor password and checking current visitor password if one is generated
router.get(
  "/resident/generatevisitorPassword",
  (req, res, next) => resident.isResident(req, res, next),
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "../../client/generateVisitorPassword.html")
    );
  }
);

//Resident page for managing issues
router.get(
  "/resident/manageIssues",
  (req, res, next) => resident.isResident(req, res, next),
  (req, res) => {
    res.sendFile(
      path.join(__dirname, "../../client/manageIssuesResident.html")
    );
  }
);

//Resident page for logging an issue
router.get(
  "/resident/logIssue",
  (req, res, next) => resident.isResident(req, res, next),
  (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/logIssue.html"));
  }
);

//Resident page for viewing fines
router.get(
  "/resident/viewFines",
  (req, res, next) => resident.isResident(req, res, next),
  (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/viewFines.html"));
  }
);

/* Staff Frontend Routes */
router.get(
  "/staff/manageIssues",
  (req, res, next) => staff.isStaff(req, res, next),
  (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/manageIssuesStaff.html"));
  }
);

router.get(
  "/staff/sendNotification",
  (req, res, next) => staff.isStaff(req, res, next),
  (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/sendNotification.html"));
  }
);

module.exports = router;
