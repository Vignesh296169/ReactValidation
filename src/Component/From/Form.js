import React from "react";
import Card from "../UI/Card";
import styles from "./Form.module.css"
function Form() {
  return (
    <Card className={styles.design}>

      <form>
        <label htmlFor="username">Username:</label>
        <input className={styles.text} id="username" type='text'/>
        <label htmlFor="userPassword">password:</label>
       <input className={styles.password} id="userPassword" type='password'/>
        <button type="submit">submit</button>
      </form>
    </Card>
  );
}

export default Form;
