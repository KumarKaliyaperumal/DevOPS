import React, { Component } from 'react';

class WallStreet extends Component {
  constructor(probs) {
    super(probs)
    this.state = { items: [], isLoaded: false,}
  }
    componentDidMount() {
    fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=07ac0b6993674a1f89c59f5d04575e22')
    .then(res => res.json())

    .then(json => { this.setState({ isLoaded: true, items: json.articles, }) });
  }
  render()
  {
    var { isLoaded, items } = this.state;
    return (
      <div> {isLoaded ?
      (<ul> {items.map(item => (<li key={item.publishedAt}> Title: {item.title} | Author: {item.author} | URL: {item.url}
        </li>))} </ul>) : <div>Loading </div>
                   }
                  </div>
                 ) } }

export default WallStreet;
