import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import { Corpo } from './styled'



export default class App extends React.Component {

  state = {
    personagems: []
  }

  async componentDidMount() {
    const api = axios.create({baseURL: 'http://localhost:21262/api/users?page=1'});
    const response = await api.get('');
    this.setState({ personagems: response.data.data });
  }

  render() {
    const { personagems } = this.state;
    return (
      <>
      <Header />
        <Corpo>
          {personagems.map(personagem =>(
            <div key={personagem.id}>
              <h2><strong>{personagem.id} - </strong>
              {personagem.first_name} {personagem.last_name}
              </h2>
              <img style={{borderRadius:50,width: 200,height: 300}} src={personagem.avatar}/>
              <p> email: {personagem.email}</p>
            </div> 
          ))} 
        </Corpo>
      </>
    );
  };
};

