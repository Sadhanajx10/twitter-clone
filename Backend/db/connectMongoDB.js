import mongoose from "mongoose";

const connectMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI),{
			useNewUrlParser: true,
			useUnifiedTopology: true,

		}
		console.log("MongoDB connected successful");
	} catch (error) {
		console.error(`Error connection to mongoDB: ${error.message}`);
		process.exit(1);
	}
};

export default connectMongoDB;