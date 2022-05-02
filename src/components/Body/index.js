import React from "react";
import TextWithImage from "../Cards/TextWithImageCard";
import Text from "../Cards/TextCard";
import ImageCard from "../Cards/ImageCard";
import SpacingCard from "../Cards/SpacingCard";
import styled from "styled-components";
import clerkieData from "../../../clerkieData.json";

const Body = () => {
  return (
    <Container>
      {clerkieData.map((cardData, idx) => {
        if (cardData.type === "text_with_image") {
          return <TextWithImage key={idx} cardData={cardData} />;
        }
        if (cardData.type === "text") {
          return <Text key={idx} cardData={cardData} />;
        }
        if (cardData.type === "image") {
          return <ImageCard key={idx} cardData={cardData} />;
        }
        if (cardData.type === "space") {
          return <SpacingCard key={idx} cardData={cardData} />;
        }
      })}
    </Container>
  );
};

export default Body;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 50%;
`;
