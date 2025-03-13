import React, { useState } from "react"

export const URLInput = ({ onAddUrl }) => {
  const [url, setUrl] = useState("")
  const [title, setTitle] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    onAddUrl({ url, title })
    setUrl("")
    setTitle("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ingrese el título del URL..."
        required
      />
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Ingrese URL aquí..."
        required
      />
      <button type="submit">Agregar URL</button>
    </form>
  )
}
