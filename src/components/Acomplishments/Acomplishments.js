import React from 'react';

import { LinkContainer, Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from '../Technologies/TechnologiesStyles';
import { Box, Boxes, BoxImages, BoxText } from './AcomplishmentsStyles';




const Acomplishments = () => (
  <Section>
    <SectionTitle>Association & programme</SectionTitle>
    <List>
      <ListItem>
      <ListTitle>Ambassador Programme</ListTitle>
        <picture>
        <img src="/images/gk.png" style={{width: "150px", height: "auto", marginright: "20px"}}/>
        </picture>
          <ListContainer>
            <ListParagraph>
            Gitkraken Ambassador Programme
            </ListParagraph>
          </ListContainer>
      </ListItem>
      
    </List>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
