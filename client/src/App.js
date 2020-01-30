import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';
import './App.css';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="container">

        SpaceX
        <Launches/>
        <Route exact="/" component={Launches}/>
        <Route exact="/launch:flight_number" component={Launch}/>
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
