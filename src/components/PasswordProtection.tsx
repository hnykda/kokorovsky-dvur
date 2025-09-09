"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PasswordProtection({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if already authenticated
    const auth = localStorage.getItem("kokorak_auth");
    if (auth === "authenticated") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === "kokorak") {
      localStorage.setItem("kokorak_auth", "authenticated");
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (isLoading) {
    return <div className="loading-screen"></div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="password-screen">
        <div className="password-container">
          <div className="password-logo">
            <Image
              src="/images/logo-simple.svg"
              alt="Kokořovský dvůr"
              width={120}
              height={120}
              priority
            />
          </div>
          <h1 className="password-title">Kokořovský dvůr</h1>
          <p className="password-subtitle">Žlutice • 1680</p>
          <form onSubmit={handleSubmit} className="password-form">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Zadejte heslo"
              className={`password-input ${error ? "error" : ""}`}
              autoFocus
            />
            <button type="submit" className="password-button">
              Vstoupit
            </button>
            {error && (
              <p className="password-error">
                Nesprávné heslo. Zkuste to znovu.
              </p>
            )}
          </form>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
