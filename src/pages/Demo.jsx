import { useState } from 'react'

const initialItems = ['Learn React', 'Build a demo app', 'Ship it']

function Demo() {
  const [items, setItems] = useState(initialItems)
  const [text, setText] = useState('')

  function addItem(event) {
    event.preventDefault()
    const value = text.trim()
    if (!value) return
    setItems([...items, value])
    setText('')
  }

  function removeItem(index) {
    setItems(items.filter((_, i) => i !== index))
  }

  return (
    <section id="demo">
      <h1>Demo page</h1>
      <p>A basic example of React state, forms, and list rendering.</p>

      <form onSubmit={addItem} className="demo-form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add an item"
        />
        <button type="submit">Add</button>
      </form>

      <ul className="demo-list">
        {items.map((item, index) => (
          <li key={item + index}>
            {item}
            <button type="button" onClick={() => removeItem(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Demo
