const sectionsData = [
  {
    name: "Amazon",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  {
    name: "Mercado Libre",
    img: "https://rappicard.mx/wp-content/uploads/2024/10/logo-mercado-libre.png"
  },
  {
    name: "Aliexpress",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Aliexpress_logo.svg/2560px-Aliexpress_logo.svg.png"
  },
  {
    name: "Temu",
    img: "https://1000marcas.net/wp-content/uploads/2023/11/Temu-Logo.png"
  },
  {
    name: "Steam",
    img: "https://1000marcas.net/wp-content/uploads/2020/10/Steam-Logo.png"
  },
  {
    name: "Otros",
    img: "https://cdn-icons-png.flaticon.com/512/7580/7580377.png"
  }
]

export const Main = () => {
  return (
    <section className="grid grid-cols-3 grid-rows-2 gap-4 h-screen p-4">
      {sectionsData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center rounded-2xl shadow-2xl w-full h-full aspect-square overflow-hidden"
        >
          <p className="text-3xl font-bold">{item.name}</p>
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
