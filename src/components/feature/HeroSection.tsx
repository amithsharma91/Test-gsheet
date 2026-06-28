import FloatingShapes from './FloatingShapes';

const trustBadges = [
  { icon: 'ri-code-line', label: 'No Coding' },
  { icon: 'ri-refresh-line', label: 'Live Updates' },
  { icon: 'ri-google-fill', label: 'Google Sheets' },
  { icon: 'ri-shield-check-line', label: 'Easy to Manage' },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-accent-500"
      ></div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.08),transparent_50%)]"></div>

      <FloatingShapes />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8FAFC]"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6 lg:px-12 pt-24 pb-20 md:pt-32 md:pb-28 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-up">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-soft"></div>
          <span className="text-white/90 text-xs md:text-sm font-medium">
            Powered by Google Sheets
          </span>
        </div>

        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Google Sheets
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
            Powered Website
          </span>
        </h1>

        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Update your website without coding. Simply edit a Google Sheet and your website updates automatically.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#events"
            className="px-8 py-3.5 rounded-lg bg-white text-primary-600 font-semibold text-sm md:text-base whitespace-nowrap hover:bg-gray-50 transition-all duration-300 cursor-pointer btn-ripple shadow-sm"
          >
            View Events
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3.5 rounded-lg border-2 border-white/30 text-white font-semibold text-sm md:text-base whitespace-nowrap hover:bg-white/10 transition-all duration-300 cursor-pointer"
          >
            Learn More
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {trustBadges.map((badge, idx) => (
            <div
              key={badge.label}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 animate-fade-up"
              style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center">
                <i className={`${badge.icon} text-white text-lg`}></i>
              </div>
              <span className="text-white/80 text-xs font-medium whitespace-nowrap">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}