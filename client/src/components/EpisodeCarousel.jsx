import React from "react";
import EpisodeCarouselItem from "./EpisodeCarouselItem";
import {
	Collapse,
	GridList,
	GridListTile,
	Typography
} from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Spacer from "../components/Spacer";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
          backgroundColor: theme.palette.background.paper,
          width: "100%",
          height: "100%"
    },
    gridList: {
      flexWrap: 'nowrap',
          transform: 'translateZ(0)',
          height: "100%",
          width: "100%"
      },
  }));

const EpisodeCarousel = ({ episodes, cols }) => {
	const classes = useStyles();

	return(
		<div className={classes.root}>
			<GridList cols={cols} className={classes.gridList}>
				{episodes.map((episode, index) => (
					<GridListTile key={episode.id} style={{height: "100%"}}>
						<EpisodeCarouselItem episode={episode} index={index}/>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
}

export default EpisodeCarousel;