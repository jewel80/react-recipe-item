import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import './App.css';
import RecipeDetails from './components/RecipeDetails';
import { recipes } from './tempList';


 class App extends Component {
  state ={
    // recipes: [],
    recipes: recipes,
    url: "http://192.168.0.101:93/getEmployeeData",

    details_id: 35382,
  }

  // async getRecipes(){
  //   try{
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  //     this.setState({
  //       recipes: jsonData
  //     })
  //   }catch (error){
  //     console.log(error);
  //   }
  // }

  // componentDidMount(){
  //   this.getRecipes()
  // }


  render() {
    console.log(this.state.recipes);
    return (
      <React.Fragment>
        {/* <RecipeList recipes={this.state.recipes}/> */}
        <RecipeDetails id={this.state.details_id}/>
      </React.Fragment>
    )
  }
}

export default App;