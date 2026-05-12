"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:gangulsw@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      className="reveal-3d py-stack-xl max-w-[1280px] mx-auto px-6 md:px-[80px] mb-24"
      id="contact"
    >
      <div className="premium-glass carbon-texture p-6 sm:p-12 md:p-24 rounded-[3rem] md:rounded-[4rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="grid md:grid-cols-2 gap-24 relative z-10">
          <div>
            <span className="text-primary text-[10px] tracking-[0.5em] uppercase font-bold mb-6 block">
              Get in Touch
            </span>
            <h2 className="font-display-xl text-4xl md:text-6xl font-bold text-white mb-10 tracking-tighter leading-none flicker">
              Contact
              <br />
              Me
            </h2>
            <p className="text-xl text-on-surface-variant mb-16 leading-relaxed font-light opacity-80">
              Secure a consultation or discuss a potential engagement. All
              communications are strictly confidential.
            </p>
            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all">
                  <span className="material-symbols-outlined text-primary group-hover:text-white">
                    mail
                  </span>
                </div>
                <div className="font-mono text-lg text-on-surface">
                  gangulsw@gmail.com
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all">
                  <span className="material-symbols-outlined text-primary group-hover:text-white">
                    call
                  </span>
                </div>
                <div className="font-mono text-lg text-on-surface">
                  0718853420
                </div>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-8 p-12 bg-white/5 rounded-[3rem] border border-white/5 backdrop-blur-md"
          >
            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/50">
                Name / Organization
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 focus:border-primary focus:ring-0 rounded-2xl px-8 py-5 text-white outline-none transition-all placeholder:text-white/20"
                placeholder="Your Name"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/50">
                Email Address
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 focus:border-primary focus:ring-0 rounded-2xl px-8 py-5 text-white outline-none transition-all placeholder:text-white/20"
                placeholder="email@provider.com"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/50">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 focus:border-primary focus:ring-0 rounded-2xl px-8 py-5 text-white outline-none transition-all placeholder:text-white/20"
                placeholder="How can we work together?"
                rows={4}
              />
            </div>
            <button
              className="w-full bg-primary text-white py-6 rounded-2xl font-bold uppercase tracking-[0.4em] text-xs hover:shadow-[0_0_50px_rgba(216,185,255,0.4)] transition-all flex justify-center items-center gap-4"
              type="submit"
            >
              Send Message{" "}
              <span className="material-symbols-outlined text-lg">send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

