import { useSelector , useDispatch} from "react-redux"; //now as per our requirement we have to read our count value increm, decre etc
import { increment } from "./actions/countActions";
import Btn from "./Btn";
import ShowCount from "./Show";
                                //using useSelector hook we can ready any particular value from our store obj by take state as its parameter; so use it below

function App() {
  const dispatch= useDispatch()
  const count= useSelector((state)=>{ //use it below inside div to read/display on screen
        return state.count
  })  

  // const HandleIncrement=()=>{
  //     dispatch(increment())
  // }

  // return (
  //   <div>
  //       <h1>Redux training</h1>
  //       <h2>Count - {count}</h2>
  //       <button onClick={HandleIncrement}>+1</button>
  //   </div>
  // ); //or use below inline arrow function

  return(
    <div>
      <h1>Redux training</h1>
      <h2>Count - {count}</h2>
      <button onClick={()=>{
        dispatch(increment())
      }}>+1</button>
      <Btn/><hr/>

      <ShowCount/>
      
    </div>
    )
}

export default App;
