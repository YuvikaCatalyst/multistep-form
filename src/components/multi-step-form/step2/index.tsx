const Step2 = ({ register, errors, clearErrors, age }: any) => {
  const getOptionsByAge = () => {
    if (age === null) return [];
    if (age < 18) return ["Schooling", "High School"];
    if (age >= 18 && age <= 25) return ["College", "Internship"];
    return ["Job", "Business"];
  };
  return (
    <>
      <label>Address:</label>
      <input
        {...register("address")}
        placeholder="Enter address"
        onChange={() => clearErrors("address")}
      ></input>
      {errors.address && (
        <span className="error">{errors.address.message}</span>
      )}

      <label>City:</label>
      <input
        {...register("city")}
        placeholder="Enter city"
        onChange={() => clearErrors("city")}
      ></input>
      {errors.city && <span className="error">{errors.city.message}</span>}

      <label>State</label>
      <input
        {...register("state")}
        placeholder="Enter state"
        onChange={() => clearErrors("state")}
      ></input>
      {errors.state && <span className="error">{errors.state.message}</span>}

      <label>Zip Code:</label>
      <input
        {...register("zipcode")}
        placeholder="Enter zipcode"
        onChange={() => clearErrors("zipcode")}
      ></input>
      {errors.zipcode && (
        <span className="error">{errors.zipcode.message}</span>
      )}

      <label>Current Status (based on age):</label>
      <select {...register("status")} onChange={() => clearErrors("status")}>
        <option value="">Select Status</option>
        {getOptionsByAge().map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {errors.status && <span className="error">{errors.status.message}</span>}
    </>
  );
};

export default Step2;
