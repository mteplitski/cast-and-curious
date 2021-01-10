import React from "react";
import EpisodeCard from "../components/EpisodeCard";
import {
	GridList,
	GridListTile,
	Typography
} from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';

const Container = styled.div`
	padding: 48px;
`

const MOCK_EPISODES = [
	{
		"id": 1,
		"name": "Episode 1: Bananas",
		"description": "Bananas, potatoes, and tomatoes",
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
		"name": "Episode 1: Bananas",
		"description": "Bananas, potatoes, and tomatoes",
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
		"name": "Episode 1: Bananas",
		"description": "Bananas, potatoes, and tomatoes",
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
		"name": "Episode 1: Bananas",
		"description": "Bananas, potatoes, and tomatoes",
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
		"name": "Episode 1: Bananas",
		"description": "Bananas, potatoes, and tomatoes",
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
		"name": "Episode 1: Bananas",
		"description": "Bananas, potatoes, and tomatoes",
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
		width: "100%",
		height: "100%"
  },
  gridList: {
    flexWrap: 'nowrap',
		transform: 'translateZ(0)',
		height: "100%",
		width: "100%"
	},
}));

const Home = () => {
	// const token_info = window.location.href.split('access_token=')[1]; // token info from URL params
	// const token = token_info.split('&token_type=')[0] // token
	// console.log(token);

	const trendingEpisodes = MOCK_EPISODES;
	const classes = useStyles();

	return (
		<Container>
			<Typography heading="h3" align="left">Trending This Week</Typography>
			<div className={classes.root}>
				<GridList cols={4} className={classes.gridList}>
					{trendingEpisodes.map((episode) => (
						<GridListTile key={episode.id} style={{height: "100%"}}>
							<EpisodeCard episode={episode}/>
						</GridListTile>
					))}
				</GridList>
			</div>
			<Typography>Your Topics</Typography>
			<div className={classes.root}>
				<GridList cols={4} className={classes.gridList}>
					{trendingEpisodes.map((episode) => (
						<GridListTile key={episode.id} style={{height: "100%"}}>
							<EpisodeCard episode={episode}/>
						</GridListTile>
					))}
				</GridList>
			</div>
		</Container>
	);
}

export default Home