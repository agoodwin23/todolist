import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

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
      <Card variant="outlined"
        style={{ textAlign: "center",  
        margin: "10px",
        padding: "15px",
        minWidth: "200px",
        background: "whitesmoke"}}>
        {checkedOff ? (
          <Typography variant="h4"><strike>{item.title}</strike></Typography>
        ) : (
          <>
            <Typography variant="h4">{item.title}</Typography>
            <Typography variant="body1">{item.description}</Typography>
            <Typography variant="body1">{item.date}</Typography>
          </>
        )}
        <Button variant="outlined" color="primary" onClick={handleCheckOff} style={{margin: "10px"}}>Check Off</Button>
        <Button variant="outlined" color="primary" onClick={handleDelete} style={{margin: "10px"}}>Delete</Button>
        </Card>
    );
  }; 

  return(
    <div style = {{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h3">To-Do List</Typography>
        <TextField
        style={{ margin: "10px", backgroundColor: "whitesmoke", width: "20vw" }} 
        type="text" 
        placeholder = "Title" 
        value={currentTitle} 
        onChange={(e) => setCurrentTitle(e.target.value)}
        />
      <TextField 
      style={{ margin: "10px", backgroundColor: "whitesmoke", width: "20vw" }} 
      type="text" 
      placeholder = "Description" 
      multiline 
      rowsMax={4}
      value={currentDescription} 
      onChange={(e) => setCurrentDescription(e.target.value)}
      />
      <TextField style={{ margin: "10px", backgroundColor: "whitesmoke", width: "20vw" }} 
      type="date" 
      placeholder = "Due Date" 
      value={currentDate} 
      onChange={(e) => setCurrentDate(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAdd} style={{margin: "10px"}}>Add To-Do Item</Button>
      {list.map((item) => (<ToDoItem item={item}/>))} 
    </div>
  )
}

export default App;
