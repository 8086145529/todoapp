

import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) { // ivide functional componentinte argumentil props koduthal mathramann nammuk parent 
  const [input, setInput] = useState(props.edit ? props.edit.value : '');// //  This is the mandatory step 1
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => { //  This is the mandatory step 4
    setInput(e.target.value);
  };

  const handleSubmit = e => { // form tagile onSubmit enna event mayittan ee e.preventDefault() ulla function bind cheyunnath.Ith cheyunnath reloading of the whole page/i.e the form prevent cheyan vendiyan
    e.preventDefault(); 

    props.onSubmit({ // onSubmit comes from the the parent component TodoList that contains this TodoForm tag indicating child component.Parent componentil Onsubmitil koduthittula data child componentil access cheyanamenkil props child componentil use cheyendathayitt varum
      id: Math.floor(Math.random() * 10000),//random generates a number between 0 and 1, that isn't a whole number, and also excluding 1. To get a number, for example between 0 and 10, multiply your answer by 10: Math. random() * 10.To get it to be a whole number, i.e. an integer, apply Math. floor, which rounds down to the nearest whole number.Eg.1. .8 , .8 * 10 = 8 ,Math.floor(8)=8 , 2. .85 , .85 * 10 = 8.5 , Math.floor(8.5) = 8
      text: input
    });
    setInput(''); // onSubmitinte handleSubmit functionte ullil thanne setInput('') empty string aayi update cheyunnathinte karanam enthennal submit cheyth kazhiyumbol inputinte value empty aayi varanam athinn.allathe nammal enter cheytha value submit cheyth kazhijittum ath pole thanne input boxil undkanam padilla,ath mattanam 
  };

  return (
    // or onSubmit={(e)=>{handleSubmit(e)}
  
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input} // This is the mandatory step 2
            onChange={handleChange}// This is the mandatory step 3
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;