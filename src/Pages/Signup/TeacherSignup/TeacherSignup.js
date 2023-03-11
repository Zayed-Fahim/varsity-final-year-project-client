import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const TeacherSignup = () => {
  // validation schema start
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
    id: Yup.string().required("ID Number is required"),
    picture: Yup.string().required("Image is required"),
    address: Yup.string()
      .required("Address is required")
      .matches(/^[a-zA-Z0-9\s,'-]*$/, "Address you entered is invalid address"),
  });
  // validation schema end
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(formSchema),
  });
  // collect role input value
  const [role, setRole] = useState(null);
  const handleRole = (e) => {
    setRole(e.target.name.value);
    console.log(role);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  //   // every teacher info
  //   const teacherDetails = {
  //     fullName: data.fullName,
  //     userName: data.userName,
  //     gender: data.gender,
  //     role: data.role,
  //     fatherName: data.fatherName,
  //     motherName: data.motherName,
  //     dateOfBirth: data.dateOfBirth,
  //     religion: data.religion,
  //     email: data.email,
  //     phone: data.phone,
  //     password: data.password,
  //     confirmPassword: data.confirmPassword,
  //     classTeacher: data.classTeacher,
  //     classTeacherOf: data.class,
  //     section: data.section,
  //     subject: data.subject,
  //     id: data.id,
  //     img: data.picture,
  //   };
  //   console.log(teacherDetails);
  // };

  // get value from auth context
  const { createUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/home/teacher");
        const displayName = {
          displayName: data.userName,
        };
        updateUser(displayName)
          .then(() => {
            toast.success("Account created successfully");
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="container mx-auto border-2 bg-[#F3F4F6] rounded-xl shadow-xl border-opacity-10 max-h-max m-3 md:mx-auto md:my-7 lg:px-0 lg:py-5 xl:px-10 xl:py-10 xl:my-[70px] lg:my-12">
      <div className="mb-2 mt-3 lg:mt-0 xl:mt-0 md:mt-4 md:mb-5 lg:mb-5 xl:mb-8">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center">
          Welcome to Amader <span className="text-[#FFBE15]">School</span>!!
        </h1>
      </div>
      <div className="mb-2 md:mb-5 lg:mb-5 xl:mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
          Create your <span className="text-[#FFBE15]">Teacher</span> Account
          here.
        </h1>
      </div>
      {/* form start */}
      <form
        onSubmit={handleSubmit(handleSignUp)}
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
              onSubmit={handleRole}
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              readOnly
              placeholder="Teacher"
              value="teacher"
              {...register("role")}
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
              aria-invalid={errors.motherName ? "true" : "false"}
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
            <p className="text-red-500">{error}</p>
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
            />
            <p className="text-red-500">{errors.confirmPassword?.message}</p>
          </div>

          {/* 4th row */}
          <div>
            <label className="label">
              <span className="font-bold text-sm">
                Class Teacher*<span className="text-red-500">(Required)</span>
              </span>
            </label>
            <select
              {...register("classTeacher")}
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
            >
              <option defaultValue={true}>Select Option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="font-bold text-sm">
                Teacher of*<span className="text-red-500">(Required)</span>
              </span>
            </label>
            <select
              {...register("class")}
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
            >
              <option defaultValue={true}>Select Class</option>
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
                Teacher of Section*
                <span className="text-red-500">(Required)</span>
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
              <span className="font-bold text-sm">
                Teaching Subject*
                <span className="text-red-500">(Required)</span>
              </span>
            </label>
            <select
              {...register("subject")}
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
            >
              <option value="Select class">Select Subject</option>
              <option value="mathematics">mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="english">English</option>
              <option value="bangla">Bangla</option>
              <option value="bgs">Bangladesh and Global Studies</option>
              <option value="ime">Islam and Moral Education</option>
            </select>
          </div>
          {/* 5th row */}
          <div>
            <label className="label">
              <span className="font-bold text-sm">ID Number*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              type="number"
              min={0}
              placeholder="Your ID"
              {...register("id")}
            />
            <p className="text-red-500">{errors.id?.message}</p>
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
        </div>
        {/* 5th row */}
        <div>
          <label className="label">
            <span className="font-bold text-sm">Address*</span>
          </label>
          <textarea
            type="text"
            rows={5}
            cols={78}
            className="border-2 outline-[#FFBE15] max-w-[325px] md:h-[46px] lg:h-[80px] xl:h-full md:max-w-[484px] lg:max-w-[480px] xl:min-w-max px-2 pt-2"
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

        <input
          className="border-2 outline-[#FFBE15] uppercase px-2 py-2 w-[170px] font-bold bg-[#FFBE15] lg:mt-8"
          type="submit"
          value="create account"
        />
      </form>
    </div>
  );
};

export default TeacherSignup;
