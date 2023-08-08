const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        mongoose.connect(mongodb+srv://lakshmivvsmarolix:84e966Q7utS2FGj3@cluster0.jhv9u6n.mongodb.net/?retryWrites=true&w=majority, err => {
            if (err) throw err;
            console.log('connected to MongoDB')
        });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit();
    }
};

module.exports = mongoose;
