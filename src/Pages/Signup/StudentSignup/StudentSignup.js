import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const StudentSignup = () => {
  const formSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Full Name is required")
      .matches(/^[A-Za-z_ ]+$/i, "Alphabetical characters only")
      .max(20, "Full Name cannot exceed 20 characters"),
    userName: Yup.string()
      .required("User Name is required")
      .matches(/^[A-Za-z_ ]+$/i, "Alphabetical characters only")
      .max(20, "User Name cannot exceed 20 characters"),
    fatherName: Yup.string()
      .required("Father Name is required")
      .matches(/^[A-Za-z_ ]+$/i, "Alphabetical characters only")
      .max(25, "Father Name cannot exceed 25 characters"),
    motherName: Yup.string()
      .required("Mother Name is required")
      .matches(/^[A-Za-z_ ]+$/i, "Alphabetical characters only")
      .max(25, "Mother Name cannot exceed 25 characters"),
    email: Yup.string()
      .required("Email is required")
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "The Email you entered is invalid"
      ),
    phone: Yup.string()
      .required("Phone Number is required")
      .matches(
        /^(?:(?:\+|00)88|01)?\d{11}$/,
        "Phone Number you entered is invalid"
      ),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password length should be at least 6 characters")
      .max(16, "Password cannot exceed more than 16 characters")
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        "Contain at least one number and one special character"
      ),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords did not match"),
    roll: Yup.string().required("Roll is required"),
    picture: Yup.string()
      .required("Image is required")
      .matches(/\.(jpe?g|png|gif|bmp)$/i, "Image is an invalid format"),
    address: Yup.string()
      .required("Address is required")
      .matches(/^[a-zA-Z0-9\s,'-]*$/, "Address you entered is invalid address"),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto border-2 border-[#FFBE15] border-opacity-10 max-h-max m-3 md:mx-auto md:my-7 lg:px-0 lg:py-5 xl:px-10 xl:py-10 xl:my-[70px] lg:my-12">
      <div className="mb-2 md:mb-5 lg:mb-5 xl:mb-8">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center">
          Welcome to Amader <span className="text-[#FFBE15]">School</span>!!
        </h1>
      </div>
      <div className="mb-2 md:mb-5 lg:mb-5 xl:mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
          Create your <span className="text-[#FFBE15]">Student</span> Account
          here.
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 min-w-fit max-h-max p-5 md:px-3 lg:px-5 lg:py-5 xl:px-20 xl:py-2"
      >
        {/* 1st row */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 lg:gap-4">
          <div>
            <label className="label">
              <span className="font-bold text-sm">Full Name*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              placeholder="Full Name"
              {...register("fullName")}
            />
            <p className="text-red-500">{errors.fullName?.message}</p>
          </div>
          <div>
            <label className="label">
              <span className="font-bold text-sm">User Name*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              placeholder="User Name"
              {...register("userName")}
            />
            <p className="text-red-500">{errors.userName?.message}</p>
          </div>
          <div>
            <label className="label">
              <span className="font-bold text-sm">
                Gender*<span className="text-red-500">(Required)</span>
              </span>
            </label>
            <select
              {...register("gender")}
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
            >
              <option value="Select Gender">Select Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="label">
              <span className="font-bold text-sm">Role</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              disabled
              placeholder="Student"
            />
          </div>

          {/* 2nd row */}

          <div>
            <label className="label">
              <span className="font-bold text-sm">Father's Name*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              placeholder="Father's name"
              {...register("fatherName")}
            />
            <p className="text-red-500">{errors.fatherName?.message}</p>
          </div>
          <div>
            <label className="label">
              <span className="font-bold text-sm">Mother's Name*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              placeholder="Mother's name"
              {...register("motherName")}
            />
            <p className="text-red-500">{errors.motherName?.message}</p>
          </div>
          <div>
            <label className="label">
              <span className="font-bold text-sm">Date Of Birth*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              placeholder="Date Of Birth"
              type="date"
              {...register("dateOfBirth", {
                required: "Date Of Birth is required",
              })}
              aria-invalid={errors.dateOfBirth ? "true" : "false"}
            />
            {errors.dateOfBirth && (
              <p role="alert" className="text-red-500">
                {errors.dateOfBirth?.message}
              </p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="font-bold text-sm">
                Religion*<span className="text-red-500">(Required)</span>
              </span>
            </label>
            <select
              {...register("religion")}
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
            >
              <option value="Select religion">Select Religion</option>
              <option value="islam">Islam</option>
              <option value="hindu">Hindu</option>
              <option value="christian">Christian</option>
              <option value="buddha">Buddha</option>
            </select>
          </div>

          {/* 3rd row */}

          <div>
            <label className="label">
              <span className="font-bold text-sm">Email*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              placeholder="Your Email"
              {...register("email")}
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
          <div>
            <label className="label">
              <span className="font-bold text-sm">Phone Number*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              type="tel"
              placeholder="Your Phone"
              {...register("phone")}
            />
            <p className="text-red-500">{errors.phone?.message}</p>
          </div>
          <div>
            <label className="label">
              <span className="font-bold text-sm">Password*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              type="password"
              placeholder="Your Password"
              {...register("password")}
            />
            <p className="text-red-500">{errors.password?.message}</p>
          </div>
          <div>
            <label className="label">
              <span className="font-bold text-sm">Confirm Password*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              aria-invalid={errors.confirmPassword ? "true" : "false"}
            />
            <p className="text-red-500">{errors.confirmPassword?.message}</p>
          </div>

          {/* 4th row */}

          <div>
            <label className="label">
              <span className="font-bold text-sm">
                Class*<span className="text-red-500">(Required)</span>
              </span>
            </label>
            <select
              {...register("class", {
                required: "Class is required",
              })}
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
            >
              <option value="Select class">Select Class</option>
              <option value="play">Play</option>
              <option value="kg">KG</option>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
              <option value="four">Four</option>
              <option value="five">Five</option>
              <option value="six">Six</option>
              <option value="seven">Seven</option>
              <option value="eight">Eight</option>
              <option value="nine">Nine</option>
              <option value="ten">Ten</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="font-bold text-sm">
                Section*<span className="text-red-500">(Required)</span>
              </span>
            </label>
            <select
              {...register("section")}
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
            >
              <option value="Select class">Select Section</option>
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
              <option value="d">D</option>
              <option value="e">E</option>
              <option value="f">F</option>
              <option value="g">G</option>
              <option value="h">H</option>
              <option value="i">I</option>
              <option value="j">J</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="font-bold text-sm">Roll Number*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              type="number"
              min={0}
              placeholder="Your Roll"
              {...register("roll")}
            />
            <p className="text-red-500">{errors.roll?.message}</p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-bold text-sm">Your image</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-warning h-12 md:w-[234px] lg:w-[235px] xl:w-72"
              {...register("picture")}
            />
            <p className="text-red-500">{errors.picture?.message}</p>
          </div>

          {/* 5th row */}

          <div>
            <label className="label">
              <span className="font-bold text-sm">Address*</span>
            </label>
            <textarea
              type="text"
              rows={3}
              cols={79}
              className="border-2 outline-[#FFBE15] max-w-[345px] md:h-[46px] lg:h-[80px] xl:h-full md:max-w-[484px] lg:max-w-[480px] xl:min-w-max px-2 pt-2"
              placeholder="Your Address"
              {...register("address", {
                required: "You must provide your Address.",
              })}
              aria-invalid={errors.address ? "true" : "false"}
            />
            {errors.address && (
              <p role="alert" className="text-red-500">
                {errors.address?.message}
              </p>
            )}
          </div>
        </div>

        <input
          className="border-2 outline-[#FFBE15] uppercase px-2 py-2 w-[170px] font-bold bg-[#FFBE15] lg:mt-16"
          type="submit"
          value="create account"
        />
      </form>
    </div>
  );
};

export default StudentSignup;
