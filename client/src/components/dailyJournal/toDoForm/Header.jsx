import React from 'react';


function Header() {
  return (
    <header style={headerStyle}>
      <h1>My Gardening To Do List</h1>
    </header>
  )
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default Header;