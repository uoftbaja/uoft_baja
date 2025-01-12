export default function Sponsors() {
  return (
    <main className="bg-white min-h-screen pb-16">
      <div className="max-w-4xl mx-auto px-4 py-16 md:px-8">
        <h1 className="text-4xl font-bold mb-12 text-gray-900">Our Sponsors</h1>

        {/* Sponsor Tiers */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">
            Current Sponsors
          </h2>
          {/* Add sponsor logos/content here */}
        </section>

        {/* Thank You Message */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Thank you for your support
          </h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              We couldn't have done this without you. We are dedicated students
              hoping to turn the ideas in our minds into reality. Looking for
              the opportunity to come together as a community and apply what we
              learn in class to create something impactful.
            </p>
            <p className="mb-4">
              We couldn't do this without donations, and our sponsors. We
              appreciate everyone who believes in us as much as we do in this
              vision. Support comes in a variety of forms such as services,
              parts or monetary contributions for the vehicle.
            </p>
            <p>
              Your help will support the future generation by providing funding
              for the valuable hands-on learning that this team provides. Please
              see our sponsorship package if you are interested in sponsoring
              the team. Any individual donations are much appreciated as well.
            </p>
          </div>
        </section>

        {/* Sponsorship Package */}
        <section>
          <a
            href="/sponsorship-package.pdf" // Add your actual PDF file
            download
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold"
          >
            Download Sponsorship Package
          </a>
        </section>
      </div>
    </main>
  );
}
