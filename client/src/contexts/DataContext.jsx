// import React, {
// 	createContext,
// 	useContext,
// 	useMemo,
// 	useCallback,
// 	useEffect,
// } from "react";
// import { get } from "../utils/utils";

// // provides formatted data to different pages of the app;

// const DEFAULT_STATE = {
// 	home: {
// 		catchesOfTheDay: null,
// 		yourPicks: null,
// 	},
// 	myTopics: null,
// 	trendingTopics: null,
// 	loading: true
// }

// const DataContext = createContext(DEFAULT_STATE);
// DataContext.displayName = "DataContext";

// export const useDataContext = () => useContext(DataContext);

// export const DataProvider = ({ children }) => {

// 	const fetchTrendingEpisodes = async () => {
// 		const data = await get("trending/episodes");
// 		setTrendingEpisodes(data);
// 	}

// 	const fetchTrendingTopics = async () => {
// 		const data = await get("trending/topics");
// 		// setTrendingTopics(data);
// 	}

// 	useEffect(() => {
// 		fetchTrendingEpisodes();
// 		fetchTrendingTopics();
// 	}, [])

// 	return (
// 		<DataContext.Provider value={DEFAULT_STATE}>
// 			{children}
// 		</DataContext.Provider>
// 	)
// }

// export default DataProvider;