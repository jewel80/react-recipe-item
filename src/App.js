import React, { Component } from 'react';
import './App.css';
import { recipes } from './tempList';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';


 class App extends Component {
  state ={
    recipes: []
  }


  render() {
    return (
      <React.Fragment>
        <RecipeList />
        <RecipeDetails />
      </React.Fragment>
    )
  }
}

export default App;