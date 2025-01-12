export default function Join() {
  return (
    <main className="bg-white min-h-screen pb-16">
      <div className="max-w-4xl mx-auto px-4 py-16 md:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Join Us!</h1>

        {/* Introduction */}
        <section className="mb-12">
          <div className="space-y-2 mb-8 text-xl text-gray-700">
            <p>Itching to get your hands dirty?</p>
            <p>Want to leave behind a positive impact?</p>
            <p>Interested in helping us build the legacy?</p>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            As a growing team, we are always looking for new members to join.
            Your help would leave a great impact on our team! Check out the
            following subteams.
          </p>
        </section>

        {/* Subteams */}
        <section className="mb-12 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Finance
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Keeping track of the finances of the team to ensure optimal
                budgeting and allocation of resources for vehicle development
              </li>
              <li>Develop the business event deliverables for competition</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Marketing
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Spreading the word about our vision and getting hype for the car
              </li>
              <li>
                Managing social media accounts, producing content and developing
                brand awareness
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Outreach
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Secure sponsorships from companies and the university to fund
                team and event expenses
              </li>
              <li>Organizing community events to boost engagement</li>
              <li>Develop external relationships for opportunities</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Suspension and steering
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Design and adapt the car to stay in contact with the ground as
                much as possible while traversing challenging terrains
              </li>
              <li>
                Design to give the driver optimal control while navigating
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Power-train
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Transform power from the engine to movement for top performance
                (we are required to use a Kohler CH440 engine by Baja SAE)
              </li>
              <li>Optimize transmission for various design challenges</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Electrical
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Optimize vehicle performance through electronic circuitry and
                software controls
              </li>
              <li>Develop data acquisition, safety and light systems</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Chassis
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Engineer the framework for drivers to ensure comfortability,
                safety and strength for rough terrains
              </li>
              <li>Fabricate the chassis</li>
            </ul>
          </div>
        </section>

        <p className="text-xl text-gray-700 font-semibold mb-12">
          There is something for everyone no matter the discipline!
        </p>

        {/* How to join */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            How to join
          </h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              At the beginning of the academic Fall semester, we have a kickoff
              event followed by a recruitment cycle, stay updated by following
              our social media accounts{" "}
              <a
                href="https://instagram.com/uoftbajaracing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                @uoftbajaracing
              </a>
            </p>
            <p>
              If you are hoping to join in the middle of the year send us an
              email{" "}
              <a
                href="mailto:uoftbajaracing@gmail.com"
                className="text-blue-600 hover:text-blue-800"
              >
                uoftbajaracing@gmail.com
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
