const Contact = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8">
        <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Have questions or feedback? Fill out the form below and we'll get back to you!
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none resize-none h-32"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-center text-gray-500 text-sm">
          Or reach us at <span className="text-blue-600 font-medium">contact@example.com</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
