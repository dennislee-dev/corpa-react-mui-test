import React from 'react';
import { Stack } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';
import logoImg from '../../assets/images/logo.png';
import userImg from '../../assets/images/user.png';

const Header = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" padding="14px 19px" backgroundColor="#FFFFFF" borderBottom="1px solid #DFE1E5">
      <img src={logoImg} width="127px" height="34px" alt="logo" />
      <Stack direction="row-reverse" justifyContent="flex-end" alignItems="center" gap="24px">
        <img src={userImg} width="32px" height="32px" alt="user" />
        <HelpIcon width="20px" height="20px" />
        <NotificationsIcon width="20px" height="20px" />
      </Stack>
    </Stack>
  )
}

export default Header;