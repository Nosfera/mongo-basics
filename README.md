# mongo-basics
node und mongoDB basic connection

This is a really simple "REST API" app to explore how to create the following items:
[an Endpoint] (https://en.wikipedia.org/wiki/Service-oriented_architecture#Web_2.0).
Covering:
| Verbs         | Operation     |
| ------------- |:-------------:|
| GET           | Read          |
| PUT           | Create      	|  
| POST          | Update      	|  
| DELETE        | delete      	|

- Using as Middleware
	- Express
	- Body-parser
	- 
==Requirements==
1. Node
2. MongoDB
  a. Create a DB
  b. Select DB 
  c. Create a collection with name task
  x. [check] (http://mongodb.github.io/node-mongodb-native/2.2/quick-start/quick-start/)

```javascript

	mongod -> starts service
	mongo -> conects to db

	show dbs -> show databases
	use --xxxx -> select database
	show collections -> shows tables on selected db
	//Not required
	db.createUser ({ user: "list",
	  pwd: "1234",
	  roles: ["readWrite","dbAdmin"]
	});

´´´

Download repository
npm install

*** RUN APP ***
>? node index.js



*FYI:* 
[PUMP my README FILE -> markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
 to style my README file 
