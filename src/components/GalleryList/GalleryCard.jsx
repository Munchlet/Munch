import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles({
	root: {
		position: "relative",
		maxWidth: 220,
		borderRadius: "0.4rem",
		boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.19)",
	},
	media: {
		height: 160,
	},
	cardTitle: {
		overflow: "hidden",
		height: "2.4rem",
		textOverflow: "ellipsis",
		wordWrap: "break-word",
		fontWeight: 700,
		lineHeight: 1.2,
	},
	cardSubtitle: {
		overflow: "hidden",
		height: "1rem",
		textOverflow: "ellipsis",
		wordWrap: "break-word",
	},
	cardBadge: {
		fontSize: "0.875rem",
		color: "white",
		position: "absolute",
		backgroundColor: "darkorange",
		padding: "0.3rem",
		fontWeight: 450,
		zIndex: 2,
		left: -2,
		top: 5,
	},
	cardCalc: {
		right: "0.3rem",
		position: "absolute",
		backgroundColor: "white",
		top: "7.8rem",
		padding: "0.4rem 0.5rem",
		borderRadius: "0.3rem",
		fontWeight: 600,
		fontSize: "0.7rem",
	},
});

export default function GalleryCard() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<div className={classes.cardBadge}>
				<span>Promo</span>
			</div>
			<CardActionArea>
				<CardMedia className={classes.media} image="https://material-ui.com/static/images/cards/paella.jpg" title="Contemplative Reptile" />
				<div className={classes.cardCalc}>
					<span>6 mins</span>
				</div>
				<CardContent>
					<Typography className={classes.cardTitle} gutterBottom variant="subtitle1">
						Burger & Lobster - Raffles Shopping Burger & Lobster - Raffles Shopping
					</Typography>
					<Typography className={classes.cardSubtitle} variant="body2" color="textSecondary" component="p">
						Exclusive bundle deal
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
