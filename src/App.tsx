import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import { THEME, ThemeContext } from './lib/context/ThemeContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import SearchPage from './pages/search';
import FavouritePage from './pages/favourites';
import HomePage from './pages/home';
import Navbar from './pages/parts/navbar';
import DetailPage from './pages/detail';
import ThemeSlider from './pages/parts/darkLightTheme';
import styled from '@emotion/styled';

const ContainerTop = styled('div')`
  background-color: rgb(9, 72, 173);
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
`
const ContainerBot = styled('div')`
  position: sticky;
  bottom: 0;
`

const InsContainer = styled('div')`
  color: white;
  display: inline-block;
  margin-left: 16px;
`
const Slider = styled('div')`
  margin-top: 3.7vh;
  display: inline-block;
  margin-right: 16px;
`

const client = new ApolloClient({
  uri:  'https://graphql.anilist.co/',
  cache: new InMemoryCache(),
})

function App() {
  let [onLight, setOnLight] = useState(() => {
    const storedValue = localStorage.getItem("onLight");
    return storedValue !== null ? JSON.parse(storedValue) : true;
  });

  let [currTheme, setCurrTheme] = useState(() =>{
    if(onLight) return THEME.light;
    else return THEME.dark;
  });

  let changeTheme = () =>{
    if(currTheme === THEME.light) setCurrTheme(THEME.dark)
    else setCurrTheme(THEME.light)
  }

  let toggleTheme = (e : boolean) =>{
    setOnLight(e);
    changeTheme();
    localStorage.setItem("onLight", JSON.stringify(e));
  }

  return ( 
    <ApolloProvider client={client}>
      <ContainerTop>
        <InsContainer>
          <h1>MyAnimeLiSN</h1>
        </InsContainer>
        <Slider>
          <ThemeSlider onLight={onLight} onChange={toggleTheme}></ThemeSlider>
        </Slider>
      </ContainerTop>
      <ThemeContext.Provider value={currTheme}>
        <BrowserRouter>
          <Routes>  
            <Route path="/" element ={<HomePage />}></Route>
            <Route path="/Favourites" element ={<FavouritePage />}></Route>
            <Route path="/Search" element ={<SearchPage />}></Route>
            <Route path="/:animeId" element ={<DetailPage />}></Route>
          </Routes>
          <ContainerBot>
            <Navbar></Navbar>
          </ContainerBot>
        </BrowserRouter>
      </ThemeContext.Provider>
    </ApolloProvider>
  );
}

export default App;
