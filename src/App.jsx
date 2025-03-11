import { Main } from "./components/Main"
import "./App.css"

function App() {
  return (
    <main className="container mx-auto p-4 flex flex-col gap-6">
      <h1 className="text-6xl">My wishlist</h1>
      <Main />
    </main>
  )
}

export default App
