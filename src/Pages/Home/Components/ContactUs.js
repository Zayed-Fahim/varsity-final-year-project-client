import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BiCurrentLocation } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Must fill up your name field.")
    .matches(/^[A-Za-z_ ]+$/i, "Alphabetical characters only"),
  schoolName: yup
    .string()
    .required("Must write your school name.")
    .matches(/^[A-Za-z_ ]+$/i, "Alphabetical characters only"),
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "The Email you entered is invalid"
    ),
  phone: yup
    .string()
    .required("Phone Number is required")
    .matches(
      /^(?:(?:\+|00)88|01)?\d{11}$/,
      "Phone Number you entered is invalid"
    ),
  message: yup.string().required("Message is required"),
});

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mood: "onTouched",
    resolver: yupResolver(formSchema),
  });
  const sendMail = (data, e) => {
    console.log(data);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bt76dyc",
        "template_3yngzmg",
        e.target,
        "sl9qWJ_VLA9KQrDMV"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            toast.success(
              "Thanks for messaging us.We received your message.We will contact your soon."
            );
            e.target.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section
      className="xl:max-h-max container mx-auto xl:mb-20"
      id="contact-us"
    >
      <div className="xl:my-16">
        <h1 className="text-center font-bold xl:text-5xl">Contact Info</h1>
      </div>
      <div className="flex xl:justify-between">
        <div className="bg-white shadow-lg xl:py-12 xl:px-20 xl:max-h-[420px] border">
          <div className="grid place-items-center mb-8">
            <h1 className="xl:text-3xl font-bold">Contact Info</h1>
            <p className="xl:text-xl font-bold">
              If you want to get more info, ping us now.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-6">
              <BiCurrentLocation className="xl:h-[52px] xl:w-[52px]" />
              <div>
                <h1 className="xl:text-xl font-bold">Our address</h1>
                <h1 className="">
                  House: 941, Road: 14, Avenue: 2 Mirpur DOHS, Dhaka 1216
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <MdEmail className="xl:h-[52px] xl:w-[52px]" />
              <div>
                <h1 className="xl:text-xl font-bold">Email address</h1>
                Email:{" "}
                <Link
                  to="mailto:amaderschool@gmail.com"
                  onClick={() => {
                    window.location = "mailto:amaderschool@gmail.com";
                  }}
                >
                  amaderschool@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <FaPhoneSquareAlt className="xl:h-[52px] xl:w-[52px]" />
              <div>
                <h1 className="xl:text-xl font-bold">Our support</h1>
                <h1>
                  Phone:{" "}
                  <Link
                    to="tel:+880 1891 988693"
                    onClick={() => {
                      window.location = "tel:+880 1891 988693";
                    }}
                  >
                    +880 1891 988693
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <form
          className="flex flex-col max-w-full  xl:min-w-[600px] xl:max-w-max"
          onSubmit={handleSubmit(sendMail)}
        >
          <div className="xl:min-w-full">
            <label className="label">
              <span className="text-sm xl:text-xl">Name*</span>
            </label>
            <input
              {...register("name")}
              className="border xl:min-w-full xl:h-10 px-4 outline-[#FFBE15]"
            />
            <p className="text-red-500">{errors.name?.message}</p>
          </div>
          <div className="xl:min-w-full">
            <label className="label">
              <span className="text-sm xl:text-xl">School Name*</span>
            </label>
            <input
              {...register("schoolName")}
              className="border xl:min-w-full xl:h-10 px-4 outline-[#FFBE15]"
            />
            <p className="text-red-500">{errors.schoolName?.message}</p>
          </div>
          <div className="xl:min-w-full">
            <label className="label">
              <span className="text-sm xl:text-xl">Email*</span>
            </label>
            <input
              {...register("email")}
              className="border xl:min-w-full xl:h-10 px-4 outline-[#FFBE15]"
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
          <div className="xl:min-w-full">
            <label className="label">
              <span className="text-sm xl:text-xl">Phone*</span>
            </label>
            <input
              {...register("phone")}
              className="border xl:min-w-full xl:h-10 px-4 outline-[#FFBE15]"
            />
            <p className="text-red-500">{errors.phone?.message}</p>
          </div>
          <div className="xl:min-w-full">
            <label className="label">
              <span className="text-sm xl:text-xl">Message*</span>
            </label>
            <textarea
              rows={3}
              {...register("message")}
              className="border xl:min-w-full xl:h-full px-4 pt-2 outline-[#FFBE15]"
            />
            <p className="text-red-500">{errors.message?.message}</p>
          </div>

          <div className="bg-[#FFBE15] xl:mt-24 xl:w-28 grid place-items-center border border-[#FFBE15] hover:bg-white hover:border hover:border-[#FFBE15] hover:text-[#FFBE15] ">
            <input
              type="submit"
              value="SEND"
              className="font-bold xl:text-xl py-1"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
