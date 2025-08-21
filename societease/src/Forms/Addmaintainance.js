import { useForm } from "react-hook-form";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

function AddMAintainance() {
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
      Hi {sessionStorage.getItem("name")}!  Add Maintaianance
    </h1>
        <form
          onSubmit={handleSubmit((data) => {
            let formData = {
              ...data,
              Owner: data.Owner === "YES" ? true : false,
              commite_member_id: parseInt(sessionStorage.getItem("commitee_member_id")),
              member_id:parseInt(data.member_id),
              
            };
            console.log(formData);
            fetch("http://localhost:5000/maintainance/", {
              method: "POST",
              body: JSON.stringify(formData),
              headers: { Origin: "http://localhost:3000" , "Content-Type": "application/json" },
            })
              .then(() => {
                alert("Maintainance added successfully");
                reset();
              })
              .then(() => {})
              .catch((error) => console.log(error));
          })}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Add Maintaianance Details
          </h2>

          <div class="relative z-0 w-full mb-5 group">
            <label
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}

              htmlFor="member_id"
            >
             Member id
            </label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register("member_id")}
            />
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}

              htmlFor="sinking_fund"
            >
              Sinking Fund
            </label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register("sinking_fund")}
            />
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}

              htmlFor="repair_charges"
            >
              Repair Charges
            </label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register("repair_charges")}
            />
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}

              htmlFor="municipal_tax"
            >
              Municipal tax
            </label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register("municipal_tax")}
            />
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}

              htmlFor="water_charges"
            >
              Water Charges
            </label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              {...register("water_charges")}
            />
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}

              htmlFor="parking_charges"
            >
              Parking Charges
            </label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register("parking_charges")}
            />
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}

              htmlFor="NOC_charges"
            >
              NOC Charges
            </label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register("NOC_charges")}
            />
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}

              htmlFor="service_charges"
            >
              Service  Charges
            </label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register("service_charges")}
            />
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}

              htmlFor="N_A_taxes"
            >
              NA  Charges
            </label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register("N_A_taxes")}
            />
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}

              htmlFor="other_charges"
            >
              Other Charges
            </label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              {...register("other_charges")}
            />
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}

              htmlFor="festival_fund"
            >
              Festive Funds
            </label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register("festival_fund")}
            />
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}

              htmlFor="interest_percent"
            >
              Interest Percent
            </label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register("interest_percent")}
            />
          </div>




          <button
            type="submit"
            className="w-full bg-indigo-500 text-white rounded-md
           py-2 px-4 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddMAintainance;
