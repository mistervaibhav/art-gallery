import React, { useEffect, useRef, useState } from "react";
import anime, { AnimeInstance } from "animejs";
import { COLORS, TILE_DIMENSIONS } from "./constants";
import * as Styles from "./styles";

const StaggeredGrid = () => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  const animation = useRef<AnimeInstance>();

  function createTiles() {
    const rows = Math.floor(
      document.body.clientHeight / TILE_DIMENSIONS.height
    );
    const columns = Math.floor(
      document.body.clientWidth / TILE_DIMENSIONS.width
    );

    setColumns(columns);
    setRows(rows);
  }

  async function onClickTile(index: number) {
    animation.current = anime({
      targets: ".tile",
      // backgroundColor: "#ff0000",
      background: COLORS[Math.floor(Math.random() * COLORS.length)],
      scale: [
        { value: 0.1, easing: "easeOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 },
      ],
      delay: anime.stagger(50, { grid: [columns, rows], from: index }),
    });

    await animation.current.finished;

    // animation.current = anime({
    //   targets: ".tile",
    //   backgroundColor: "#00ff00",
    //   // background: COLORS[Math.floor(Math.random() * COLORS.length)],
    //   scale: [
    //     { value: 0.1, easing: "easeOutSine", duration: 500 },
    //     { value: 1, easing: "easeInOutQuad", duration: 1200 },
    //   ],
    //   delay: anime.stagger(50, { grid: [columns, rows], from: index }),
    // });
  }

  useEffect(() => {
    createTiles();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      createTiles();
    });

    return () => {
      window.removeEventListener("resize", () => {
        createTiles();
      });
    };
  }, []);

  return (
    <Styles.TilesContainer rows={rows} columns={columns}>
      {Array.from(Array(rows * columns)).map((_, index) => (
        <Styles.Tile
          key={index}
          className="tile"
          onClick={() => onClickTile(index)}
        />
      ))}
    </Styles.TilesContainer>
  );
};

export default StaggeredGrid;
