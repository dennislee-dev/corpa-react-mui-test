import React from 'react';
import { Stack, Typography } from '@mui/material';
import previousImg from '../../assets/images/previous_disable.svg';
import nextImg from '../../assets/images/next_active.svg';

const CustomPagination = () => {
  return (
    <Stack direction="row" gap="28px" alignItems="center" justifyContent="center" marginBottom="78px">
      <img src={previousImg} width="44px" height="44px" alt="previous" />
      <Typography fontSize="16px" lineHeight="19px" fontWeight="400">0 — 8 of 100 Corpa</Typography>
      <img src={nextImg} width="44px" height="44px" alt="next" />
    </Stack>
  )
}

export default CustomPagination;