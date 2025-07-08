const Step2 = ({ register, errors }: any) => {
  return (
    <>
      <label>Address:</label>
      <input {...register("address")} placeholder="Enter address"></input>
      {errors.address && (
        <span className="error">{errors.address.message}</span>
      )}

      <label>City:</label>
      <input {...register("city")} placeholder="Enter city"></input>
      {errors.city && <span className="error">{errors.city.message}</span>}

      <label>State</label>
      <input {...register("state")} placeholder="Enter state"></input>
      {errors.state && <span className="error">{errors.state.message}</span>}
      
      <label>Zip Code:</label>
      <input {...register("zipcode")} placeholder="Enter zipcode"></input>
      {errors.zipcode && (
        <span className="error">{errors.zipcode.message}</span>
      )}
    </>
  );
};

export default Step2;
