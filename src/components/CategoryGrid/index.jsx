import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import CategoryGridCard from "./CategoryGridCard";

const useStyles = makeStyles((theme) => ({
	categoryGrid: {
		padding: "2rem",
	},
}));

export default function CategoryGrid() {
	const classes = useStyles();
	const [categories] = useState(["local", "malay", "indian", "chinese", "delivery", "pickup", "alcohol", "new"]);

	return (
		<>
			{categories.map((name) => (
				<Grid item xs={3} sm={1} className={classes.categoryGrid}>
					<CategoryGridCard name={name} />
				</Grid>
			))}
		</>
	);
}
