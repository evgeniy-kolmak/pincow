export function useDate() {
  return new Date().toLocaleDateString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}