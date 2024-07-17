import React, { useState } from 'react';

function Main() {
    const [value, setValue] = useState('');
    const [alltodo, setAlltodo] = useState([]);
    const [ clicked , setClicked ] = useState(false)
    const [ lineThrough , setlineThrough ] = useState( false )
    const [ CompleteAnimation , setCompleteAnimation ] = useState( false )

    function saveEvent() {
        const trimmedValue = value.trim();
        if (trimmedValue === '') {
            alert('Please enter a valid TODO');
            return;
        }

        if (alltodo.includes(trimmedValue)) {
            alert('This TODO already exists');
        } else {
            setAlltodo([...alltodo, trimmedValue]);
        }
        setValue('');
    }
    function deleteThisTodo( v ){
        let newTodos = alltodo.filter( ( each ) => each !== v )
        setAlltodo( newTodos )
    }

    return (
        <main>
            <div className="upperSection">
                <div className="inputBox">
                    <input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="input"
                        placeholder="Enter to-do for Today"
                        type="text"
                    />
                    <button onClick={saveEvent} className="saveYourTo-do">Save</button>
                </div>
            </div>
            <div className="middleSection">
                <div className='contentSection'>
                    {alltodo.map((v, i) => (
                        <>
                            <div style={ { color : (clicked) ? "#4CAF50" : "white" , textDecoration : ( lineThrough ) ? "line-through" : "none" } } className='contents'>
                                <span>{i+1}.</span>
                                <div className="check">
                                    <i onClick={ ()=>setClicked( !clicked ) } style={ { color : (clicked) ? "green" : "white" } } className="fa-solid fa-circle"></i>
                                </div>
                                <div className='todos' key={i}>{v}</div>
                                <div className='done' onClick={ ()=>setlineThrough( !lineThrough ) }>
                                    <i class="fa-solid fa-xmark"></i>
                                </div>

                                <div className="delete" onClick={ ()=>deleteThisTodo( v ) }>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/hjbrplwk.json"
                                        trigger="hover"
                                        colors="primary:#848484,secondary:#4bb3fd,tertiary:#ebe6ef,quaternary:#3a3347">
                                    </lord-icon>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Main;
