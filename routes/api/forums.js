// const jwt = require('jsonwebtoken');
// const isAuthenticated = require("../../controllers.authentication");

/*
Socket.IO: Socket.IO is a library for real-time web applications. 
It's not a third-party service like Twilio, but rather a library you would use directly in your Node.js server. 
It enables real-time, bi-directional communication between web clients and servers and has features like broadcasting to 
multiple sockets and storing data associated with each client. It is great for creating a chat service, but 
doesn't support video.const router = require('express').Router();

const forumsController = require('../../controllers/forumsController');

// Matches with "/api/forums"
router.route('/')
  .get(forumsController.findAll)
  .post(forumsController.create);

// Matches with "/api/forums/:id"
router.route('/:id')
  .get(forumsController.findById)
  .put(forumsController.update)
  .delete(forumsController.remove);

module.exports = router;

In this example, the forumsController would be responsible for handling real-time chat.

This is a simplified example and a full implementation can be quite complex, as it would involve setting up a WebSocket server with socket.io, 
handling connections and disconnections from users, and emitting/receiving messages. 
You would also need to handle saving messages to a database if you want chat history to persist
*/

/*
Twilio: Twilio provides APIs for all sorts of communication, including SMS, voice, video, and even WhatsApp. 
Their APIs are robust and well-documented, making them a great option. 
They have a Programmable Chat API that's specifically for building chat applications, 
and a Programmable Video API for video calls. They do require authentication, but 
not necessarily with JWTs (though they do support JWTs).

For using Twilio, you will first need to create an account on Twilio and obtain your API key and API Secret.

Please follow the steps to create an account on Twilio:

Visit Twilio's website here
Fill in your information to create an account. You'll need to verify a phone number as part of the sign-up process.
Once you have an account, you'll need to create a new project. You can do this from the Twilio Dashboard. Choose "Products" and then choose "Programmable Chat".
After the project has been created, go to the Dashboard and under Project Info, you will find ACCOUNT SID and AUTH TOKEN.
Now, you need to create an instance of the Programmable Chat service:

From the Dashboard, go to "All Products & Services" > "Programmable Chat"
Click on "Create new Chat Service" and follow the instructions
You will need to use this information in your server-side code to interact with the Twilio Programmable Chat API. 
Here's a very simplified example of how you might use it in an Express route:


const router = require('express').Router();
const twilio = require('twilio');

// You'd want to store these in environment variables, not in your source code
const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const serviceSid = 'your_chat_service_sid';

const client = new twilio(accountSid, authToken);

// Matches with "/api/forums"
router.route('/')
  .get(async (req, res) => {
    // Fetch all channels
    const channels = await client.chat.services(serviceSid)
                                  .channels
                                  .list();
    
    res.json(channels);
  })
  .post(async (req, res) => {
    // Create a new channel
    const channel = await client.chat.services(serviceSid)
                                 .channels
                                 .create({friendlyName: req.body.name});
    
    res.json(channel);
  });

module.exports = router;


Note that this code just illustrates the basics of using the Twilio Programmable Chat API and 
won't work without a valid accountSid, authToken, and serviceSid. 
You'll need to replace 'your_account_sid', 'your_auth_token', and 
'your_chat_service_sid' with your actual Twilio Account SID, Auth Token, and Chat Service SID, respectively.

In addition, real-world usage of this API would likely involve more complex code to 
handle various edge cases and additional features. You should refer to the Twilio Programmable Chat documentation for 
more details and examples: https://www.twilio.com/docs/chat

It's also important to note that for front-end integration, you will likely need to use the Twilio Chat JavaScript library to 
interact with the Chat Service you've created. You would need to create Chat Clients on the front-end, 
which involves generating Access Tokens on the server-side. It's a more complex process than can be covered here, 
but you can find more information and examples in the Twilio documentation.
*/


/*
To implement Agora's service, you would need to follow these general steps:

Create an account on Agora: You can create an account here.

Create a new project: Once you have an account, create a new project in the Agora console. 
This will give you an App ID, which you will need for your application.

Install the Agora SDK: Agora provides SDKs for various platforms. For a Node.js server, you would need the Agora RESTful API. 
Depending on the specifics of your application, you might need to also use the client-side SDKs (for example, if you are building a web application you would 
    use the Web SDK).

Use the Agora API: With your App ID and the Agora SDK, you can now use the Agora API in your application.

Agora does not provide a direct API for chat service. It provides APIs for voice and video calls. If you want to create a chat service, you need to 
use the Real-time Messaging SDK (RTM SDK) provided by Agora.

Here's an example of how you might use Agora's RESTful API in your routes:

const router = require('express').Router();
const agoraController = require('../../controllers/agoraController');

// Matches with "/api/forums"
router.route('/')
  .get(agoraController.findAll)
  .post(agoraController.create);

// Matches with "/api/forums/:id"
router.route('/:id')
  .get(agoraController.findById)
  .put(agoraController.update)
  .delete(agoraController.remove);

module.exports = router;

In this case, the agoraController would contain the logic for interacting with the Agora API. 
You would need to create this controller file and implement the functions.

Please note that this is just a starting point. Building a fully-featured chat application with Agora would 

require a more complex implementation and would involve client-side code as well.

It's worth noting that Agora provides a lot of resources to help you get started, including guides and demo apps. 
I recommend checking out their Developer Center for more information.
*/


/*
const router = require('express').Router();
const forumsController = require('../../controllers/forumsController');

// Matches with "/api/forums"
router.route('/')
  .get(forumsController.findAll)
  .post(forumsController.create);

// Matches with "/api/forums/:id"
router.route('/:id')
  .get(forumsController.findById)
  .put(forumsController.update)
  .delete(forumsController.remove);

module.exports = router;


In this scenario, the forumsController would be responsible for interfacing with Firebase's Firestore database to handle CRUD operations for your forum messages. 
It's important to note that Firebase provides a real-time database, so 
changes to your data can be listened to in real-time on your client-side application, which is perfect for a forum or chat application.

Firebase is a product by Google, and you can find more information on their official website at Firebase Google.

To use Firebase's Firestore as your database, here's a rough outline of what you would need to do:

Create a Firebase project: Head over to the Firebase console at Firebase Console and create a new project. 
Follow the steps in the setup wizard to initialize your project.

Enable Firestore for your project: In your project dashboard, click on "Database" in the left-side menu. 
Then, click "Create Database" under the Firestore Database section.

Install Firebase SDK: In your server-side application, you'll need to install the Firebase SDK. 
You can do this by running npm install --save firebase-admin in your terminal.

Initialize Firebase in your application: You'll need to initialize Firebase in your application, 
which typically involves importing the Firebase Admin SDK and using a service account key that you generate in your Firebase console.

Use Firebase in your application: You can now use Firebase to perform CRUD operations in your forumsController. 
Firestore has a simple API for handling documents (which can represent your forum messages) in collections.

Please keep in mind that you need to follow the Firebase documentation to setup Firestore correctly. 
This is a high-level overview and does not include details like handling authentication and security rules which are critical for a production application. Firebase has excellent documentation and guides available on their website.
*/