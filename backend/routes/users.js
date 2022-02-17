import express from "express";

var api = express.Router();

api.get("/", (req,res) => {
    res.send("hey it's user routes")
})

export default api;
// module.exports = router;
