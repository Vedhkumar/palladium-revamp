import React from "react";

type InvisibleCardProps = {
  heading: string;
  para: string;
};

function InvisibleCard({ heading, para }: InvisibleCardProps) {
  return (
    <article className="p-4  ">
      <h3 className="text-xl font-bold my-3 text-text-white">{heading}</h3>
      <p className="text-light-grey font-light">{para}</p>
    </article>
  );
}

export default InvisibleCard;
