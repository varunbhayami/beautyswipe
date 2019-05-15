import React from 'react';
import './App.css';
import Card from './components/Card'
import Counter from './components/Counter'
import {Container} from 'reactstrap'

class App extends React.Component{

    render() {
        return (
            <Container fluid>
                <Counter />
                <Card />
            </Container>
        )
      }
}
export default App;
