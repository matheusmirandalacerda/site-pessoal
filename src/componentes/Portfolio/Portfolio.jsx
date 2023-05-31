import React from "react";

import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";

import "./Portfolio.css";

function Portfolio ({ portfolio }) {

  return (
    <main>

      {portfolio.map(
        (item, index) =>
        <ItemPortfolio
        key={index}
        link={item.link}
        image={item.image}
        titulo={item.titulo}
        ></ItemPortfolio>
      )}

    </main>
  )
}

export default Portfolio;
