"use client";

const blogs = [
  {
    date: "March 2024 • Offensive Security",
    title: "Advanced EDR Evasion Techniques",
    description:
      "Exploring modern methods for bypassing endpoint detection systems using custom shellcode loaders.",
    link: "#",
  },
  {
    date: "Feb 2024 • Active Directory",
    title: "Mastering Kerberos Exploitation",
    description:
      "A deep dive into ticket-based attacks and lateral movement within complex Windows domains.",
    link: "#",
  },
];

export default function BlogsSection() {
  return (
    <section
      className="reveal-3d py-stack-xl max-w-[1280px] mx-auto px-[80px]"
      id="blogs"
    >
      <div className="mb-24">
        <span className="text-primary text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">
          Insights
        </span>
        <h2 className="font-display-xl text-6xl font-bold text-white tracking-tighter">
          Blogs
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.title}
            className="premium-glass group rounded-[2.5rem] tilt-container p-2"
          >
            <div className="p-8 tilt-child">
              <span className="text-primary/50 text-[10px] font-mono block mb-2">
                {blog.date}
              </span>
              <h4 className="font-display-xl text-2xl mb-4 text-white group-hover:text-primary transition-colors">
                {blog.title}
              </h4>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed opacity-70">
                {blog.description}
              </p>
              <a
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-all"
                href={blog.link}
              >
                Read Article{" "}
                <span className="material-symbols-outlined text-xs">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
