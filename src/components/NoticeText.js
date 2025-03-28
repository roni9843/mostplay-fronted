import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const NoticeTextStyled = styled.div`
  overflow: hidden;
  div {
    white-space: nowrap;
    animation: ${scroll} 10s linear infinite;
    display: flex;
    align-items: center;
   
  }
`;

export default function NoticeText() {
  return (
    <div className='d-flex mt-4'>
    <div className='px-2'>
    🔥
    </div>
    <NoticeTextStyled>
    <div>
      ! MostPlay-এ স্বাগতম, বাংলাদেশের অন্যতম বিশ্বস্ত অনলাইন গেমিং অ্যাপ! সাইন আপ করে উপভোগ করুন স্লট গেমে দৈনিক ৬৫০% বোনাস এবং ৩.২৫% আনলিমিটেড ডিপোজিট বোনাস। এছাড়াও রয়েছে ২৪/৭ নন-স্টপ ডিপোজিট এবং উইথড্র সুবিধা!
    </div>
  </NoticeTextStyled>
    </div>

  );
}


