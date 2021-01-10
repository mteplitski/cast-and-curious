import React from "react";
import styled from "styled-components";
import {
	Chip, useTheme
} from "@material-ui/core";

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const TopicChips = ({ topics, align, index }) => {
	const { palette } = useTheme();
	const justifyContent = align === "center" ? "center" : "flex-start"
	return (
		<Container style={{justifyContent}}>
			{topics.map((topic, i) => {
				const colorIndex = index ? index : i;

				let color;
				if(colorIndex % 3 === 0){
					color = palette.primary.main;
				} else if(colorIndex % 3 === 1){
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
};

export default TopicChips;