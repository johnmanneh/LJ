import React, { useState } from "react";
import "./Country.css";

interface listProps {
  data: [];
  search: string;
}
function ListCountry({ data, search }: listProps) {
  let match = data.filter(
    e => e.name.common.toLocaleLowerCase() === search.toLocaleLowerCase()
  );
  const matchSearch = () => {
    return match.map((value, key) => (
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
            <h6 className="card-title">{value.population}</h6>


            <p className="card-text">
              {value.timezones}
              <h5>{value.translations.deu.common}</h5>
            </p>
          </div>
        </div>
      </div>
    ));
  };
  const searchRender = () => {
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
            <h6 className="card-title">Population: {value.population}</h6>

              <p className="card-text">
                {value.timezones}
                <h5>{value.translations.deu.common}</h5>
              </p>
            </div>
          </div>
        </div>
      ));
  };

  const country = search === "" ? searchRender() : matchSearch();
  return <>{country}</>;
}

export default ListCountry;
