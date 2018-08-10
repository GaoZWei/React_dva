import React from 'react';
import {Input} from 'antd';

const Search = Input.Search;
const SearchInput = () => (
  <Search
    placeholder="Input search text"
    onSearch={value => console.log(value)}
    style={{width: 200}}
  />
);
export default SearchInput;
