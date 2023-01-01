import React from "react";
import Card from "../UI/Card";
import styles from "./Form.module.css"
import Button from "../UI/Button";
import { useState } from "react";
function Form() {
const[enteredtext,settext]=useState('');
  const textHandler=(event)=>{
     settext(event.target.value)
  }
  const[enteredpassword,setpassword]=useState('');
  const passwordHandler=(event)=>{
     setpassword(event.target.value)
  }
  const preventHandler=(event)=>{
      event.preventDefault();
  }


  return (
    <Card className={styles.design}>

      <form onSubmit={preventHandler}>
        <label htmlFor="username">Username:</label>
        <input value={enteredtext} onChange={textHandler} className={styles.text} id="username" type='text'/>
        <label htmlFor="userPassword">password:</label>
       <input value={enteredpassword} onChange={passwordHandler} className={styles.password} id="userPassword" type='password'/>
        <Button>Submit</Button>
      </form>
    </Card>
  );
}

export default Form;
