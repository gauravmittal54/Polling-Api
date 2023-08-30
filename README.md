## Polling API
A simple API for creating and managing polls.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Description
This Polling API allows users to create questions, add options to questions, add votes to options, delete questions and options, and view questions with their options and vote counts.

## Features
- Create a question
- Add options to a question
- Add votes to options
- Delete a question (and associated options)
- Delete an option
- View a question with its options and vote counts

## Setup Instructions
- Clone the repository.
- Install the dependencies using npm install.
- Start the server using npm start or npm run dev (for development with nodemon).

## Folder Structure

<pre>

polling-api/
|-- connection/
|   |-- db.connection.js
|-- controllers/
|   |-- optioncontroller.js
|   |-- questioncontroller.js
|-- models/
|   |-- option.js
|   |-- question.js
|-- routes/
|   |-- optionroutes.js
|   |-- questionroutes.js
|-- index.js
|-- package.json
|-- README.md

  
</pre>

## API Endpoints

| HTTP Verb | Endpoint                               | Action                                              |
| --------- | -------------------------------------- | --------------------------------------------------- |
| POST      | /questions/create                      | Create a new question                              |
| POST      | /questions/:id/options/create          | Add options to a specific question                 |
| DELETE    | /questions/:id/delete                  | Delete a question                                  |
| DELETE    | /options/:id/delete                    | Delete an option                                   |
| PUT       | /options/:id/add_vote                  | Increase the count of votes for an option          |
| GET       | /questions/:id                         | View a question and its options                    |


## Dependencies
- express: ^4.18.2
- mongoose: ^7.4.5
- nodemon: ^3.0.1
- validator: ^13.11.0

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This project is licensed under the ISC License.
