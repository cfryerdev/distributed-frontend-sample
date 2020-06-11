import React from 'react';

export default ({ title, name, links }) => 
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-brand" to="/">
        {title}
      </div>
      <div className="float-right text-right" >
        { links && links.map((l, i) => {
            return <a className="pr-4" key={i} href={l.url}>{l.name}</a>
        }) }
      </div>
    </nav>
    <div className="bg-secondary p-2">
      { name !== undefined ? `Logged in: ${name}` : 'Not logged in.'}
    </div>
  </div>