import { DeleteIcon } from "./icons/Delete"

export const DeleteComponent = ({ onDelete, index }) => {
  const handleDelete = () => {
    const confirmation = window.confirm(
      "¿Estás seguro de querer eliminar esta URL?"
    )
    if (confirmation) {
      onDelete(index)
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
    >
      <DeleteIcon />
    </button>
  )
}
