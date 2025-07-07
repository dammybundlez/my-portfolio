import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white font-ubuntu relative text-black rounded-lg border-4 border-black shadow mb-6 space-y-6"
    >
        <div className="flex justify-between items-center">
            <h2 className="text-4xl font-bold text-left">Contact Me</h2>
            <span className="text-4xl font-bold text-right">✨</span>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1" htmlFor="firstName">Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-0 font-bold text-lg py-1 border-b-2 border-black focus:outline-none transition duration-300 focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block text-sm mb-1" htmlFor="lastName">SurName</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-0 py-1 font-bold text-lg  border-b-2 border-black focus:outline-none transition duration-300 focus:border-yellow-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1" htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-0 py-1 font-bold text-lg  border-b-2 border-black focus:outline-none transition duration-300 focus:border-yellow-500"
        />
      </div>

      <div>
        <label className="block text-sm mb-1" htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-0 py-1 font-bold text-lg  border-b-2 border-black focus:outline-none transition duration-300 focus:border-yellow-500"
        />
      </div>
      <div className="relative inline-block w-full z-10">
        <span className="absolute top-2.5 left-1.5 w-full h-full   border-2 bg-yellow-500 -z-50"></span>
        <button
            type="submit"
            className="submit w-full py-3 relative text-white bg-black font-semibold transition z-10 duration-300"
        >
            Get In Touch
        </button>
      </div>
      <div className="absolute top-[82%] left-[86%] text-yellow-200 text-2xl transform translate-x-3 translate-y-3">
        <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="star"
            >
            <polygon
                points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40"
                fill="#FFD700"
            />
            </svg>
      </div>
    </form>
  );
}
