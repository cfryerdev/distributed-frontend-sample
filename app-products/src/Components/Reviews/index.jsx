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
            <li class="breadcrumb-item"><NavLink to={`/product/${props.match.params.id}`}>Item</NavLink></li>
            <li class="breadcrumb-item active">Reviews</li>
        </ol>
        <h3>{record.name}</h3>
        <br />
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
        <blockquote className="blockquote">
            <div style={{ fontSize: 13 }}>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
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
                <span style={{ opacity: 0.2 }}>⭐</span>
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
                <span style={{ opacity: 0.2 }}>⭐</span>
                <span style={{ opacity: 0.2 }}>⭐</span>
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
        <blockquote className="blockquote">
            <div style={{ fontSize: 13 }}>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
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
                <span style={{ opacity: 0.2 }}>⭐</span>
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
                <span style={{ opacity: 0.2 }}>⭐</span>
                <span style={{ opacity: 0.2 }}>⭐</span>
                <span style={{ opacity: 0.2 }}>⭐</span>
                <span style={{ opacity: 0.2 }}>⭐</span>
            </div>
            <div style={{ fontSize: 14 }} className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </div>
            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
    </Fragment>
  );
}