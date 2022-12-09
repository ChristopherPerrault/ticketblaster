

#### TicketBlaster is a student project designed to demonstrate our understanding of MERN Full-Stack development.

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
#### Change the following line:
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

