import React from "react";
import Card from "../UI/Card";
import styles from "./Form.module.css"
import Button from "../UI/Button";
import { useState } from "react";
function Form() {
const[enteredtext,settext]=useState('');
const[isvalid ,setvalid]=useState(true)
const[iserror ,seterror]=useState(true)
  const textHandler=(event)=>{
    if(event.target.value.trim().length>0){
        setvalid(true)
    }
     settext(event.target.value)
  };
  const[enteredpassword,setpassword]=useState('');
  const passwordHandler=(event)=>{
    if(event.target.value.trim().length>8){
        seterror(true)
    }
     setpassword(event.target.value)
  }
  const preventHandler=(event)=>{
      event.preventDefault();
      if(enteredtext.trim().length===0 ){
        setvalid(false)
        return;
      }
      if (enteredpassword.trim().length<8){
        seterror(false)
        return;
      }
      console.log(enteredtext,enteredpassword)
      setpassword('')
      settext('')
  }

  const [inialert,setalert]=useState('')
  const alertHandler=()=>{
     
  
    }
  
  
   return (
    <>
    <Card className={styles.design}>
  <form onSubmit={preventHandler}>
        <label style={{color:!isvalid && "red"}} htmlFor="username">Username:</label>
          <p style={{color:"red"}}>{inialert}</p>
        <input value={enteredtext} onChange={textHandler} className={styles.text} id="username" type='text'/>
        <label style={{color:!iserror ? "red":"black"}} htmlFor="userPassword">password:</label>
       <input  value={enteredpassword} onChange={passwordHandler} className={styles.password} id="userPassword" type='password'/>
        <Button onClick={alertHandler} >Submit</Button>
      </form>
    </Card></>
  );
}

export default Form;
