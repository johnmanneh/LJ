import React, { useState } from "react";
import "./Country.css";

interface listProps {
  data: [];
  search: string;
}
function ListCountry({ data, search }: listProps) {
  const match = "";
  const searchRender = () => {
    if (true) {
      return data.map((value, key) => (
        <div className="myCard">
          <div className="card" Style="width: 18rem;">
            <img
              className="card-img-top"
              src={value.flags.svg}
              alt="Card image cap"
            />
            <div className="card-body">
              <h4 className="card-title">{value.name.common}</h4>
              <h6 className="card-title">{value.capital}</h6>

              <p className="card-text">
                {value.timezones}
                <h5>{value.translations.deu.common}</h5>
              </p>
            </div>
          </div>
        </div>
      ));
    }
  };
  return <>{searchRender()}</>;
}

export default ListCountry;
