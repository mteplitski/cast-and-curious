import React from "react";
import EpisodeCarouselItem from "./EpisodeCarouselItem";
import {
	GridList,
	GridListTile,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      backgroundColor: theme.palette.background.paper,
      marginTop: 16,
      marginBottom: 32
    },
    gridList: {
      flexWrap: 'nowrap',
          transform: 'translateZ(0)',
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