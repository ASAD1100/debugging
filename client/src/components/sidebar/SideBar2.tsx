import React, { useState } from 'react';
import './Sidebar.css'; // You can create a separate CSS file for styling

const Drawer = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
      <button onClick={toggleDrawer} className="toggle-button">
        {isDrawerOpen ? 'Close Drawer' : 'Open Drawer'}
        Drawer button
      </button>
      <div className="drawer-content">
        {/* Your drawer content goes here */}
        <p>This is your drawer content.</p>
      </div>
    </div>
  );
};

export default Drawer;
