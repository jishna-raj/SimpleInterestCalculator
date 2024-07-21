
import './App.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  /* create usestate for storing data */

  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [interest,setInterest] = useState(0)
  const [bgColor,setBgColor] = useState("orange")
  /* create usesste for conditional rendering */
  const[isPrinciple,setIsPrinciple] = useState(true)
  const[isRate,setIsRate] = useState(true)
  const[isYear,setIsYear] = useState(true)


  const validate = (e)=>{
   const name = e.target.name
   const value = e.target.value
    /* console.log(name,value);
    console.log(!!value.match(/^[0-9]*$/)); */

    if(!!value.match(/^[0-9]*$/)){
      if(name=="principle"){
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if(name=="rate"){
        setRate(value)
        setIsRate(true)
      }
      else{
        setYear(value)
        setIsYear(true)
    }
  }
  else{
    if(name=="principle"){
      setPrinciple(value)
      setIsPrinciple(false)
    }
    else if(name=="rate"){
      setRate(value)
      setIsRate(false)
    }
    else{
      setYear(value)
      setIsYear(false)
  }
  }

  
}

const handleReset = () => {
  setPrinciple(0);
  setRate(0);
  setYear(0);
  setInterest(0);
  setBgColor("orange")
  setIsPrinciple(true);
  setIsRate(true);
  setIsYear(true);
};

const handleCalculate = (e) => {
  e.preventDefault()
  if(principle==""||rate==""||year==""){
    alert("Please fill all the fields")
  }
  else{
    setInterest((principle*rate*year/100))
    setBgColor('#f48fb1')
  }
}
  

  return (
    <>
    <div className="container-fluid" style={{ backgroundColor: 'black', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="shadow p-5 rounded text-center" style={{ backgroundColor: 'white', maxWidth: '500px', width: '100%', padding: '20px' }}>
        <h1 style={{ fontSize: "40px" }}>Simple Interest App</h1>
        <p>Calculate Your Simple Interest Easily</p>
        <div className="rounded shadow text-center p-2 mb-3" style={{backgroundColor:bgColor}}>
          <h1 style={{ fontSize: "60px" }}>₹ {interest}</h1>
          <p>Total Simple Interest</p>
        </div>

        <form onSubmit={handleCalculate} className="mt-3">
          <div className="mb-3">
            <input type="text" placeholder="₹ Principle Amount" className="form-control" onChange={(e) => validate(e)} name="principle" value={principle ||""} />
            {!isPrinciple && <p className="text-danger text-start">*Invalid input</p>}
          </div>

          <div className="mb-3">
            <input type="text" placeholder="Rate of Interest (p.a) %" className="form-control" onChange={(e) => validate(e)} name="rate" value={rate ||""} />
            {!isRate && <p className="text-danger text-start">*Invalid input</p>}
          </div>

          <div className="mb-3">
            <input type="text" placeholder="Year (yr)" className="form-control mb-3" onChange={(e) => validate(e)} name="year" value={year||""} />
            {!isYear && <p className="text-danger text-start">*Invalid input</p>}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button type="submit" variant="contained" className="p-2" style={{ backgroundColor: 'green' }} disabled={isPrinciple && isRate && isYear ? false : true}>
              Calculate
            </Button>
            <Button variant="outlined" className="p-2" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
   </>
  )
}


export default App
