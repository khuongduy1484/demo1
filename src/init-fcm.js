import * as firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
  messagingSenderId: "672839583901"
});

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(
  "BHv9UB2l3ZrqiL2ms7UoaMnHJCexgMsphyCbohPSzzIPUoihVKwyJUEeoyl6yrUWMYSbs-RjcYp90sN8-uShchM"
);


export { messaging };
