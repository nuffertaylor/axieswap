import React, {useState} from 'react';
import Video from '../../assets/videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper, HeroH1, HeroP, ArrowForward, ArrowRight } from './HeroElements';
import {Button} from '../Button/ButtonElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return(
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
          <HeroP>Build your team</HeroP>
          <HeroBtnWrapper>
            <Button to='connectwallet' onMouseEnter={onHover} onMouseLeave={onHover} primary='true'>
              Connect Wallet {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
};

export default HeroSection;
