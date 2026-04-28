import { z } from "zod";

export const KycStatusSchema = z.enum([
  "pending",
  "verified",
  "rejected",
  "needs_review",
]);
export type KycStatus = z.infer<typeof KycStatusSchema>;

export const KycSchema = z.object({
  companyName: z.string().trim().min(2).max(140),
  pacraRegistrationNumber: z.string().trim().min(2).max(80),
  tpin: z.string().trim().min(2).max(40),
  businessType: z.string().trim().min(2).max(60),
  dateOfRegistration: z.string().trim().min(4).max(20),
  contactPersonName: z.string().trim().min(2).max(140),
  contactPersonPosition: z.string().trim().min(2).max(140),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(40),
  province: z.string().trim().min(2).max(80),
  district: z.string().trim().min(2).max(80),
  town: z.string().trim().min(2).max(80),
  physicalAddress: z.string().trim().min(5).max(200),
  sector: z.string().trim().min(2).max(80),
  productsOrServices: z.string().trim().min(10).max(600),
  ownerFullName: z.string().trim().min(2).max(140),
  ownerNationality: z.string().trim().min(2).max(80),
  ownerIdOrPassportNumber: z.string().trim().min(2).max(80),
  ownershipPercentage: z.coerce.number().min(0).max(100),
  numberOfEmployees: z.coerce.number().int().min(0).max(1_000_000),
  bankName: z.string().trim().min(2).max(120),
  consentToStoreData: z.literal(true),
});

export type KycInput = z.infer<typeof KycSchema>;

export type SmeDoc = KycInput & {
  userId: string;
  status: KycStatus;
  createdAt: string;
  updatedAt: string;
};

