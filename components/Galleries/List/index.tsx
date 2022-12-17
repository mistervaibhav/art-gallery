import Link from "next/link";
import React from "react";

const List = () => {
  return (
    <div>
      <ol>
        <li>
          <Link href="/staggered-grid">
            <a>staggered-grid</a>
          </Link>
        </li>
        <li>
          <Link href="/cooler-staggered-grid">
            <a>cooler-staggered-grid</a>
          </Link>
        </li>
        <li>
          <Link href="/diamond">
            <a>diamond</a>
          </Link>
        </li>
        <li>
          <Link href="/envelop">
            <a>envelop</a>
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default List;
