const { MongoClient } = require('mongodb');

// MongoDB configuration
const MONGO_URI = 'mongodb+srv://user_m00886801:zkQ2rimOikUQog5i@cluster0.3gffmem.mongodb.net/'; // Replace with your MongoDB URI
const DB_NAME = 'lessons_booking'; // Replace with your database name
const COLLECTION_NAME = 'lessons'; // Replace with your collection name

// Sample data to insert
const lessons = [
  {
    id: 1,
    title: 'Math 101',
    description: 'Basic Math Lessons',
    price: 50,
    availableInventory: 5,
    rating: 4,
    image: '/assets/math.png'
  },
  {
    id: 2,
    title: 'History Basics',
    description: 'World History Overview',
    price: 75,
    availableInventory: 3,
    rating: 5,
    image: '/assets/history.png'
  },
  {
    id: 3,
    title: 'Science Fundamentals',
    description: 'Learn the basics of science',
    price: 60,
    availableInventory: 4,
    rating: 4.5,
    image: '/assets/science.png'
  }
];

// Connect to MongoDB and insert data
async function insertData() {
  try {
    const client = await MongoClient.connect(MONGO_URI, { useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Insert lessons into the collection
    const result = await collection.insertMany(lessons);
    console.log(`${result.insertedCount} lessons inserted successfully!`);

    // Close the connection
    await client.close();
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

// Run the script
insertData();