export const Main = () => {
  return (
    <>
      <section className="grid grid-cols-3 gap-4">
        <div className="w-80 h-80 border-3 rounded-2xl flex flex-col items-center justify-center gap-4">
          <p className="text-2xl">Amazon</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon logo"
            className="w-40"
          />
        </div>
        <div className="w-80 h-80 border-3 rounded-2xl flex flex-col items-center justify-center gap-4">
          <p className="text-2xl">Mercado libre</p>
          <img
            src="https://rappicard.mx/wp-content/uploads/2024/10/logo-mercado-libre.png"
            alt="Mercado libre logo"
            className="w-40"
          />
        </div>
        <div className="w-80 h-80 border-3 rounded-2xl flex flex-col items-center justify-center gap-4">
          <p className="text-2xl">Aliexpress</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Aliexpress_logo.svg/2560px-Aliexpress_logo.svg.png"
            alt="Aliexpress logo"
            className="w-40"
          />
        </div>
        <div className="w-80 h-80 border-3 rounded-2xl flex flex-col items-center justify-center gap-4">
          <p className="text-2xl">Temu</p>
          <img
            src="https://1000marcas.net/wp-content/uploads/2023/11/Temu-Logo.png"
            alt="Temu logo"
            className="w-40"
          />
        </div>
        <div className="w-80 h-80 border-3 rounded-2xl flex flex-col items-center justify-center gap-4">
          <p className="text-2xl">Steam</p>
          <img
            src="https://1000marcas.net/wp-content/uploads/2020/10/Steam-Logo.png"
            alt="Steam logo"
            className="w-40"
          />
        </div>
        <div className="w-80 h-80 border-3 rounded-2xl flex flex-col items-center justify-center gap-4">
          <p className="text-2xl">Otros</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/7580/7580377.png"
            alt="Other logo"
            className="w-40"
          />
        </div>
      </section>
    </>
  )
}
