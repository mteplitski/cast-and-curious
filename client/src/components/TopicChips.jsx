import react from "react";
import styled from "styled-components";
import {
	Chip, useTheme
} from "@material-ui/core";

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const TopicChips = ({ topics, align }) => {
	const { palette } = useTheme();
	const justifyContent = align == "center" ? "center" : "flex-start"
	return (
		<Container style={{justifyContent}}>
			{topics.map((topic, index) => {
				let color;
				if(index % 3 == 0){
					color = palette.primary.main;
				} else if(index % 3 == 1){
					color = palette.secondary.main;
				} else{
					color = palette.error.main;
				}

				return (
					<Chip
						key={topic}
						label={topic}
						style={{marginRight: "8px", backgroundColor: color, color: "white"}}
					/>
				);
			})}
		</Container>
	);
}

export default TopicChips