import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implementar la funcionalidad requerida

class App extends Component {
  constructor() {
    super()

    this.state = {
      initialPosts: posts,
      filterPosts: []
    }

    this.updatedPosts = this.updatedPosts.bind(this)
  }

  updatedPosts(e) {
    let updatedPosts = this.state.initialPosts

    updatedPosts = updatedPosts.filter(post =>
      post.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1
    )

    this.setState({
      filterPosts: updatedPosts
    })
  }

  componentWillMount() {
    this.setState({ filterPosts: this.state.initialPosts })
  }

  render() {
    return (
      <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda" onChange={this.updatedPosts} />
        </div>
        <ul>
          { this.state.filterPosts.map((post, i) => 
            <li key={i}>
              <a href={post.url}><img src={post.image} alt={ post.title } /></a>
              <p>{ post.title }</p>
            </li>
          ) }
        </ul>
      </div>
    )
  }
}


export default App


