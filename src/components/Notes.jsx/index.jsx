import { Component } from 'react'
import CardNote from '../CardNote'

export default class Notes extends Component {
  render() {
    return (
      <ul>
        <li>
          <CardNote />
        </li>
      </ul>
    )
  }
}
