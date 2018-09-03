
# Simple socket client for Super Heroes Catalogue microservice

This NodeJS application works as a simple client to test audit events that come from [Superheroes Catalogue Microservice](https://github.com/bolzon/ms-superheroes) as push messages when users make changes on database contents (CREATE, UPDATE, DELETE).

To run this project:

```javascript
npm install
npm start
```


## How it works

After executing server application, execute this client app.

Pushed message should be printed in application console as following:

```bash
Client connected to server

New audit event received:
{
   "entity": "User",
   "entityId": "bolzon",
   "datetime": "2018-09-03T14:21:43.026Z",
   "action": "CREATE",
   "username": "admin"
}
```


# Author

September, 2018<br/>
[Alexandre Bolzon](https://about.me/bolzon)
