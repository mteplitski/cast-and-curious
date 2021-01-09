import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Link, Checkbox } from "@material-ui/core";
import { get, formatDuration, formatDate } from "../utils/utils";
import styled from "styled-components";
import Spacer from "../components/Spacer";
import { default as SpotifyLogo } from "../assets/spotify_logo.png";

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
	display: flex;
	flex-direction: row;
`;

const ImageContainer = styled.div`
	width: 250px;
	height: 250px;
	display: flex;
	align-items: center;
	border: 1px solid black;
`;

const Image = styled.img`
	display: block;
	margin: auto;
	width: 100%;
	height: auto;
`

const LeftContent = styled.div`
	width: 250px;
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
	&:hover {
		cursor: pointer;
	}
`

const RatingContainer = styled.div`
	border: 1px solid black;
	display: block;
  margin: auto;
  padding: 12px;
`

const Episode = () => {
	const { id } = useParams();
	const {
		name,
		description,
		spotify_url,
		release_date,
		duration_ms,
		show
	} = MOCK_EPISODE;

	const EPISODE_INSTANCE_URL = `episodes/${id}`;
	console.log(EPISODE_INSTANCE_URL);

	// get info about the episode
	useEffect(() => {
		get(EPISODE_INSTANCE_URL);
	}, [EPISODE_INSTANCE_URL]);

	return (
		<Container>
			<LeftContent>
				<ImageContainer>
					<Image src={show.image_url}/>
				</ImageContainer>
				<Spacer height={24}/>
				<Link target="_blank" href={spotify_url}>
					<ListenOnSpotify>
						<Typography variant="p" color="textSecondary">Listen on</Typography>
						<img src={SpotifyLogo} style={{height: "70%"}}/>
					</ListenOnSpotify>
				</Link>
				<Spacer height={24}/>
				<RatingContainer>
					<div>
      			<Checkbox
							inputProps={{ 'aria-label': 'primary checkbox' }}
						/>
						<Typography variant="p">Mark as listened to</Typography>
					</div>
				</RatingContainer>
			</LeftContent>
			<RightContent>
				<Typography variant="h4" align="left">{name}</Typography>
				<Spacer height={12}/>
				<Typography variant="h5" align="left">{show.name}</Typography>
				<Spacer height={12}/>
				<DetailsContainer>
					<Typography variant="body1" align="left">By: {show.publisher}</Typography>
					<Typography variant="body1" align="left">{formatDate(release_date)}</Typography>
					<Typography variant="body1" align="left">{formatDuration(duration_ms)}</Typography>
				</DetailsContainer>
				<Spacer height={12}/>
				<Typography variant="body1" align="left">{description}</Typography>
			</RightContent>
		</Container>
	)
}

export default Episode