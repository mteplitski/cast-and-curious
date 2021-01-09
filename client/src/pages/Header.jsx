import React from "react";
import styled from "styled-components";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useHistory, BrowserRouter, Link } from "react-router-dom";
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
  const history = useHistory();

  return(
    <Container>
      <Image src={Logo} alt="Cast and Curious"/>
      <div>
        <DropdownButton title="Explore Recommended" variant="flat">
          <Dropdown.Item as="button">
            <Link to={"/topTrends"}>
              Top Trends
            </Link>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <Link to={"/myTopics"}>
              My Topics
            </Link>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <Link to={"/customCast"}>
              Custom Cast
            </Link>
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </Container>
  );
}

export default Header;