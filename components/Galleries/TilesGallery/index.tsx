import React from "react";
import Tile from "./Tile";
import * as Styles from "./styles";

type Props = {};

const TilesGallery = (props: Props) => {
  const allPages = ["diamond", "staggered-grid"];

  return (
    <Styles.Wrapper>
      {allPages.map((page) => (
        <Tile key={page} pathname={page} />
      ))}
    </Styles.Wrapper>
  );
};

export default TilesGallery;
