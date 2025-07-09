const Step2 = ({ register, errors,clearErrors }: any) => {
  return (
    <>
      <label>Address:</label>
      <input {...register("address")} placeholder="Enter address" onChange={() => clearErrors('address')}></input>
      {errors.address && (
        <span className="error">{errors.address.message}</span>
      )}

      <label>City:</label>
      <input {...register("city")} placeholder="Enter city" onChange={() => clearErrors('city')}></input>
      {errors.city && <span className="error">{errors.city.message}</span>}

      <label>State</label>
      <input {...register("state")} placeholder="Enter state" onChange={() => clearErrors('state')}></input>
      {errors.state && <span className="error">{errors.state.message}</span>}
      
      <label>Zip Code:</label>
      <input {...register("zipcode")} placeholder="Enter zipcode" onChange={() => clearErrors('zipcode')}></input>
      {errors.zipcode && (
        <span className="error">{errors.zipcode.message}</span>
      )}
    </>
  );
};

export default Step2;
