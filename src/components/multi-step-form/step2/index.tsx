const Step2 = ({register,errors}:any) => {
  return (
        <>
    <label>Address:</label>
    <input {...register("address")} placeholder="Enter address"></input>
    {errors.address && <span>{errors.name.address}</span>}
      <label>City:</label>
    <input {...register("city")} placeholder="Enter city"></input>
    {errors.city && <span>{errors.email.city}</span>}
      <label>State</label>
    <input {...register("state")} placeholder="Enter state"></input>
    {errors.state && <span>{errors.phoneNumber.state}</span>}
      <label>Zip Code:</label>
    <input {...register("zipcode")} placeholder="Enter zipcode"></input>
    {errors.zipcode && <span>{errors.dob.zipcode}</span>}
    </>
  )
}

export default Step2