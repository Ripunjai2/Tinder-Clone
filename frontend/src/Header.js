import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';

function Header() {
  return (
    <div className='header'>
      <h1> I am the header</h1>
      <IconButton>
        <PersonIcon fontSize='large' className='header_icon' />
      </IconButton>
    </div>
  );
}

export default Header;
