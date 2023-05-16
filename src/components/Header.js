import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'
import { IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';



function Header() {
  const clickhere=()=>{
    console.log("THis is Menu")
  }
  return (
    <div className='header'>
      <div className='Header__left'> 
      <IconButton>
       <MenuIcon onClick={clickhere} /> 
      </IconButton>
      <img className='header__logo' src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png" alt="" />
    </div>
    <div className='Header__middle'>
     <SearchIcon/>
     <input type="text" placeholder='Search Email...' />
     <ArrowDropDownIcon className='Header__arrow'/>
    </div>
    <div className='Header__right'>
      <IconButton>
     <AppsIcon/>
     </IconButton>
      <IconButton>
     <NotificationsIcon/>
     </IconButton>
     <Avatar/>
     

    </div>
    </div>
  
  )
}

export default Header