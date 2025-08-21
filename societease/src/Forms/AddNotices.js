import { useForm } from "react-hook-form";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

function AddNotices() {
  const [value, onChange] = useState(new Date());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{ backgroundImage: `url('your-background-image-url')` }}
    >
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
      <h1 style={{ fontSize: "28px", color: "rgb(108, 178, 235)", fontWeight: "bold" ,textAlign:"left" }}>
      Hi {sessionStorage.getItem("name")}!  Add Notice
    </h1>
        <form
          onSubmit={handleSubmit((data) => {
            let formData = {
              ...data,
              commitee_member_id: parseInt(sessionStorage.getItem("member_id")),
              
            };
            console.log(formData);
            fetch("http://localhost:5000/notices", {
              method: "POST",
              body: JSON.stringify(formData),
              headers: { Origin: "http://localhost:3000" , "Content-Type": "application/json"},
            })
              .then(() => {
                alert("Notice added successfully");
                reset();
              })
             
              .catch((error) => console.log(error));
          })}
          
        >
          <h2 className="text-3xl font-bold text-center mb-8">Add Notice</h2>

          <div class="relative z-0 w-full mb-5 group">
            <label
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}

              htmlFor="title"
            >
              Title
            </label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Urgent Maintenance Notice"
              {...register("title")}
            ></input>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label 
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}

            
            htmlFor="content">Content </label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

              placeholder="Meeting at 12"
              {...register("content")}
              
            />
          </div>

          <div class="relative z-0 w-full mb-5 group">
            <label 
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}

            
            htmlFor="valid_till">Notice Valid till:</label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

              type="date"
              {...register("valid_till")}
              
            />
          </div>
          <div 
          class="flex items-center mb-4">
            <label 
             class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"            
            htmlFor="priority">Priority  : </label>
            <input
            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" 
              type="radio"
              name="priority"
              value="1"
              {...register("priority")}
            />
            <label
             class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
            
            htmlFor="html" className="mr-2">
              High
            </label>
            <input
            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" 

              type="radio"
              name="priority"
              value="0"
              {...register("priority")}
            />
            <label 
             class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
            
            htmlFor="html">Low</label>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white rounded-md py-2 px-4 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddNotices;
