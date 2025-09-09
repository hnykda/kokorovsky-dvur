"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-brand">
          <Link href="/" className="nav-logo-link">
            <Image
              src="/images/logo-simple.svg"
              alt="Kokorak Logo"
              width={50}
              height={50}
              className="nav-logo-image"
            />
          </Link>
          <span className="nav-text">Kokorak</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link
              href="/o-nas"
              className={pathname === "/o-nas" ? "active" : ""}
            >
              O nás
            </Link>
          </li>
          <li>
            <Link
              href="/kontakt"
              className={pathname === "/kontakt" ? "active" : ""}
            >
              Kontakt
            </Link>
          </li>
          {/* hidden for now until we have content */}
          {/* <li>
            <Link href="/blog" className={pathname === "/blog" ? "active" : ""}>
              Blog
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
