import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo_white from '../assets/logo_white.png';
import bd_flag from '../assets/bd_flag.png';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #163E91;
  padding: 20px;

  @media (min-width: 769px) {
    padding: 0 200px;
  }
  color: white;
`;

const Logo = styled.img`
  width: 120px;
`;

const Button = styled.button`
  margin-left: 10px;
  background-color: white;
  color: darkblue;
  border: none;
  padding: 7px 10px;
  @media (min-width: 769px) {
    padding: 10px 35px;
  }
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: lightgray;
  }
`;

export default function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/register');
  };

  return (
    <HeaderContainer>
      <Logo src={logo_white} alt="Logo" />
      <div>
        <Button
          style={{ backgroundColor: '#F4B600' }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#A67C00')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#F4B600')}
          onClick={handleLoginClick}
        >
          লগ ইন
        </Button>
        <Button onClick={handleSignupClick}>সাইন আপ</Button>
        <img src={bd_flag} alt="Bangladesh Flag" style={{ width: '30px', height: '30px', marginLeft: '10px' }}/>
      </div>
    </HeaderContainer>
  );
}

