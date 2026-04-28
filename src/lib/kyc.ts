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

  // Optional finance readiness fields (do not break existing schema)
  fundingNeeded: z.boolean().optional().default(false),
  fundingType: z.string().trim().max(60).optional().default(""),
  estimatedFundingAmount: z.string().trim().max(60).optional().default(""),
  hasPurchaseOrderOrContract: z.boolean().optional().default(false),
  fundingPurpose: z.string().trim().max(500).optional().default(""),
});

export const FundingTypeOptions = [
  "Purchase Order Finance",
  "Invoice Finance",
  "Working Capital",
  "Asset Finance",
  "Contract Finance",
  "Trade Finance",
  "Not sure yet",
] as const;

export const KycSchemaWithFinanceRules = KycSchema.superRefine((val, ctx) => {
  if (val.fundingNeeded) {
    if (!val.fundingType || val.fundingType.trim().length < 2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Funding type is required when funding is needed.",
        path: ["fundingType"],
      });
    }
    if (!val.estimatedFundingAmount || val.estimatedFundingAmount.trim().length < 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Estimated funding amount is required when funding is needed.",
        path: ["estimatedFundingAmount"],
      });
    }
    if (!val.fundingPurpose || val.fundingPurpose.trim().length < 5) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Funding purpose is required when funding is needed.",
        path: ["fundingPurpose"],
      });
    }
  }
});

export type KycInput = z.infer<typeof KycSchema>;

export type SmeDoc = KycInput & {
  userId: string;
  status: KycStatus;
  createdAt: string;
  updatedAt: string;
};

