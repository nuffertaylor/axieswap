import React from 'react';
import {Button} from '../../components/Button/ButtonElements'
import { InfoContainer, ImgWrapper, InfoWrapper, InfoRow, Column1, Column2, BtnWrapper, TextWrapper, TopLine, Heading, Subtitle, Img  } from './infoElements';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, darkText, buttonLabel, img, alt, headline, description, primary, dark, dark2}) => {
  return(
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrapper>
                                <Button to='home'
                                    smooth={true}
                                    duration={500}
                                    syp="true"
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</Button>
                            </BtnWrapper>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrapper>
                            <Img src={img} alt={alt}/>
                        </ImgWrapper>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>   
    </>
  )
};

export default InfoSection;
