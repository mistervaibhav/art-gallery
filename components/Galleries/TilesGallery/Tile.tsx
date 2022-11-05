import React from "react";
import * as Styles from "./styles";

interface ITileProps {
  pathname: string;
}

const Tile = ({ pathname }: ITileProps) => {
  return (
    <Styles.Tile
      onClick={() => {
        console.log("yay");
      }}
    >
      <Styles.Iframe
        style={{
          height: "auto",
          width: "300px",
        }}
        src={`/${pathname}`}
        onClick={() => {
          console.log("nayy");
        }}
      ></Styles.Iframe>
    </Styles.Tile>
  );
};

export default Tile;
