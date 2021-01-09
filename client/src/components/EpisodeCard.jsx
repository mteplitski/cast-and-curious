import react from "react";
import styled from "styled-components";
import { Typography, Card } from "@material-ui/core";

const MOCK_EPISODE = {
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
	}
}

const Container = styled.div`
	padding: 24px;
	width: 100%;
	display: flex;
	flex-direction: row;
	border: 1px solid black;
`

const Image = styled.img`
	width: 80px;
	height: auto;
`

const EpisodeCard = () => {
	const {
		name,
		description,
		spotify_url,
		release_date,
		duration_ms,
		show
	} = MOCK_EPISODE;

	return (
		<Container>
			<Image src={spotify_url}/>
			<Card>
				<Typography variant="h3">{name}</Typography>
			</Card>
		</Container>
	)
}

export default EpisodeCard