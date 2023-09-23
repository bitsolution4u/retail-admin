import React, { useState } from 'react';
import { dashboardModule } from './sidebar-item/dasboard';
import { productModule } from './sidebar-item/shopdata';
import { groceryStore } from './sidebar-item/groceryStore';
import { userInfo } from './sidebar-item/userInfo';
const useSidebar = () => {
  const [sidebarItems, setSideBarItems] = useState([
    ...dashboardModule,
    // ...productModule,
    ...groceryStore,
    ...userInfo,
  ]);
  return { sidebarItems };
};

export default useSidebar;
