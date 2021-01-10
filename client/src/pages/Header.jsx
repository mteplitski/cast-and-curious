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
  justify-content: space-between;
  height: 80px;
  align-items: center;
  padding: 0px 24px;
`

const NavButton = styled(Button)`
  padding: 8px 24px !important;
`

const Image = styled.img`
  height: 60px;
`

const Header = () => {
  const [menuEl, setMenuEl] = React.useState(null);

  return(
    <Container elevation={3}>
      <Link to="/">
        <Image src={Logo} alt="Cast and Curious"/>
      </Link>
      <div>
        <ButtonGroup color="primary" variant="text" style={{backgroundColor: "#22B8D8"}} disableElevation>
          <Link to={"/trendingTopics"}>
            <NavButton>Trending Topics</NavButton>
          </Link>
          <Link to={"/myTopics"}>
            <NavButton>My Topics</NavButton>
          </Link>
          <Link to={"/customCast"}>
            <NavButton>Custom Cast</NavButton>
          </Link>
        </ButtonGroup>
      </div>
    </Container>
  );
}

export default Header;
