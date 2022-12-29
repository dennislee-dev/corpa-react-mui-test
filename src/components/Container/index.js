import React, { useState } from 'react';
import { Stack, Grid, Box } from "@mui/material";
import Filter from '../Filter';
import CustomCard from "../CustomCard";
import CustomPagination from '../CustomPagination';
import mockupData from '../../config/mockup.js';

const Container = () => {

  const [searchData, setSearchData] = useState(mockupData);

  const debounce = (func, timeout = 300) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const handleInputChange = (value) => {
    if (value) {
      let result = [];
      mockupData.map((item) => {
        if (item.title.toLowerCase().includes(value.toLowerCase()) || item.description.toLowerCase().includes(value.toLowerCase())) {
          result.push(item);
        }
        return true;
      })
      setSearchData(result);
    } else {
      setSearchData(mockupData);
    }
  };

  const processInputChange = debounce((value) => handleInputChange(value));

  return (
    <Stack direction="column" width="100%" maxWidth="1000px" margin="0 auto">
      <Filter handleInputChange={processInputChange} />
      {searchData.length > 0 ? (
        <>
          <Grid container marginBottom="50px">
            {searchData.map((item, index) => (
              <Grid item xs={12} sm={12} md={6} lg={6} padding="16px" key={index}>
                <CustomCard data={item} />
              </Grid>
            ))}
          </Grid>
          <CustomPagination />
        </>
      ) : (
        <Box textAlign="center" fontSize="20px">
          No Result
        </Box>
      )}
    </Stack>
  );
}

export default Container;