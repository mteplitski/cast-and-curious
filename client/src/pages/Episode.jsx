import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const Episode = () => {
	const { id } = useParams();
	const { REACT_APP_API_URL } = process.env;

	const EPISODE_INSTANCE_URL = `${REACT_APP_API_URL}/episodes/${id}`;
	console.log(EPISODE_INSTANCE_URL);

	// get info about the episode
	useEffect(() => {
		const fetchEpisode = async () => {
			const res = await axios(
				{
					headers: {
						"access-control-allow-origin": "*",
						"access-control-allow-methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
						"access-control-allow-headers": "Origin, Content-Type, X-Auth-Token",
						"content-type": "application/json",
					},
					url: EPISODE_INSTANCE_URL,
					method: 'GET'
				}
			);
			console.log(res);
		}
		fetchEpisode();
	}, [EPISODE_INSTANCE_URL]);

	return (
		<div>
			<h1>Episode {id}</h1>
		</div>
	)
}

export default Episode