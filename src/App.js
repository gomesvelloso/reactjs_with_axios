import React, { Component } from 'react';
import './App.css';
import {withRouter} from 'react-router-dom';

class App extends Component {
  render() {
    const menuitems = [
      {
         label:'Especialdiades',
         icon:'pi pi-fw pi-home',
         command:() => this.props.history.push('/')
      },
      {
         label:'Medicos',
         icon:'pi pi-fw pi-user',
         command:() => this.props.history.push('/medicos')
      }
   ];
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        <div id="main">
            <main>
                <div className="content" id="content">
                    {this.props.children}
                </div>
            </main>
        </div>
      </div>
    );
  }
}

export default withRouter(App);