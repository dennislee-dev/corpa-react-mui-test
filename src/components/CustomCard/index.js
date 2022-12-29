import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import checkImg from '../../assets/images/tick-circle.png';
import unCheckImg from '../../assets/images/ban-circle.png';

const CustomCard = ({ data }) => {
  return (
    <Box
      sx={{
        gap: "12px",
        padding: "24px 30px",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #E6E6E6",
        borderRadius: "5px"
      }}
    >
      <Typography fontSize={"18px"} lineHeight={1} fontWeight={600} color="#6900FF">
        {data?.title}
      </Typography>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" gap="6px">
          <Typography fontSize={"14px"} lineHeight={"17px"} fontWeight={600}>{data?.requests}</Typography>
          <Typography fontSize={"14px"} lineHeight={"17px"} fontWeight={400}>Requests (yesterday)</Typography>
          {data?.requests > 30000 && (
            <Box sx={{ padding: "2px 8px", backgroundColor: "#CCFFE1", border: "none", borderRadius: "40px" }}>
              <Typography fontSize={"12px"} lineHeight={"15px"} fontWeight={500} color="#008036">High</Typography>
            </Box>
          )}
        </Stack>
        <Stack direction="row" gap="4px">
          <img src={data.enabled ? checkImg : unCheckImg} width="16px" height="16px" alt="checkImg" />
          <Typography fontSize={"13px"} lineHeight={"16px"} fontWeight={400} color="#333333">{data?.enabled ? "Enabled" : "Disabled"}</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" gap="6px">
        <Typography fontSize={"14px"} lineHeight={"17px"} fontWeight={600}>{data?.fileSize}</Typography>
        <Typography fontSize={"14px"} lineHeight={"17px"} fontWeight={400}>Indexed Traffic (raw)</Typography>
      </Stack>
      <Stack direction="row" gap="6px">
        <Typography fontSize={"14px"} lineHeight={"17px"} fontWeight={600}>{data?.dataVolume}</Typography>
        <Typography fontSize={"14px"} lineHeight={"17px"} fontWeight={400}>Data Volume</Typography>
      </Stack>
      <Typography fontSize={"14px"} lineHeight={"17px"} fontWeight={400} color="#8C8C8C">{data?.description}</Typography>
    </Box>
  );
}

export default CustomCard;
