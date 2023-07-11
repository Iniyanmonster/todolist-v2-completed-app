const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useUnifiedTopology: true });

client.connect((err) => {
  if (err) {
    console.log('Failed to connect to MongoDB:', err);
    
  }
  else{
    console.log("connection Successful");
  }
});
