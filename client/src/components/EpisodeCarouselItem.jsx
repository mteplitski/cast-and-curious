import React, { useState } from "react";
import {
	Typography,
	Card,
	CardMedia,
	CardContent,
	CircularProgress,
} from "@material-ui/core";
import styled from "styled-components";
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

	const descriptionPreview = description && description.length > 62 ? `${description.slice(0, 62)}...` : description;

	return (
			<Card
				style={{
					padding: "8px",
					width: "250px",
					paddingBottom: "8px",
					border: "1px solid lightgrey"
					// textAlign:"center"
				}}
				elevation={elevation}
			>
				<Link
					to={`episode/${id}`}
					onMouseEnter={() => setElevation(10)}
					onMouseLeave={() => setElevation(1)}
				>
					<img
						src={show.image_url}
						style={{
							height: "auto",
							width: "180px",
							objectFit: "contain",
						}}
					/>
					<CardContent style={{textAlign: "left"}}>
						<Typography variant="body1" noWrap><b>{name}</b></Typography>
						<TopicChips topics={[topic]} align="left" index={index}/>
						<Typography variant="body1">{descriptionPreview}</Typography>
					</CardContent>
				</Link>
			</Card>
	);
};

export default EpisodeCard;