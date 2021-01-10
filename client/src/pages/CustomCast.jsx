import React, { useState } from "react";
import { Typography, TextField, Paper } from "@material-ui/core";
import styled from "styled-components";
import Spacer from "../components/Spacer";
import EpisodeDetailCard from "../components/EpisodeDetailCard";

const Container = styled.div`
	padding: 60px;
	max-width: 960px;
	margin-left: auto;
	margin-right: auto;
`;

const InputContainer = styled(Paper)`
  width: 70%;
  // border: 1px solid black;
  display: block;
  margin: auto;
  padding: 24px;
  text-align: center;
`

const FileUploadMock = styled.div`
  background-color: #22B8D8;
  height: 48px;
  border-radius: 12px;
  vertical-align: middle;
  line-height: 48px;
  color: white;
`
const EPISODES = [
  {
    "id": 1,
    "name": "The History of Paper",
    "description": "Before paper, we had papyrus - made from reeds in Egypt, or parchment - made from the skin of various animals. And then China invented paper in order to collect Buddhist texts. From there, over the next two centuries, the use of paper moved through Central Asia used by merchants, government and commerce. But, how did we get from Ancient Egyptian scrolls to modern-day office paper? Jonathan Bloom is the now-retired Norma Jean Calderwood University Professor of Islamic and Asian Art at Boston College. He is also the soon-to-be retired Hamid Bin Khalifa Endowed Chair of Islamic Art at Virginia Commonwealth University. Sheila Blair is the Norma Jean Calderwood University Professor of Islamic and Asian Art at Boston College Emerita, as well as the soon-to-be retired Hamid Bin Khalifa Endowed Chair of Islamic Art at Virginia Commonwealth University. Between them, they have explored how paper spread around the world, transporting ideas and information. Episode recorded: March 12, 2019. Interviewer: Dr Andi Horvath. Producer and editor: Chris Hatzis. Co-producers: Silvi Vann-Wall and Dr Andi Horvath. Banner: Getty Images.",
    "spotify_url": "https://open.spotify.com/episode/7DhQVEcpG6kcprzTzY5HmV?si=6Ip6X3L4Rzu3mbcsVdgGCQ",
    "release_date": "2021-01-09T08:09:55Z",
    "duration_ms": 60000,
    "show": {
        "name": "Eavesdrop on Experts",
        "publisher": "University of Melbourne",
        "image_url": "https://i.picsum.photos/id/479/200/200.jpg?hmac=VH6eGzugyQKHVUXvN1fcPAfAN5PbTkE8Tf22vb6JuG8"
    },
  },
  {
    "id": 1,
    "name": "Managing Circular Supply Chains with Adrian Segens",
    "description": "Today I’m talking with Adrien Segens about supply chain management and managing material risks. In this episode you will hear why having a better understanding of where our products come from and where they end up can help us create a more circular economy. We talk about different ways technology can play in enabling supply...",
    "spotify_url": "https://open.spotify.com/episode/5X6VkCuRLKl2hhLhbgFCoL?si=p1fHtpE4Tru0zXOZ_P-o9w",
    "release_date": "2021-01-09T08:09:55Z",
    "duration_ms": 60000,
    "show": {
        "name": "Bananas, potatoes, and tomatoes",
        "publisher": "Katherine Whalen",
        "image_url": "https://i.picsum.photos/id/479/200/200.jpg?hmac=VH6eGzugyQKHVUXvN1fcPAfAN5PbTkE8Tf22vb6JuG8"
    },
  },
  {
    "id": 1,
    "name": "Rethinking Packaging and Circular Business with Rowan Drury",
    "description": "Hi and welcome to Getting in the Loop. I’m Katie and today I’m talking with Rowan Drury of Sweden’s first plastic package-free shop, Gram.Rowan Drury founded Sweden’s first plastic package-free shop Gram in 2016 after searching for a more sustainable way to buy food. At GRAM Everything is sold loose and by weight. Shoppers are e...",
    "spotify_url": "https://open.spotify.com/episode/6X4tJ6oWwvvYQUXkQ5iJzs?si=xrzZTFQXQM6pzzaw1c9hHg",
    "release_date": "2021-01-09T08:09:55Z",
    "duration_ms": 60000,
    "show": {
        "name": "Getting In the Loop: Circular Economy | Sustainability | Closing the Loop",
        "publisher": "Katherine Whalen",
        "image_url": "https://i.picsum.photos/id/479/200/200.jpg?hmac=VH6eGzugyQKHVUXvN1fcPAfAN5PbTkE8Tf22vb6JuG8"
    },
  },
  {
    "id": 1,
    "name": "Shortfalls in our current system of Linear Economy",
    "description": "Most of the world around us today operates on linear economy i.e. it operates on a principle of 'Take-Make-Use-Dispose'. Think about it again, do you observe an anomaly in this system? I'm sure you are aware that wastefulness is a practice only amongst the human species. So let's understand how our economies operate today, and b",
    "spotify_url": "https://open.spotify.com/episode/7I34t2yB90XdbXbFC3YVcL?si=lPugQ3RlTDCxCsQZbqYGOg",
    "release_date": "2021-01-09T08:09:55Z",
    "duration_ms": 60000,
    "show": {
        "name": "Circular Business Podcast-India",
        "publisher": "Sreepriya Sridharan",
        "image_url": "https://i.picsum.photos/id/479/200/200.jpg?hmac=VH6eGzugyQKHVUXvN1fcPAfAN5PbTkE8Tf22vb6JuG8"
    },
  }
]

const CustomCast = () => {
  const [showResults, setShowResults] = useState(false);

  const handleKeyPress = (e) => {
    if(e.charCode === 13){
      setShowResults(true);
    }
  };

  return (
    <Container>
        <Typography variant="h4">Custom Cast</Typography>
        <Spacer height={24}/>
        {showResults ?
          <>
            <Typography variant="p">Based on your article, we found the following key topics: <b>Circular Business</b> and <b>The Linear Economy</b></Typography>
            <Spacer height={12}/>
            <Typography variant="p">Here are our recommended deep dives:</Typography>
            <Spacer height={12}/>
            {EPISODES.map((episode) => (
              <div key={episode.id}>
                <EpisodeDetailCard episode={episode}/>
                <Spacer height={24}/>
              </div>
            ))}
          </> :
          <>
            <Typography variant="p">Cast your net and fish for content based on articles of your choice.  </Typography><br></br>
            <Typography variant="p">Search for podcast deep dives based on articles of interest. </Typography>
            <Spacer height={40}/>
            <InputContainer elevation={4}>
              <TextField
                label="Article URL"
                variant="outlined"
                placeholder="Enter the URL to your article here…"
                fullWidth
                onKeyPress={handleKeyPress}
              />
              <Spacer height={12}/>
              <Typography variant="p">OR</Typography>
              <Spacer height={12}/>
              <FileUploadMock>
                <Typography variant="p">Upload a file from your computer</Typography>
              </FileUploadMock>
            </InputContainer>
          </>
        }
    </Container>
  )
}

export default CustomCast;