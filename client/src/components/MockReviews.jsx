import react from "react";
import styled from "styled-components";
import {
	IconButton,
	Typography
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star"
import Spacer from "./Spacer";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
`

const MockReviews = () => {
	return (
		<>
			<Container>
				<StarIcon color="primary"/>
				<StarIcon color="primary"/>
				<StarIcon color="primary"/>
				<Typography variant="body1" align="left">
					While the hosts talked brought up some fantastic points, the production quality of this episode was something that I could not look past. If you are someone who doesn't mind this, I would recommend this episode as the hosts touch on exactly what I was hoping to learn.
				</Typography>
			</Container>
			<Spacer height={12}/>
			<Container>
				<StarIcon color="secondary"/>
				<StarIcon color="secondary"/>
				<StarIcon color="secondary"/>
				<StarIcon color="secondary"/>
				<StarIcon color="secondary"/>
				<Typography variant="body1" align="left">
					Came here to learn, and that goal was definitely met. What surprised me was how sentimental the conversation became near the end. Would highly recommend!
				</Typography>
			</Container>
			<Container>
				<StarIcon color="primary"/>
				<StarIcon color="primary"/>
				<StarIcon color="primary"/>
				<StarIcon color="primary"/>
				<Typography variant="body1" align="left">
					I enjoyed this very much :) This episode has definitely encouraged me to look into some other episodes from this podcast. I've been converted!
				</Typography>
			</Container>
		</>
	);
};

export default MockReviews;