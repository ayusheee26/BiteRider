// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://ayushiproject:ayushiproject@cluster0.wiyahyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'




// // mongo app
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://ayushiproject:ayushiproject@cluster0.s8jqehr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     const fetched_data= await mongoose.connection.db.collection("food_items");
//             fetched_data.find({}).to=Array(function(err,data){
//                 if(err) console.log(err);
//                 else console.log(data);
//             })
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
    // 





// // // vdo raw
// // const mongoDB = async () => {
// //     await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
// //         if (err) console.log("---", err)
// //         else {
// //             console.log("finally connected");
// //             const fetched_data= await mongoose.connection.db.collection("food_items");
// //             fetched_data.find({}).to=Array(function(err,data){
// //                 if(err) console.log(err);
// //                 else console.log(data);
// //             })
// //         }
// //     });
// // }
// // module.exports = mongoDB;




// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log("finally connected");

//         const fetched_data = await mongoose.connection.db.collection("food_items");
//         const data = await fetched_data.find({}).toArray();
//         console.log(data);
//     } catch (err) {
//         console.log("---", err);
//     }
// }

// module.exports = mongoDB;



//___________________________________________
PORT= 5000;
MongoDBURI="mongodb://localhost:27017/GoFood"



