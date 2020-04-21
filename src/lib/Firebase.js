import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyDwPZ8-cRbZEoYYDeR_32vaIJiFfZnx4xI",
	authDomain: "munch-2020-alpha1.firebaseapp.com",
	databaseURL: "https://munch-2020-alpha1.firebaseio.com",
	projectId: "munch-2020-alpha1",
	storageBucket: "munch-2020-alpha1.appspot.com",
	messagingSenderId: "882593337287",
	appId: "1:882593337287:web:5472e9208b3972635453e2",
	measurementId: "G-2RWQ7RND15",
};

firebase.initializeApp(firebaseConfig);
// import "firebase/analytics";
// firebase.analytics();

export default firebase;
