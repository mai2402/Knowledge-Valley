


function CourseCard({ course }) {
    const { name, description, category, price, discount, duration, level } = course;
    const discountedPrice = price - (price * (discount / 100)).toFixed(2);

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 border hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold text-primary mb-2">{name}</h3>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            
            <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                <span className="font-medium">Category: {category}</span>
                <span>Level: {level}</span>
            </div>
            
            <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold text-secondary">${discountedPrice}</span>
                {discount > 0 && (
                    <span className="text-sm line-through text-gray-500">${price.toFixed(2)}</span>
                )}
                <span className="text-sm bg-green-100 text-green-700 font-semibold px-2 py-1 rounded-md">
                    {discount > 0 ? `${discount}% off` : "No Discount"}
                </span>
            </div>
            
            <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <span>Duration: {duration} hours</span>
            </div>
            
            <button className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition">
                Enroll Now
            </button>
        </div>
    );
}

export default CourseCard;


