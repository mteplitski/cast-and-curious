import React, { useEffect, useState } from "react";
import {
	Typography
} from "@material-ui/core";
import styled from "styled-components";
import Spacer from "../components/Spacer";
import EpisodeDetailCard from "../components/EpisodeDetailCard";
import { get } from "../utils/utils";

const Container = styled.div`
	padding: 60px;
	max-width: 960px;
	margin-left: auto;
	margin-right: auto;
`;

const TopicContainer = styled.div`
	margin-bottom: 24px;
`;

const MyTopics = () => {;
	const [topics, setTopics] = useState([]);

	const fetchTrendingEpisodes = async () => {
		const data = await get("topics/favourites");
		setTopics(data);
	};

	useEffect(() => {
		fetchTrendingEpisodes();
	});

	return (
		<Container>
			<Typography variant="h4" align="left">My topics</Typography>
			{topics.map((topic) => (
				<TopicContainer>
					<Spacer height={32}/>
					<Typography variant="h5" align="left">{topic.name}</Typography>
					{topic.episodes.map((episode) => (
						<>
							<EpisodeDetailCard episode={episode}/>
						</>
					))}
				</TopicContainer>
			))}
		</Container>
	);
}

export default MyTopics;