
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6">
      <div className="max-w-6xl mx-auto text-center">
        © {new Date().getFullYear()} Greenbit. All rights reserved.
      </div>
    </footer>
  );
}