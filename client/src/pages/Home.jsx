import React, { useEffect, useState } from "react";
import {
	Typography,
	CircularProgress
} from "@material-ui/core";
import styled from "styled-components";
import Spacer from "../components/Spacer";
import EpisodeCarousel from "../components/EpisodeCarousel";
import { get, getEpisodes } from "../utils/utils";

const Container = styled.div`
	padding: 12px 60px;
`

const Home = () => {
	const [favouriteEpisodes, setFavouriteEpisodes] = useState([]);
	const [trendingEpisodes, setTrendingEpisodes] = useState([]);

	useEffect(() => {
		fetchFavouriteEpisodes();
		fetchTrendingEpisodes();
	}, []);

	const fetchFavouriteEpisodes = async () => {
		const data = await get("topics/favourites");
		const trendingFavouriteEpisodes = getEpisodes(data);
		setFavouriteEpisodes(trendingFavouriteEpisodes);
	};

	const fetchTrendingEpisodes = async () => {
		const data = await get("topics/trending");
		const trendingTopicEpisodes = getEpisodes(data);
		setTrendingEpisodes(trendingTopicEpisodes);
	};

	if(!favouriteEpisodes || !trendingEpisodes){
		return (<Container>
			<CircularProgress/>
		</Container>);
	}

	return (
		<>
			{trendingEpisodes && favouriteEpisodes && <Container>
				<Spacer height={40}/>
				<Typography variant="h4">
					Hey, Brittany! Let's find something to listen to.
				</Typography>
				<Spacer height={40}/>
				<Typography variant="h5" align="left" style={{ marginLeft: 32 }}><b>Catches of the Day</b></Typography>
				<EpisodeCarousel episodes={trendingEpisodes} cols={4.5}/>
				<Typography variant="h5" align="left" style={{ marginLeft: 32 }}><b>Your Picks</b></Typography>
				<EpisodeCarousel episodes={favouriteEpisodes} cols={4.5}/>
			</Container>}
		</>
	);
}

export default Home;