import React from "react";
import testimg from "./testimg.png";
function App() {
  return (
    <>
      <div class="container" style={{ margin: "5rem" }}>
        <div class="row">
          <div class="col">
            <h2 style={{ color: "red" }}>SignIn</h2>
            <p style={{ marginBottom: "10px" }}>
              Enter your email and password to signin!
            </p>
            <form>
              <div class="form-group my-3">
                <label for="exampleFormControlInput1 my-3">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="mail@simmple.com"
                />
              </div>

              <div class="form-group ">
                <label for="exampleInputPassword1 my-3">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Min 8 chracters"
                />
              </div>
              <div className="row my-3">
                <div className="col">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      checked
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      Keep me logged in
                    </label>
                  </div>
                </div>
                <div className="col">
                  <p style={{ color: "red" }}>Forget Password?</p>
                </div>
              </div>
              <button
                type="button"
                class="rounded-pill"
                style={{
                  color: "white",
                  backgroundColor: "red",
                  width: "90%",
                  height: "4rem",
                  border: "rounded",
                }}
              >
                SignIn
              </button>
              <div className="row my-5">
                {" "}
                <h6 className=" col">Not registered yet?</h6>
                <h6 className="col" style={{ color: "#FF0033" }}>
                  Create an account
                </h6>
              </div>
            </form>
          </div>
          <div class="col" style={{ backgroundColor: "#FF0033" }}>
            <img className="row mx-5 my-5" src={testimg} />

            <center>
              {" "}
              <button
                className="row mx-5 my-5 rounded-pill lg"
                style={{
                  color: "white",
                  border: "1px solid white",
                  backgroundColor: "transparent",
                }}
              >
                <center>
                  {" "}
                  <div style={{ padding: "2rem" }}>
                    <h6 className="row">Learn more about air drive on</h6>
                    <h2 className="row"> Spark.AI</h2>
                  </div>
                </center>
              </button>
            </center>
            <div className="row mx-5" style={{ color: "white" }}>
              <div className="col">
                <h6>License</h6>
              </div>
              <div className="col">
                <h6>Terms of Use</h6>
              </div>
              <div className="col">
                <h6>Blogs</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
