export const get = async (apiUrl) => {
    const REACT_APP_API_URL = "http://cast-and-curious-api.herokuapp.com/api";
    const url = `${REACT_APP_API_URL}/${apiUrl}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export const formatDuration = (time) => time ? `${Math.ceil(time/(1000*60))} mins` : "";

export const formatDate = (date) => date ? date.slice(0, 10) : "";

export const getTrendingTopicEpisodes = (topics) => {
	if(!topics){
		return [];
	}

	let trendingTopicEpisodes = [];
	for(let i = 1; i < 7; i++){
		const topic_index = i % topics.length;
		const episode_index = Math.ceil(i/topics.length) - 1;
		const topic = topics[topic_index]
		const { episodes, name } = topic;
		const episodeData = episodes[episode_index];
		const episode = { ...episodeData, topic: name };
		trendingTopicEpisodes.push(episode);
	}

	return trendingTopicEpisodes;
}