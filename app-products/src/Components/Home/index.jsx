import React, { Fragment, useState, useEffect  } from "react";
import { NavLink } from "react-router-dom";

const listId = "c9e10321-5568-4dc4-8fe4-24a8a59a6c62";
const urlFormatted = id => `https://run.mocky.io/v3/${id}`;

export default () => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetch(urlFormatted(listId))
      .then(response => response.json())
      .then(result => {
        setRecords(result);
      })
      .catch(error => {
        console.error(error);
      });
  });
  return (
    <Fragment>
      <h3>Products</h3>
      <div className="list-group">
        { records.length === 0 ? <div>Loading...</div> : null}
        { records && records.map((item, i) => {
          return <NavLink 
            to={`/product/${item.id}`} 
            key={i}
            className="list-group-item list-group-item-action">
              {item.name}
              <span className="float-right text-success">
                ${item.price}
              </span>
            </NavLink>
        })}
        
      </div>
    </Fragment>
  );
}