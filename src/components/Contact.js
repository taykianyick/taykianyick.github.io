import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BiPaperPlane } from "react-icons/bi";
import { GrStatusGood } from "react-icons/gr";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    
    emailjs
      .sendForm(
        "service_84ybvwp",
        "template_2jzyq4a",
        form.current,
        "oKVeLKjJqRZ1OQQ-n"
      )
      .then(
        (result) => {
          
          form.current.reset();
          setLoading(false);
         successMsg();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const successMsg = () => {
    setSuccess(true);
    setTimeout(() => {setSuccess(false)}, 3000);
  };

  return (
    <div
      id="contact"
      className=" w-full flex flex-col items-center  px-4 justify-center "
    >
      <h1 className="mt-36 text-5xl md:text-7xl font-medium text-center">
        Contact Me
      </h1>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col">
        <label className="font-semibold mt-5">Name</label>
        <input
          type="text"
          name="name"
          className="border-2 border-white p-1 border-b-slate-600 w-80 focus:outline-none focus:border-b-lime-600"
          required
        />
        <label className="font-semibold mt-5">Email</label>
        <input
          type="email"
          name="reply_to"
          className="border-2 border-white p-1 border-b-slate-600 w-80 focus:outline-none focus:border-b-lime-600"
          required
        />
        <label className="font-semibold mt-5">Subject</label>
        <input
          type="text"
          name="subject"
          className="border-2 border-white p-1 border-b-slate-600 w-80 focus:outline-none focus:border-b-lime-600"
          required
        />
        <label className="font-semibold mt-5">Message</label>
        <textarea
          name="message"
          className="border-2 border-white p-1 border-b-slate-600 w-80 focus:outline-none focus:border-b-lime-600 resize-none"
          required
        />
        {loading ? (
          <button
            type="submit"
            className="flex flex-row gap-3 items-center mt-10 justify-center border-2 border-black rounded-full h-12 text-xl "
            disabled
          >
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </button>
        ) : (
          <button
            type="submit"
            className="flex flex-row gap-3 items-center mt-10 justify-center border-2 border-black rounded-full h-12 text-xl  "
            data-mdb-ripple="true"
          >
            Send Me Message <BiPaperPlane />
          </button>
        )}
      </form>
      {success ? (
        <div
          className="border-2 border-green-500  mt-6 bg-green-300 shadow-lg mx-auto w-96 max-w-full text-xl pointer-events-auto bg-clip-padding rounded-lg block mb-3"
          id="static-example"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-mdb-autohide="false"
        >
          <div className="p-3 bg-green-300 break-words text-white flex items-center text-center justify-center">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="check-circle"
              className="mr-2 fill-current w-6 h-6"
              role="img"
              width="100px"
              height="100px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
              ></path>
            </svg>{" "}
            Message Sent Successfully!
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Contact;
