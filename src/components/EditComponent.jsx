import React, { useState } from "react"
import { EditProductModal } from "./modals/EditProductModal"
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
      <EditProductModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onUpdate={handleUpdate}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newUrl={newUrl}
        setNewUrl={setNewUrl}
      />
    </>
  )
}
