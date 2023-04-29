import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import classes from "./ZoomPicture.module.css";

const ZoomPicture = () => {
	const images = useSelector((state) => state?.fetch?.images);
	// const index = useSelector(state => state?.fetch?.index)
	const { index } = useParams();

	return (
		<div
			className={classes.background}
			style={{ backgroundImage: `url('${images[index]?.regular}')` }}
		>
			<div className={classes.description}>
				{`${images[index]?.des.charAt(0).toUpperCase()}${images[
					index
				]?.des.slice(1)}`}
			</div>
		</div>
	);
};
export default ZoomPicture;
