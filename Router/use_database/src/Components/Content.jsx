import React from 'react'
import DATA from '../Database/DATA'

function Content() {
  return (
    <>
          <h1>Content</h1>
        <main>
          {
            DATA.map( ( v , i ) => (
              <div key={i} className="product" id={`product${i+1}`}>
                <a href={`/${v.id}`}>{v.name}</a>
                <div>{v.price}</div>
                <div>{v.category}</div>
                <div>{v.subcategory}</div>
                <div>{v.description}</div>
              </div>
            ) )
          }
        </main>
    </>
  )
}

export default Content