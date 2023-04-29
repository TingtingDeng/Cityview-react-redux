import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Search from "../components/Search";
import Gallery from "../components/Gallery";

import classes from "./HomePage.module.css";

const HomePage = () => {
	const images = useSelector((state) => state?.fetch?.images);
	const index = useSelector((state) => state?.fetch?.index);

	useEffect(() => {
		document.title =
			images[index]?.des.charAt(0).toUpperCase() +
			images[index]?.des.slice(1);
	}, [images, index]);

	return (
		<div
			className={classes.container}
			style={{ backgroundImage: `url('${images[index]?.regular}')` }}
		>
			<div className={classes.outer}>
				<Search />
				<Gallery />
			</div>
		</div>
	);
};

export default HomePage;
