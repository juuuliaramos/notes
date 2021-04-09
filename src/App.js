import { Component } from 'react'
import Notes from './components/Notes.jsx/index.jsx'
import FormRegister from './components/FormRegister'

class App extends Component {
  render() {
    return (
      <section id="section-body-app">

        <FormRegister />
        <Notes />
      </section>
    )
  }
}

export default App
