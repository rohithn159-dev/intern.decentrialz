"use client";

{/*import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Expense Tracker
        </Link>

        <div className="flex gap-5">
          <Link href="/" className="hover:text-blue-200">
            Dashboard
          </Link>

          <Link href="/expenses" className="hover:text-blue-200">
            Expenses
          </Link>

          <Link
            href="/add-expenses"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
          >
            Add Expense
          </Link>
        </div>
      </div>
    </nav>
  );
}*/}




import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Navigation Links */}
        <div className="flex items-center gap-6">

          <Link
            href="/"
            className="hover:text-blue-200"
          >
            Dashboard
          </Link>

          <Link
            href="/expenses"
            className="hover:text-blue-200"
          >
            Expenses
          </Link>

          {/* Things Recording */}
          <div className="relative">

            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 hover:text-blue-200"
            >
              Things Recording
              <span>▼</span>
            </button>

            {open && (
              <div className="absolute left-0 top-full mt-3 w-56 rounded-xl bg-white py-2 shadow-lg z-50">

                <Link
                  href="/expenses?category=Food"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                >
                   Food
                </Link>

                <Link
                  href="/expenses?category=Travel"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                >
                   Travel
                </Link>

                <Link
                  href="/expenses?category=Shopping"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                >
                   Shopping
                </Link>

                <Link
                  href="/expenses?category=Bills"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                >
                   Bills
                </Link>

                <Link
                  href="/expenses?category=Education"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                >
                   Education
                </Link>

                <Link
                  href="/expenses?category=Entertainment"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                >
                   Entertainment
                </Link>

              </div>
            )}

          </div>

        </div>

        {/* Add Expense */}
        {/*<Link
          href="/add-expense"
          className="bg-white text-blue-600 px-5 py-2.5 rounded-lg font-medium hover:bg-blue-50"
        >
          + Add Expense
        </Link>*/}

      </div>
    </nav>
  );
}



