import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { EventData } from '@/mocks/events';
import EventCard from './EventCard';

const SHEETDB_URL = 'https://sheetdb.io/api/v1/rurx0ndp0u6br';

interface SheetDBRow {
  Title: string;
  Date: string;
  Time: string;
  Location: string;
  Seats: string;
  WhatsApp: string;
  Image: string;
}

function mapSheetRowToEvent(row: SheetDBRow, index: number): EventData {
  const seats = parseInt(row.Seats, 10);
  return {
    id: `event-${index}`,
    name: row.Title || 'Untitled Event',
    date: row.Date || '',
    time: row.Time || '',
    location: row.Location || '',
    availableSeats: isNaN(seats) ? 0 : seats,
    image: row.Image || '',
    description: '',
    whatsapp: row.WhatsApp || '',
  };
}

function sortByDate(events: EventData[]): EventData[] {
  return [...events].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    if (isNaN(dateA) && isNaN(dateB)) return 0;
    if (isNaN(dateA)) return 1;
    if (isNaN(dateB)) return -1;
    return dateA - dateB;
  });
}

export default function UpcomingEvents() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchEvents() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(SHEETDB_URL);
        if (!response.ok) {
          throw new Error(`Failed to fetch events (${response.status})`);
        }
        const rows: SheetDBRow[] = await response.json();

        if (cancelled) return;

        const mapped = rows.map((row, i) => mapSheetRowToEvent(row, i));
        const sorted = sortByDate(mapped);
        setEvents(sorted);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Something went wrong while loading events.');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchEvents();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="events" className="relative py-16 md:py-24 bg-[#F8FAFC]" data-product-shop="">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold tracking-wide uppercase mb-4">
            Events
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Upcoming Events
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-lg mx-auto">
            These events are loaded dynamically from Google Sheets.
          </p>
        </div>

        <div ref={ref}>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={`skeleton-${i}`}
                  className="glass-card overflow-hidden animate-pulse"
                >
                  <div className="h-52 md:h-56 bg-gray-200" />
                  <div className="p-5 md:p-6 flex flex-col gap-3">
                    <div className="h-5 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-4 bg-gray-200 rounded w-2/3" />
                    <div className="flex flex-col gap-2 mt-1">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gray-200" />
                        <div className="h-4 bg-gray-200 rounded w-32" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gray-200" />
                        <div className="h-4 bg-gray-200 rounded w-24" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gray-200" />
                        <div className="h-4 bg-gray-200 rounded w-36" />
                      </div>
                    </div>
                    <div className="h-10 bg-gray-200 rounded-lg w-full mt-3" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className={`flex flex-col items-center justify-center py-20 text-center animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
              <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <i className="ri-error-warning-line text-red-400 text-3xl"></i>
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-700 mb-2">
                Failed to Load Events
              </h3>
              <p className="text-gray-400 text-base max-w-sm mb-6">
                {error}
              </p>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="px-6 py-2.5 rounded-lg bg-primary-500 text-white font-semibold text-sm hover:bg-primary-600 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Try Again
              </button>
            </div>
          ) : events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
                  style={{ transitionDelay: `${index * 0.12}s` }}
                >
                  <EventCard event={event} index={index} />
                </div>
              ))}
            </div>
          ) : (
            <div className={`flex flex-col items-center justify-center py-20 text-center animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <i className="ri-calendar-event-line text-gray-400 text-3xl"></i>
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-700 mb-2">
                No Upcoming Events
              </h3>
              <p className="text-gray-400 text-base max-w-sm">
                Please check again later.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}