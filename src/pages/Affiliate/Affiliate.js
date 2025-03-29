import React from 'react'
import styled from 'styled-components'
import AffiliateHeader from './AffiliateHeader';
import AffiliateBanner from './AffiliateBanner';
import Affiliate_des from './Affiliate_des';
import Affiliate_product from './Affiliate_product';

const StyledAffiliate = styled.div`
  background-color: #0E2749;
  color: white;
  padding: 0.8rem 1.5rem;
  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`

export default function Affiliate() {
  return (
    <>
    <AffiliateHeader />
    <AffiliateBanner />
    <StyledAffiliate>
     <Affiliate_des />
     <Affiliate_product />
    </StyledAffiliate>
    </>

  )
}

