import { FormEvent, useState } from "react";

const LetsTalk = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    reason: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="container mx-auto bg-blue-50 rounded-xl p-6 md:p-10 flex flex-rows items-center justify-center mb-8">
      <div className="max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Lets <span className="text-blue-500">Talk</span>
        </h1>

        <p className="text-center text-gray-700 mb-8">
          Have questions, feedback, or need help getting started? Our team is
          here to support you just send us a message and we'll get back to you
          as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="mb-2 text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Placeholder text"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="rounded-md border-0 bg-white p-3 text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName" className="mb-2 text-gray-700">
                Last Name (optional)
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Placeholder text"
                value={formData.lastName}
                onChange={handleChange}
                className="rounded-md border-0 bg-white p-3 text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="contactNumber" className="mb-2 text-gray-700">
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                placeholder="Placeholder text"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="rounded-md border-0 bg-white p-3 text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-gray-700">
                Email (Optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Placeholder text"
                value={formData.email}
                onChange={handleChange}
                className="rounded-md border-0 bg-white p-3 text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="reason" className="mb-2 text-gray-700">
              Reason
            </label>
            <input
              type="text"
              id="reason"
              name="reason"
              placeholder="Placeholder text"
              value={formData.reason}
              onChange={handleChange}
              required
              className="rounded-md border-0 bg-white p-3 text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Placeholder text"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="rounded-md border-0 bg-white p-3 text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            ></textarea>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-12 rounded-full transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LetsTalk;
