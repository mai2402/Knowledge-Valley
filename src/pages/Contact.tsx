function Contact() {
    return (
        <div className="relative min-h-screen bg-background">
            <header className="absolute top-4 left-4 text-3xl font-bold text-primary z-20">
                Knowledge Valley
            </header>

            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full sm:max-w-md md:max-w-lg z-10">
                    <h2 className="text-2xl font-bold text-center mb-6 text-primary">Contact Us</h2>
                    <p className="text-lg text-gray-800 mb-6">
                        Have any questions or need assistance? We're here to help!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;

