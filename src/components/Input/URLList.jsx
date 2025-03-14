import React, { useState, useEffect } from "react"
import { URLInput } from "./URLInput"

export const URLList = () => {
  const [urls, setUrls] = useState(() => {
    const savedUrls = localStorage.getItem("urls")
    return savedUrls ? JSON.parse(savedUrls) : []
  })

  useEffect(() => {
    localStorage.setItem("urls", JSON.stringify(urls))
  }, [urls])

  const addUrlToList = ({ url, title }) => {
    setUrls((prevUrls) => {
      const updatedUrls = [...prevUrls, { url, title }]
      localStorage.setItem("urls", JSON.stringify(updatedUrls))
      return updatedUrls
    })
  }

  return (
    <>
      <URLInput onAddUrl={addUrlToList} />
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
