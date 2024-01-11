import React, { useState } from "react";

export const ResultList = ({ results }) => {
  return (
    <div className="resultList">
      <h2>💖💅🏽🎨🧴💄</h2>
      {results.map((result, id) => {
        return (
          <div key={id}>
            <div className="listItems">
              <a href={result.product_link}>
                {result.brand}: {result.name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
