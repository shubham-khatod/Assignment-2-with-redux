import { useDispatch } from "react-redux";
import { userDataAction } from "./store/DataStore";
import "./UserDetails.css";
import { useRef, useState } from "react";

const UserDetails = () => {
  const dispatch = useDispatch();
  const firstName = useRef('');
  const lastName = useRef('');
  const [err, setErr]= useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let fName=firstName.current.value;
    let lName=lastName.current.value;
    if(/^[A-Za-z]+$/.test(fName) && /^[A-Za-z]+$/.test(lName) ){
      setErr("");
      dispatch(userDataAction.addDetails({
        firstName: fName ,
        lastName: lName
      }));
    }else{
      setErr("Enter Valid Details");
    }
    
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="fName"> First Name : </label>
      <input
        type={"text"}
        id="fName"
        name="fName"
        minLength={3}
        placeholder="Enter First Name.."
        ref={firstName}
       
      ></input>
      <br />
      <label htmlFor="lName"> Last Name : </label>
      <input
        type={"text"}
        id="lName"
        name="lName"
        minLength={3}
        placeholder="Enter Last Name.."
        ref={lastName}
       
      ></input>
      <br />
      <p>{err}</p>
      <input type={"submit"} value="Submit" />
    </form>
  );
};

export default UserDetails;
