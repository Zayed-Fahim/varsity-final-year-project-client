import React from "react";
import { useForm } from "react-hook-form";

const StudentSignup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container mx-auto border-2 border-[#FFBE15] border-opacity-10 max-h-max m-3 md:mx-auto md:my-7 lg:px-0 lg:py-5 xl:px-10 xl:py-10 xl:my-[75px] lg:my-12">
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
              {...register("fullName", { required: true })}
              aria-invalid={errors.fullName ? "true" : "false"}
            />
            {errors.fullName?.type === "required" && (
              <p role="alert">Full name is required</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="font-bold text-sm">User Name*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              placeholder="User Name"
              {...register("userName", { required: true })}
              aria-invalid={errors.userName ? "true" : "false"}
            />
            {errors.userName?.type === "required" && (
              <p role="alert">User Name is required</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="font-bold text-sm">Gender*</span>
            </label>
            <select
              {...register("gender")}
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
            >
              <option value="Select Gender" defaultValue>
                Select Gender
              </option>
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
              {...register("student")}
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
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </div>
          <div>
            <label className="label">
              <span className="font-bold text-sm">Mother's Name*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              placeholder="Mother's name"
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </div>
          <div>
            <label className="label">
              <span className="font-bold text-sm">Date Of Birth*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              placeholder="Date Of Birth"
              type="date"
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </div>
          <div>
            <label className="label">
              <span className="font-bold text-sm">Religion*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              placeholder="Your Religion"
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </div>

          {/* 3rd row */}

          <div>
            <label className="label">
              <span className="font-bold text-sm">Email*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              placeholder="Your Email"
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </div>
          <div>
            <label className="label">
              <span className="font-bold text-sm">Phone Number*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              placeholder="Your Phone"
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </div>
          <div>
            <label className="label">
              <span className="font-bold text-sm">Password*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              placeholder="Your Password"
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </div>
          <div>
            <label className="label">
              <span className="font-bold text-sm">Confirm Password*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              placeholder="Confirm Password"
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </div>

          {/* 4th row */}

          <div>
            <label className="label">
              <span className="font-bold text-sm">Class*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              placeholder="Your Class"
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </div>
          <div>
            <label className="label">
              <span className="font-bold text-sm">Section*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              placeholder="Your Section"
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </div>
          <div>
            <label className="label">
              <span className="font-bold text-sm">Roll Number*</span>
            </label>
            <input
              className="border-2 outline-[#FFBE15] h-12 w-full md:w-[230px] lg:w-[235px] xl:w-72 px-2"
              type="number"
              placeholder="Your Roll"
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-bold text-sm">
                Your image (size up to 500 x 500)
              </span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered h-12 md:w-[234px] lg:w-[235px] xl:w-72"
            />
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
            {errors.address && <p role="alert">{errors.address?.message}</p>}
          </div>
        </div>
        <div className="lg:mt-8">
          <input
            className="border-2 outline-[#FFBE15] uppercase px-2 py-2 w-[170px] font-bold bg-[#FFBE15]"
            type="submit"
            value="create account"
          />
        </div>
      </form>
    </div>
  );
};

export default StudentSignup;
