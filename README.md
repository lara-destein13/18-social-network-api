# 18-social-network-api

## Description

18-social-network-api is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Built With

* JavaScript
* Node
* Express
* MongoDB
* Mongoose

## Usage

Application runs in the command line. Once in the project's root directory, run server.js in the terminal. Make sure you are connected to MongoDb. Insomnia can be used to show API POST, PUT, and DELETE routes working successfully. 

See link to a walkthorugh video: https://drive.google.com/file/d/1eXXtytA_0jIBjobKDlzcotyUuZYGth3w/view

## Contributing
Made with &hearts; by Lara DeStein