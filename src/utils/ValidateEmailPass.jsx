const ValidateEmailPass = (email, password) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
      if (!emailRegex.test(email)) {
        return "Email is not Valid";
      } else if (!passRegex.test(password)) {
        return "Password is not Valid";
      } else {
        return null;
      }
  };
  export default ValidateEmailPass;
  