import React from 'react'

import banner_1 from '../assets/banner_1.jpg';
import banner_pc from '../assets/banner_pc_1.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




export default function HomePageSlider() {

const isDesktop = window.innerWidth >= 1024;
const bannerImage = isDesktop ? banner_pc : banner_1;

return (
  <div>
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      showArrows={false}
      infiniteLoop={true}
      interval={2500}
    >
      <div>
        <img src={bannerImage} alt="" />
      </div>
      <div>
        <img src={bannerImage} alt="" />
      </div>
      <div>
        <img src={bannerImage} alt="" />
      </div>
    </Carousel>
  </div>
);


}
