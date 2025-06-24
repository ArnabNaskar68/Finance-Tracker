import { useState } from 'react'

function App() {
  const [userExp,setUserExp]=useState(0); // direct user input expances stored
  const [finalExp,setFinalExp]=useState(0); //to pass the final value when submit is clicked
  const [inputData,setInputData] =useState([]); // to store the overall input in an object form

    const tagArr=[{
    id:1,
    name:'Groceries'
  },{
    id:2,
    name:'Shopping'
  },{
    id:3,
    name:'Entertainment'
  }]
  const [globalTag,setGlobalTag]= useState([...tagArr]); //to record all the tags that has been used
  const [tempTag, setTempTag]= useState([]);// to store all the user created tags

function clickHandler(e){
  e.preventDefault();
  setFinalExp(userExp);
  createInputObj();
}
function createInputObj(){
  const inputId=Math.floor(Math.random()*Date.now()*100000);
  const inputObj={
    id:inputId,
    input:finalExp,
    tagid:tempTag
  }
  setInputData(...inputData,inputObj);
}

  const [clickValue,setClickValue]= useState(false); // change the value of clickValue accordingly for component create pop up

function clickCheck(){ //update clickvalue for returning tag create component
  setClickValue(true);
}

  function AddTag(){ // component that holds the section for creating the tag
    const [tagInput,setTagInput]= useState(''); //to store the onchange tag value
    const [tag,setTag]= useState(''); //to store the final tag value on clicking the "create tag" button

    function handleClick(){
      setTag(tagInput);
      createTag();
    }
    function createTag(){
      const tagUniqueId=Date.now();
      const tagObj={
        id:tagUniqueId,
        name:tag
      }
      setTempTag([...tempTag,tagObj]);
      setGlobalTag([...globalTag,tagObj]);
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
    <div><div>
      <form onSubmit={(e)=>clickHandler(e)}>
        <input
        type='number'
        placeholder='input expences..'
        onChange={(e)=>setUserExp(e.target.value)}/>

        <button
        type='submit'>Submit</button>
      </form>
      {tempTag.map(iterator=>{
        <p>{iterator.name}</p>
      })}
    </div>

    {/* create and add tags section each slide */}
    <div>
      <button
      onClick={clickCheck}>Add Tag</button>
    </div>

    {clickValue && <AddTag/>}
    </div>

    {/* list or slides of data of past inputs */}
    <ol>
    {inputData.map(iterator=>{
      <li id={iterator.id}>{iterator.name}<ol>{iterator.tagid.map(i=>{<li>{i.name}</li>})}</ol> </li>
    })}
    </ol>
    </>
  )
}

export default App
