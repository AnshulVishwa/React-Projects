import { useState , useEffect } from 'react'
import './App.css'
import { CheckCondition } from './CheckCondition'
function App() {
  const [ input1 , setInput1 ] = useState(null)
  const [ input2 , setInput2 ] = useState(null)
  const [ input3 , setInput3 ] = useState(null)
  const [ input4 , setInput4 ] = useState(null)
  const [ input5 , setInput5 ] = useState(null)
  const [ input6 , setInput6 ] = useState(null)
  const [ input7 , setInput7 ] = useState(null)
  const [ input8 , setInput8 ] = useState(null)
  const [ input9 , setInput9 ] = useState(null)
  const [ playGame , setPlayGame ] = useState(true)
  const [ winner , setWinner ] = useState(null)
  const [ symbol , setSymbol ] = useState("X")
  const [ clicks , setClicks ] = useState(0)
  const inputs = [input1, input2, input3, input4, input5, input6, input7, input8, input9];
  const setInputs = [setInput1, setInput2, setInput3, setInput4, setInput5, setInput6, setInput7, setInput8, setInput9];
  function check(){
    const result = CheckCondition([input1,input2,input3,input4,input5,input6,input7,input8,input9])
    if( result[0] == true ) {
      setPlayGame(false)
      setWinner(`Winner is ${result[1]}`)
    } else {
      setSymbol( (prev) => (prev == "X") ? "O" : "X" )
      if( clicks == 9 ){
        setPlayGame(false)
        setWinner("Game is Draw")
      }
    }
  }
  useEffect( () => {
    check();
  } , [...inputs] )
  return (
    <>
      <main>
        { playGame ? inputs.map((value, i) => (
          <div key={i} onClick={() => {
            value == null ? setInputs[i](symbol) : ""
            value == null ? setClicks((prev) => prev+1) : ""
          }}>{value ?? "_"}</div>
        )) : (<div>{winner}</div>)}
      </main>
    </>
  )
}
export default App
