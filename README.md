### GitHub Link:

https://github.com/ChristopherPerrault/ticketblaster

#### TicketBlaster is a student project designed to demonstrate our understanding of MERN Full-Stack development.
(DEMO screenshots below)
#### The application is not deployed to the web and has no connection to the existing, popular ticket vendor the application's name resembles.

##### Created using Create-React-App, December 2022.

## **Instructions to run locally**

### Clone or download the repo and open it in an IDE with an integrated terminal

### Run the following commands

```
cd ticketmaster-master
cd frontend
npm install
```

#### This will install the required dependencies for the project to operate correctly

#### Afterwards, run the following commands to install backend dependencies:

```
cd backend
npm install
```

#### In the main project directory, change .env.example to .env and insert your mongoDB connection string where instructed.

#### Afterwards, navigate to 'index.js' in the backend subfolder...

#### Change the following line (line 295):

```
url: `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=522&apikey=${process.env.API_KEY_CHRIS}`,
```

#### Replace the end with:

```
`...apikey=${process.env.DEMO_API_KEY}`
```

#### Once dependencies are installed and your .env is configured, you can use the below commands to start the servers:

```
cd backend
npm start
```

```
cd frontend
npm start
```

<<<<<<< Updated upstream
![ticketblaster6](https://user-images.githubusercontent.com/86622794/208127296-ef28a491-89a9-434a-a508-95ebf11c8536.jpg)
![ticketblaster1](https://user-images.githubusercontent.com/86622794/208127301-ac0cc23b-5293-4332-8843-03d8b0853829.jpg)
![ticketblaster2](https://user-images.githubusercontent.com/86622794/208127302-f8d5685b-8b17-4315-8ef2-397bc91b9b3b.jpg)
![ticketblaster3](https://user-images.githubusercontent.com/86622794/208127303-1ccf8d12-b6ad-46a5-98e1-b01d987a9b1b.jpg)
![ticketblaster4](https://user-images.githubusercontent.com/86622794/208127304-8c2e4ec7-08b0-4a8e-9dd1-684e461bec21.jpg)
![ticketblaster5](https://user-images.githubusercontent.com/86622794/208127307-9792380e-0115-44d2-92f7-42208dec53e0.jpg)
=======
### Dependencies to be installed:

frontend:
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install --save styled-components
npm install --save react-icons
npm i react-router-dom

backend:
npm install axios
>>>>>>> Stashed changes
