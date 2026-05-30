// ─── Testimonials (Moments page) ─────────────────────────────────────────────

export interface Testimonial {
  id: string;
  couple_names: string;
  venue_location: string;
  quote: string;
  photo_1_url: string | null;
  photo_2_url: string | null;
  is_featured: boolean;
  created_at: string;
}

// ─── Partners ─────────────────────────────────────────────────────────────────

export interface PartnerCategory {
  id: string;
  name: string;
  created_at: string;
}

export interface Partner {
  id: string;
  name: string;
  category_id: string;
  description: string;
  photo_url: string | null;
  website_url: string | null;
  instagram_handle: string | null;
  created_at: string;
}

// ─── Auth ─────────────────────────────────────────────────────────────────────

export type UserRole = "admin" | "user";
