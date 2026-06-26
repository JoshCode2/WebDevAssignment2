type Props = {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  grade: number;
 
  highlight: boolean;
  onSelect: (id: string) => void;
};
 
const StudentCard = ({
  id,
  firstName,
  lastName,
  dateOfBirth,
  grade,
  highlight,
  onSelect,
}: Props) => {
  return (
    <div
      className={`bg-gray-100 rounded-xl p-6 flex flex-col gap-3 border-2 cursor-pointer transition
        ${
          highlight
            ? "border-blue-500 bg-blue-100 shadow-md shadow-blue-10"
            : "border-gray-500 hover:border-gray-600 hover:bg-blue-50"
        }`}
      onClick={() => onSelect(id)}
    >
 
      <div>
        <h3 className="text-lg font-bold text-black">
          {firstName} {lastName}
        </h3>
 
        <p className="text-sm text-gray-500">
          DOB: {dateOfBirth.toISOString().split("T")[0]}
        </p>
      </div>
 
      <div className="text-sm">
        <span className="font-semibold text-gray-800">
          Grade: {grade}
        </span>
      </div>
 
    </div>
  );
};
 
export default StudentCard;