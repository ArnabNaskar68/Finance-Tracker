import { useState } from 'react'

function App() {
  const [userExp, setUserExp] = useState(0); // direct user input expenses stored
  const [inputData, setInputData] = useState([]); // to store the overall input in an object form

  const tagArr = [{
    id: 1,
    name: 'Groceries'
  }, {
    id: 2,
    name: 'Shopping'
  }, {
    id: 3,
    name: 'Entertainment'
  }]
  
  const [globalTag, setGlobalTag] = useState([...tagArr]); //to record all the tags that has been used
  const [tempTag, setTempTag] = useState([]); // to store all the user created tags

  function clickHandler(e) {
    e.preventDefault();
    createInputObj();
  }

  function createInputObj() {
    const inputId = Math.floor(Math.random() * Date.now() * 100000);
    const inputObj = {
      id: inputId,
      input: userExp,
      tagid: tempTag
    }
    setInputData(prevInputData => [...prevInputData, inputObj]);
  }

  const [clickValue, setClickValue] = useState(false); // change the value of clickValue accordingly for component create pop up

  function clickCheck() { //update clickvalue for returning tag create component
    setClickValue(true);
  }

  function AddTag() { // component that holds the section for creating the tag
    const [tagInput, setTagInput] = useState(''); //to store the onchange tag value

    function handleClick() {
      if (tagInput.trim()) {
        createTag(tagInput);
        setTagInput(''); // Clear input after creating tag
      }
    }

    function createTag(tagName) {
      const tagUniqueId = Date.now();
      const tagObj = {
        id: tagUniqueId,
        name: tagName
      }
      // Use functional updates to avoid stale closure issues
      setTempTag(prevTempTag => [...prevTempTag, tagObj]);
      setGlobalTag(prevGlobalTag => [...prevGlobalTag, tagObj]);
    }

    return (
      <div>
        <input
          type='text'
          value={tagInput}
          placeholder='tag name...'
          onChange={(e) => setTagInput(e.target.value)} />

        <button
          onClick={handleClick}>Create Tag</button>
      </div>
    )
  }

  return (
    <div>
      <div>
        <div>
          <div>
            <input
              type='number'
              placeholder='input expenses..'
              onChange={(e) => setUserExp(e.target.value)} />

            <button
              onClick={clickHandler}>Submit</button>
          </div>
          <ol>
            {tempTag.map(iterator => (
              <li key={iterator.id}>{iterator.name}</li>
            ))}
          </ol>
        </div>

        {/* create and add tags section each slide */}
        <div>
          <button
            onClick={clickCheck}>Add Tag</button>
        </div>

        {clickValue && <AddTag />}
      </div>

      {/* list or slides of data of past inputs */}
      <ol>
        {inputData.map(iterator => ( //to display all the input datas in list format
          <li key={iterator.id}>
            {iterator.input}
            <ol>
              {iterator.tagid.map(i => (
                <li key={i.id}>{i.name}</li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default App