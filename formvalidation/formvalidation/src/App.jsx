import React from 'react'
import { Formik, useFormik } from 'formik'
import * as myYup from 'yup'

function App() {
  const myFormik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: ""
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: myYup.object().shape({
      userName: myYup.string().required("Username is required"),
      email: myYup.string().email("Email must contain an @ and . symbol").required("email is required"),
      password: myYup.string().min(5, "Password must not be less than 5").max(20, "password must not exceed 20 characters").required("password is required")
    })
  });

  return (
    <>
      <form >
        {myFormik.touched && myFormik.errors.userName ? <div style={{ color: 'red' }}>{myFormik.errors.userName}</div>
          : null}
        Enter Username : <input type='text' name='userName' value={myFormik.values.userName} onChange={myFormik.handleChange}></input> <br></br>
        {myFormik.touched && myFormik.errors.email ? <div style={{ color: 'red' }}>{myFormik.errors.email}</div>
          : null}
        Enter email : <input type='email' name='email' value={myFormik.values.email} onChange={myFormik.handleChange}></input> <br></br>

        { myFormik.touched && myFormik.errors.password ? <div style={{ color: 'red' }}>{myFormik.errors.password}</div>
          : null}
        Enter Password : <input type='password' name='password' value={myFormik.values.password} onChange={myFormik.handleChange}></input> <br></br>
        <button type='submit' onClick={myFormik.handleSubmit}>Sign-In</button>
      </form>
    </>
  )
}
export default App