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
      <div className="item__title_container">
        <h2 className="item__title">{title}</h2>
        <span>
          [
          <a href={sourceUrl} target="_blank">
            src
          </a>
          ]
        </span>
      </div>
      <a href={image} target="_blank" className="item__image_container">
        <div
          className="item__image"
          style={{ backgroundImage: `url('${thumbnail}')` }}
        />
      </a>
      <div className="item__extract">{extract}</div>
    </div>
  );
};

export default WikiItem;
