import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAPI } from "../store/fetch-action";
import { fetchActions } from "../store/fetch-slice";

import Button from "../UI/Button";

import classes from "./Search.module.css";

const Search = () => {
	const dispatch = useDispatch();
	const keywordInputRef = useRef();
	const keyword = useSelector((state) => state.fetch.keyword);
	const currentPage = useSelector((state) => state.fetch.currentPage);

	const inputKeywordHandler = (event) => {
		let newKeyword = event.target.value.trim().toLowerCase();
		newKeyword &&
			event.key === "Enter" &&
			newKeyword !== keyword &&
			dispatch(fetchActions.keywordSearch(newKeyword));
	};

	const keywordSubmitHandler = (event) => {
		event.preventDefault();
		const enteredKeyword = keywordInputRef.current.value || keyword;
		if (enteredKeyword.trim().length === 0 || enteredKeyword === keyword) {
			return;
		}
		dispatch(fetchDataAPI(enteredKeyword));
	};

	useEffect(() => {
		dispatch(fetchDataAPI(keyword, currentPage));
	}, [keyword, dispatch, currentPage]);

	return (
		<form onSubmit={keywordSubmitHandler}>
			<div className={classes.searchBar}>
				<input
					ref={keywordInputRef}
					onKeyDown={inputKeywordHandler}
					className={classes.inputSearch}
					type="text"
					placeholder="Enter keyword to search"
				/>
				<Button type="submit">Search</Button>
			</div>
		</form>
	);
};
export default Search;
