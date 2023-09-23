'use client';
import { Box, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import { MdDashboard } from 'react-icons/md';
import ShortcutsDropdown from './app-component/ShortcutsDropdown';
import NotificationDropdown from './app-component/NotificationDropdown';
import UserDropdown from './app-component/UserDropdown';

const AppBar = ({ handleDrawerOpen, drawerWidth, open,sideBarPosition}) => {
  const [scrolled, setScrolled] = useState(false);
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: 4,
    boxShadow: '-1px 1px 3px 2px #c9c9c940;',
    top: `${scrolled ? '' : '20px'}`,
    width: `calc(100% - ${93}px)`,
    marginRight:'12px',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft:!sideBarPosition? drawerWidth : '0',
      width:`calc(100% - ${ !sideBarPosition ? drawerWidth + 27 : 0}px)` ,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxShadow: '-1px 1px 3px 2px #c9c9c940;',
    }),
  }));

  // scroll check to adjust top bar

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const notifications = [
    {
      meta: 'Today',
      avatarAlt: 'Flora',
      title: 'Congratulation Flora! 🎉',
      avatarImg: '/images/avatars/4.png',
      subtitle: 'Won the monthly best seller badge',
    },
    {
      meta: 'Yesterday',
      avatarColor: 'primary',
      subtitle: '5 hours ago',
      avatarText: 'Robert Austin',
      title: 'New user registered.',
    },
    {
      meta: '11 Aug',
      avatarAlt: 'message',
      title: 'New message received 👋🏻',
      avatarImg: '/images/avatars/5.png',
      subtitle: 'You have 10 unread messages',
    },
    {
      meta: '25 May',
      title: 'Paypal',
      avatarAlt: 'paypal',
      subtitle: 'Received Payment',
      avatarImg: '/images/misc/paypal.png',
    },
    {
      meta: '19 Mar',
      avatarAlt: 'order',
      title: 'Received Order 📦',
      avatarImg: '/images/avatars/3.png',
      subtitle: 'New order received from John',
    },
    {
      meta: '27 Dec',
      avatarAlt: 'chart',
      subtitle: '25 hrs ago',
      avatarImg: '/images/misc/chart.png',
      title: 'Finance report has been generated',
    },
  ];

  const shortcuts = [
    {
      title: 'Calendar',
      url: '/apps/calendar',
      icon: 'tabler:calendar',
      subtitle: 'Appointments',
    },
    {
      title: 'Invoice App',
      url: '/apps/invoice/list',
      icon: 'tabler:file-invoice',
      subtitle: 'Manage Accounts',
    },
    {
      title: 'User App',
      icon: 'tabler:users',
      url: '/apps/user/list',
      subtitle: 'Manage Users',
    },
    {
      url: '/apps/roles',
      icon: 'tabler:lock',
      subtitle: 'Permissions',
      title: 'Role Management',
    },
    {
      subtitle: 'CRM',
      title: 'Dashboard',
      url: '/dashboards/crm',
      icon: 'tabler:device-analytics',
    },
    {
      title: 'Settings',
      icon: 'tabler:settings',
      subtitle: 'Account Settings',
      url: '/pages/account-settings/account',
    },
    {
      icon: 'tabler:help',
      title: 'Help Center',
      url: '/pages/help-center',
      subtitle: 'FAQs & Articles',
    },
    {
      title: 'Dialogs',
      icon: 'tabler:square',
      subtitle: 'Useful Popups',
      url: '/pages/dialog-examples',
    },
  ];
  const settings = {
    appBar: 'fixed',
    appBarBlur: true,
    contentWidth: 'boxed',
    direction: 'ltr',
    footer: 'static',
    lastLayout: 'vertical',
    layout: 'vertical',
    mode: 'semi-dark',
    navCollapsed: true,
    navHidden: false,
    skin: 'default',
    themeColor: 'primary',
    toastPosition: 'top-right',
    verticalNavToggleType: 'accordion',
  };

  return (
    <AppBar position="fixed" open={open} sx={{ backgroundColor: '#fff' }}>
      <Toolbar>
        {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            display: `${open ? 'none' : 'block'}`,
          }}
        >
          <MdDashboard style={{ color: '#7367F0' }} />
        </IconButton> */}

        <Box sx={{ display: 'flex', justifyContent: 'right', width: '100%' }}>
          <ShortcutsDropdown settings={settings} shortcuts={shortcuts} />
          <NotificationDropdown
            settings={settings}
            notifications={notifications}
          />
          <UserDropdown settings={settings} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBar;
