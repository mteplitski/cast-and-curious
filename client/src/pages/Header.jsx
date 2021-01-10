import React from "react";
import styled from "styled-components";
import {
  Button,
  Paper,
  ButtonGroup
} from "@material-ui/core"
import { Link } from "react-router-dom";
import { default as Logo } from "../assets/cac.png";

const Container = styled(Paper)`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 10;
  // border-bottom: 1px solid black;
  justify-content: space-between;
  height: 90px;
  align-items: center;
  padding: 0px 24px;
`

const Image = styled.img`
  height: 90px;
`

const Header = () => {
  const [menuEl, setMenuEl] = React.useState(null);

  const handleClick = (event) => {
    setMenuEl(event.currentTarget);
  };

  const handleClose = () => {
    setMenuEl(null);
  };

  return(
    <Container elevation={4}>
      <Link to="/">
        <Image src={Logo} alt="Cast and Curious"/>
      </Link>
      <div>
        <ButtonGroup color="primary" variant="contained" style={{backgroundColor: "#22B8D8"}}>
          <Link to={"/trendingTopics"}>
            <Button>Trending Topics</Button>
          </Link>
          <Link to={"/myTopics"}>
            <Button>My Topics</Button>
          </Link>
          <Link to={"/customCast"}>
            <Button>Custom Cast</Button>
          </Link>
        </ButtonGroup>
      </div>
    </Container>
  );
}

export default Header;