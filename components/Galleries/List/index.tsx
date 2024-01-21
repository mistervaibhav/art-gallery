import React from "react";
import Link from "next/link";
import { PAGES } from "./constants";

const List = () => (
  <div>
    <ol>
      {PAGES.map((page) => (
        <li
          key={page}
          style={{
            fontFamily: "Verdana",
            fontSize: 18,
          }}
        >
          <Link href={`/${page}`} target="_blank" rel="noopener noreferrer">
            <a>{page}</a>
          </Link>
        </li>
      ))}
    </ol>
  </div>
);

export default List;
