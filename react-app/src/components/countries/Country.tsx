import React, { useEffect, useState } from "react";
import axios from "axios";

interface countryProps {
  sendToCaller: () => void;
}

function Country({ sendToCaller }: countryProps) {
  const [countryData, setCountryData] = useState({});

  const fetchCountries = async () => {
    const res = await axios.get("https://restcountries.com/v3.1/all");
    setCountryData(res);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return <>{sendToCaller(countryData)}</>;
}

export default Country;
