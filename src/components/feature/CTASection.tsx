export default function CTASection() {
  return (
    <section id="cta" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>

      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-500/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent-500/5 blur-3xl"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
        <div className="glass-card p-8 md:p-12 lg:p-16">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Ready to Manage Events Easily?
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-8 max-w-lg mx-auto">
            Start updating your website through Google Sheets today. No coding, no complexity — just results.
          </p>
          <a
            href="#"
            className="inline-flex px-8 py-4 rounded-lg bg-primary-500 text-white font-semibold text-base whitespace-nowrap hover:bg-primary-600 transition-all duration-300 cursor-pointer btn-ripple shadow-sm hover:scale-105"
          >
            Get Started
            <i className="ri-arrow-right-line ml-2 text-lg"></i>
          </a>
        </div>
      </div>
    </section>
  );
}