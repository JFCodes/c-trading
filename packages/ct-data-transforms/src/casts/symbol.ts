export function TRF_CAST_Symbol (value: string): string {
  return value
    .replace(/\s/g,'')
    .toUpperCase()
}
