import react from "react";
import styled from "styled-components";
import {
	IconButton,
	Typography
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;

const StarRating = () => {
	return (
		<>
			<Typography variant="body1" align="left">How would you rate this episode?</Typography>
			<Container>
				<IconButton><StarIcon/></IconButton>
				<IconButton><StarIcon/></IconButton>
				<IconButton><StarIcon/></IconButton>
				<IconButton><StarIcon/></IconButton>
				<IconButton><StarIcon/></IconButton>
			</Container>
		</>
	);
};

export default StarRating;