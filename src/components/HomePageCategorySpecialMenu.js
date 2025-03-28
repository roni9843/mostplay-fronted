import React from 'react';
import styled from 'styled-components';
import category_image from "../assets/category_special_1.png";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const VerticalLine = styled.div`
  width: 2px;
  height: 30px;
  background-color: #F7DC6F;
  margin: 0 10px;
`;

const Title = styled.h2`
  font-size: 18px;
`;

const ImageMap = styled.div`
  display: flex;
  overflow-x: scroll;
  justify-content: start;
  width: 100%;
  padding-left: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
 // align-items: center;
  margin-right: 10px;
  background-color: white;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 250px;
  }
`;

const ImageText = styled.p`
  margin-top: 5px;
  font-size: 14px;
  padding-left: 10px;
 // text-align: center;
  color: #333;
`;

export default function HomePageCategorySpecial() {
  const gameNames = ["Super Ace", "Mega Fighter", "Battle King", "Speed Racer", "Dragon Slayer"];

  return (
    <CategoryContainer>
      <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', marginBottom: '20px' }}>
        <VerticalLine style={{ marginLeft: '10px', height: '30px', border: '2px solid #F7DC6F' }} />
        <Title style={{ textAlign: 'center', margin: "0px" }}>বৈশিষ্ট্যযুক্ত গেম</Title>
      </div>

      <ImageMap>
        {gameNames.map((name, i) => (
          <ImageWrapper key={i}>
            <Image src={category_image} alt={name} />
            <ImageText>{name}</ImageText>
          </ImageWrapper>
        ))}
      </ImageMap>
    </CategoryContainer>
  );
}
