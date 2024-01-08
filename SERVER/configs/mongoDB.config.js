import mongoose from 'mongoose';

const configureDatabase = async (connectionString) => {
    try {
        console.log('Connecting to database...');
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to database!');
    } catch (error) {
        console.log(error.message);
    }
};

export default configureDatabase;