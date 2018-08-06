import React, { Component } from "react";
import { Card, Image, Header, Item } from "semantic-ui-react";
import Andy from "../img/andy.jpg";
import Will from "../img/will.jpg";
import Eugene from "../img/eugene.jpg";
import Matt from "../img/matt.jpg";
import Jenni from "../img/jenni.jpg";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Header as="h2">
          About us
          <Header.Subheader>
            An assorted mix of Kiwis (and an Aussie)
          </Header.Subheader>
        </Header>
        <p>
          Andy and Will met at Weir House during their first year at Victoria
          University back in 2004 and became fast friends. Over the past 14
          years they've played music together, lived together, and travelled
          together.
        </p>
        <p>
          Now they are embarking on a project to open access to legal data in
          New Zealand.
        </p>
        <Item.Group divided relaxed="very">
          <Item>
            <Item.Image src={Andy} />
            <Item.Content>
              <Item.Header>Andrew Easterbrook</Item.Header>
              <Item.Meta>
                <span className="date">CEO</span>
              </Item.Meta>
              <Item.Description>
                <p>
                  Andrew is a lawyer, and has worked in technology law, civil
                  litigation and family law since 2009.
                </p>
                <p>
                  He's been a Member of the Auckland Distrct Law Society
                  Technology &amp; Law Committee since 2012, and is experienced
                  in web and software development.
                </p>
                <p>
                  Andrew went to university at Victoria, Wellington, and now
                  lives in Whangarei.
                </p>
              </Item.Description>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image src={Will} />
            <Item.Content>
              <Item.Header>William Parry</Item.Header>
              <Item.Meta>
                <span className="date">CTO</span>
              </Item.Meta>
              <Item.Description>
                <p>
                  William brings 15 years of tech experience across enterprise,
                  advertising and small businesses including 8 years working
                  with open data in projects and hackathons.
                </p>
                <p>
                  He has run community coding classes and is passionate about
                  empowering disadvantaged people with technology.
                </p>
                <p>
                  William went to university at Victoria, Wellington, and now
                  lives in Sydney.
                </p>
              </Item.Description>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image src={Eugene} />
            <Item.Content>
              <Item.Header>Eugene Bulog</Item.Header>
              <Item.Meta>
                <span className="date">Developer</span>
              </Item.Meta>
              <Item.Description>
                <p>
                  Eugene joined the team in 2018, and has been working with data
                  parsing and code enhancements.
                </p>
                <p>
                  He lives in Auckland and is currently studying Software
                  Engineering and Finance at the University of Auckland. Eugene
                  has always had a strong interest in software, and a passion
                  for seeing interesting technology in action.
                </p>
              </Item.Description>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image src={Matt} />
            <Item.Content>
              <Item.Header>Matthew Frost</Item.Header>
              <Item.Meta>
                <span className="date">Database Developer</span>
              </Item.Meta>
              <Item.Description>
                <p>
                  Matt joined the team in 2018, and has been working on database
                  optimisation and reslience.
                </p>
                <p>
                  Matt Frost is a current Software Engineering student at the
                  University of Auckland. He has a wide range of technical
                  skills obtained from previous and ongoing work, and a passion
                  for problem solving.
                </p>
              </Item.Description>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image src={Jenni} />
            <Item.Content>
              <Item.Header>Jenni Harding</Item.Header>
              <Item.Meta>
                <span className="date">Developer</span>
              </Item.Meta>
              <Item.Description>
                <p>
                  Jenni Harding joined the team in 2018 and helps with the
                  front-end development of the website.
                </p>
                <p>
                  She is in her first year studying the Bachelor of Information
                  Communication and Technologies at UCOL in Palmerston North and
                  she is looking to gain real-world experience by working on the
                  OpenLaw NZ project
                </p>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </React.Fragment>
    );
  }
}

export default About;
