import React from "react";
import * as Styles from "./styles";

interface ITileProps {
  pathname: string;
}

const Tile = ({ pathname }: ITileProps) => {
  return (
    <Styles.Tile>
      <Styles.Iframe
        style={{
          height: "auto",
          width: "300px",
        }}
        src={`/${pathname}`}
      ></Styles.Iframe>
    </Styles.Tile>
  );
};

export default Tile;
