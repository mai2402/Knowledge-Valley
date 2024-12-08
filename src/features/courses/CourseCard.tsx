
import { CourseSchema } from "../../types/CourseSchema";
import { formatCurrency } from "../../utils/helpers";

interface CourseCardProps{
    course: CourseSchema,
}


function CourseCard({ course }:CourseCardProps) {
    const { name, description, category, price, discount, duration, level } = course;
    const discountedPrice = price - (price * (discount / 100));

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 border hover:shadow-xl transition-shadow">
            <h3 className="block h-[75px] text-lg font-bold text-primary">{name}</h3>

            <div className="block h-[220px]">
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            
            <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                <span className="font-medium">Category: {category}</span>
                <span>Level: {level}</span>
            </div>
            
            <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold text-secondary">{formatCurrency(discountedPrice)}</span>
                {discount > 0 && (
                    <span className="text-sm line-through text-gray-500">{price}</span>
                )}
                <span className="text-sm bg-green-100 text-green-700 font-semibold px-2 py-1 rounded-md">
                    {discount > 0 ? `${discount}% off` : "No Discount"}
                </span>
            </div>
            
            <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <span>Duration: {duration} hours</span>
            </div>
                </div>
            
            <button className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition">
                Enroll Now
            </button>
        </div>
    );
}

export default CourseCard;


