import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import logo_white from '../../assets/logo_white.png';
import bd_flag from '../../assets/bd_flag.png';
import HeaderLanguageBox from './HeaderLanguageBox';

// Define keyframes for slide animations
const slideIn = keyframes`
  from {
    transform: translate(-50%, 100%);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: translate(-50%, 100%);
    opacity: 0;
  }
`;

const slideInDesktop = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOutDesktop = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(20px);
    opacity: 0;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #163E91;
  padding: 20px;
  color: white;

  @media (min-width: 769px) {
    padding: 0 200px;
  }
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

const LanguageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const FlagImage = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  cursor: pointer;
`;

const PopupMenu = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  z-index: 1000;

  @media (min-width: 769px) {
    position: absolute;
    right: 0;
    top: 35px;
    min-width: 400px;
    animation: ${props => props.isClosing ? slideOutDesktop : slideInDesktop} 0.3s ease-out forwards;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 90vw;
    max-height: 90vh;
    overflow-y: auto;
    
    animation: ${props => props.isClosing ? slideOut : slideIn} 0.3s ease-out forwards;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  background-color: rgba(57, 57, 57, 0.26);
  z-index: 500;
`;

export default function Header() {
  const navigate = useNavigate();
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const languageRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (showLanguagePopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLanguagePopup]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowLanguagePopup(false);
      setIsClosing(false);
    }, 300); // Match the animation duration
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/register');
  };

  const handleLanguageSelect = (language) => {
    console.log(`Selected language: ${language}`);
    handleClose();
  };

  return (
    <HeaderContainer>
      {showLanguagePopup && <Overlay />}
      <Logo src={logo_white} alt="Logo" />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          style={{ backgroundColor: '#F4B600' }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#A67C00')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#F4B600')}
          onClick={handleLoginClick}
        >
          লগ ইন
        </Button>
        <Button onClick={handleSignupClick}>সাইন আপ</Button>
        <LanguageContainer ref={languageRef}>
          <FlagImage 
            src={bd_flag} 
            alt="Bangladesh Flag"
            onClick={() => setShowLanguagePopup(!showLanguagePopup)}
          />
          {showLanguagePopup && (
            <PopupMenu isClosing={isClosing}>
            <HeaderLanguageBox onClose={handleClose} />
          </PopupMenu>
          )}
        </LanguageContainer>
      </div>
    </HeaderContainer>
  );
}