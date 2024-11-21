// Imports - NOTICE THE DIFFERENCE - These are ESM imports
import {MongoClient} from "mongodb" // Mongodb package
import express from "express" // ExpressJS for our server application
import fs from "fs" // File system

// Setup variables
const uri = "mongodb+srv://timmy:MHT3YBvTQtxr7JE8@cluster0.btynzjz.mongodb.net/" // URI to mongodb server
const PORT = 3000 // PORT for our server to listen to
const app = express() // Creati

const client = new MongoClient(uri) // Create client - Think of it as a live connection
await client.connect() // Connect client to server
const database = client.db("music") // Access the database on server
let soundsCollection = null // Initial value of sounds collection

let sounds = await database.listCollections({}, {nameOnly: true}).toArray()
sounds.filter((collectionName) => {
  return collectionName === "sounds"
})

if (sounds.length == 0) {
  soundsCollection = await database.createCollection("sounds")
} else {
  // Else return existing collection
  soundsCollection = await database.collection("sounds")
}

// If it doesnt exist, create it and seed with initial data
if (sounds.length == 0) {
  soundsCollection = await database.createCollection("sounds")

  // Get the data from the data.json file
  const filePath = "./data.json"
  const fileContent = fs.readFileSync(filePath, "utf-8")
  const jsonData = JSON.parse(fileContent)

  // Loop through data and add frequency key
  jsonData.forEach((item) => {
    item.frequency = "High frequency"
  })

  // Insert the data directly into the collection
  await soundsCollection.insertMany(jsonData)
} else {
  // Else return existing collection
  soundsCollection = await database.collection("sounds")
}

app.get("/", async (req, res) => {
  // try to get data from soundsCollection and return data
  // catch error, console.log error and return status code with message
  try {
    const data = await soundsCollection.find().toArray()
    res.json(data)
  } catch (error) {
    console.error("Failed to retrieve documents:", error)
    res.status(500).send("Error retrieving data from the database")
  }
})

app.listen(PORT, async () => {
  console.log(`Server Started on port ${PORT}`)
})

// Detect when server closes and disconnect from MongoDB server
process.on("SIGTERM", () => {
  app.close(() => {
    client.close()
  })
})
