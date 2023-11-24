const { MongoClient } = require('mongodb');


const db = require("../connection/connect_ML_DB");


const func = (async (req, res) => {
    
    const comp = req.body.company;

    try {

        // Access the 'comp' collection within the 'ml' database
        const relianceCollection = db.collection(comp);

        // Perform operations on the 'comp' collection
        // For example:
        // Query all documents in the 'comp' collection
        const allcompDocuments = await relianceCollection.find({}).toArray();
        res.status(200).send(allRelianceDocuments);

    } catch (error) {
        console.log("This is error from comp.js");
        console.log(error);
        res.status(400).send();
    }

})



module.exports = func;