export default function getLastByUpdateAt<T extends { updated_at: string; status: string }>(
  list: T[]
): T | null {
  if (Array.isArray(list)) {
    const ret = list.sort(
      (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );

    const filtered = ret.filter(item => item && item.status === 'active');

    return filtered[0] || null;
  }
  return null;
}
