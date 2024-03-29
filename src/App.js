import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  const [ sec, setSec] = useState(0)
  const [ min, setMin] = useState(0)
  useEffect(()=>{
    handleTime();
    return clearInterval(timer.current);
  },[])

  let timer = useRef();
  function handleTime()
  {
   timer.current = setInterval(()=>{
    if(sec !== 59)
    {
      setSec((pre)=>pre + 1);
    }
    else
    {
      setSec(0)
      setMin((pre)=>pre + 1)
    }
    },1000)
  }
  function handleRestart()
  {
    clearInterval(timer.current);
    setSec(0)
    setMin(0)
    
  }

  function handlePause()
  {
    clearInterval(timer.current);
    
  }
  return (
    <div className="App">
      <div className='heading'>
      <h1>Stopwatch</h1>
      </div>
      <div className='stopwatch'>
      
        <div className='timer'>
          <h1>
            {min} : {sec}
          </h1>
        </div>
        <div className='buttons'>
            <button onClick={handleTime}>Start</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleRestart}>ReSet </button>
          </div>
      </div>
    </div>
  );
}

export default App;

