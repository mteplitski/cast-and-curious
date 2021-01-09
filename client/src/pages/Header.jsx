import React from "react";
import styled from "styled-components";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useHistory, BrowserRouter, Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 10;
  border: 1px solid black;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  padding: 24px;
`

const Header = () => {
  const history = useHistory();

  return(
    <Container>
      <h1>Logo</h1>
      <div>
        <DropdownButton title="Explore Recommended">
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