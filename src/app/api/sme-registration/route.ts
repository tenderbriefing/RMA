import { z } from "zod";
import { getAdminDb } from "@/lib/firebaseAdmin";

const RegistrationSchema = z.object({
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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = RegistrationSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json(
        { ok: false, error: "Invalid form data.", issues: parsed.error.issues },
        { status: 400 },
      );
    }

    const data = parsed.data;
    const db = getAdminDb();

    const now = new Date();
    const ref = db.collection("smes").doc();
    const smeId = ref.id;

    await ref.set({
      smeId,
      companyName: data.companyName,
      pacraRegistrationNumber: data.pacraRegistrationNumber,
      tpin: data.tpin,
      businessType: data.businessType,
      dateOfRegistration: data.dateOfRegistration,
      contactPersonName: data.contactPersonName,
      contactPersonPosition: data.contactPersonPosition,
      email: data.email,
      phone: data.phone,
      province: data.province,
      district: data.district,
      town: data.town,
      physicalAddress: data.physicalAddress,
      sector: data.sector,
      productsOrServices: data.productsOrServices,
      ownerFullName: data.ownerFullName,
      ownerNationality: data.ownerNationality,
      ownerIdOrPassportNumber: data.ownerIdOrPassportNumber,
      ownershipPercentage: data.ownershipPercentage,
      numberOfEmployees: data.numberOfEmployees,
      bankName: data.bankName,
      consentToStoreData: data.consentToStoreData,
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
      status: "pending",
    });

    return Response.json({ ok: true, smeId }, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json(
      { ok: false, error: "Failed to submit registration.", detail: message },
      { status: 500 },
    );
  }
}

