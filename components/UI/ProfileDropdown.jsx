"use client";
import { MdLogout, MdOutlineAccountCircle } from "react-icons/md";
import Link from "next/link.js";
import { useAuth } from "@clerk/nextjs";

function ProfileDropdown() {
  const { signOut } = useAuth();

  window.addEventListener("click", function (e) {
    document.querySelectorAll(".dropdown").forEach(function (dropdown) {
      if (!dropdown.contains(e.target)) {
        dropdown.open = false;
      }
    });
  });

  return (
    <details className="dropdown">
      <summary>Profile</summary>
      <ul tabIndex={0} className="p-2 bg-base-100 rounded-t-none">
        <li>
          <Link href="/profile">
            <MdOutlineAccountCircle className="w-6 h-6" />
            Account
          </Link>
        </li>
        <li>
          <button onClick={signOut}>
            <MdLogout className="w-6 h-6" />
            Log Out
          </button>
        </li>
      </ul>
    </details>
  );
}
export default ProfileDropdown;
