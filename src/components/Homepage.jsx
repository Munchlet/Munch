import { Container, Divider, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext } from "react";
import { store } from "../store";
import Carousel from "./Carousel";
import CategoryGrid from "./CategoryGrid";
import GalleryList from "./GalleryList";
import PlacesList from "./PlacesList";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginTop: "2rem",
	},
	ads: {
		backgroundColor: "red",
		height: "17.3rem",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	galleryDivider: {
		margin: "1.4rem 0rem",
	},
}));

export default function Homepage() {
	const { state } = useContext(store);
	const classes = useStyles();

	return (
		<Container maxWidth="lg">
			<Grid container className={classes.root} spacing={2}>
				<Grid item xs={12} sm={6}>
					<Carousel />
				</Grid>
				<Grid item xs={12} sm={6}>
					<div className={classes.ads}>Some ads</div>
				</Grid>
			</Grid>
			<Grid container className={classes.root} spacing={2} align="center">
				<CategoryGrid />
			</Grid>
			<Divider className={classes.galleryDivider} />
			<GalleryList />
			<Divider className={classes.galleryDivider} />
			<PlacesList />
		</Container>
	);
}
