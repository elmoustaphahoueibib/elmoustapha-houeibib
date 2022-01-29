import React from 'react';
import { DiAngularSimple, DiCss3, DiDjango, DiDocker, DiFirebase, DiGit, DiHtml5, DiJava, DiJavascript, DiKrakenjsBadge, DiMysql, DiPhp, DiPostgresql, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    
    <List>
      <ListItem>
        <picture>
          <DiHtml5 size="3rem" />
          <DiCss3 size="3rem" />
          <DiJavascript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience avec <br />
            Html5 <br />
            Css3 <br />
            JavaScript <br />

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJava size="3rem" />
          <DiPython size="3rem" />
          <DiPhp size="3rem" />
          <DiFirebase size="3rem" />
          <DiMysql size="3rem" />
          <DiPostgresql size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience avec <br />
            Java <br />
            Python <br />
            NodeJs <br />
            Databases <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAngularSimple size="3rem" />
          <DiReact size="3rem" />
          <DiDjango size="3rem" />
          <DiGit size="3rem" />
          <DiDocker size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Framework & Tools</ListTitle>
          <ListParagraph>
            Experience avec <br />
            Angular <br />
            React <br />
            Git <br />
            Docker <br />
            SpringBoot <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
