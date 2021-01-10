import React, { useEffect, useState } from "react";
import {
	Typography,
	CircularProgress
} from "@material-ui/core";
import styled from "styled-components";
import Spacer from "../components/Spacer";
import EpisodeCarousel from "../components/EpisodeCarousel";
import { get, getTrendingTopicEpisodes } from "../utils/utils";

const Container = styled.div`
	padding: 12px 48px;
	height: 370px;
`

const MOCK_EPISODES = [
	{
		"id": 1,
		"name": "Episode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: Bananas",
		"description": "Bananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoes",
		"spotify_url": "https://open.spotify.com/track/4t9cpYT8AD3G2TGwSRQVDK?si=O6PMpFCSQ7y10gqhkPH1ow",
		"release_date": "2021-01-09T08:09:55Z",
		"duration_ms": 60000,
		"show": {
				"name": "Minion Madness",
				"publisher": "Brittany",
				"image_url": "https://upload.wikimedia.org/wikipedia/en/7/7d/Minions_characters.png"
		},
		"topic": "civil rights"
	},
	{
		"id": 1,
		"name": "Episode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: Bananas",
		"description": "Bananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoes",
		"spotify_url": "https://open.spotify.com/track/4t9cpYT8AD3G2TGwSRQVDK?si=O6PMpFCSQ7y10gqhkPH1ow",
		"release_date": "2021-01-09T08:09:55Z",
		"duration_ms": 60000,
		"show": {
				"name": "Minion Madness",
				"publisher": "Brittany",
				"image_url": "https://upload.wikimedia.org/wikipedia/en/7/7d/Minions_characters.png"
		},
		"topic": "civil rights"
	},
	{
		"id": 1,
		"name": "Episode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: Bananas",
		"description": "Bananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoes",
		"spotify_url": "https://open.spotify.com/track/4t9cpYT8AD3G2TGwSRQVDK?si=O6PMpFCSQ7y10gqhkPH1ow",
		"release_date": "2021-01-09T08:09:55Z",
		"duration_ms": 60000,
		"show": {
				"name": "Minion Madness",
				"publisher": "Brittany",
				"image_url": "https://upload.wikimedia.org/wikipedia/en/7/7d/Minions_characters.png"
		},
		"topic": "civil rights"
	},
	{
		"id": 1,
		"name": "Episode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: Bananas",
		"description": "Bananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoes",
		"spotify_url": "https://open.spotify.com/track/4t9cpYT8AD3G2TGwSRQVDK?si=O6PMpFCSQ7y10gqhkPH1ow",
		"release_date": "2021-01-09T08:09:55Z",
		"duration_ms": 60000,
		"show": {
				"name": "Minion Madness",
				"publisher": "Brittany",
				"image_url": "https://upload.wikimedia.org/wikipedia/en/7/7d/Minions_characters.png"
		},
		"topic": "civil rights"
	},
	{
		"id": 1,
		"name": "Episode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: Bananas",
		"description": "Bananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoes",
		"spotify_url": "https://open.spotify.com/track/4t9cpYT8AD3G2TGwSRQVDK?si=O6PMpFCSQ7y10gqhkPH1ow",
		"release_date": "2021-01-09T08:09:55Z",
		"duration_ms": 60000,
		"show": {
				"name": "Minion Madness",
				"publisher": "Brittany",
				"image_url": "https://upload.wikimedia.org/wikipedia/en/7/7d/Minions_characters.png"
		},
		"topic": "civil rights"
	},
	{
		"id": 1,
		"name": "Episode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: Bananas",
		"description": "Bananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoes",
		"spotify_url": "https://open.spotify.com/track/4t9cpYT8AD3G2TGwSRQVDK?si=O6PMpFCSQ7y10gqhkPH1ow",
		"release_date": "2021-01-09T08:09:55Z",
		"duration_ms": 60000,
		"show": {
				"name": "Minion Madness",
				"publisher": "Brittany",
				"image_url": "https://upload.wikimedia.org/wikipedia/en/7/7d/Minions_characters.png"
		},
		"topic": "civil rights"
	},
]

const Home = () => {
	// const token_info = window.location.href.split('access_token=')[1]; // token info from URL params
	// const token = token_info.split('&token_type=')[0] // token
	// console.log(token);
	const [trendingEpisodes, setTrendingEpisodes] = useState([]);
	const [trendingTopics, setTrendingTopics] = useState([]);

	const fetchTrendingEpisodes = async () => {
		const data = await get("topics/favourites");
		const trendingFavouriteEpisodes = getTrendingTopicEpisodes(data);
		setTrendingEpisodes(trendingFavouriteEpisodes);
	}

	const fetchTrendingTopics = async () => {
		const data = await get("topics/trending");
		const trendingTopicEpisodes = getTrendingTopicEpisodes(data);
		setTrendingTopics(trendingTopicEpisodes);
	}

	useEffect(() => {
		fetchTrendingEpisodes();
		fetchTrendingTopics();
	}, [])

	if(!trendingEpisodes || !trendingTopics){
		return (<Container>
			<CircularProgress/>
		</Container>);
	}

	return (
		<>
			{trendingTopics && trendingEpisodes && <Container>
				<Typography variant="h4">
					Hey, Brittany! How's it going?
				</Typography>
				<Typography variant="h5" align="left"><b>Catches of the Day</b></Typography>
				<EpisodeCarousel episodes={trendingTopics} cols={4.5}/>
				<Spacer height={12}/>
				<Typography variant="h5" align="left"><b>Your Picks</b></Typography>
				<EpisodeCarousel episodes={trendingEpisodes} cols={4.5}/>
			</Container>}
		</>
	);
}

export default Home