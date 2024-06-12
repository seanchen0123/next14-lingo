import { auth } from '@clerk/nextjs'

const adminIds = ['user_2hOPcc9Q6Kw0MAo3I97zhF6x9O9']

export const isAdmin = () => {
  const { userId } = auth()

  if (!userId) return false

  return adminIds.includes(userId)
}
