import React, { Component } from 'react'

class Photos extends Component {
  render() {
    return (
      <div>
        Photos
        <ul>
          <li>
            <img src="https://images.unsplash.com/photo-1538489949601-cbabf5b0c105?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3806bdae2a65a3830ea6ea1f084610c3&auto=format&fit=crop&w=1400&q=60" />
          </li>
          <li>
            <img src="https://images.unsplash.com/photo-1496413651143-777c348e8329?ixlib=rb-0.3.5&s=f34df100a6e1e5173f454cf13e84a931&auto=format&fit=crop&w=1572&q=80" />
          </li>
        </ul>
      </div>
    )
  }
}

export default Photos
