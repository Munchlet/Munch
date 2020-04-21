import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
const useStyles = makeStyles((theme) => ({
	headerSeeAll: {
		top: "1rem",
		right: 0,
		position: "absolute",
		color: "dodgerblue",
	},
	headerSubtitle: {
		display: "block",
		position: "relative",
		left: 0,
	},
}));

export default function GalleryListHeader() {
	const classes = useStyles();

	return (
		<div style={{ position: "relative", width: "100%" }}>
			<Typography variant="h6">What's New?</Typography>
			<Typography className={classes.headerSubtitle} variant="subtitle2" gutterBottom>
				Check out what's new
			</Typography>
			<Typography className={classes.headerSeeAll} variant="subtitle2" gutterBottom>
				See All
			</Typography>
		</div>
	);
}
