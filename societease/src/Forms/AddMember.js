import { useForm } from "react-hook-form";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

function AddMember() {
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
        <form
          class="max-w-sm mx-auto"
          onSubmit={handleSubmit((data) => {
            let formData = {
              ...data,
              owner: data.owner === "YES" ? true : false,
              additionalField: "Poorva",
              //validated by:?
            };
            console.log(formData);
            fetch("http://localhost:5000/member/", {
              method: "POST",
              body: JSON.stringify(formData),
              headers: { "Content-Type": "application/json" },
            })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Username already taken,try using another username");
              }
              return response.json();
            })
            .then(() => {
              alert("MEMBER ADDED");
              reset();
            })
            .catch((error) => {
              console.error("Error adding member:", error.message);
              alert("Error adding member: " + error.message);
            });
            
          })}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold mb-8">Member Register</h2>
          <div class="relative z-0 w-full mb-5 group">
            <label
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              htmlFor="salutations"
              style={{ textAlign: "left" }}
            >
              Salutations{" "}
            </label>
            <select
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("salutations")}
            >
              <option>Mr.</option>
              <option>Mrs.</option>
              <option>Ms</option>
              <option>Miss</option>
            </select>
          </div>

          <div class="relative z-0 w-full mb-5 group">
            <label
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              htmlFor="name"
              style={{ textAlign: "left" }}
            >
              Name:{" "}
            </label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              {...register("name")}
            />
          </div>

          <div class="relative z-0 w-full mb-5 group">
            <label
              htmlFor="contact_number"
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}
            >
              Contact Number:{" "}
            </label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="1234567890"
              {...register("contact_number", {
                required: true,
                minLength: 10,
                maxLength: 10,
                pattern: /^[0-9]{10}$/,
              })}
            />
            {errors.contact_number && (
              <span style={{ color: "red" }}>
                Please enter a 10-digit number
              </span>
            )}
            
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              htmlFor="dob"
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}
            >
              Date of Birth:
            </label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="date"
              {...register("dob")}
            />
          </div>
          <div class="flex items-center mb-4">
            <label
              htmlFor="owner"
              class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Owner :{" "}
            </label>
            <input
              class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              type="radio"
              name="owner"
              value="YES"
              {...register("owner")}
            />
            <label
              htmlFor="html"
              class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              YES
            </label>
            <input
              class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              type="radio"
              name="owner"
              value="NO"
              {...register("owner")}
            />
            <label
              htmlFor="NO"
              class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              NO
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              htmlFor="flatno"
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}
            >
              Flat Number:{" "}
            </label>
            <input
              placeholder="D-301"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("flatno")}
            />
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              htmlFor="email"
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}
            >
              Email:{" "}
            </label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="abc@gmail.com"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />
            {errors.email && (
              <span style={{ color: "red" }}>
                Please enter a valid email address
              </span>
            )}
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}
              htmlFor="user_name"
            >
              UserName:{" "}
            </label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Radha"
              {...register("user_name")}
            />
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}
              htmlFor="password"
            >
              Password:{" "}
            </label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="password"
              placeholder="Radha"
              {...register("password")}
            />
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <label
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              style={{ textAlign: "left" }}
              htmlFor="society_id"
            >
              Society id:{" "}
            </label>
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Radha"
              {...register("society_id")}
            />
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
export default AddMember;