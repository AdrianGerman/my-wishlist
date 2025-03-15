import React, { useState } from "react"
import { EditIcon } from "./icons/Edit"

export const EditComponent = ({ url, title, index, onUpdate }) => {
  const [showModal, setShowModal] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const [newUrl, setNewUrl] = useState(url)

  const handleUpdate = () => {
    onUpdate(index, newTitle, newUrl)
    setShowModal(false)
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="ml-4 bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded cursor-pointer"
      >
        <EditIcon />
      </button>
      {showModal && (
        <div className="fixed inset-0 overflow-y-auto h-full w-full flex justify-center items-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          <div className="bg-[#333333] p-5 rounded-lg shadow-lg max-w-md w-full z-10 relative">
            {" "}
            <h3 className="font-bold text-lg text-white">Editar URL</h3>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Nuevo título"
              className="w-full p-2 mt-4 border border-gray-500 rounded-md bg-gray-700"
            />
            <textarea
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              placeholder="Nueva URL"
              className="w-full h-32 p-2 mt-2 border border-gray-500 rounded-md bg-gray-700"
            />
            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-600 hover:bg-gray-800 font-bold py-2 px-4 rounded cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={handleUpdate}
                className="bg-green-500 hover:bg-green-700 font-bold py-2 px-4 rounded cursor-pointer"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
