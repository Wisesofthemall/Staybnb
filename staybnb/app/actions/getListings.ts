import prisma from "@/app/libs/prismadb";

export type ListingType = {
  userId?: string;
};
export default async function getListings(params: ListingType) {
  const { userId } = params;
  let query: any = {};
  if (userId) {
    query = { userId };
  }

  try {
    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: { createdAt: "desc" },
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));
    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
