import {  useState } from 'react';
import './App.css';
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"",

  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder:"Username",
      errorMessage:"Username should be 3-16 characters and shouldn't include any speacial character!",
      label: "Username",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder:"Email",
      errorMessage:"It Should be valid email Address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder:"Birthday",
      errorMessage:"",
      label: "Birthday"
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder:"password",
      errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      label: "password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder:"Confirm Password",
      errorMessage:"Password Don't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    }
  ]
  
  // console.log("re-rendered");

  const handleSubmit = (e)=> {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  console.log(values);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register...</h1>
        {inputs.map((input) => (
          < FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} 
          />
        ))}
       <button>SUBMIT</button>
      </form>  
          
    </div>
  );
}

export default App;
