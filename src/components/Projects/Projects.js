import React from 'react';
import styled from 'styled-components';

import FadeIn from '../shared/animations/FadeIn.js';

import Nav from '../shared/Nav.js';
import Header from '../shared/Header.js';
import Card from './Card.js'

const LastCard = styled(Card)`
  margin-bottom: 4.5rem;
`

export default function Projects(){ 
  return (
    <FadeIn>
      <Header title={"Projects"} />
      <Card 
        title="iZataari"
        date="June 2020"
        website="https://radio-zaatari.netlify.app/"
        organisation="Tech For Better, iZaatari"
        role="QA"
        about="A frontend REACT application to aid volunteers hosting workshops for a radio broadcasting station for refugees in Zataari. As quality assurance lead, we did extensive user testing to inform and refactor the design; wrote documentation and end-to-end tests in Cypress; as well as using ESLint, Prettier and CodeCov in our CI pipeline, and smaller unit/integration tests using Jest."
        githubURL="https://github.com/fac19/Zaatari-Radio"
        stack="React | Airtable | Netlify Lambda | Cypress | Chai | Mocha | Jest | Travis | Figma | Git | Jira | Notion"
      />
      {/* refactor props so that githubURL and stack are sent as arrays, and handled in Card.js appropriately */}
      <LastCard 
        title="Cardley"
        date="May 2020"
        website="https://cardley.netlify.app/"
        organisation="Founders and Coders"
        role="Scrum Master"
        about="Created a REACT flash card application and a RESTful API backend in an agile team. Implemented SCRUM methadologies for group work and user research. Designed the application using Figma prototyping."
        githubURL="https://github.com/fac19/Cardley"
        githubURL2="https://github.com/fac19/Cardley---backend"
        stack="React | Jest | Node | Express | postgreSQL | Travis | Heroku | Netlify | Git | GitHub | Figma"
      />
      <Nav />
    </FadeIn>
  );
}