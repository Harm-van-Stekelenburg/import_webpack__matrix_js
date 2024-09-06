import * as sdk from 'matrix-js-sdk';

const auth = {
  baseUrl: "http://localhost:8008",
  accessToken: "TOKEN",
  userId: "USER",
  timelineSupport: true,
};

console.log(global);

// Yeah some problem but needed to comment out: ./node_modules/matrix-js-sdk/lib/client.js:1111 because that import failed.

const client = sdk.createClient(auth);

console.log("client", client);

client.publicRooms().then((data) => console.log("Public Rooms: %s", JSON.stringify(data))).catch((err) => console.log("Err", err));