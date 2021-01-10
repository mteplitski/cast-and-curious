import React from "react";
import {
	Typography,
	Card,
	CardMedia,
	CardContent,
} from "@material-ui/core";
import styled from "styled-components";
import Spacer from "../components/Spacer";
import { default as SpotifyLogo } from "../assets/spotify_logo.png";
import StarRating from "../components/StarRating";
import TopicChips from "../components/TopicChips";
import { Link } from "react-router-dom";


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
	},
	"topic": "civil rights"
}

const EpisodeCard = ({ episode }) => {
	const {
		name,
		description,
		spotify_url,
		release_date,
		duration_ms,
		show,
		topic
	} = episode;
	console.log(episode);

	return (
		<Card style={{padding: "8px", width: "250px", paddingBottom: "8px"}}>
			<CardMedia image={show.image_url} style={{height: "80px", width: "auto"}}/>
			<CardContent style={{textAlign: "left"}}>
				<Link to="episode/1" style={{textAlign: "left"}}>
					<Typography variant="body1"><b>{name}</b></Typography>
				</Link>
				<TopicChips topics={[topic]} align="left"/>
				<Typography variant="body1">{description}</Typography>
			</CardContent>
		</Card>
	)
}

export default EpisodeCard