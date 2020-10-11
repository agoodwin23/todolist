import React, { useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  const [currentTitle, setCurrentTitle] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  const handleAdd = () => {
    if (currentTitle === '') alert("Please add a title!");
    else if (currentDescription === '') alert("Please add a description!");
    else if (currentDate === '') alert("Please add a date!")
    else {
      setList([
        ...list,
      {
        title: currentTitle,
        description: currentDescription,
        date: currentDate,
      },
    ]);
    setCurrentTitle('');
    setCurrentDescription('');
    setCurrentDate('');
    }
  };

  const ToDoItem = ({ item }) => {
    const [checkedOff, setCheckedOff] = useState(false);

    const handleCheckOff = () => {
      setCheckedOff(!checkedOff);
    };
  
    const handleDelete = () => {
      const newArray = [];
      list.forEach((i) => {
        if (i !== item) newArray.push(i);
      });
      setList(newArray);
    };

    return(
      <div style = {{ 
        textAlign: "center", 
        border: "2px solid black", 
        padding: "20px",
        minWidth: "200px",
        background: "lightyellow"}}>
        {checkedOff ? (
          <h1><strike>{item.title}</strike></h1>
        ) : (
          <>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.date}</p>
          </>
        )}
        <button onClick={handleCheckOff} style={{margin: "10px"}}>Check Off</button>
        <button onClick={handleDelete} style={{margin: "10px"}}>Delete</button>
      </div>
    );
  }; 

  return(
    <div style = {{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <input type="text" placeholder = "Title" value={currentTitle} onChange={(e) => setCurrentTitle(e.target.value)}/>
      <input type="text" placeholder = "Description" value={currentDescription} onChange={(e) => setCurrentDescription(e.target.value)}/>
      <input type="text" placeholder = "Date" value={currentDate} onChange={(e) => setCurrentDate(e.target.value)}/>
      <button onClick={handleAdd} style={{margin: "10px"}}>Add To-Do Item</button>
      {list.map((item) => (<ToDoItem item={item}/>))} 
    </div>
  )
}

export default App;