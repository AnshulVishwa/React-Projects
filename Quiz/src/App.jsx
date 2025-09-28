import { useState } from 'react'
import './App.css'
import { Instructions } from './Instructions'
import { Questions } from './Questions'
import {db} from "./firebase"
import { doc, setDoc } from 'firebase/firestore'

function App() {
  const [instructionIndex, setInstructionIndex] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [start, setStart] = useState(false)
  const [username , setUsername] = useState(null)
  const [answer , setAnswer] = useState("")

  async function handleSubmitTest() {
    try {
      await setDoc( doc( db , "myCollections" , "helloFirebase" ),
      {
        id : questionIndex,
        question : Questions[questionIndex].question,
        answer : answer,
        answeredBy : username
      } )
      setAnswer("")
    } catch (error) {
      console.log(error)
    }
  }

  // Go to next instruction
  const handleNextInstruction = () => {
    if (Instructions[instructionIndex].end) {
      // Start questions
      setStart(true)
      setQuestionIndex(0)
    } else if (instructionIndex < Instructions.length - 1) {
      setInstructionIndex(instructionIndex + 1)
    }
  }

  // Go to previous instruction
  const handlePrevInstruction = () => {
    if (instructionIndex > 0) {
      setInstructionIndex(instructionIndex - 1)
    }
  }

  return (
    <div className="container-fluid">
      <h1 className="text-center my-3">HTML & CSS</h1>
      {username == null ? 
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-5">
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>
            <button onClick={
              (e) => setUsername(e.target.previousElementSibling.children[0].children[1].value)  
            } className='btn btn-primary col-5 col-sm-2 mt-2 mt-sm-0'>Submit</button>
          </div>
        </div>

        : null
      }

      {/* Instructions Section */}
      {!start && username != null && (
        <div className="container">
          <span className="text-center w-100 d-block text-danger fs-5 mb-4">
            "Some Important Instructions"
          </span>

          <div className="my-5">
            <span className="fs-4">
              <i className="fa-solid fa-feather-pointed"></i>{' '}
              {Instructions[instructionIndex].point}
            </span>
            <br />
            {Instructions[instructionIndex].link && (
              <a
                href={Instructions[instructionIndex].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {Instructions[instructionIndex].link}
              </a>
            )}
          </div>

          <div className="buttons d-flex justify-content-between">
            <button
              className="btn btn-primary"
              onClick={handlePrevInstruction}
              disabled={instructionIndex === 0}
            >
              Prev
            </button>
            <button
              className="btn btn-primary"
              onClick={handleNextInstruction}
            >
              {Instructions[instructionIndex].end ? 'Start' : 'Next'}
            </button>
          </div>
        </div>
      )}

      {/* Questions Section */}
      {start && (
        <div className="container my-5">
          <div className="fs-3 mb-3">
            {Questions[questionIndex].question}
          </div>
          <div class="mb-3">
            <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>

          <div className="buttons d-flex justify-content-end">
            <button
              className="btn btn-success"
              onClick={() =>{
                handleSubmitTest()
                setQuestionIndex(
                  questionIndex < Questions.length - 1
                    ? questionIndex + 1
                    : questionIndex
                )}
              }
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
