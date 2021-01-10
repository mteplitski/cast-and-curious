import React, { useState } from "react";
import {
	Typography,
	Card,
	CardMedia,
	CardContent,
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

	const [elevation, setElevation] = useState(1)

	return (
		<Link
			to={`episode/${id}`}
			onMouseEnter={() => setElevation(10)}
			onMouseLeave={() => setElevation(1)}
		>
			<Card
				style={{
					padding: "24px",
					width: "90%",
					paddingBottom: "8px",
					display: "flex"
				}}
				elevation={elevation}
			>
				<img
					src={show.image_url}
					style={{
						height: "auto",
						width: "20%",
						objectFit: "contain"
					}}>
				</img>
				<CardContent style={{width: "80%"}}>
					<Typography variant="h4" align="left" noWrap>{name}</Typography>
						<Spacer height={12}/>
						{topics && <TopicChips topics={topics}/>}
						<Spacer height={12}/>
						<Typography variant="h5" align="left">{show.name}</Typography>
						<Spacer height={12}/>
						<DetailsContainer>
							<Typography variant="body1" align="left">By: {show.publisher}</Typography>
							<Typography variant="body1" align="left">{formatDate(release_date)}</Typography>
							<Typography variant="body1" align="left">{formatDuration(duration_ms)}</Typography>
						</DetailsContainer>
						<Spacer height={24}/>
					<Description description={description} maxChars={300} hideButton/>
				</CardContent>
			</Card>
		</Link>
	)
}

export default EpisodeDetailCard;