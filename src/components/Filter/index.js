import React from 'react';
import { styled } from '@mui/material/styles';
import { Stack, TextField, InputAdornment, Typography, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const CustomButton = styled(Button)({
  backgroundColor: "#6900FF",
  color: "#FFFFFF",
  fontSize: "16px",
  lineHeight: "19px",
  fontWeight: "500",
  padding: "8px 14px",
  border: "none",
  borderRadius: "3px",
  textTransform: "none",
  '&:hover': {
    backgroundColor: "#6900FF"
  },
});

const Filter = ({ handleInputChange }) => {
  return (
    <Stack padding="50px 16px 22px" gap={"24px"}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize="24px" lineHeight="29px" fontWeight="500">Corpa</Typography>
        <CustomButton>Add Corpus</CustomButton>
      </Stack>
      <TextField
        size="small"
        placeholder="Filter by name or description..."
        sx={{
          width: "100%",
          "& .MuiInputBase-root": {
            height: 40,
          },
          maxWidth: "303px"
        }}
        InputProps={{
          startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
        }}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </Stack>
  );
}

export default Filter;