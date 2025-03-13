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
      <ul>
        {urls.map((item, index) => (
          <li key={index}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title || item.url}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
