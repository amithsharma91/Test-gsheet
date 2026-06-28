import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    step: '01',
    title: 'Open Google Sheets',
    description: 'Client opens the shared Google Sheet with a simple, pre-formatted event template.',
    icon: 'ri-google-fill',
  },
  {
    step: '02',
    title: 'Add or Edit Events',
    description: 'Add new events or update existing ones — no technical skills needed.',
    icon: 'ri-edit-line',
  },
  {
    step: '03',
    title: 'Website Fetches Data',
    description: 'The website automatically pulls the latest data from the Google Sheet via API.',
    icon: 'ri-download-cloud-line',
  },
  {
    step: '04',
    title: 'Visitors See Updates',
    description: 'Changes appear instantly on the live website for all visitors.',
    icon: 'ri-eye-line',
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="how-it-works" className="relative py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-50 text-accent-600 text-xs font-semibold tracking-wide uppercase mb-4">
            Process
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            How It Works
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-lg mx-auto">
            Four simple steps to keep your website always up to date.
          </p>
        </div>

        <div ref={ref} className="timeline-line relative">
          <div className="flex flex-col gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div
                  className={`flex flex-col lg:flex-row items-start gap-6 lg:gap-12 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="flex items-center gap-4 lg:gap-0 lg:block">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0 lg:hidden">
                        <span className="text-white font-heading font-bold text-sm">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm lg:max-w-none lg:mx-0">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:flex relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 items-center justify-center flex-shrink-0 text-white font-heading font-bold text-lg">
                    {step.step}
                  </div>

                  <div className="flex-1 hidden lg:block">
                    {index % 2 === 1 && (
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                          <i className={`${step.icon} text-primary-500 text-xl`}></i>
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-lg text-gray-900 mb-1">
                            {step.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    )}
                    {index % 2 === 0 && (
                      <div className="flex items-start gap-4 justify-end">
                        <div>
                          <h3 className="font-heading font-semibold text-lg text-gray-900 mb-1 text-right">
                            {step.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed text-right">
                            {step.description}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                          <i className={`${step.icon} text-primary-500 text-xl`}></i>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}