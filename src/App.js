import { Button } from "react-bootstrap";
import { useState } from "react";

function Fan() {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    //  if (agree === true; //it will be set to false
    //  if agree === false;// it will be set to true
    setAgree(!agree);
  };

  function Submit() {
    let item = { first_name, last_name, username, email, password };
    console.log(item);
    fetch("http://wren.in:3200/api/sign-up/fan", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    });
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    let item = e.target.value;
    if (item.length < 6) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }

    password(item);
  };

  const loginHandle = (e) => {
    if (
      password.length < 6 ||
      first_name.length < 0 ||
      last_name.length < 0 ||
      username.length < 0 ||
      email.length < 0
    ) {
      alert("please input all field");
    } else {
      alert("all good:");
    }

    e.preventDefault();
  };

  return (
    <>
      <h1 className="header">Create Your Fan Account </h1>

      <div className="col-sm-6 offset-sm-5">
        <form onSubmit={loginHandle}>
          <label>First Name</label> <br />
          <input
            type="text"
            value={first_name}
            onChange={(e) => setfirst_name(e.target.value)}
            placeholder="Enter First name"
          />
          <br />
          <label>Last Name</label> <br />
          <input
            type="text"
            value={last_name}
            onChange={(e) => setlast_name(e.target.value)}
            placeholder="Enter Last name"
          />
          <br />
          <label>User Name</label> <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="Enter User name"
          />
          <br />
          <label>Email</label> <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
          <br />
          <label>Password</label> <br />
          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={passwordHandler}
          />
          <br />
          {passwordErr ? (
            <span style={{ color: "red" }}>
              password must be more than 6 digit
            </span>
          ) : (
            ""
          )}
          <br />
          <div className="agreeTab">
            <input type="checkbox" id="agree" onChange={checkboxHandler} />
            <label htmlFor="agree">
              {" "}
              I agree to <b>terms and conditions</b>
            </label>
          </div>
          <Button onClick={Submit} disabled={!agree} type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
export default Fan;
