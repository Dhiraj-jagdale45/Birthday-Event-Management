import Hero from "../components/Hero";
import Services from "../components/Services";
import EventCategories from "../components/EventCategories";
import AppointmentForm from "../components/AppointmentForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <EventCategories />
      <AppointmentForm />
    </main>
  );
}
