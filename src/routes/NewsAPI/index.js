import React, { Component } from 'react';
import { List, Container, Divider, Button } from 'semantic-ui-react';
import './index.css';


class NewsAPI extends Component
{
  render()
  {
    return(
      <div>
       <Container>
            <List floated='right' horizontal>
            <List.Item href='GetStarted'>Click Me To Fetch Data</List.Item>
            <List.Item href='#'>Documentation</List.Item>
            <List.Item href='NewsSource'>NewsSource</List.Item>
            <List.Item href='#'>Pricing</List.Item>
            </List>
            <List horizontal>
            <List.Item href='#'><b>News API</b></List.Item>
            </List>
            <Divider />
            <p class="center">Search worldwide news <br /> </p>
            <p class="centersub">Get breaking news headlines & search for articles from over 30,000 news sources and blogs with our news API </p>

       </Container>
      </div>
    )
  }
}


export default NewsAPI;
