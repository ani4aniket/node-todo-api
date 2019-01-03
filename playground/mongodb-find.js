// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/DemoData', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Users').find({
	// 	_id: new ObjectID('5c29c5e000f6051014dcfa72')
	// }).toArray().then((docs) => {
	// 	console.log('Users');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch users', err);
	// });

	// 	db.collection('Users').find().count().then((count) => {
	// 	console.log(`Users count : ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch users', err);
	// });
		db.collection('Users').find({location: 'Kolkata'}).toArray().then((docs) => {
			console.log(JSON.stringify(docs, undefined, 2));
		},(err) => {
			console.log('Unable to fetch user');
		});
	db.close();
});

