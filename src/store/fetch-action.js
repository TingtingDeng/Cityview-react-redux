import axios from "axios";
import { fetchActions } from "./fetch-slice";
import { accessKey, basicUrl } from "./Consts";

export const fetchDataAPI = (keyword, currentPage) => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await axios.get(basicUrl, {
				params: {
					query: keyword,
					page: currentPage,
					orientation: "landscape",
				},
				headers: {
					Authorization: `Client-ID ${accessKey}`,
				},
			});
			let {
				data: { results, total_pages },
			} = response;
			let responseData = results.map((item) => ({
				id: item.id,
				des: item.alt_description,
				regular: item.urls.regular,
				thumb: item.urls.thumb,
				totalPage: total_pages,
			}));
			return responseData;
		};
		const imageData = await fetchData();
		dispatch(fetchActions.updateTotalPage(imageData[0].totalPage));
		dispatch(fetchActions.updateImages(imageData));
	};
};
