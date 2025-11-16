import React, { useState } from "react";

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        // Show popup after short delay to ensure Formspree receives data
        setTimeout(() => setSubmitted(true), 500);
    };

    return (
        <section className="pb-12">
            <h2 className="text-6xl md:text-8xl font-black text-center mb-16 uppercase tracking-tighter">
                Contact
            </h2>

            {/* SUCCESS POPUP */}
           {submitted && (
    <div className="fixed inset-0 backdrop-blur-md bg-black/60 flex justify-center items-center z-50 animate-fadeIn">
        <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border border-white/30 shadow-2xl text-white p-10 rounded-3xl w-[90%] max-w-md text-center animate-scaleIn">

            {/* Success Icon */}
            <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center">
                    <span className="text-4xl">✔️</span>
                </div>
            </div>

            <h3 className="text-3xl font-extrabold mb-3 tracking-wide drop-shadow-lg">
                Form Submitted!
            </h3>

            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Thank you! Your message has been received.  
                I will get in touch with you soon.
            </p>

            {/* Close Button */}
            <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-xl bg-white/20 border border-white/40 text-white font-semibold hover:bg-white/30 transition-all duration-300 backdrop-blur-md"
            >
                Close
            </button>

            {/* Glow Effect */}
            <div className="absolute -z-10 inset-0 rounded-3xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-2xl opacity-70"></div>
        </div>
    </div>
)}


            {/* FORM */}
            <form
                action="https://formspree.io/f/meovrgze"
                method="POST"
                target="hidden_iframe"
                onSubmit={handleSubmit}
                className="max-w-4xl mx-auto"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        className="w-full bg-transparent border border-gray-600 focus:border-purple-500 text-white p-3 outline-none"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="w-full bg-transparent border border-gray-600 focus:border-purple-500 text-white p-3 outline-none"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone (Optional)"
                        className="w-full bg-transparent border border-gray-600 text-white p-3 outline-none md:col-span-2"
                    />

                    <textarea
                        name="message"
                        placeholder="Message"
                        required
                        rows={5}
                        className="w-full bg-transparent border border-gray-600 focus:border-purple-500 text-white p-3 outline-none resize-none md:col-span-2"
                    ></textarea>
                </div>

                <div className="mt-8 text-left">
                    <button
                        type="submit"
                        className="bg-transparent border border-gray-600 text-white px-6 py-3"
                    >
                        Get in Touch
                    </button>
                </div>
            </form>

            {/* Hidden iframe (required to prevent redirect) */}
            <iframe
                name="hidden_iframe"
                style={{ display: "none" }}
            ></iframe>
        </section>
    );
}

export default Contact;
