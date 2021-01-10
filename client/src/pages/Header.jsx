import React, { useState } from "react";
import styled from "styled-components";
import { Button, Menu, MenuItem } from "@material-ui/core"
import { Link } from "react-router-dom";
import { default as Logo } from "../assets/cac.png";

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid black;
  justify-content: space-between;
  height: 90px;
  align-items: center;
  padding: 0px 24px;
`

const Image = styled.img`
  height: 100%;
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
    <Container>
      <Image src={Logo} alt="Cast and Curious"/>
      <div>
        <Button color="primary" variant="contained" aria-controls="header-menu" aria-haspopup="true" onClick={handleClick}>Explore Recommended</Button>
        <Menu
          id="header-menu"
          anchorEl={menuEl}
          keepMounted
          open={Boolean(menuEl)}
          onClose={handleClose}
        >
          <Link to={"/topTrends"}>
            <MenuItem>Top Trends</MenuItem>
          </Link>
          <Link to={"/myTopics"}>
            <MenuItem>My Topics</MenuItem>
          </Link>
          <Link to={"/customCast"}>
            <MenuItem>Custom Cast</MenuItem>
          </Link>
        </Menu>
      </div>
    </Container>
  );
}

export default Header;