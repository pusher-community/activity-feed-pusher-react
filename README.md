# activity-feed-pusher-react
This applications shows how to integrate Pusher with a Node.js/Express/MongoDB backend and React in the front-end.

You can follow the [tutorial](https://pusher.com) to build this application or jump straight to the code.

# Requirements

- [A free Pusher account](https://pusher.com)
- [Node.js](https://nodejs.org/en/download/) version 5 or greater
- [A MongoDB database](https://www.mongodb.com/download-center?jmp=nav#community)

# Installation
1. Create an app on Pusher and copy your app's id, key, and secret.
2. Clone this repository and `cd` into it.
3. Start the MongoDB server
4. Execute `npm install` to download dependencies.
5. Execute `PUSHER_APP_ID=XXXXXX PUSHER_APP_KEY=XXXXXX PUSHER_APP_SECRET=XXXXXX node server.js` to set the environment variables needed by the app with your Pusher info and start it.
6. Go to `http://localhost:3000` and start sending playing with the app using [Postman](https://www.getpostman.com/) to communicate with the API or the Pusher console to test only the front-end part. 
