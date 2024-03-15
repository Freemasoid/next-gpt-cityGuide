import Sidebar from "@/components/Sidebar.jsx";
import Navbar from "@/components/Navbar.jsx";

export default function layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="bg-base-200 px-8 py-12 min-h-screen">{children}</div>
    </div>
  );
}