import { Link } from "react-router-dom";
import ZoomOutMapRoundedIcon from "@mui/icons-material/ZoomOutMapRounded";
import ZoomInMapRoundedIcon from "@mui/icons-material/ZoomInMapRounded";
import { useSelector } from "react-redux";
import classes from "./NavBar.module.css";

const NavBar = () => {
	const index = useSelector((state) => state?.fetch?.index);
	return (
		<nav className={classes.nav}>
			<Link
				to={`/zoom/${index}`}
				type="button"
				className={classes.button}
			>
				CLICK TO ZOOM
				<ZoomOutMapRoundedIcon fontSize="small" />
			</Link>
			<Link to="/home" type="button" className={classes.button}>
				CLICK TO GO BACK
				<ZoomInMapRoundedIcon fontSize="small" />
			</Link>
		</nav>
	);
};
export default NavBar;
