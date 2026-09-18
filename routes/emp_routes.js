let express = require("express");
let router = express.Router();

// Register
router.post("/register", (req, res) => {
    let data = req.body;
    res.send(data.name);
    })


// Login
router.post("/login", (req, res) => {

    res.send("Login page called");
})

// View Tasks
router.get("/viewtasks", (req, res) => {
    res.send("View task page called");
});

module.exports = router;