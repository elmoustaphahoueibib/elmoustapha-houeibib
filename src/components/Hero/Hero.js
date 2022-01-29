import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Elmoustapha<br />
          Houeibib
        </SectionTitle>
        <SectionText>
        Je suis un développeur Web et un concepteur d'interface utilisateur (Front End) basé à Nouakchott, Mauritanie. Mon travail est axé sur la création de produits fonctionnels, fiables et interactifs à partir de zéro. 
        </SectionText>
        <Button onClick={props.handleClick}>En savoir</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;