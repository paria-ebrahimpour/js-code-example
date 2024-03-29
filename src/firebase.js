
// import { firebase } from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyCK_nIMIBkBA9QAa2wILAfnp94r0OaTjs8",
//   authDomain: "first-pwa-4cb00.firebaseapp.com",
//   databaseURL: "https://first-pwa-4cb00-default-rtdb.firebaseio.com",
//   projectId: "first-pwa-4cb00",
//   storageBucket: "first-pwa-4cb00.appspot.com",
//   messagingSenderId: "340024090299",
//   appId: "1:340024090299:web:f5dd7805cd041e238bd39e",
// };

// const app = firebase.initializeApp(firebaseConfig);
// const auth = app.auth();
// const db = app.firestore();

// const googleProvider = new firebase.auth.GoogleAuthProvider();

// const signInWithGoogle = async () => {
//   try {
//     const res = await auth.signInWithPopup(googleProvider);
//     const user = res.user;
//     const query = await db
//       .collection("users")
//       .where("uid", "==", user.uid)
//       .get();
//     if (query.docs.length === 0) {
//       await db.collection("users").add({
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// //////////////

// const signInWithEmailAndPassword = async (email, password) => {
//   try {
//     await auth.signInWithEmailAndPassword(email, password);
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// //////////////

// const registerWithEmailAndPassword = async (name, email, password) => {
//   try {
//     const res = await auth.createUserWithEmailAndPassword(email, password);
//     const user = res.user;
//     await db.collection("users").add({
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// //////////////////

// const sendPasswordResetEmail = async (email) => {
//   try {
//     await auth.sendPasswordResetEmail(email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// /////////////////

// const logout = () => {
//   auth.signOut();
// };

// /////////////

// export {
//   auth,
//   db,
//   signInWithGoogle,
//   signInWithEmailAndPassword,
//   registerWithEmailAndPassword,
//   sendPasswordResetEmail,
//   logout,
// };
