# activity-feed-pusher-react
This application shows how to integrate Pusher with a Node.js/Express/MongoDB backend and React in the front-end.

You can follow the [tutorial](https://pusher.com/tutorials/activity-feed-react/) to build this application or jump straight to the code.

## Getting Started
1. Create an app on Pusher and copy your app's id, key, and secret.
2. Clone this repository and `cd` into it.
3. Start the MongoDB server
4. Execute `npm install` to download dependencies.
5. Execute `PUSHER_APP_ID=XXXXXX PUSHER_APP_KEY=XXXXXX PUSHER_APP_SECRET=XXXXXX node server.js` to set the environment variables needed by the app with your Pusher info and start it.
6. Go to `http://localhost:3000` and start sending playing with the app using [Postman](https://www.getpostman.com/) to communicate with the API or the Pusher console to test only the front-end part. 

### Prerequisites

- [A free Pusher account](https://pusher.com)
- [Node.js](https://nodejs.org/en/download/) version 5 or greater
- [A MongoDB database](https://www.mongodb.com/download-center?jmp=nav#community)

## Built With

* [Pusher](https://pusher.com/) - APIs to enable devs building realtime features
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Node.js](https://nodejs.org) - A JavaScript runtime
* [Express](http://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [MongoDB](https://www.mongodb.com/) - A NoSQL database

## Acknowledgments

* Thanks to [Pusher](https://pusher.com/) for sponsoring this tutorial.
