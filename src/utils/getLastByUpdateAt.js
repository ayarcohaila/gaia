export default function getLastByUpdateAt(list) {
  if (Array.isArray(list)) {
    return list.sort((a, b) => new Date(b?.updated_at) - new Date(a?.updated_at))?.[0];
  }
  return [];
}
