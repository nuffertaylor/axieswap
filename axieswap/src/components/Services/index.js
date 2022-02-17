import React from 'react';
import { ServicesContainer, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH1, ServicesH2, ServicesP } from './ServicesElements';
import Icon1 from '../../assets/images/axie01.png'
import Icon2 from '../../assets/images/axie02.png'
import Icon3 from '../../assets/images/axie03.png'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>  
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Virtual Offices</ServicesH2>
                <ServicesP>Access our platform</ServicesP>  
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>Cash back</ServicesP>  
            </ServicesCard>
        </ServicesWrapper>    
    </ServicesContainer>
  )
};

export default Services;
