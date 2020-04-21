import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useStyles = makeStyles((theme) => ({}));

export default function Carousell() {
	const classes = useStyles();

	return (
		<Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} dynamicHeight={false}>
			<div>
				<img src="/img/promos/1.jpg" />
			</div>
			<div>
				<img src="/img/promos/2.jpg" />
			</div>
			<div>
				<img src="/img/promos/3.jpg" />
			</div>
			<div>
				<img src="/img/promos/4.jpg" />
			</div>
			<div>
				<img src="/img/promos/5.jpg" />
			</div>
		</Carousel>
	);
}
