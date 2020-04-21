import { writeStorage } from "@rehooks/local-storage";
import React, { useEffect } from "react";
import { database, firebase } from "../../lib/Firebase";

export default function GoogleLogin() {
	useEffect(() => {
		async function login() {
			const provider = new firebase.auth.GoogleAuthProvider();
			try {
				const result = await firebase.auth().signInWithPopup(provider);
				await database.collection("users").doc(result.user.uid).set({
					username: result.user.displayName,
					email: result.user.email,
					img: result.user.photoURL,
					roles: {},
				});
				console.log(JSON.stringify(result, null, 2));

				writeStorage("user", JSON.stringify(result));
			} catch (error) {
				console.error(error);
			}
		}

		login();
	}, []);
	return <></>;
}
