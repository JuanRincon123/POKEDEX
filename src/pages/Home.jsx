import { useRef } from "react"
import {setTrainerNameG} from "../store/slices/trainerName.slice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


const Home = () => {

    const trainerNameRef = useRef()


    const navigate =  useNavigate()

    const {trainerName} = useSelector(states => states)

    const dispatch = useDispatch()

    const handleSubmit = e =>{
    e.preventDefault()
    dispatch(setTrainerNameG(trainerNameRef.current.value.trim()))
    navigate('/pokedex')
    }

    console.log(trainerName)

  return (
    <div>
        <h1>Pokedex</h1>
        <h2>Hi Trainer!</h2>
        <p>To start in this application, please, give me your trainer name.</p>
        <form onSubmit={handleSubmit}>
            <input ref={trainerNameRef} type="text" />
            <button>Catch them all! </button>
        </form>
    </div>
  )
}

export default Home
