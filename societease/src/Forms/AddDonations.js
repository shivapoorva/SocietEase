import { useForm } from "react-hook-form";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

function AddDonation() {
  const [value, onChange] = useState(new Date());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center" style={{ backgroundImage: `url('your-background-image-url')` }}>
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
      <h1 style={{ fontSize: "28px", color: "rgb(108, 178, 235)", fontWeight: "bold" ,textAlign:"left" }}>
      Hi {sessionStorage.getItem("name")}!  Add Donations
    </h1>
        <form
          onSubmit={handleSubmit((data) => {
            let formData = {
              ...data,
              Owner: data.Owner === "YES" ? true : false,
              member_id: sessionStorage.getItem("member_id"),
              //validated by:?
            };
            console.log(formData);
            fetch("http://localhost:5000/donations/", {
              method: "POST",
              body: JSON.stringify(formData),
              headers: { Origin: "http://localhost:3000","Content-Type": "application/json" },
            })
              .then(() => {
                alert("Donation added successfully");
                reset();

              })
              .then(() => {})
              .catch((error) => console.log(error));
          })}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Donations </h2>
          
          <div class="max-w-sm mx-auto">
            <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            style={{ textAlign: "left" }}
            
            htmlFor="purpose">Purpose</label>
            <textarea
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

             placeholder="Sayanarayan pooja " {...register("purpose")} 
            />
          </div>
          <div class="relative z-0 w-full mb-4 group">
            <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            style={{ textAlign: "left" }}

            
            htmlFor="payment_method">Payment Method</label>
            <select
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            
            {...register("payment_method")} >
              <option>Cash</option>
              <option>Cheque </option>
              
            </select>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              style={{ textAlign: "left" }}
            
            htmlFor="amount">Amount</label>
            <input 
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            
            placeholder="100000 " {...register("amount")} 
             />
          </div>
          <button type="submit" 
          className="w-full bg-indigo-500 text-white rounded-md
           py-2 px-4 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddDonation;