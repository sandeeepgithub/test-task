import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import ProductComponent from "./ProductComponent";
import "./MainComponent.css";

function MainComponent() {
  const [value, setValue] = useState("");
  const [response, setResponse] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    const getResponse = async () => {
      await axios
        .get("https://run.mocky.io/v3/128675fd-afe3-43fd-9b9a-cf7a0ee511ef")
        .then((res) => setResponse(res.data))
        .catch((err) => console.log(err));
    };

    getResponse();
  }, []);

  useEffect(() => {
    let finalArr = [];
    const orignalRes = [...response];
    if (response) {
      const listOfData = response
        .map((el) => el.name.toLowerCase().includes(value))
        .map((ele, ind) =>
          ele === true ? finalArr.push(response[ind]) : null
        );
    }

    setResponse(finalArr);
    if (!value || value === "") {
      setResponse(orignalRes);
    }
  }, [value]);

  return (
    <div>
      <Row className="mx-0">
        <input
          className="Search"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Row>
      {response
        ? response.map((el, ind) => (
            <ProductComponent
              key={ind}
              name={el.name}
              description={el.description}
              price={el.price}
            />
          ))
        : "Loading..."}
    </div>
  );
}

export default MainComponent;

