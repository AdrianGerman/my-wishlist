import React, { useState } from "react"

export const URLInput = ({ onAddUrl, storeId }) => {
  const [url, setUrl] = useState("")
  const [title, setTitle] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    onAddUrl({ url, title, storeId })
    setUrl("")
    setTitle("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <section className="flex gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ingrese el nombre del producto..."
          required
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Ingrese URL aquí..."
          required
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </section>
      <button
        type="submit"
        className="w-2/6 p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
      >
        Agregar URL
      </button>
    </form>
  )
}
