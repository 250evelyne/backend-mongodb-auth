const mongoose = require("mongoose");

const connectDB = async () => {
    const mongoUri =process.env.MONGO_URI || "mongodb+srv://evelyne_user:Mypassword1234@cluster0.bzrvbgk.mongodb.net/?appName=Cluster0";

    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully.");
};

module.exports = { connectDB }