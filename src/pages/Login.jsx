import { useState } from "react";

function Login() {
  const [state, setstate] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    
    let responseData;
    await fetch("https://mern1-back-1.onrender.com/login", {
      method: "POST",
      headers: {
        Accept: "application/formData",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    console.log(formData);
    let responseData;
    await fetch("https://mern1-back-1.onrender.com/signup", {
      method: "POST",
      headers: {
        Accept: "application/formData",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
      <div className="max-w-[555px] h-[660px] bg-white m-auto px-14 py-10 rounded-md">
        <h3 className="h3">{state}</h3>
        <div className="flex flex-col gap-4 mt-7">
          {state === "Sign Up" ? (
            <input
              name="name"
              value={formData.name}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
              className="login-input"
            />
          ) : (
            ""
          )}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Email Address"
            className="login-input"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Password"
            className="login-input"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
          className="btn_dark_rounded my-5 w-full !rounded-md"
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="text-black font-bold">
            Already have an account?
            <span
              className="text-secondary underline cursor-pointer"
              onClick={() => {
                setstate("Login");
              }}
            >
              {" "}
              Login
            </span>
          </p>
        ) : (
          <p className="text-black font-bold">
            Create an account?
            <span
              className="text-secondary underline cursor-pointer"
              onClick={() => {
                setstate("Sign Up");
              }}
            >
              {" "}
              Sign Up
            </span>
          </p>
        )}
        <div className="flexCenter mt-6 gap-3">
          <input type="checkbox" name="" id="" className="cursor-pointer" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </section>
  );
}

export default Login;
