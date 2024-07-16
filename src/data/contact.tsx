export const Contact = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold text-center text-white mt-5">
          Contact - Us
        </h1>
      </div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-20 mx-auto flex flex-col md:flex-row sm:flex-nowrap flex-wrap">
          <div className="md:w-1/2 lg:w-2/3 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative mb-8 md:mb-0">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="Google Maps"
              aria-label="Google Maps"
              marginHeight={0}
              marginWidth={0}
              scrolling="yes"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57842.92042718686!2d81.68171776905483!3d25.027879021805763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398517b81683fa53%3A0xd9d774a9c3f6c62e!2sModel%20Middle%20School%20Baghedi!5e0!3m2!1sen!2sin!4v1720510211016!5m2!1sen!2sin"
              style={{ filter: "contrast(1.2)" }}
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 text-sm sm:text-base">
                  Model Middle School Baghedi, Rewa, Madhya Pradesh 486226,
                  India
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  className="text-indigo-500 leading-relaxed text-sm sm:text-base"
                  href="mailto:example@email.com"
                >
                  ns442284@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed text-sm sm:text-base">7999972872</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/3 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font ml-2">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600 ml-4 text-sm sm:text-base">
              We value your feedback. Tell us what you think about us. Your
              opinion matters to us. Help us improve our services. Share your
              thoughts with us. We are listening. Your feedback is important.
            </p>
            <div className="relative mb-4 ml-2 mr-2">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 ml-2 mr-2">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 ml-2 mr-2">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ml-2 mr-2">
              Submit
            </button>
            <p className="text-xs text-gray-500 mt-3 text-center sm:text-left">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
