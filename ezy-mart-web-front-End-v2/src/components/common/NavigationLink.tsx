export default function NavigationLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out"
    >
      {children}
    </a>
  );
}