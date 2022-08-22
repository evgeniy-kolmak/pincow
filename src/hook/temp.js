export function useTemp(temp) {
  return !temp ? null : Math.round(temp - 273)

}