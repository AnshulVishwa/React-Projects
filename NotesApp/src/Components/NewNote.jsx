import React, { useEffect, useState } from 'react'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';  
import { v4 as uuid } from "uuid"

function NewNote({id}) {
  const [ value , setValue ] = useState("")
  const [ noteID , setNoteID ] = useState(null)
  const [ noteName , setNoteName ] = useState("")
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      ['clean']
    ]
  };
  useEffect( () => {
    id ? setNoteID(id) : setNoteID(() => uuid())
  } , [] )
  useEffect( () => {console.log(value)} , [value] )
  function handleSaveNotes(){
    const getNote = localStorage.getItem( note )
    if( value == "" ) {
      alert("Note cant be empty")
      return
    } 
    const obj = {
      id : noteID,
      name : noteName,
      text : value
    }
    if( getNote ){
      localStorage.removeItem(noteID)
      localStorage.setItem( "note" , obj )
    } else {
      localStorage.setItem( "note" , obj )
    }
    alert("Notes Saved")
  }
  return (
    <div className="newnoteDiv">
      <input 
        className='note-name' 
        type="text" 
        placeholder='Give Your Note a Name' 
        value={noteName}
        onChange={(e) => setNoteName(e.target.value) }
      />
      <ReactQuill theme='snow' value={value} onChange={setValue} modules={modules}/>
      <div className="feautures flex">
        <button onClick={handleSaveNotes} className='save-notes'>Save</button>
        <button onClick={() => setValue("")} className='delete-notes'>Delete</button>
        <div className="undoRedo-notes flex">
          <svg className='undo' xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M240 424v-96c116.4 0 159.39 33.76 208 96c0-119.23-39.57-240-208-240V88L64 256Z"/></svg>
          <span className='line'></span>
          <svg className='redo' xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96Z"/></svg>
        </div>
      </div>
    </div>
  )
}


export default NewNote
