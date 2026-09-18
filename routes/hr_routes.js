let express = require("express");
let router = express.Router();

// Employees
router.get("/employees", (req, res) => {

    res.send("Employees called");
});

// Assign Task
router.post("/assign-task", (req, res) => {

    let data = req.body;

    res.send({
        message: "Task Assigned",
        details: data
    });
});

module.exports = router;

