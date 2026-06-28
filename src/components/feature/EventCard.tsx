import type { EventData } from '@/mocks/events';

interface EventCardProps {
  event: EventData;
  index: number;
}

const PLACEHOLDER_IMAGE = 'https://readdy.ai/api/search-image?query=Abstract%20minimalist%20event%20banner%20with%20soft%20gradient%20background%20in%20warm%20neutral%20tones%2C%20clean%20geometric%20shapes%20with%20subtle%20transparency%2C%20modern%20professional%20design%2C%20calendar%20icon%20motif%2C%20elegant%20and%20understated%20composition%2C%20light%20airy%20aesthetic&width=800&height=600&seq=event-placeholder&orientation=landscape';

export default function EventCard({ event, index }: EventCardProps) {
  const imageSrc = event.image && event.image.trim() !== '' ? event.image : PLACEHOLDER_IMAGE;
  const hasSeats = !isNaN(event.availableSeats) && event.availableSeats > 0;

  return (
    <div
      className="group glass-card card-tilt hover-lift overflow-hidden"
      style={{
        animationDelay: `${index * 0.15}s`,
      }}
    >
      <div className="relative img-zoom h-52 md:h-56">
        <img
          src={imageSrc}
          alt={event.name}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {hasSeats && (
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-white/80 backdrop-blur-sm border border-white/50">
            <span className="text-primary-600 font-semibold text-xs">
              {event.availableSeats} seats
            </span>
          </div>
        )}
      </div>

      <div className="p-5 md:p-6 flex flex-col gap-3">
        <h3 className="font-heading font-semibold text-lg text-gray-900 leading-snug group-hover:text-primary-600 transition-colors duration-300">
          {event.name}
        </h3>

        {event.description && (
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
            {event.description}
          </p>
        )}

        <div className="flex flex-col gap-2 mt-1">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
              <i className="ri-calendar-line text-primary-500 text-base"></i>
            </div>
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
              <i className="ri-time-line text-primary-500 text-base"></i>
            </div>
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
              <i className="ri-map-pin-line text-primary-500 text-base"></i>
            </div>
            <span>{event.location}</span>
          </div>
        </div>

        {event.whatsapp && event.whatsapp.trim() !== '' ? (
          <a
            href={event.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full py-3 rounded-lg bg-green-500 text-white font-semibold text-sm hover:bg-green-600 transition-all duration-300 whitespace-nowrap btn-ripple cursor-pointer flex items-center justify-center gap-2"
          >
            <i className="ri-whatsapp-line text-lg"></i>
            Reserve via WhatsApp
          </a>
        ) : (
          <button
            type="button"
            className="mt-3 w-full py-3 rounded-lg bg-primary-500 text-white font-semibold text-sm hover:bg-primary-600 transition-all duration-300 whitespace-nowrap btn-ripple cursor-pointer"
          >
            Reserve Spot
          </button>
        )}
      </div>
    </div>
  );
}