import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
	Typography,
	Link,
	Card,
	CardContent,
	TextField,
	Button,
} from "@material-ui/core";
import { get, formatDuration, formatDate } from "../utils/utils";
import styled from "styled-components";
import Spacer from "../components/Spacer";
import { default as SpotifyLogo } from "../assets/spotify_logo.png";
import StarRating from "../components/StarRating";
import TopicChips from "../components/TopicChips";
import MockReviews from "../components/MockReviews"
import DescriptionPreview from "../components/DescriptionPreview";

const DESCRIPTION_PREVIEW_LENGTH = 300;

const MOCK_EPISODE = {
	"id": 1,
	"name": "Episode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: BananasEpisode 1: Bananas",
	"description": "Bananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoesBananas, potatoes, and tomatoes",
	"spotify_url": "https://open.spotify.com/track/4t9cpYT8AD3G2TGwSRQVDK?si=O6PMpFCSQ7y10gqhkPH1ow",
	"release_date": "2021-01-09T08:09:55Z",
	"duration_ms": 60000,
	"show": {
			"name": "Minion Madness",
			"publisher": "Brittany",
			"image_url": "https://upload.wikimedia.org/wikipedia/en/7/7d/Minions_characters.png"
	},
	"topics": [
		"sustainability",
		"entertainment",
		"worker's rights"
],
"reviews": [
		{
				"user": "milo",
				"rating": 5,
				"comment": "woof",
				"created_at": "2021-01-09T21:32:19.378593Z"
		}
]
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
`;

const LeftContent = styled.div`
	width: 300px;
	height: 100%;
	padding: 48px;
`
const RightContent = styled.div`
	width: 70%;
	height: 100%;
	padding: 48px 48px 48px 0px;
`

const DetailsContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

const ListenOnSpotify = styled.div`
	border-radius: 12px;
	background-color: #1DB954;
	width: 242px;
	height: 80px;
	padding: 8px;
	box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
	&:hover {
		cursor: pointer;
	}
`

const Episode = () => {
	const { id } = useParams();
	const {
		name,
		description,
		spotify_url,
		release_date,
		duration_ms,
		show,
		topics
	} = MOCK_EPISODE;
	const [episode, setEpisode] = useState();

	const EPISODE_INSTANCE_URL = `episodes/${id}`;
	console.log(EPISODE_INSTANCE_URL);

	const fetchEpisode = async () => {
		const data = await get(EPISODE_INSTANCE_URL);
		console.log(data);
		setEpisode(data);
	}

	// get info about the episode
	useEffect(() => {
		fetchEpisode();
	}, [EPISODE_INSTANCE_URL]);

	if(!episode){
		return null;
	}

	return (
		<Container>
			<LeftContent>
				<Card style={{padding: "12px"}}>
					<img
						src={episode.show.image_url}
						style={{
							height: "auto",
							width: "80%",
							objectFit: "contain"
						}}>
					</img>
					<CardContent>
						<Link target="_blank" href={episode.spotify_url}>
							<ListenOnSpotify>
								<Typography variant="p" color="textSecondary">Listen on</Typography>
								<img src={SpotifyLogo} style={{height: "70%"}}/>
							</ListenOnSpotify>
						</Link>
						<Spacer height={24}/>
						<Typography variant="h5" align="left">Write a Review</Typography>
						<StarRating/>
						<TextField
							variant="outlined"
							multiline
							rows={4}
							rowsMax={4}
							label="Comment"
							placeholder="Write a comment..."
							fullWidth
							name="Comment"
						/>
						<Spacer height={12}/>
						<Button
							variant="contained"
							color="secondary"
							style={{float: "right"}}
						>
							Submit
						</Button>
						<Spacer height={24}/>
					</CardContent>
				</Card>
			</LeftContent>
			<RightContent>
				<Card style={{padding: "48px", paddingBottom: "12px"}}>
					<Typography variant="h4" align="left" noWrap>{episode.name}</Typography>
						<Spacer height={12}/>
						<TopicChips topics={episode.topics}/>
						<Spacer height={12}/>
						<Typography variant="h5" align="left">{episode.show.name}</Typography>
						<Spacer height={12}/>
						<DetailsContainer>
							<Typography variant="body1" align="left">By: {episode.show.publisher}</Typography>
							<Typography variant="body1" align="left">{formatDate(episode.release_date)}</Typography>
							<Typography variant="body1" align="left">{formatDuration(episode.duration_ms)}</Typography>
						</DetailsContainer>
					<DescriptionPreview description={episode.description} maxChars={DESCRIPTION_PREVIEW_LENGTH}/>
				</Card>
				<Spacer height={24}/>
				<Card style={{
					padding: "48px",
				}}>
					<Typography variant="h4" align="left">Community Reviews</Typography>
					<MockReviews/>
				</Card>
			</RightContent>
		</Container>
	)
}

export default Episode