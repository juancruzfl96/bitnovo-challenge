import CreatePayment from "@/components/CreatePayment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <div className="flex-grow flex flex-col items-center justify-center">
        <CreatePayment />
      </div>
      <Footer />
    </main>
  );
}
