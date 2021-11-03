import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import './App.css';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from "./components/RecipeList";
import { recipes } from './tempList';


 class App extends Component {
  state = {
    recipes: recipes,
    base_url: "https://www.food2fork.com/api/search?key=YOURAPIKEY",
    url: "https://www.food2fork.com/api/search?key=YOURAPIKEY",
    pageIndex: 1,
    details_id: 35382,
    search: "",
    query: "&q="
  };

  async getRecipes() {
    try {
      console.log(this.state.url);

      const data = await fetch(this.state.url);
      const jsonData = await data.json();

      this.setState({
        recipes: jsonData.recipes
      });
    } catch (error) {
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
          return(<RecipeList 
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
  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    });
  };
  
  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { base_url, query, search } = this.state;
    this.setState(
      {
        url: `${base_url}${query}${search}`,
        search: ""
      },
      () => {
        this.getRecipes();
        console.log(this.state);
      }
    );
  };

  render() {
    // console.log(this.state.recipes);
    return (
      <React.Fragment>
        {this.displayPage(this.state.pageIndex)}
      </React.Fragment>
    )
  }
}

export default App;