import React from 'react'

function NotePreview({id , note}) {
  return (
    <div className='notePreview'>
        <div className="noteName-heading-preview">{note.name}</div>
    </div>
  )
}

export default NotePreview
