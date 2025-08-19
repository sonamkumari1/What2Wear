import React, { useState } from "react";

function NewsletterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subscribe, setSubscribe] = useState(true);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://what2wear-bsr8.onrender.com/api/mail/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, subscribe }),
      });

      const data = await res.json();
      if (data.success) {
         toast.success("✅ Email sent successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubscribe(true);
      } else {
         toast.error("❌ Failed to send email.");
      }
    } catch (error) {
       toast.error("⚠️ Error: " + error.message);
    }
  };

  return (
    <div id="form" className="flex justify-center items-center px-4 ">
      <div className="rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-5xl font-bold text-center mb-2">Stay in the loop!</h1>
        <p className="text-center text-md text-gray-600 my-6">
          Receive tech news, software tips, and business insights.
          <br /> Subscribe to our newsletter!
        </p>

        {message && (
          <p className="text-center mb-4 font-medium text-green-600">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First name*</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Last name*</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email*</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div className="flex items-center gap-2 mt-5">
            <input
              type="checkbox"
              checked={subscribe}
              onChange={(e) => setSubscribe(e.target.checked)}
              className="w-4 h-4 text-purple-500 border-gray-300 rounded focus:ring-purple-400"
            />
            <label className="text-sm text-gray-700 ">
              Would you like to subscribe to Somnio’s Newsletter?
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-black mt-5 text-white py-2 rounded-lg hover:bg-purple-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewsletterForm;
