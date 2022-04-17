import React from "react";
import { albumData } from "./../data/album";

const Album = (props) => {
  return (
    <div className="album">
      {albumData &&
        albumData
          .sort((a, b) => b.year - a.year)
          .slice(0, props.show)
          .map((album) => {
            return (
              <div className="album__card" key={album.id}>
                <img className="album__cover" src={album.cover} alt="album" />
                <h4 className="album__title">{album.title}</h4>
                <h5 className="album__year">{album.year}</h5>
              </div>
            );
          })}
    </div>
  );
};

export default Album;
