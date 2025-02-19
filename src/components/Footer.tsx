export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 w-full absolute bottom-0">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} WeatherApp. All rights reserved.
      </p>
    </footer>
  );
};
