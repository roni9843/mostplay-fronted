import React from 'react';
import styled from 'styled-components';
import category_image from "../assets/category_image_1_pc.jpg";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;
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

const Image = styled.img`
  width: 300px;
  height: auto;
  margin-right: 10px;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 350px;
  }
`;

export default function Category() {
  const images = Array.from({ length: 5 }, (_, i) => (
    <Image key={i} src={category_image} alt="Scrollable content" />
  ));

  return (
    <CategoryContainer>
    <div style={{display: 'flex', alignItems: 'center',  textAlign: 'center', marginBottom: '20px'}} 
    
    >
    <VerticalLine
    style={{
      marginLeft: '10px',
      height: '30px',
      border: '2px solid #F7DC6F',
    }}
  />
<Title style={{textAlign: 'center' ,margin:"0px"}}>
প্রিয়
</Title>
    </div>
      <ImageMap>{images}</ImageMap>
    </CategoryContainer>
  );
}
