import { prisma } from '@/utils/prisma'

export default async function DbPrismaPage() {
  const data = await prisma.strava_users.findMany();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}