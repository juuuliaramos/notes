import Notas from './components/Notas.jsx/index.jsx'

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Título da Nota" />
        <textarea placeholder="Escrava o conteúdo da sua nota..." />
        <button>Criar Nota</button>
      </form>

      <Notas />
    </section>
  )
}

export default App
