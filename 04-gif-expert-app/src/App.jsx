import { useState } from 'react'
import './App.css'
import { AddCategory, GifGridCategory } from "./components/Gif";
import { nanoid } from 'nanoid'

const DEFAULT_CATEGORIES = [
  {
    name: 'One Puch',
    id: nanoid()
  }
]
function App() {

  const [categories, setCategories] = useState(DEFAULT_CATEGORIES)

  const handleAddCategory = (category) => {
    const newCategory = {
      name: category,
      id: nanoid()
    }
    setCategories(categories => [newCategory, ...categories]);
  }

  return (
    <div>
     <h1>GifExpertApp</h1> 
     <AddCategory handleAddCategory={handleAddCategory}></AddCategory>
     {/* React recommends not use the parameter index for the keys, because it could be a problem when the list changes. The best way is use a unique key, like the id of the object brought out of the npm package or the db. */}
     <ol>
      {
        categories.map(({ id, name}) => <GifGridCategory key={id} category={name}></GifGridCategory>)
      }
     </ol>
    </div>
  )
}

export default App
