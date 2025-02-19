export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h2 className="text-4xl font-bold mb-4">😢 Oops, ett fel inträffade!</h2>
      <p className="text-lg mb-6">
        Ladda om sidan eller gå tillbaka till startsidan.
      </p>
      <a
        href="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Tillbaka till startsidan
      </a>
    </div>
  );
};
