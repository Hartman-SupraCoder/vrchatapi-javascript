const querystring = require("querystring");
const { Curl } = require("node-libcurl");
const terminate = curlTest.close.bind(curlTest);


const vrchat = require("vrchat");

const configuration = new vrchat.Configuration({
    username: "PossiumxMini",
    password: "ujswdfcvrploamnsdeft"
});



const AuthenticationApi = new vrchat.AuthenticationApi(configuration);
const UsersApi = new vrchat.UsersApi(configuration);
const SystemApi = new vrchat.SystemApi(configuration);

SystemApi.getCurrentOnlineUsers().then(resp => {
    console.log(`Current Online Users: ${resp.data}`);

    // Calling getCurrentUser on Authentication API logs you in if the user isn't already logged in.
    AuthenticationApi.getCurrentUser().then(resp => {
        console.log(`Logged in as: ${resp.data.displayName}`);

        UsersApi.getUser("usr_5099020d-1ca7-4743-b312-5d6f28fc877a").then(resp => {
            console.log(resp.data.displayName); // Should print out "tupper"
        });
    });
});