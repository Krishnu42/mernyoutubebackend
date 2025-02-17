const mongoose = require("mongoose");
const { MongoClient } = require ('mongodb');

// Connection URI. Update <username>, <password>, and <cluster-url> with your actual MongoDB Atlas credentials.
const uri = 'mongodb+srv://krishnu42:krishnu42@cluster0.itsm4z7.mongodb.net/mern42?retryWrites=true&w=majority';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to connect to MongoDB and insert data
async function insertData(data) {
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Accessing the database and collection
        const database = client.db('mydatabase');
        const collection = database.collection('users');

        // Inserting the data
        const result = await collection.insertOne(data);
        console.log(`Data inserted with _id: ${result.insertedId}`);
    } finally {
        // Closing the connection when finished
        await client.close();
    }
}

// Example data to be inserted
const data = {
    name: 'Krishnu Singh Baghel',
    age: 21
};

// Inserting the data
insertData(data)
    .then(() => console.log('Data inserted successfully'))
    .catch(err => console.error('Error inserting data:', err));
