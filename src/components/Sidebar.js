import React from 'react'
import './Sidebar.css'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { IconButton} from '@mui/material';
function Sidebar() {
  return (
    <div className='sidebar'>
     <Button className='sidebar__compose' startIcon={<AddIcon fontsize='large' /> }>Compose</Button>
     <SidebarOption Icon={InboxIcon} title="Inbox" number={54}  selected={true}/>
     <SidebarOption Icon={StarIcon} title="Starred" number={50} />
     <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={50} />
     <SidebarOption Icon={LabelImportantIcon} title="Important" number={50} />
     <SidebarOption Icon={NearMeIcon} title="Sent" number={50} />
     <SidebarOption Icon={NoteIcon} title="Drafts" number={50} />
     <SidebarOption Icon={ExpandMoreIcon} title="More"  />

     <div className="sidebar__footer">
      <div className="sidebar__footerIcon">
          <IconButton>
            <PersonIcon/>
          </IconButton>

          <IconButton>
            <DuoIcon/>
          </IconButton>

          <IconButton>
            <PhoneIcon/>
          </IconButton>
      </div>
     </div>
    </div>
  )
}

export default Sidebar
