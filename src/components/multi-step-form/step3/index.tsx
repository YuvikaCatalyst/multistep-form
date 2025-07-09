const Step3 = ({ register, errors,clearErrors }: any) => {
  return (
    <>
      <label>Username:</label>
      <input
        type="string"
        {...register("username")}
        placeholder="Enter username"
        onChange={() => clearErrors('username')}
      ></input>
      {errors.username && (
        <span className="error">{errors.username.message}</span>
      )}

      <label>Password:</label>
      <input
        type="password"
        {...register("password")}
        placeholder="Enter password"
        onChange={() => clearErrors('password')}
      ></input>
      {errors.password && (
        <span className="error">{errors.password.message}</span>
      )}

      <label>Confirm Password</label>
      <input
        type="password"
        {...register("confirmPassword")}
        placeholder="Enter password"
        onChange={() => clearErrors('confirmPassword')}
      ></input>
      <br></br>
      {errors.confirmPassword && (
        <span className="error">{errors.confirmPassword.message}</span>
      )}
      
      <input
        type="checkbox"
        {...register("termsConditions")}
        style={{ display: "inline-block" }}
        onChange={() => clearErrors('termsConditions')}
      />
      <span>I agree to all Terms & Conditions.</span>
      {errors.termsConditions && (
        <span className="error">{errors.termsConditions.message}</span>
      )}
    </>
  );
};

export default Step3;
