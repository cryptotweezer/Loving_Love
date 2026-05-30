import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

// Route is protected via middleware — only Lena's email can access this
export default function AdminPage() {
  return null;
}
