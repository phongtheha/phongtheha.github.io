// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("mzblbbdd");
  if (state.succeeded) {
    return <p>Message sent successfully 🙌! I will get back to you as soon as I can! 🏃‍♂️</p>;
  }
  return (
    <form
      className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex flex-col lgl:flex-row gap-10">
        <div className="w-full lgl:w-1/2 flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Your Name
          </p>
          <input
            id="name"
            type="name"
            name="name"
            className="contactInput"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="w-full lgl:w-1/2 flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Phone Number
          </p>
          <input
            id="phone"
            type="phone"
            name="phone"
            className="contactInput"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sm text-gray-400 uppercase tracking-wide">
          Email Address
        </p>
        <input
          id="email"
          type="email"
          name="email"
          className="contactInput"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
        <input
          id="subject"
          type="subject"
          name="subject"
          className="contactInput"
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
        <textarea
          id="message"
          name="message"
          className="contactTextArea"
          cols="30"
          rows="8"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="w-full">
        <button
          // onClick={handleSend}
          type="submit"
          disabled={state.submitting}
          className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
export default ContactForm;
