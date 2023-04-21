import { useState } from "react";

export default function Main() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      `The following sign-in attempt was made: Email=${email}, Password=${password}`
    );
    setPassword("");
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div
      id="container"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f8fafc",
      }}
      className=""
    >
      <img
        src="/pizzafox.png"
        style={{
          width: "20%",
          alignSelf: "flex-end",
          margin: "1em 1em 4em 1em",
        }}
        className=""
      />
      <form
        style={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
        }}
        className=""
        onSubmit={handleSubmit}
      >
        <h1
          style={{
            fontSize: "3rem",
            lineHeight: "1",
          }}
          className=""
        >
          Sign in
        </h1>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "2rem",
            color: "#475569",
          }}
          className=""
        >
          Please sign in to continue
        </p>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
          <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
