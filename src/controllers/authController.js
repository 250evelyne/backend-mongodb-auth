

const register = (req, res) => {
    console.log(req.body);
    return res.json({
        message: "Register Endpoint is Working!"
    });
};

module.exports = { register };