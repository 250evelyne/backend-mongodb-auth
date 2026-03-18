const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    console.log(req);
    // res.send("<h1>TEST</h1>");
    return res.json({
        message: "API endpoint is working!"
    });
});

app.post("/test", (req, res) => {
    console.log(req);
    return res.json({
        message: "API endpoint /test is working!",
        data: {
            ok: true,
            tip: "Data json test endpoint!"
        }
    });
});

app.use("/auth", authRoutes);


// app.listen(5000, ()=>{
//     console.log("Server is running...");
// });

module.exports = app;