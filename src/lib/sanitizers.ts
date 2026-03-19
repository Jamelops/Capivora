export function onlyLetters(value: string) {
  return value
    .replace(/[^a-zA-ZÀ-ÿ\s]/g, '')
    .replace(/\s{2,}/g, ' ')
    .trimStart()
}

export function onlyLettersAndCommonText(value: string) {
  return value
    .replace(/[^a-zA-ZÀ-ÿ0-9\s./-]/g, '')
    .replace(/\s{2,}/g, ' ')
    .trimStart()
}

export function onlyNumbers(value: string) {
  return value.replace(/\D/g, '')
}

export function limitCharacters(value: string, max: number) {
  return value.slice(0, max)
}