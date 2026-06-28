import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  {
    icon: 'ri-smartphone-line',
    title: 'Responsive',
    description: 'Looks perfect on every device — mobile, tablet, and desktop.',
  },
  {
    icon: 'ri-rocket-line',
    title: 'Fast',
    description: 'Lightning-fast performance with optimized loading and caching.',
  },
  {
    icon: 'ri-code-line',
    title: 'No Coding',
    description: 'Update everything through Google Sheets without touching code.',
  },
  {
    icon: 'ri-google-fill',
    title: 'Google Sheets CMS',
    description: 'Leverage the simplicity of spreadsheets as your content backend.',
  },
  {
    icon: 'ri-stack-line',
    title: 'Unlimited Events',
    description: 'Add as many events as you need — no arbitrary limits.',
  },
  {
    icon: 'ri-refresh-line',
    title: 'Automatic Updates',
    description: 'Changes sync automatically — your site is always current.',
  },
  {
    icon: 'ri-layout-masonry-line',
    title: 'Beautiful Cards',
    description: 'Premium event cards with smooth animations and hover effects.',
  },
];

export default function Features() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section className="relative py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold tracking-wide uppercase mb-4">
            Features
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Everything You Need
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-lg mx-auto">
            Powerful features wrapped in a beautiful, simple interface.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="group p-5 md:p-6 rounded-xl bg-white border border-gray-100 hover:border-primary-200 transition-all duration-400 hover-lift cursor-default">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors duration-400">
                  <i className={`${feature.icon} text-primary-500 text-xl group-hover:text-white transition-colors duration-400`}></i>
                </div>
                <h3 className="font-heading font-semibold text-base text-gray-900 mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}