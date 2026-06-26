'use client';

import { useState } from "react";
import { students } from "./data/student";
import StudentCard from "./components/studentCard";

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  const selectedStudent = students.find(
    (s) => s.id === selectedId
  );

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">

      <h2 className="text-2xl font-bold mb-4">
        Students
      </h2>

      {selectedStudent && (
        <div className="mb-6 bg-blue-50 border border-blue-200 rounded-xl px-5 py-3">
          <p className="text-blue-800 text-sm">
            Selected:{" "}
            <span className="font-bold">
              {selectedStudent.firstName} {selectedStudent.lastName}
            </span>
          </p>

          <button
            onClick={() => setSelectedId(null)}
            className="text-sm text-blue-600 hover:underline"
          >
            Clear
          </button>
        </div>
      )}

      {/* Grid for student cards*/}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            firstName={student.firstName}
            lastName={student.lastName}
            dateOfBirth={student.dateOfBirth}
            grade={student.grade}
            highlight={student.id === selectedId}
            onSelect={handleSelect}
          />
        ))}
      </div>

    </main>
  );
}