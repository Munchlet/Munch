import React, { useContext } from "react";
import { store } from "../store";

export default function Homepage() {
	const { state } = useContext(store);

	return <>Hello!</>;
}
