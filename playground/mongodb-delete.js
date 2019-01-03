// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/DemoData', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	// deleteMany
	// db.collection('Users').deleteMany({name :'Aniket'}).then((result) => {
	// 	console.log(result);
	// });

	//deleteOne
	// db.collection('Users').deleteOne({name: 'Subham'}).then((result) => {
	// 	console.log(result);
	// });
	
	// findOneAndDelete
	db.collection('Users').findOneAndDelete({name: 'Anurag'}).then((result) => {
		console.log(result);
	});

	// db.close();
});

