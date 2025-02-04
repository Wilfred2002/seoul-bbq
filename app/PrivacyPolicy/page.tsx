// app/privacy-policy/page.tsx
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-100 text-gray-900 flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow p-8 md:p-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        
        <p className="mb-4">Last Updated: [1/27/25]</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Don't Collect</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Collect any personal information (names, emails, phone numbers, etc.)</li>
            <li>Use cookies or tracking technologies</li>
            <li>Have user accounts or login systems</li>
            <li>Process payments or reservations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Third-Party Links</h2>
          <p className="mb-4">
            Our website may contain links to external sites (e.g., Google Maps for directions). 
            We are not responsible for the content or privacy practices of these third-party sites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Compliance with Laws</h2>
          <p className="mb-4">
            While we don't collect data, we fully comply with applicable privacy laws 
            (GDPR, CCPA, etc.). If you have any questions about data privacy, please contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
          <p className="mb-4">
            For any privacy-related questions, please contact us at:<br />
            Email: [seoulbbqandhotpot@gmail.com]
          </p>
        </section>

      </main>
      <Footer />
    </div>
  );
}