import React, { useState } from "react"

export const URLInput = ({ onAddUrl, storeId }) => {
  const [url, setUrl] = useState("")
  const [title, setTitle] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    onAddUrl({ url, title, storeId })
    setUrl("")
    setTitle("")
    setIsModalOpen(false)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <section className="flex items-center gap-4">
        <button
          onClick={handleOpenModal}
          className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded cursor-pointer"
        >
          +
        </button>
        <p>Agregar nuevo producto</p>
      </section>
      {isModalOpen && (
        <div className="fixed inset-0 overflow-y-auto h-full w-full flex justify-center items-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-[#333333] p-5 rounded-lg shadow-lg max-w-md w-full z-10 relative">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-bold text-lg text-white">
                Agregar nueva URL
              </h3>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ingrese el nombre del producto..."
                required
                className="w-full p-2 border border-gray-500 rounded-md bg-gray-700"
              />
              <textarea
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Ingrese URL aquí..."
                required
                className="w-full h-32 p-2 mt-2 border border-gray-500 rounded-md bg-gray-700"
              />
              <div className="flex justify-end space-x-4 mt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-600 hover:bg-gray-800 font-bold py-2 px-4 rounded cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 font-bold py-2 px-4 rounded cursor-pointer"
                >
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
