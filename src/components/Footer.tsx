export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-8 md:px-8">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="https://instagram.com/uoftbajaracing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              Instagram: @uoftbajaracing
            </a>
            <a
              href="mailto:uoftbajaracing@gmail.com"
              className="text-gray-600 hover:text-gray-800"
            >
              Email: uoftbajaracing@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
