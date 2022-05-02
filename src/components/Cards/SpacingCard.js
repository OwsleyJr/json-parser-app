import React from "react";
import styled from "styled-components";

const SpacingCard = (props) => {
  console.log("SPACING CARD", props.cardData.height);
  return <Spacing cardData={props.cardData} />;
};

export default SpacingCard;

const Spacing = styled.div`
  height: ${(props) => (props.cardData ? props.cardData.height : "10")}px;
`;
