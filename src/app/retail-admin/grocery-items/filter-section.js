import SearchField from '@/@core/component/mui/search-field';
import CustomTextField from '@/@core/component/mui/text-field';
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import React, { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const FilterSection = () => {
  const [inputValue, setInputValue] = useState();
  const [inputObject, setInputObject] = useState({
    label: 'The Great Dictator',
    year: 1940,
  });
  const handleChange = (e, value, reson) => {
    console.log({ e, value, reson });
  };

  const handleNewChange = (x, value, reason) => {
    setInputValue(value);
    if (reason === 'reset') {
      setInputValue('');
    }
    console.log({ x, value });
    console.log(reason);
  };
  return (
    <>
      <div className="mt-5 mb-7 bg-white py-3 px-2 flex justify-between items-center rounded-[5px]">
        <p className="text-cwgreen text-xl font-semibold">Filter Product</p>
        <SearchField />
      </div>
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Autocomplete
          fullWidth
          placeholder="Brand "
          className=" mr-10"
          size="small"
          inputValue={inputValue}
          onChange={(e, value, reson) => handleChange(e, value, reson)}
          disablePortal
          id="combo-box-demo"
          value={inputObject}
          options={top100Films || []}
          // sx={{ width: 300 }}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option.label}>
                {option.label}
              </li>
            );
          }}
          renderInput={(params) => (
            <CustomTextField {...params} label="Brand" font="bold" />
          )}
        />
        <Autocomplete
          fullWidth
          placeholder="Group"
          className=" mr-10"
          size="small"
          onChange={(e, value, reson) => handleChange(e, value, reson)}
          disablePortal
          inputValue={inputValue}
          id="combo-box-demo"
          value={inputObject}
          options={top100Films || []}
          // sx={{ width: 300 }}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option.label}>
                {option.label}
              </li>
            );
          }}
          renderInput={(params) => (
            <CustomTextField {...params} label="Group" font="bold" />
          )}
        />
        <Autocomplete
          fullWidth
          placeholder="Category"
          className=" mr-10"
          size="small"
          inputValue={inputValue}
          onChange={(e, value, reson) => handleChange(e, value, reson)}
          disablePortal
          id="combo-box-demo"
          value={inputObject}
          options={top100Films || []}
          // sx={{ width: 300 }}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option.label}>
                {option.label}
              </li>
            );
          }}
          renderInput={(params) => (
            <CustomTextField {...params} label="Category" font="bold" />
          )}
        />
        <Autocomplete
          fullWidth
          placeholder="Variety"
          className=" mr-10"
          size="small"
          onChange={(e, value, reson) => handleChange(e, value, reson)}
          disablePortal
          inputValue={inputValue}
          id="combo-box-demo"
          value={inputObject}
          options={top100Films || []}
          // sx={{ width: 300 }}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option.label}>
                {option.label}
              </li>
            );
          }}
          renderInput={(params) => (
            <CustomTextField {...params} label="Variety" font="bold" />
          )}
        />
        <Autocomplete
          fullWidth
          placeholder="Product Type"
          className=" mr-10"
          size="small"
          onChange={(e, value, reson) => handleChange(e, value, reson)}
          disablePortal
          inputValue={inputValue}
          id="combo-box-demo"
          value={inputObject}
          options={top100Films || []}
          // sx={{ width: 300 }}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option.label}>
                {option.label}
              </li>
            );
          }}
          renderInput={(params) => (
            <CustomTextField {...params} label="Product Type" font="bold" />
          )}
        />
        <Autocomplete
          fullWidth
          placeholder="Product Sub-type"
          className=" mr-10"
          size="small"
          onChange={(e, value, reson) => handleChange(e, value, reson)}
          disablePortal
          inputValue={inputValue}
          id="combo-box-demo"
          value={inputObject}
          options={top100Films || []}
          // sx={{ width: 300 }}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option.label}>
                {option.label}
              </li>
            );
          }}
          renderInput={(params) => (
            <CustomTextField {...params} label="Product Sub-type" font="bold" />
          )}
        />
        <Autocomplete
          fullWidth
          placeholder="By Status"
          className=" mr-10"
          size="small"
          onChange={(e, value, reson) => handleChange(e, value, reson)}
          disablePortal
          inputValue={inputValue}
          id="combo-box-demo"
          value={inputObject}
          options={top100Films || []}
          // sx={{ width: 300 }}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option.label}>
                {option.label}
              </li>
            );
          }}
          renderInput={(params) => (
            <CustomTextField {...params} label="By Status" font="bold" />
          )}
        />
        <div className="relative mt-[2em] md:mt-[0em]">
          <Button
            variant="contained"
            className="bg-cwgreen text-white absolute bottom-[2px]"
          >
            Search
          </Button>
        </div>
      </div>
      <div className=" mt-4 bg-white py-3 px-2 flex justify-between items-center rounded-[5px]">
        <FormControlLabel control={<Checkbox />} label="Select All" />
        <Button className="font-bold">
          Download All <ContentCopyIcon sx={{ ml: 1 }} />
        </Button>
      </div>
    </>
  );
};

export default FilterSection;

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
];
