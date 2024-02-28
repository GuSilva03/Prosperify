import React from 'react'
import icon1 from '../../images/svg-7.svg'
import icon2 from '../../images/svg-8.svg'
import icon3 from '../../images/svg-9.svg'
import { ServicesContainer, ServicesCard, ServicesH1,ServicesH2,ServicesIcon,ServicesP,ServicesWrapper} from './ServiceStyles';
const Services= () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Outros Serviços</ServicesH1>
    <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={icon1}/>
            <ServicesH2>Reduces expences</ServicesH2>
            <ServicesP>
            A Solução para uma Gestão Financeira Eficiente.
            </ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={icon2}/>
            <ServicesH2>Virtual Office</ServicesH2>
            <ServicesP>
            Onde a flexibilidade encontra a produtividade para um ambiente de trabalho sem fronteiras.
            </ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={icon3}/>
            <ServicesH2>Premium beneficits</ServicesH2>
            <ServicesP>
            Oferecendo Experiências Exclusivas e Valor Superior.
            </ServicesP>
        </ServicesCard>
    </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;
