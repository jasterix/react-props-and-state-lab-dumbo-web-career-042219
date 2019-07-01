import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {

    let pet = this.props.pets.map(pet => (
      <Pet
        key={pet.id}
        type={pet.type}
        name={pet.name}
        age={pet.age}
        weight={pet.weight}
        />

    ))

    return <div className="ui cards">

      {pet}

    </div>
  }
}

export default PetBrowser
