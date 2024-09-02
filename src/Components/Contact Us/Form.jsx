import React, { useEffect, useState } from "react";
import { TextField, Typography } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "animate.css";
import WOW from "wowjs";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const Form = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, []);

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_sgevbtl", // Replace with your EmailJS Service ID
        "template_so6r90s", // Replace with your EmailJS Template ID
        data,
        "fBw4kGopdwiqrnQDV" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          setIsPopupVisible(true);
          setTimeout(() => {
            setIsPopupVisible(false);
          }, 3000); // Hide popup after 3 seconds
        },
        (error) => {
          console.log("Failed to send email.", error.text);
        }
      );
  };

  return (
    <div className="relative flex flex-col md:flex-row p-8 space-y-6 md:space-y-0 md:space-x-6 animate-fadeIn">
      {/* Contact Details Section */}
      <div className="w-full md:w-1/3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 p-8 rounded-3xl shadow-2xl text-center">
  <Typography
    variant="h3"
    sx={{
      mb: 7,
      fontWeight: "bold",
      fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem", lg: "4.5rem" },
      lineHeight: 1.2,
    }}
    className="bg-clip-text text-red-400 animate-gradientShift wow animate_animated animatelightSpeedInLeft animate_delay-1s"
  >
    Contact Us
  </Typography>
  <div className="flex flex-col md:flex-row items-center mb-7 mt-10 space-y-4 md:space-y-0">
    <div className="w-12 h-12 mr-5 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transition-transform duration-300 transform hover:scale-110">
      <Phone className="text-white " />
    </div>
    <Typography variant="body1" className="text-white ml-4 md:ml-0">
      +91-7999031586
    </Typography>
  </div>
  <div className="flex flex-col md:flex-row items-center mb-7 mt-10 space-y-4 md:space-y-0">
    <div className="w-12 h-12 mr-5 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transition-transform duration-300 transform hover:scale-110">
      <Email className="text-white" />
    </div>
    <Typography variant="body1" className="text-white ml-4 md:ml-0">
      contact@hiddenleaftechnologies.com
    </Typography>
  </div>
  <div className="flex flex-col md:flex-row items-center mb-7 mt-10 space-y-4 md:space-y-0">
    <div className="w-12 h-12 mr-5 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transition-transform duration-300 transform hover:scale-110">
      <LocationOn className="text-white" />
    </div>
    <Typography variant="body1" className="text-white ml-4 md:ml-0">
      Rajendra Nagar <b>Indore</b>, Pin Code - 452012
    </Typography>
  </div>
</div>

      {/* Enquiry Form Section */}
      <div className="w-full md:w-2/3 bg-white p-8 rounded-3xl shadow-2xl text-center">
        <Typography
          variant="h3"
          sx={{
            mb: 7,
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem", lg: "4.5rem" },
            lineHeight: 1.2,
          }}
          className="bg-clip-text text-red-500 animate-gradientShift wow animate_animated animatelightSpeedInRight animate_delay-1s"
        >
          Enquiry Now
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            className="rounded-lg bg-gray-100 transition-transform duration-300 transform hover:scale-105 focus:scale-105 shadow-md focus:shadow-lg"
            {...register("user_name", { required: "Name is required" })}
            error={!!errors.user_name}
            helperText={errors.user_name?.message}
          />
          <TextField
            fullWidth
            label="Company Name"
            variant="outlined"
            className="rounded-lg bg-gray-100 transition-transform duration-300 transform hover:scale-105 focus:scale-105 shadow-md focus:shadow-lg"
            {...register("company_name", {
              required: "Company Name is required",
            })}
            error={!!errors.company_name}
            helperText={errors.company_name?.message}
          />
          <TextField
            fullWidth
            label="Company URL"
            variant="outlined"
            className="rounded-lg bg-gray-100 transition-transform duration-300 transform hover:scale-105 focus:scale-105 shadow-md focus:shadow-lg"
            {...register("company_url")}
            error={!!errors.company_url}
            helperText={errors.company_url?.message}
          />
          <TextField
            fullWidth
            label="Company Email ID"
            variant="outlined"
            className="rounded-lg bg-gray-100 transition-transform duration-300 transform hover:scale-105 focus:scale-105 shadow-md focus:shadow-lg"
            {...register("company_email", {
              required: "Company Email ID is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
            })}
            error={!!errors.company_email}
            helperText={errors.company_email?.message}
          />
          <TextField
            fullWidth
            label="Optional Personal Email ID"
            variant="outlined"
            className="rounded-lg bg-gray-100 transition-transform duration-300 transform hover:scale-105 focus:scale-105 shadow-md focus:shadow-lg"
            {...register("personal_email", {
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
            })}
            error={!!errors.personal_email}
            helperText={errors.personal_email?.message}
          />
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Tell us about your business"
            variant="outlined"
            className="rounded-lg bg-gray-100 transition-transform duration-300 transform hover:scale-105 focus:scale-105 shadow-md focus:shadow-lg"
            {...register("message", { required: "Please enter a message" })}
            error={!!errors.message}
            helperText={errors.message?.message}
          />
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="rounded-full text-white py-3 px-6 bg-red-500 hover:bg-red-700 mt-6 inline-flex items-center gap-2 transition-transform transform hover:scale-105"
            >
              Submit <ArrowForwardIcon />
            </button>
          </div>
        </form>
      </div>

      {/* Success Popup */}
      {isPopupVisible && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 p-4 bg-green-500 text-white rounded-lg shadow-lg transition-transform animate_animated animate_fadeInDown z-50">
          Message sent successfully!
        </div>
      )}
    </div>
  );
};

export default Form; 