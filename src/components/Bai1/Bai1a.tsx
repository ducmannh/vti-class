import React from "react"

export default function Bai1a() {
    const element = React.createElement('h1', null, 'Hello world')
    const element2 = React.createElement('p', null, 'My first paragraph')
  return (
    <div>
        {element}
        {element2}
    </div>
  )
}