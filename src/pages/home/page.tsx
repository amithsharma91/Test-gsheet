import Navbar from '@/components/feature/Navbar';
import HeroSection from '@/components/feature/HeroSection';
import UpcomingEvents from '@/components/feature/UpcomingEvents';
import HowItWorks from '@/components/feature/HowItWorks';
import Features from '@/components/feature/Features';
import CTASection from '@/components/feature/CTASection';
import Footer from '@/components/feature/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <UpcomingEvents />
      <HowItWorks />
      <Features />
      <CTASection />
      <Footer />
    </main>
  );
}