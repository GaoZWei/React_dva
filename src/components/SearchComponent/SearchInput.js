import React from 'react';
import {Input} from 'antd';

const Search = Input.Search;
const SearchInput = () => (
  <Search
    placeholder="搜索关键字"
    onSearch={value => console.log(value)}
    style={{width: 200}}
  />
);
export default SearchInput;
