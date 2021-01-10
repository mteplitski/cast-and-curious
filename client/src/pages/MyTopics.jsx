import React, { useEffect, useState } from "react";
import {
	Typography
} from "@material-ui/core";
import styled from "styled-components";
import Spacer from "../components/Spacer";
import EpisodeDetailCard from "../components/EpisodeDetailCard";
import { get } from "../utils/utils";

const MOCK_TOPICS = [
	{
		"name": "sustainability",
		"episodes": [
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
				}
			]
	},
	{
		"name": "sustainability",
		"episodes": [
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
				}
			]
	},
];

const Container = styled.div`
	display: flex;
	padding: 48px;
	justify-content: space-between;
`;

const Column = styled.div`
	width: 50%;
	margin-right: 12px;
`

const TopicContainer = styled.div`
	margin-bottom: 24px;
`;

const MyTopics = () => {;
	const [midpoint, setMidpoint] = useState();
	const [topics, setTopics] = useState([]);

	const fetchTrendingEpisodes = async () => {
		const data = await get("topics/favourites");
		setTopics(data);
		const midpoint = Math.ceil(topics.length / 2);
		setMidpoint(midpoint);
	};

	useEffect(() => {
		fetchTrendingEpisodes();
	});

	return (
		<Container>
			<Column>
				{topics.slice(0, midpoint).map((topic) => (
					<TopicContainer>
						<Typography variant="h4" align="left">{topic.name}</Typography>
						{topic.episodes.map((episode) => (
							<>
								<EpisodeDetailCard episode={episode}/>
								<Spacer height={12}/>
							</>
						))}
					</TopicContainer>
				))}
			</Column>
			<Column>
				{topics.slice(midpoint).map((topic) => (
					<TopicContainer>
						<Typography variant="h4" align="left">{topic.name}</Typography>
						{topic.episodes.map((episode) => (
							<>
								<EpisodeDetailCard episode={episode}/>
								<Spacer height={12}/>
							</>
						))}
					</TopicContainer>
				))}
			</Column>
		</Container>
	);
}

export default MyTopics;