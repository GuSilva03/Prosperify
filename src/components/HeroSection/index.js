import React, {useState} from 'react'
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import { Button } from '../ButtonElements';
function HeroSection() {
const [hover, setHover] = useState(false)

const onHover = () =>{
  setHover(!hover)
}
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg src={Video} autoPlay loop type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Prosperify</HeroH1>
        <HeroP>
        Potencialize seu patrimônio. Recursos e orientações para investimentos inteligentes e crescimento financeiro.
        </HeroP>
      <HeroBtnWrapper>
        <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
          Vamos lá {hover ? <ArrowForward/> : <ArrowRight/>}
        </Button>
      </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};
export default HeroSection;
