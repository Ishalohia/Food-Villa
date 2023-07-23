import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import contactUs from "../assets/ContactUs.svg"
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Call the function to send the email here
      await sendEmail(data);
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending the email:', error);
      alert('Failed to send the message. Please try again later.');
    }
  };

  const sendEmail = async (data) => {
    const templateParams = {
      from_name: data.user_name,
      from_email: data.user_email,
      contact_number: data.user_number,
      message: data.message,
      to_email: 'ishalohia478@gmail.com', 
    };

    const serviceId = 'service_hvgel0c';
    const templateId = 'template_74qrl86';
    const userId = 'ACwWammBTCNFzkJA7';

    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, userId);
      console.log('Email sent successfully:', response);
    } catch (error) {
      console.error('Error sending the email:', error);
      throw error;
    }
  };

  return (
    <div className="flex  justify-center items-center p-4 md:p-8 lg:p-16">
      <div className="mb-4 md:mb-8 lg:mb-12 hidden md:block">
        <img src={contactUs} alt="contact-us" width={400} height={400} />
      </div>
      <form
        className="w-full max-w-md border border-orange-400 rounded-lg shadow-lg p-4 m-4 flex flex-col items-start"
        style={{
          background: "linear-gradient(to right top, #fec0d5, #ffbac4, #ffb7b2, #ffb59e, #f8b58c)",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4 w-full">
          <label className="text-lg font-semibold">Username</label>
          <Controller
            name="user_name"
            control={control}
            rules={{ required: 'Username is required' }}
            render={({ field }) => <input {...field} name="user_name" className="w-full border rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-orange-500" />}
          />
          {errors.username && <span className="text-red-500">{errors.username.message}</span>}
        </div>

        <div className="mb-4 w-full">
          <label className="text-lg font-semibold">Email</label>
          <Controller
            name="user_email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => <input {...field} name="user_email" className="w-full border rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-orange-500" />}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>

        <div className="mb-4 w-full">
          <label className="text-lg font-semibold">Contact Number</label>
          <Controller
            name="user_number"
            control={control}
            rules={{ required: 'Contact number is required' }}
            render={({ field }) => <input {...field} name="user_number" className="w-full border rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-orange-500" />}
          />
          {errors.contactNumber && <span className="text-red-500">{errors.contactNumber.message}</span>}
        </div>

        <div className="mb-4 w-full">
          <label className="text-lg font-semibold">Message</label>
          <Controller
            name="message"
            control={control}
            rules={{ required: 'Message is required' }}
            render={({ field }) => <textarea {...field}  name="message" className="w-full border rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-orange-500" />}
          />
          {errors.message && <span className="text-red-500">{errors.message.message}</span>}
        </div>
        <button className="w-3/4 self-center rounded-md bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
