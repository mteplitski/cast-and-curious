import React, { useState } from "react";
import {
	Typography,
	Card,
	CardContent,
	CardMedia,
	CircularProgress,
} from "@material-ui/core";
import styled from "styled-components";
import Spacer from "../components/Spacer";
import TopicChips from "./TopicChips";
import { Link } from "react-router-dom";

const EpisodeCard = ({ episode, index }) => {
	const {
		name,
		description,
		show,
		topic,
		id
	} = episode;

	const [elevation, setElevation] = useState(1);

	if(!episode){
		return <CircularProgress/>;
	}

	const descriptionPreview = description && description.length > 88 ? `${description.slice(0, 88)}...` : description;

	return (
			<Card
				style={{
					height: 480,
					width: 280,
					margin: 32,
					marginTop: 16,
					border: "1px solid rgba(0, 0, 0, 5%)",
				}}
				elevation={elevation}
			>
				<Link
					to={`episode/${id}`}
					onMouseEnter={() => setElevation(10)}
					onMouseLeave={() => setElevation(1)}
				>
					<CardMedia
						image={show.image_url}
						style={{ height: 280 }}
					/>
					<CardContent style={{ textAlign: "left", padding: 16 }}>
						<Typography variant="body1"><b>{name.length > 48 ? name.slice(0, 48) + '...' : name}</b></Typography>
						<Spacer height={8}/>
						<TopicChips topics={[topic]} align="left" index={index}/>
						<Spacer height={8}/>
						<Typography variant="body1">{descriptionPreview}</Typography>
					</CardContent>
				</Link>
			</Card>
	);
};

export default EpisodeCard;