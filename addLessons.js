const { MongoClient } = require('mongodb');

// MongoDB configuration
const MONGO_URI = 'mongodb+srv://user_m00886801:zkQ2rimOikUQog5i@cluster0.3gffmem.mongodb.net/'; // Replace with your MongoDB URI
const DB_NAME = 'lessons_booking'; // Replace with your database name
const COLLECTION_NAME = 'lessons'; // Replace with your collection name

// Sample data to insert
const lessons = [
  {
    id: 1,
    title: "Maths for Beginners",
    description: "A guide to basic math",
    location: "London",
    price: 50,
    availableInventory: 30,
    rating: 4,
    image: "/assets/math.png"
  },
  {
    id: 2,
    title: "Introduction to Programming",
    description: "Learn the basics of coding",
    location: "Manchester",
    price: 75,
    availableInventory: 20,
    rating: 5,
    image: "/assets/code.png"
  },
  {
    id: 3,
    title: "History of England",
    description: "Explore the history of England",
    location: "Oxford",
    price: 40,
    availableInventory: 25,
    rating: 4,
    image: "/assets/history.png"
  },
  {
    id: 4,
    title: "Science Experiments",
    description: "Hands-on science experiments",
    location: "Bristol",
    price: 60,
    availableInventory: 15,
    rating: 5,
    image: "/assets/science.jpg"
  },
  {
    id: 5,
    title: "Art",
    description: "Unleash your creativity",
    location: "Liverpool",
    price: 45,
    availableInventory: 18,
    rating: 3,
    image: "/assets/art.jpg"
  },
  {
    id: 6,
    title: "Advanced Mathematics",
    description: "An advanced mathematics course",
    location: "Cambridge",
    price: 90,
    availableInventory: 10,
    rating: 5,
    image: "/assets/advancedMath.png"
  },
  {
    id: 7,
    title: "English Literature",
    description: "Dive into classic English literature",
    location: "York",
    price: 55,
    availableInventory: 22,
    rating: 4,
    image: "/assets/literature.png"
  },
  {
    id: 8,
    title: "Creative Writing",
    description: "Develop your storytelling skills",
    location: "Brighton",
    price: 50,
    availableInventory: 12,
    rating: 5,
    image: "/assets/writing.png"
  },
  {
    id: 9,
    title: "Physics",
    description: "Discover the world of physics",
    location: "Sheffield",
    price: 70,
    availableInventory: 15,
    rating: 4,
    image: "/assets/physics.png"
  },
  {
    id: 10,
    title: "Music",
    description: "Learn the basics of music",
    location: "Newcastle",
    price: 60,
    availableInventory: 20,
    rating: 5,
    image: "/assets/music.png"
  }
]


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