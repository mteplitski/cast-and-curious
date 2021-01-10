import React, { useState } from "react";
import { Typography, TextField, Paper } from "@material-ui/core";
import styled from "styled-components";
import Spacer from "../components/Spacer";

const Container = styled.div`
  padding: 24px;
`

const InputContainer = styled(Paper)`
  width: 70%;
  // border: 1px solid black;
  display: block;
  margin: auto;
  padding: 24px;
  text-align: center;
`

const FileUploadMock = styled.div`
  background-color: #22B8D8;
  height: 48px;
  border-radius: 12px;
  vertical-align: middle;
  line-height: 48px;
  color: white;
`

const CustomCast = () => {
  const [showResults, setShowResults] = useState(false);

  const handleKeyPress = (e) => {
    if(e.charCode === 13){
      setShowResults(true);
    }
  }

  return (
    <Container>
        <Typography variant="h2">Custom Cast</Typography>
        <Spacer height={24}/>
        {showResults ?
          <>
            <Typography variant="p">Based on your article, we found the following key topics: xx and xx</Typography>
            <Spacer height={12}/>
            <Typography variant="p">Here are our recommended deep dives:</Typography>
          </> :
          <>
            <Typography variant="p">Search for podcast deep dives based on articles of interest. </Typography>
            <Spacer height={12}/>
            <InputContainer elevation={4}>
              <TextField
                label="Article URL"
                variant="outlined"
                placeholder="Enter the URL to your article here…"
                fullWidth
                onKeyPress={handleKeyPress}
              />
              <Spacer height={12}/>
              <Typography variant="p">OR</Typography>
              <Spacer height={12}/>
              <FileUploadMock>
                <Typography variant="p">Upload a file from your computer.</Typography>
              </FileUploadMock>
            </InputContainer>
          </>
        }
    </Container>
  )
}

export default CustomCast;