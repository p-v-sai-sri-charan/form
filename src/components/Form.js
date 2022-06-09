import React,{ useState,useEffect } from "react";

function Form() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [gender,setGender] = useState(false);
  const [terms,setTerms] = useState(false);
  const handleNameChange = (e) =>{
    console.log(e.target.value)
    if(e.target.value == ""){
      setNameError(true)
    }
    setNameError(false)
    setName(e.target.value)
  }
  const handleEmailChange = (e) =>{
    if(e.target.value == ""){
      setEmailError(true)
    }
    setEmailError(false)
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) =>{
    if(e.target.value == ""){
      setPasswordError(true)
    }
    setPasswordError(false)
    setPassword(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert(`
      Name: ${name}
      Email: ${email}
      Password: ${password}
      gender: ${gender === 1 ? "Male":"Female"}
      `)
  }
  useEffect(() => {
    
  }, [name,email,password])
  
  return (
    <div className="head">
      <div className="container">
        <div className="main">
          <div className="line-height">
            <form className="form">
              <p className="heading">Register</p>
              <div className="field-head">
                <div className=" relative ">
                  <input
                    type="text"
                    className="input-field "
                    placeholder="Full Name"
                    onChange={(e)=>handleNameChange(e)}
                    value={name}
                  />
                  <p className="error">{nameError? "Please Enter Full Name" :""}</p>
                </div>
              </div>
              <div className="field-head">
                <div className=" relative ">
                  <input
                    type="text"
                    className="input-field "
                    placeholder="Email"
                    onChange={(e)=>handleEmailChange(e)}
                    value={email}
                  />
                  <p className="error">{emailError? "Please Enter Email":""}</p>
                </div>
              </div>
              <div className="field-head">
                <div className=" relative ">
                  <input
                    type="password"
                    id="login-with-bg-password"
                    className="input-field "
                    placeholder="Password"
                    onChange={(e)=>handlePasswordChange(e)}
                    value={password}
                  />
                  <p className="error">{passwordError? "Please Enter Password":""}</p>
                </div>
              </div>
              <div className="field-head">
                <div className=" relative ">
                  <div className="gender-head">
                    <p>Gender: </p>
                    <label className="radio-label">
                      <input type="radio" name="gender" className="input-radio" defaultChecked={gender === 1 ? true:false} onClick={()=>setGender(1)}/>
                      <span className="input-radio-text">Male</span>
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="gender" className="input-radio" defaultChecked={gender === 0 ? true :false} onClick={()=>setGender(0)}/>
                      <span className="input-radio-text">Female</span>
                    </label>
                  </div>
                </div>
              </div>
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  name="checked-demo"
                  className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
                  onClick={()=>setTerms(!terms)}
                  defaultChecked = {terms}
                />
                <span className="text-gray-700 dark:text-white font-normal">
                I agree to the Terms and Conditions
                </span>
              </label>
              <div className="button-head">
                <button type="submit" className="button-input" onClick={handleSubmit}>
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
