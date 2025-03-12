import { Link } from "react-router-dom"
import { sectionsData } from "../data/store"

export const Main = () => {
  return (
    <section className="grid grid-cols-3 grid-rows-2 gap-4 p-4">
      {sectionsData.map((item, index) => (
        <Link
          to={item.path}
          key={index}
          className="flex flex-col items-center justify-center bg-[#525252] rounded-2xl shadow-2xl w-full h-full aspect-square overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <img
            src={item.img}
            alt={`${item.name} logo`}
            className="w-60 max-w-full"
          />
        </Link>
      ))}
    </section>
  )
}
