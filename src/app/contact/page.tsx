export default function Contact() {
  return (
    <main className="bg-white min-h-screen pb-16">
      <div className="max-w-4xl mx-auto px-4 py-16 md:px-8">
        <h1 className="text-4xl font-bold mb-12 text-gray-900">Contact Us</h1>

        <div className="space-y-6 text-lg">
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com/uoftbajaracing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              Instagram: @uoftbajaracing
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:uoftbajaracing@gmail.com"
              className="text-gray-700 hover:text-gray-900"
            >
              Email: uoftbajaracing@gmail.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
