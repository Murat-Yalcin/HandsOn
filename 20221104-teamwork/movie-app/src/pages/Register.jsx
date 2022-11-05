import React from "react";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = e.target;
    console.log(firstName, lastName, email, password);
  };
  return (
    <div className="register">
      {/* <div className="form-image">
        <img src={"https://picsum.photos/1200/800"} alt="sample-movie" />
      </div> */}
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label display-4">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              placeholder="Enter your first name..."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="form-label display-4">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              placeholder="Enter your last name..."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label display-4">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your email address..."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label display-4">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter your password..."
            />
          </div>
          <button type="submit" className="btn btn-primary form-control">
            Register
          </button>
        </form>
        <button
          className="btn btn-primary form-control"
          // onClick={handleProviderRegister}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
