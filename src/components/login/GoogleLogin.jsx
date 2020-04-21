import { writeStorage } from "@rehooks/local-storage";
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { database, firebase } from "../../lib/Firebase";
import { store } from "../../store";

export default function GoogleLogin() {
	const { dispatch } = useContext(store);
	const history = useHistory();

	useEffect(() => {
		async function login() {
			const provider = new firebase.auth.GoogleAuthProvider();
			try {
				const result = await firebase.auth().signInWithPopup(provider);
				const user = {
					username: result.user.displayName,
					email: result.user.email,
					img: result.user.photoURL,
					roles: {},
				};

				await database.collection("users").doc(result.user.uid).set(user);
				writeStorage("user", JSON.stringify(user));
				dispatch({ type: "setUser", data: user });
				history.push("/");
			} catch (error) {
				console.error(error);
			}
		}

		login();
	}, []);
	return <></>;
}
