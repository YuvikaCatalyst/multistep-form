const Step1 = ({ register, errors }: any) => {
  return (
    <>
      <label>Name:</label>
      <input type="text" {...register("name")} placeholder="Enter name"></input>
      {errors.name && <span className="error">{errors.name.message}</span>}

      <label>Email:</label>
      <input
        type="email"
        {...register("email")}
        placeholder="Enter email"
      ></input>
      {errors.email && <span className="error">{errors.email.message}</span>}

      <label>Phone Number:</label>
      <input
        type="text"
        {...register("phoneNumber")}
        placeholder="Enter phone number"
      ></input>
      {errors.phoneNumber && (
        <span className="error">{errors.phoneNumber.message}</span>
      )}

      <label>Gender:</label>
      <select {...register("gender")}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      {errors.gender && <span className="error">{errors.gender.message}</span>}

      <label>Date of Birth:</label>
      <input
        type="date"
        {...register("dob")}
        placeholder="Enter date of birth"
      ></input>
      {errors.dob && <span className="error">{errors.dob.message}</span>}
    </>
  );
};

export default Step1;
