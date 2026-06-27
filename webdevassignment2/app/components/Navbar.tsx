export default function Navbar() {
  return (
    <header className="w-full bg-slate-900 text-white border-b border-slate-700">
      <nav className="max-w-5xl mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div>
          <h1 className="text-2xl font-bold">New Generation High School</h1>
          <p className="text-sm text-slate-300">Student Portal</p>
        </div>

        <div className="flex gap-4 text-sm font-medium">
          <a href="#" className="hover:text-blue-300">Students</a>
          <a href="#" className="hover:text-blue-300">Add Student</a>
          <a href="#" className="hover:text-blue-300">Contact</a>
        </div>
      </nav>
    </header>
  );
}