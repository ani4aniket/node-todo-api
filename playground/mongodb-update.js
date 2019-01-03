// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/DemoData', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5c2b1a1a5e76af276e7f79cd')
	}, {
		$set: {
			name: 'Anand'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
	db.close();
});

