import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false },
};

// Route is protected via middleware — only Lena's email can access this
export default function AdminPage() {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center bg-white px-6 text-center">
      <p className="font-display italic text-neutral-400 mb-6 text-lg">
        Admin
      </p>
      <h1 className="font-display text-4xl font-normal leading-tight text-neutral-900 md:text-5xl">
        Your dashboard is on its way, Lena.
      </h1>
      <p className="mt-6 max-w-md text-neutral-500 leading-relaxed">
        Managing Moments and Partners from here is coming in the next update.
      </p>
    </div>
  );
}
