const admin = require("firebase-admin");

const serviceAccount = require("E:\CODING\ReactAPP\restaurant-site\pigga-29297-firebase-adminsdk-2cosl-79c515216c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pigga-29297-default-rtdb.europe-west1.firebasedatabase.app"
});