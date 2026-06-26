/*
Name: Jireh Agbozo
Date: June 26, 2026
Program Description: This component creates the custom navigation bar for the New Generation High School student portal. The input is static school navigation information shown at the top of the page. The processing displays the school name and simple navigation links using Tailwind CSS. The output is a reusable navbar component that appears at the top of the single page application.
*/

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-900 px-8 py-5 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <h1 className="text-xl font-bold">New Generation High School</h1>

        <div className="flex gap-6 text-sm font-medium">
          <a href="#students" className="hover:text-blue-200">
            Students
          </a>
          <a href="#add-student" className="hover:text-blue-200">
            Add Student
          </a>
          <a href="#footer" className="hover:text-blue-200">
            School Info
          </a>
        </div>
      </div>
    </nav>
  );
}