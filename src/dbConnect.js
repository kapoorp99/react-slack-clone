const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://kp99:kp@99@cluster0.gkypl.mongodb.net/slack-clone-db?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("slack-clone-db").collection("rooms");
  // perform actions on the collection object
  console.log(collection);
  client.close();
});
