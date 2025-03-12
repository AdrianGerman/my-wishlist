import { AppRoutes } from "./routes/routes"
import "./App.css"

function App() {
  return (
    <main className="container mx-auto p-4 flex flex-col gap-6">
      <h1 className="text-6xl font-bold">My wishlist</h1>
      <AppRoutes />
    </main>
  )
}

export default App
