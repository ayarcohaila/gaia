export default function getLastByUpdateAt(list) {
  return list.sort((a, b) => new Date(b?.updated_at) - new Date(a?.updated_at))?.[0];
}
