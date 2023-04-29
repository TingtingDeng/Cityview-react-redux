import React from "react";
import { fetchActions } from "../store/fetch-slice";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Gallery.module.css";

const Gallery = () => {
	const dispatch = useDispatch();
	const images = useSelector((state) => state.fetch.images);
	const selectedIndex = useSelector((state) => state.fetch.index);

	return (
		<div className={classes.carousel}>
			<div className={classes.gallery}>
				{images &&
					images.map((img, index) => (
						<div
							key={index}
							onClick={() => {
								dispatch(fetchActions.clickImg(index));
							}}
							className={`${classes.imgContainer} 
                            ${index === selectedIndex ? classes.selected : ""}`}
							style={{ backgroundImage: `url('${img.thumb}')` }}
						></div>
					))}
			</div>
			<div className={classes.naviBar}>
				<button
					onClick={() => {
						dispatch(fetchActions.prevPage());
					}}
					className={classes.btnNav}
				>
					<ArrowBackIosRoundedIcon fontSize="large" />
				</button>
				<button
					onClick={() => {
						dispatch(fetchActions.nextPage());
					}}
					className={classes.btnNav}
				>
					<ArrowForwardIosRoundedIcon fontSize="large" />
				</button>
			</div>
		</div>
	);
};
export default Gallery;
