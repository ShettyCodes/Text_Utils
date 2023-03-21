// import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
// import Props from './components/Props';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
function App() {
  // let [name,setName] =useState(0)
  // let a=()=>{
  //     setName((name=name+1))
  // }
  const [alert, setalert] = useState(null)

  let showAlert=(message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  let [mode,setMode]=useState("light")
  let toggle=()=>{
    if(mode === "light")
    {
      setMode("dark")
      document.body.style.backgroundColor="#03031c";
      showAlert("Dark Mode is Enabled", "Success")
      document.title="Text_Utils - 'Dark Mode'"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
      showAlert("Light Mode is Enabled", "Success")
      document.title="Text_Utils - 'Light Mode'"
    }
  }
  let [red, setRed] = useState("light")
  let tRed=()=>{
    if(red === "light")
    {
      setRed("red")
      document.body.style.backgroundColor="firebrick"
    }
    else{
      setRed("light")
      document.body.style.backgroundColor="white"
    }
  }
  return (
    <>
     {/* <Props func={a} op={name} ></Props> */}
     <BrowserRouter>
     {/* exact is a good way of using the "path" attribut because it performs complete matching of components*/}
    <NavBar title="Text_Utils" aboutText="About T_U" mode={mode} toggle={toggle} tRed={tRed} red={red}></NavBar>
    <Alert alert={alert}></Alert>
    <div className="container">
      <Routes>
        <Route element={<About/>} exact path="/about"></Route>
        <Route element={<TextForm headings="Enter a text to Analyse" mode={mode} showalert={showAlert} ></TextForm>} exact path="/"></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </>

  );
}

export default App