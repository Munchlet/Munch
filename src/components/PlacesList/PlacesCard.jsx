import { Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LocalAtm, Motorcycle, Star, Timer } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
	shopContainer: {
		display: "flex",
		margin: "0.9rem 0rem",
	},
	shopInformation: {
		display: "flex",
		flexDirection: "column",
	},
	shopLogo: {
		margin: "0rem 0.5rem",
		width: "4rem",
	},
	shopDescription: {
		//stars etc
		display: "flex",
		justifyContent: "flex-start",
	},
	descriptionIcon: {
		margin: "0.4rem",
	},
	shopPromoText: {
		display: "inline-block",
	},
	alignItem: {
		display: "flex",
		alignItems: "center",
	},
}));

export default function PlacesCard({ shop }) {
	const classes = useStyles();
	return (
		<>
			<div className={classes.shopContainer}>
				<img className={classes.shopLogo} src={`/img/logos/${shop.img}`} alt={shop.name} />
				<div className={classes.shopInformation}>
					<span>
						{shop.name} - {shop.location}
					</span>
					<Typography className={classes.shopPromoText} variant="caption">
						{shop.category.join(", ")}
					</Typography>
					<div className={classes.shopDescription}>
						<div className={classes.alignItem}>
							<Star className={classes.descriptionIcon} />
							<Typography className={classes.shopPromoText} variant="body2">
								{shop.ratings}
							</Typography>
						</div>
						<div className={classes.alignItem}>
							<Timer className={classes.descriptionIcon} />
							<Typography className={classes.duration} variant="body2">
								{shop.duration}
							</Typography>
						</div>
						<div className={classes.alignItem}>
							<Motorcycle className={classes.descriptionIcon} />
							<Typography className={classes.distance} variant="body2">
								{shop.distance}
							</Typography>
						</div>
					</div>
					{shop.promo !== null && (
						<div className={classes.alignItem}>
							<LocalAtm className={classes.descriptionIcon} />
							<Typography className={classes.shopPromoText} variant="body2">
								{shop.promo}
							</Typography>
						</div>
					)}
				</div>
			</div>
			<Divider />
		</>
	);
}
