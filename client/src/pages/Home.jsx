import React from "react";
import EpisodeCard from "../components/EpisodeCard";

const Home = () => {
	// const token_info = window.location.href.split('access_token=')[1]; // token info from URL params
	// const token = token_info.split('&token_type=')[0] // token
	// console.log(token);

    return (
			<div>
				<h1>Home</h1>
				<EpisodeCard/>
			</div>
    )
}

export default Home