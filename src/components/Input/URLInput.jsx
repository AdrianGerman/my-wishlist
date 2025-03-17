import React, { useState } from "react"
import { AddProductModal } from "../modals/AddProductModal"

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
      <AddProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        url={url}
        setUrl={setUrl}
      />
    </>
  )
}
