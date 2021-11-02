import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import './App.css';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from "./components/RecipeList";
import { recipes } from './tempList';


 class App extends Component {
  state ={
    // recipes: [],
    recipes: recipes,
    // base_url: "https://www.food2fork.com/api/search?key=YOURAPIKEY",
    url: "https://www.food2fork.com/api/search?key=YOURAPIKEY",
    details_id: 35382,
    pageIndex:1,
    search:''
    
  }

  async getRecipes(){
    try{
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        recipes: jsonData
      })
    }catch (error){
      console.log(error);
    }
  }

  componentDidMount(){
    this.getRecipes()
  }

  displayPage = (index) => {
    switch(index){
      default:
        case 1:
          return( <RecipeList 
                  recipes={this.state.recipes} 
                  handleDetails={this.handleDetails}
                 value={this.state.search}
                 handleChange={this.handleChange}
                 handleSubmit={this.handleSubmit}
            />)
        case 0:
          return( <RecipeDetails 
                  id={this.state.details_id} 
                  handleIndex={this.handleIndex}
            />)
    }
  }

  handleIndex =  index => {
    this.setState({
      pageIndex:index
    })
  }

  handleChange = (e) => {
    console.log('handleChange')
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit')
  }

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    });
  };


  render() {
    console.log(this.state.recipes);
    return (
      <React.Fragment>

        {this.displayPage(this.state.pageIndex)}
        
      </React.Fragment>
    )
  }
}

export default App;