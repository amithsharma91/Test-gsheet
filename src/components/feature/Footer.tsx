export default function Footer() {
  return (
    <footer id="contact" className="relative bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          <div className="flex flex-col gap-4">
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-primary-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <i className="ri-flashlight-line text-white text-lg"></i>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                EventFlow CMS
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The easiest way to manage your event website. Powered by Google Sheets — no coding required.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-4 text-white">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              <a href="#hero" className="text-gray-400 text-sm hover:text-primary-400 transition-colors duration-200 whitespace-nowrap">Home</a>
              <a href="#events" className="text-gray-400 text-sm hover:text-primary-400 transition-colors duration-200 whitespace-nowrap">Upcoming Events</a>
              <a href="#how-it-works" className="text-gray-400 text-sm hover:text-primary-400 transition-colors duration-200 whitespace-nowrap">How It Works</a>
              <a href="#cta" className="text-gray-400 text-sm hover:text-primary-400 transition-colors duration-200 whitespace-nowrap">Get Started</a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-4 text-white">Connect</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-all duration-300 cursor-pointer" aria-label="Twitter">
                <i className="ri-twitter-x-line text-white text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-all duration-300 cursor-pointer" aria-label="LinkedIn">
                <i className="ri-linkedin-fill text-white text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-all duration-300 cursor-pointer" aria-label="GitHub">
                <i className="ri-github-fill text-white text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-all duration-300 cursor-pointer" aria-label="YouTube">
                <i className="ri-youtube-fill text-white text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} EventFlow CMS. All rights reserved.
          </p>
          <a
            href="#hero"
            className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-all duration-300 cursor-pointer"
            aria-label="Back to top"
          >
            <i className="ri-arrow-up-line text-white text-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}