import React, { useState } from "react";
import PlacesCard from "./PlacesCard";

export default function PlacesList() {
	const [shops, setShops] = useState([
		{
			name: "KFC",
			img: "kfc.jpg",
			location: "Waterway Point",
			category: ["fried chicken", "western", "chicken"],
			ratings: 4.4,
			duration: 18,
			distance: 0.5,
			promo: null,
		},
		{
			name: "Macdonalds",
			img: "macdonalds.jpg",
			location: "Waterway Point",
			category: ["burger", "fast food", "fries"],
			ratings: 4.1,
			duration: 10,
			distance: 0.8,
			promo: "Munch +1 (Apr)",
		},
		{
			name: "Starbucks",
			img: "starbucks.png",
			location: "Waterway Point",
			category: ["drinks", "coffee"],
			ratings: 4.8,
			duration: 12,
			distance: 0.6,
			promo: null,
		},
		{
			name: "Jollibee",
			img: "jollibee.jpg",
			location: "Waterway Point",
			category: ["fried chicken", "western", "chicken"],
			ratings: 4.1,
			duration: 9,
			distance: 0.2,
			promo: null,
		},
	]);
	return (
		<>
			{shops.map((shop) => (
				<PlacesCard shop={shop} />
			))}
		</>
	);
}
