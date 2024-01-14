import { useState } from 'react';
import './Navbar.css'; 
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import './navbar.css'
const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link:string) => {
    setActiveLink(link);
    // Add logic to handle navigation or content changes based on the clicked link  
  };


  return (
    <nav className="dashboard-navbar">
      
      <div className="logo">Dashboard Logo</div>
      
      <div className="nav-links">
        <a
          href="/"
          className={activeLink === 'Home' ? 'active' : ''}
          onClick={() => handleLinkClick('Home')}
        >
          <HomeIcon />
        </a>
        <a
          href="/analytics"
          className={activeLink === 'Analytics' ? 'active' : ''}
          onClick={() => handleLinkClick('Analytics')}
        >
          <NotificationsIcon/>
        </a>
        <a
          href="/Reports"
          className={activeLink === 'Reports' ? 'active' : ''}
          onClick={() => handleLinkClick('Reports')}
        >
          <AssessmentIcon/>
        </a>
        <a
          href="/settings"
          className={activeLink === 'Settings' ? 'active' : ''}
          onClick={() => handleLinkClick('Settings')}
        >
          <SettingsIcon/>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

  
