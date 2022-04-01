import React, { PropsWithChildren } from "react";

import { WikiItemInterface } from "../../api/wikiItem.api";
import "./WikiItem.styles.css";

interface Props {
  wikiItem: WikiItemInterface;
}

const WikiItem = ({ wikiItem }: PropsWithChildren<Props>) => {
  const { title, thumbnail, image, extract, sourceUrl } = wikiItem;

  return (
    <div className="item">
      <a href={image} target="_blank" className="item__image_container">
        <div
          className="item__image"
          style={{ backgroundImage: `url('${thumbnail}')` }}
        />
      </a>
      <div>{title}</div>
      <div>{extract}</div>
      <a href={sourceUrl} target="_blank">
        source
      </a>
    </div>
  );
};

export default WikiItem;
