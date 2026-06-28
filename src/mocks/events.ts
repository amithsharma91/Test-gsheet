export interface EventData {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  availableSeats: number;
  image: string;
  description: string;
  whatsapp?: string;
}

export const mockEvents: EventData[] = [];