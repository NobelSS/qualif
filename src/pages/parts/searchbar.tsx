import React, { useState } from 'react';
import styled from '@emotion/styled';

const ContainerStyles = styled('div')`
  position: sticky;
  top: 10vh;
  padding-top: 16px;
  padding-bottom: 16px;
`

const SearchBarStyles = styled('form')`
  display: flex;
  align-items: center;
  width: 70vw;
  max-width: 500px;
  margin: 0 auto;
`;

const InputStyles = styled('input')`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  outline: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ButtonStyles = styled('button')`
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: rgb(9, 72, 173);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    background-color: rgb(40, 42, 46);
  }
`;


export function SearchBar({onSearch} : any){

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event : any) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event : any) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
      <ContainerStyles>
        <SearchBarStyles onSubmit={handleSubmit}>
        <InputStyles
            type="text"
            name="name"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
        />
        <ButtonStyles type="submit">
            Search
        </ButtonStyles>
        </SearchBarStyles>
      </ContainerStyles>
    );
};
