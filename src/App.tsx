import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import DndLayout from "./layouts/dnd-layout"
import './index.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DndLayout />
    </DndProvider>
  )
}

export default App
