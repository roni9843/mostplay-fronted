import React from "react";
import { styled } from "styled-components";
import Header from "../components/Header/Header";
import HomePageSlider from "../components/HomePageSlider";
import NoticeText from "../components/NoticeText";
import HomeMenu from '../components/HomePageMenu/HomeMenu';
import Category from "../components/Category";
import HomePageMenuOption from "../components/HomePageMenu/HomePageMenuOption";
import HomePageCategorySpecial from "../components/HomePageCategorySpecialMenu";

const HomeContainer = styled.div`
  padding: 0px;
  @media (min-width: 769px) {
    padding: 0 200px;
  }
`;

const Home = () => {
  
  return (
    <div className="pb-5 mb-5">
      <Header />
      <HomeContainer>
        <HomePageSlider />
        <NoticeText />
        <HomeMenu />
        <Category />
       <HomePageCategorySpecial/>
      </HomeContainer>
   
    </div>
  );
};

export default Home;

