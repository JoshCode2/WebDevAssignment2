import { Student } from "@/app/data/student";

type StudentCardProps = {
  student: Student;
};

export default function StudentCard({ student }: StudentCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl">
        👤
      </div>

      <h3 className="text-xl font-bold text-blue-950">
        {student.firstName} {student.lastName}
      </h3>

      <div className="mt-4 space-y-2 text-sm text-gray-700">
        <p>📅 Date of Birth: {student.dateOfBirth}</p>
        <p>🎓 Current Grade: Grade {student.grade}</p>
        <p className="text-gray-500">Student ID: {student.id}</p>
      </div>
    </div>
  );
}