import React, { useState } from "react"
import { URLInput } from "./URLInput"

export const URLList = () => {
  const [urls, setUrls] = useState([])

  const addUrlToList = ({ url, title }) => {
    setUrls((prevUrls) => [...prevUrls, { url, title }])
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
