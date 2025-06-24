import { useState } from 'react'

function App() {
  const [clickValue,setClickValue]= useState(false);

function clickCheck(){
  setClickValue(true);
}


  function AddTag(){
    const [tagInput,setTagInput]= useState('');
    const [tag,setTag]= useState('');

    function handleClick(){
      setTag(tagInput);
    }
    return(
      <>
      <input
      type='text'
      placeholder='tag name...'
      onChange={(e)=>setTagInput(e.target.value)}/>

      <button
      onClick={handleClick}>Create Tag</button>

         <div>
      <p>{tag}</p>
    </div>
      </>
    )
  }
  


  return (
    <>
    <div>
      <button
      onClick={clickCheck}>Add Tag</button>
    </div>

    {(clickValue && <AddTag/>)}
    </>
  )
}

export default App
