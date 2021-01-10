import react, { useState } from "react";
import {
	Typography,
	Button,
} from "@material-ui/core";

export const DescriptionPreview = ({ description, maxChars, hideButton }) => {
    const [showMore, setShowMore] = useState(false);
    const descriptionPreview = description.length > maxChars ? `${description.slice(0, maxChars)}...` : description;

    return (
			<>
				<Typography variant="body2" align="left">{showMore ? description : descriptionPreview}</Typography>
				{!hideButton && description.length > maxChars && (
					<Button
						variant="contained"
						color="secondary"
						style={{float: "right"}}
						onClick={() => {setShowMore(!showMore)}}
					>
							{showMore ? "Show Less" : "Show More"}
					</Button>
				)}
			</>
    );
}

export default DescriptionPreview;