import useGetCourseById from "../../hooks/courses/useGetCourseById";

interface CourseDetailsProps {
  courseId: number;
}

export default function CourseDetailsCard({ courseId }: CourseDetailsProps) {
  const { course } = useGetCourseById(courseId);

  if (!course) {
    return <p>Course not found.</p>;
  }

  const { name, description, level, price, category, duration, instructor } = course;

  return (
    <div className="flex flex-col bg-gray-200 p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-teal-800 mb-2">{name}</h1>
      <p className="text-lg text-gray-600 mb-4">{description}</p>

      <div className="space-y-2">
        <p className="text-sm font-semibold text-gray-700">
          <span className="font-bold">Level:</span> {level}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-bold">Category:</span> {category}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-bold">Instructor:</span> {instructor}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-bold">Duration:</span> {duration} hours
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-bold">Price:</span> ${price}
        </p>
      </div>
    </div>
  );
}
