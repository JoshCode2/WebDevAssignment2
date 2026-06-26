import { Student } from "@/app/data/student";
import StudentCard from "./StudentCard";

type StudentListProps = {
  students: Student[];
};

export default function StudentList({ students }: StudentListProps) {
  return (
    <section id="students" className="w-full">
      <h2 className="mb-6 text-2xl font-bold text-blue-950">Student List</h2>

      <div className="grid gap-4 md:grid-cols-2">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </section>
  );
}