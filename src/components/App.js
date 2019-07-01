import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  state = {
    allPets: [],
    pets: [],
    filters: {
      type: 'all'
    }
  }

  componentDidMount() {
    this.fetchPets()
  }

    // let cat_url = "/api/pets?type=cat"
    // let dog_url = "/api/pets?type=dog"
    // let micropig_url = "/api/pets?type=micropig"

    fetchPets = () => {
      let url = "/api/pets"
      if(this.state.filters.type !=='all') {
        url += `?type=${this.state.type}`
        console.log(url);
      } else {
        url = "/api/pets"
      }

      fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({pets:data, allPets: data})

      })
    }


  onChangeType =(e) => {
    this.setState({pets: this.state.allPets})
    console.log(this.state.pets)

    let type = e.target.value;
    let filteredPets = this.handleFilter(type)

    this.setState({pets:filteredPets})
  }

  handleFilter = (type) => {

    let filteredPets = this.state.pets.filter(pet=> {
      return pet.type === type
    })
    return filteredPets
    console.log(filteredPets);
  }

  getAll = () => {
    let allPets = this.state.allPets
  }

  render() {

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>

        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">


              <Filters type={this.state.filters.type} onChange={this.onChangeType} onFetchPets={this.fetchPets} />


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
