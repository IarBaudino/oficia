export type UserRole = "admin" | "profesional";

export type PublicationStatus = "draft" | "pending" | "published" | "hidden";

export type RequestStatus =
  | "nueva"
  | "en_revision"
  | "profesional_asignada"
  | "en_gestion"
  | "finalizada";

export type JoinStatus = "solicitud" | "en_revision" | "aprobada" | "rechazada";

export type ContentStatus = "enviado" | "en_revision" | "aprobado" | "publicado" | "rechazado";

export interface Zone {
  id: string;
  name: string;
  slug: string;
  active: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl?: string;
  active: boolean;
  order: number;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  categoryId: string;
  zoneIds: string[];
  professionalIds: string[];
  imageUrl?: string;
  seoTitle?: string;
  seoDescription?: string;
  active: boolean;
}

export interface Professional {
  id: string;
  userId?: string;
  firstName: string;
  lastName: string;
  slug: string;
  photoUrl?: string;
  bio: string;
  mainTrade: string;
  specialties: string[];
  experience?: string;
  education?: string;
  serviceIds: string[];
  zoneIds: string[];
  status: PublicationStatus | "pending_review" | "rejected";
  featured: boolean;
}

export interface ServiceRequest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceId?: string;
  serviceLabel: string;
  zoneId?: string;
  zoneLabel: string;
  description: string;
  preferredDate?: string;
  extraInfo?: string;
  attachmentUrls: string[];
  status: RequestStatus;
  assignedProfessionalId?: string;
  internalNotes?: string;
  createdAt: string;
}

export interface JoinRequest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  trade: string;
  specialties: string;
  experience: string;
  education?: string;
  workZone: string;
  availability?: string;
  bio?: string;
  extraInfo?: string;
  photoUrl?: string;
  documentUrls: string[];
  status: JoinStatus;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  authorName: string;
  experience: string;
  serviceLabel?: string;
  rating?: number;
  status: PublicationStatus;
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  coverUrl?: string;
  youtubeUrl?: string;
  category?: string;
  tags: string[];
  authorName: string;
  authorProfessionalId?: string;
  seoTitle?: string;
  seoDescription?: string;
  status: PublicationStatus;
  publishedAt?: string;
}

export interface AvailabilityBlock {
  id: string;
  professionalId: string;
  startDate: string;
  endDate: string;
  reason?: string;
}

export interface ContentSubmission {
  id: string;
  professionalId: string;
  title: string;
  body: string;
  status: ContentStatus;
  createdAt: string;
}
