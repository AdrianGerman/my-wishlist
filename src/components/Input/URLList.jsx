import React, { useState, useEffect } from "react"
import { URLInput } from "./URLInput"
import { DeleteComponent } from "../DeleteComponent"
import { EditComponent } from "../EditComponent"

export const URLList = ({ storeId }) => {
  const [urls, setUrls] = useState(() => {
    const savedUrls = localStorage.getItem(`urls_${storeId}`)
    return savedUrls ? JSON.parse(savedUrls) : []
  })

  useEffect(() => {
    localStorage.setItem(`urls_${storeId}`, JSON.stringify(urls))
  }, [urls, storeId])

  const addUrlToList = ({ url, title, storeId }) => {
    setUrls((prevUrls) => {
      const updatedUrls = [...prevUrls, { url, title, storeId }]
      localStorage.setItem(`urls_${storeId}`, JSON.stringify(updatedUrls))
      return updatedUrls
    })
  }

  const removeUrl = (index) => {
    const newUrls = urls.filter((_, idx) => idx !== index)
    setUrls(newUrls)
    localStorage.setItem(`urls_${storeId}`, JSON.stringify(newUrls))
  }

  const updateUrl = (index, title, url) => {
    const updatedUrls = [...urls]
    updatedUrls[index] = { ...updatedUrls[index], title, url }
    setUrls(updatedUrls)
    localStorage.setItem(`urls_${storeId}`, JSON.stringify(updatedUrls))
  }

  return (
    <>
      <URLInput onAddUrl={addUrlToList} storeId={storeId} />
      <ul className="space-y-2">
        {urls.map((item, index) => (
          <li
            key={index}
            className="bg-[#282828] p-3 rounded-lg flex justify-between items-center"
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              {item.title || item.url}
            </a>
            <section>
              <EditComponent
                url={item.url}
                title={item.title}
                index={index}
                onUpdate={updateUrl}
              />
              <DeleteComponent onDelete={removeUrl} index={index} />
            </section>
          </li>
        ))}
      </ul>
    </>
  )
}
