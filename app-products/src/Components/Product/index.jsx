import React, { Fragment, useState, useEffect  } from "react";
import { NavLink } from 'react-router-dom'

const urlFormatted = id => `https://run.mocky.io/v3/${id}`;

export default (props) => {
  const [record, setRecord] = useState({});
  useEffect(() => {
    fetch(urlFormatted(props.match.params.id))
      .then(response => response.json())
      .then(result => {
        setRecord(result);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <Fragment>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><NavLink to="/">Products</NavLink></li>
            <li class="breadcrumb-item active">Item</li>
        </ol>
        <div className="row mb-4">
            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                <img src={record.image} alt={record.name} style={{ border: '3px solid #00bc8c', borderRadius: 10 }} />
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
                <h3>{record.name}</h3>
                <label className="d-block text-success">${record.price}</label>
                <label className="d-block text-muted">In stock: {record.stock}</label>
            </div>
        </div>
        <div className="row col-12 mb-4">
            {record.description}
        </div>
        <h4>Reviews</h4>
        <blockquote className="blockquote">
            <div style={{ fontSize: 13 }}>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span style={{ opacity: 0.2 }}>⭐</span>
                <span style={{ opacity: 0.2 }}>⭐</span>
            </div>
            <div style={{ fontSize: 14 }} className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </div>
            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
        <blockquote className="blockquote">
            <div style={{ fontSize: 13 }}>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span style={{ opacity: 0.2 }}>⭐</span>
                <span style={{ opacity: 0.2 }}>⭐</span>
            </div>
            <div style={{ fontSize: 14 }} className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </div>
            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
        <blockquote className="blockquote">
            <div style={{ fontSize: 13 }}>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span style={{ opacity: 0.2 }}>⭐</span>
            </div>
            <div style={{ fontSize: 14 }} className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </div>
            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
        <NavLink className="btn btn-success" to={`/product/${props.match.params.id}/reviews`}>See more Reviews</NavLink>
    </Fragment>
  );
}