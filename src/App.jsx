import Cabecalho from "./components/Cabecalho"
import Corpo from "./components/Corpo"
import RodaPe from "./components/RodaPe"

const App =()=> {
  return (
    <div className="min-h-screen flex flex-col">
      <Cabecalho />
      <Corpo />
      <RodaPe />
    </div>
  )
}
export default App