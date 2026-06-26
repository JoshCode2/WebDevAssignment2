"use client";

import { useState } from "react";
import { Student } from "@/app/data/student";

type StudentFormProps = {
  onAddStudent: (student: Student) => void;
  nextStudentNumber: number;
};

export default function StudentForm({
  onAddStudent,
  nextStudentNumber,
}: StudentFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [grade, setGrade] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !dateOfBirth || !grade) {
      setErrorMessage("Please complete all fields before adding a student.");
      return;
    }

    const gradeNumber = Number(grade);

    if (gradeNumber < 9 || gradeNumber > 12) {
      setErrorMessage("Current grade must be between Grade 9 and Grade 12.");
      return;
    }

    const newStudent: Student = {
      id: `S${String(nextStudentNumber).padStart(3, "0")}`,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      dateOfBirth: new Date(dateOfBirth),
      grade: gradeNumber,
    };

    onAddStudent(newStudent);

    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setGrade("");
    setErrorMessage("");
  }

  return (
    <section id="add-student" className="w-full rounded-3xl bg-blue-50 p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-blue-950">Add New Student</h2>
      <p className="mt-2 text-gray-600">
        Enter the student details below to add a new student record.
      </p>

      {errorMessage && (
        <p className="mt-5 rounded-xl border border-red-200 bg-red-100 p-4 text-sm font-medium text-red-700">
          {errorMessage}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            First Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="w-full rounded-xl border border-gray-300 p-3 text-black outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className="w-full rounded-xl border border-gray-300 p-3 text-black outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Date of Birth
          </label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)}
            className="w-full rounded-xl border border-gray-300 p-3 text-black outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Current Grade
          </label>
          <input
            type="number"
            min="9"
            max="12"
            value={grade}
            onChange={(event) => setGrade(event.target.value)}
            className="w-full rounded-xl border border-gray-300 p-3 text-black outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          className="rounded-xl bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 md:col-span-2"
        >
          Add Student
        </button>
      </form>
    </section>
  );
}