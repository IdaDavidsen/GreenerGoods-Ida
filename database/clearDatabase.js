const admin = require("firebase-admin");

// Indlæs Firebase service-konto nøglen
const serviceAccount = require("/Users/idadavidsen/Desktop/INNT/GreenerGoods/database/serviceAccountKey.json");

// Initialiser Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://greenergoods-default-rtdb.europe-west1.firebasedatabase.app"
});

// Reference til Realtime Database
const db = admin.database();
const ref = db.ref("products");

// Tøm Realtime Database
async function clearDatabase() {
    try {
        await ref.set(null); // Tømmer databasen
        console.log("Database cleared.");
    } catch (error) {
        console.error("Error clearing database:", error);
    }
}

// Kald funktionen for at tømme databasen
clearDatabase();
