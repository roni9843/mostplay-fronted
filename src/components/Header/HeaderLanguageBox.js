import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

// Import flag images (you'll need to add these to your assets folder)
import bd_flag from '../../assets/bd_flag.png';
import in_flag from '../../assets/bd_flag.png'; // India flag
import pk_flag from '../../assets/bd_flag.png'; // Pakistan flag
import np_flag from '../../assets/bd_flag.png'; // Nepal flag

const LanguageBoxContainer = styled.div`
  background-color: white;
  border-radius: 8px;
   // padding: 15px ;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
background-color: #EBEBEB;
`;

const Title = styled.h2`
  background-color: #163E91;
  color: white;
  text-align: center;
  font-size: 1.3rem;
 // margin: -25px -25px 25px -25px;
  padding: 10px;
  /* //border-top-left-radius: 8px;
  //border-top-right-radius: 8px; */
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 15px;
  right: 15px;
  color: white;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  margin:  5px;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${props => (props.selected ? '#F4B600' : 'white')};
  transition: all 0.3s ease;
  border: 2px solid ${props => (props.selected ? '#F4B600' : '#e0e0e0')};
  
  &:hover {
    background-color: ${props => (props.selected ? '#F4B600' : '#f8f9fa')};
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const Flag = styled.img`
  width: 35px;
  height: 35px;
  margin-bottom: 8px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Currency = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
`;

const LanguageContainer = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2px; */
  width: 100%;

  /* display: flex;
  flex-wrap: nowrap; */

`;

const LanguageButton = styled.button`
  font-size: 10px;
  font-weight: 500;
  padding: 6px 10px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  background-color: ${props => (props.selected ? '#F4B600' : 'white')};
  color: ${props => (props.selected ? 'white' : '#333')};
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => (props.selected ? '#F4B600' : '#f0f0f0')};
  }
`;

export default function HeaderLanguageBox({ onClose }) {
    const [selectedOption, setSelectedOption] = React.useState('BDT');

    const [selectedLanguages, setSelectedLanguages] = React.useState({
        INR: 'English',
        BDT: 'বাংলা',
        PKR: 'English',
        NPR: 'English',
      });
    
      const options = [    {      flag: in_flag,      currency: '₹ INR',      languages: ['English', 'हिन्दी'],
          value: 'INR',
        },
        {
          flag: bd_flag,
          currency: '৳ BDT',
          languages: ['বাংলা', 'English'],
          value: 'BDT',
        },
        {
          flag: pk_flag,
          currency: 'Rs PKR',
          languages: ['English'],
          value: 'PKR',
        },
        {
          flag: np_flag,
          currency: 'Rs NPR',
          languages: ['नेपाली', 'English'],
          value: 'NPR',
        },
      ];


    const isMobile = window.innerWidth <= 768;


      const handleLanguageSelect = (currency, language) => {
        setSelectedLanguages(prev => ({
          ...prev,
          [currency]: language,
        }));
      };

  const handleSelect = (value) => {
    setSelectedOption(value);
    onClose();
  };

  return (
    <LanguageBoxContainer>
      <Title>
        কারেন্সি এবং ভাষা
        <CloseIcon onClick={onClose} />
      </Title>
      <Grid>
        {options.map((option) => (
          <Option
            key={option.value}
            onClick={() => handleSelect(option.value)}
          >
            <Flag src={option.flag} alt={`${option.value} flag`} />
            <Currency>{option.currency}</Currency>
            <LanguageContainer className='row m-0 p-0 d-flex justify-content-center'>
              {option.languages.map((lang, index) => (
                <LanguageButton
                  className={`col-4 ${isMobile ? 'col-6' : ''} ${isMobile ? '' : 'ms-1'}`}
                  key={index}
                  selected={selectedLanguages[option.value] === lang}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the parent onClick
                    handleLanguageSelect(option.value, lang);
                  }}
                >
                  {lang}
                </LanguageButton>
              ))}
            </LanguageContainer>
          </Option>
        ))}
      </Grid>
    </LanguageBoxContainer>
  );
}