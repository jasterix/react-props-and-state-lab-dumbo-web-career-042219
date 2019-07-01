import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  state = {
    pets: [],
    filters: {
      type: 'all'
    }
  }

  // componentDidMount() {

    // let cat_url = "/api/pets?type=cat"
    // let dog_url = "/api/pets?type=dog"
    // let micropig_url = "/api/pets?type=micropig"

    fetchPets = () => {
      let url = "/api/pets"
      if(this.state.filters.type !=='all') {
        url += `?type=${this.state.type}`
      } else {
        url = "/api/pets"
      }

      fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({pets:data})
        console.log(url);
      })
    }

  onChangeType =(e) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: e.target.value
      }
    });
  };


  render() {

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>


        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">


              <Filters type={this.state.filters.type} onChange={this.onChange} onFetchPets={this.fetchPets} />


            </div>
            <div className="twelve wide column">


              <PetBrowser pets={this.state.pets} />


            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
