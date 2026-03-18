const mongoose = require("mongoose");

const connectDB = async () => {
    const mongoUri = "mongodb+srv://renancavalcanti_db_user:CBFUY2q2VWNd0MqR@cluster0.whvxvig.mongodb.net/?appName=Cluster0/tt4-2930";

    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully.");
};

module.exports = { connectDB }