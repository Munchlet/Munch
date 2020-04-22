import GridList from "@material-ui/core/GridList";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import GalleryCard from "./GalleryCard";
import GalleryListHeader from "./GalleryListHeader";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		flexWrap: "nowrap",
		transform: "translateZ(0)",
	},
}));

export default function GalleryList() {
	const classes = useStyles();

	return (
		<>
			<GalleryListHeader />
			<div className={classes.root}>
				<GridList className={classes.gridList} cols={2.5}>
					{[1, 2, 3, 4, 5, 6].map((tile) => (
						<GalleryCard className={classes.gridItem} />
					))}
				</GridList>
			</div>
		</>
	);
}
