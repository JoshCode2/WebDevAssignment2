"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudentList from "@/components/StudentList";
import StudentForm from "@/components/StudentForm";
import { students as initialStudents, Student } from "@/app/data/student";

export default function Home() {
  const [studentList, setStudentList] = useState<Student[]>(initialStudents);

  function addStudent(newStudent: Student) {
    setStudentList([...studentList, newStudent]);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10">
        <section className="rounded-2xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-4xl font-bold text-blue-950">
            New Generation High School Student Portal
          </h1>

          <p className="mt-4 text-gray-600">
            View current students and add new student records to the portal.
          </p>
        </section>

        <StudentList students={studentList} />

        <StudentForm
  onAddStudent={addStudent}
  nextStudentNumber={studentList.length + 1}
/>
      </main>

      <Footer />
    </div>
  );
}