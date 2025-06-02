function Hero() {
  return (
    <div className="py-64 lg:py-96 bg-[url(/public/images/Public/ContactUs.png)] bg-center w-screen bg-cover">
      <div className="container mx-auto px-4 ">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-xl text-white max-w-2xl text-center mx-auto">
          Have questions, feedback, or need help getting started? Our team is
          here to support you just send us a message and we'll get back to you
          as soon as possible.
        </p>
        {/* Button */}
        <div className="text-center">
          <button className="bg-white text-gray-900 font-semibold mt-4 px-10 py-3 rounded-full shadow-md hover:bg-gray-100">
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
