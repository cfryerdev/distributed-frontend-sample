import React from 'react';

export default ({ title, name }) => 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-brand" to="/">
        {title} { name && <span className="float-right">{name}</span> }
      </div>
    </nav>