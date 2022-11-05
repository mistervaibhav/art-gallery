import React from "react";
import { useRouter } from "next/router";

type Props = {};

const PagesGallery = (props: Props) => {
  const router = useRouter();

  console.log({ router });

  return (
    <div>
      <iframe
        style={{
          border: "2px dashed red",
          height: "auto",
          width: "300px",
        }}
        src="/diamond"
      ></iframe>
    </div>
  );
};

export default PagesGallery;
