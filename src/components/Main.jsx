import { sectionsData } from "../data/store"

export const Main = () => {
  return (
    <section className="grid grid-cols-3 grid-rows-2 gap-4 p-4">
      {sectionsData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center rounded-2xl shadow-2xl w-full h-full aspect-square overflow-hidden"
        >
          <img
            src={item.img}
            alt={`${item.name} logo`}
            className="w-40 max-w-full"
          />
        </div>
      ))}
    </section>
  )
}
