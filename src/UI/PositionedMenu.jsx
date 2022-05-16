import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link, useNavigate } from "react-router-dom";

export default function SimpleListMenu({ options }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
      <List>
        <ListItem
          button
          onClick={handleClickListItem}
        >
          <ListItemText style={{ color: 'white' }}>
            {options.map((user) => {
              if (user.id == selectedIndex + 1) return user.value
            })}
          </ListItemText>
          {anchorEl==null ? <KeyboardArrowDownIcon style={{marginLeft:'10px'}}/> : <KeyboardArrowUpIcon style={{marginLeft:'10px'}}/>}
        </ListItem>
      </List>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem  component={Link} to={option.path}
            key={option.value}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option.value}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}