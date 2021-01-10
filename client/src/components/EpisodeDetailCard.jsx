import React, { useState } from "react";
import {
	Typography,
	Card,
	CardContent,
	CardMedia,
} from "@material-ui/core";
import styled from "styled-components";
import TopicChips from "../components/TopicChips";
import { Link } from "react-router-dom";
import { formatDuration, formatDate } from "../utils/utils";
import Spacer from "../components/Spacer";
import Description from "../components/DescriptionPreview";

const DetailsContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

const EpisodeDetailCard = ({ episode, topics }) => {
	const {
		name,
		description,
		show,
		id,
		release_date,
		duration_ms,
	} = episode;

	const [elevation, setElevation] = useState(1);

	return (
		<Link
			to={`episode/${id}`}
			onMouseEnter={() => setElevation(10)}
			onMouseLeave={() => setElevation(1)}
		>
			<Card
				style={{
					display: "flex",
					marginTop: 16,
					height: 200
				}}
				elevation={elevation}
			>
				<CardMedia
					image={show.image_url}
					style={{
						height: 200,
						width: 200,
					}}
				/>
				<CardContent style={{display: "flex", flexDirection: "column", flex: "1", margin: "0 16px"}}>
					<Typography variant="h6" align="left" noWrap>{name.length > 60 ? name.slice(0, 60) + '...' : name}</Typography>
					<Typography variant="subtitle1" align="left">{show.name}</Typography>
					<DetailsContainer>
						<Typography variant="body2" align="left">{show.publisher}</Typography>
						<Typography variant="body2" align="left">{formatDate(release_date)}</Typography>
						<Typography variant="body2" align="left">{formatDuration(duration_ms)}</Typography>
					</DetailsContainer>
					<Spacer height={16}/>
					<Description description={description} maxChars={240} hideButton/>
				</CardContent>
			</Card>
		</Link>
	);
};

export default EpisodeDetailCard;