export default function getLastByUpdateAt<T extends { updated_at: string }>(list: T[]): T | null {
  if (Array.isArray(list)) {
    const ret = list.sort(
      (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );
    return ret?.[0];
  }
  return null;
}
