import React, { useState, useEffect } from "react"
import { URLInput } from "./URLInput"

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

  return (
    <>
      <URLInput onAddUrl={addUrlToList} storeId={storeId} />
      <ul className="space-y-2">
        {urls.map((item, index) => (
          <li key={index} className="bg-[#282828] p-3 rounded-lg">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              {item.title || item.url}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
