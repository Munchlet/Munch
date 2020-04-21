import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({}));

export default function GalleryListHeader() {
	const classes = useStyles();

	return (
		<>
			<span>Header 1</span>
			<span>Subtitle</span>
			<span>See All</span>
		</>
	);
}
