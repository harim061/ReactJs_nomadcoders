import React, { useState } from 'react';

const App3 = () => {
    const [toDo, setToDo] =useState("");
    const [toDos,setToDos] = useState([]);
    
    const onChange =(event)=>{
        setToDo(event.target.value)
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        if(toDo ===""){
            return;
        }
        setToDo("");
        setToDos(currentArray => [toDo,...currentArray])
    };

    const deleteBtn=(index)=>{

        setToDos(toDos.filter((item,toDosIndex)=>
                index !== toDosIndex
            )
        )
    }

    console.log(toDos);
    return (
        <div>
            <h1>My To Dos({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    value={toDo}
                    placeholder="write your todo"
                    onChange={onChange}>
                </input>
                <button>Add toDo</button>
            </form>
            <hr/>
            {toDos.map((item,index)=>
                <li key={index}>{item}
                <button onClick={()=>deleteBtn(index)}>Delete</button></li>
            )}
        </div>
    );
};

export default App3;