import { useForm } from "react-hook-form";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

function AddPoll() {
  const [value, onChange] = useState(new Date());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center" style={{ backgroundImage: `url('your-background-image-url')` }}>
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
      <h1 style={{ fontSize: "28px", color: "rgb(108, 178, 235)", fontWeight: "bold" ,textAlign:"left" }}>
      Hi {sessionStorage.getItem("name")}!  Add Poll
    </h1>

        <form
          onSubmit={handleSubmit((data) => {
            let formData = {
              ...data,
              Owner: data.Owner === "YES" ? true : false,
              additionalField: "Poorva",
              //validated by:?
            };
            console.log(formData);
            fetch("http://localhost:5000/poll/", {
              method: "POST",
              body: JSON.stringify(formData),
              headers: { Origin: "http://localhost:3000" },
            })
              .then(() => {})
              .then(() => {})
              .catch((error) => console.log(error));
          })}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Poll Questions </h2>
          
          <div class="relative z-0 w-full mb-5 group">
            <label 
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}
            
            htmlFor="questions">Ask your Question Here</label>
            <input 
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

            placeholder="When can we keep meeting? " {...register("questions")} 
            
            />
          </div>
          <div class="flex items-center mb-4">
            <label 
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}

             htmlFor="status">Question Status: </label>
            <input 
            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" 
            type="radio" name="status" value="1" {...register("status")} />
            <label 
             class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
             htmlFor="html" className="mr-2">ACTIVE</label>
            <input 
            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" 
            type="radio" name="status" value="0" {...register("status")} />
            <label
             class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
             htmlFor="html">INACTIVE</label>
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
export default AddPoll;