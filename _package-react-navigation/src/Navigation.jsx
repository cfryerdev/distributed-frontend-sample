import React from 'react';

export default ({ title, name, links }) => 
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-brand" to="/">
        {title}
      </div>
      <span className="float-right">
        { links && links.map((l, i) => {
            return <a className="pr-4" key={i} href={l.url}>{l.name}</a>
        }) }
      </span>
    </nav>
    <div className="bg-secondary p-2">
      { name !== undefined ? `Logged in: ${name}` : 'Not logged in.'}
    </div>
  </div>