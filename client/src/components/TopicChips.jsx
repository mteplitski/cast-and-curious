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
				if (colorIndex % 4 === 0) {
					color = palette.primary.main;
				} else if (colorIndex % 4 === 1) {
					color = palette.secondary.main;
				} else if (colorIndex % 4 === 2) {
					color = palette.error.main;
				} else {
					color = "#888";
				}

				return (
					<Chip
						key={topic}
						label={topic}
						style={{
							marginRight: "8px",
							backgroundColor: color,
							color: "white",
							height: "24px",
						}}
					/>
				);
			})}
		</Container>
	);
};

export default TopicChips;