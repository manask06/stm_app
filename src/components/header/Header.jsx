import React, {useState} from 'react';
import './Header.scss'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

function Header() {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <Button className="logout" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <img width="32" height="32" alt="logo" src={ require('../../avatar.svg') } />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className="logout-menu-item" onClick={handleClose}> <ExitToAppOutlinedIcon /> &nbsp; Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default Header;