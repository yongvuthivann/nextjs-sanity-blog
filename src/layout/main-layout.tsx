import React from "react";

type props = {
  children: React.ReactNode;
};
export default function MainLayout({ children }: props) {
  return (
    <main className="min-h-sreen max-w-7xl w-full mx-auto p-5">{children}</main>
  );
}
