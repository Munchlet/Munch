import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { capitalizeFirstLetter } from "../../lib/Helper";

const useStyles = makeStyles((theme) => ({
	categoryImg: {
		height: "55%",
		display: "block",
	},
	categoryName: {
		marginTop: "1rem",
		display: "block",
		fontWeight: 500,
	},
}));

export default function CategoryGridCard({ name }) {
	const classes = useStyles();

	return (
		<>
			<img className={classes.categoryImg} src={`img/${name}.png`} alt={name}></img>
			<Typography className={classes.categoryName} variant="body2" display="block" gutterBottom>
				{capitalizeFirstLetter(name)}
			</Typography>
		</>
	);
}
