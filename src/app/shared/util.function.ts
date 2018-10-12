export function isCelularFormatado(value: string): boolean {
  return /\([1-9]{2}\)9{1}/.test(value);
}

export function isCelular(value: string): boolean {
  return /[1-9]{2}9{1}/.test(value);
}

export function isValidCelular(value: string): boolean {
  return /[1-9]{2}9{1}[0-9]{4}[0-9]{4}/.test(value);
}

export function isValidTelefoneFixo(value: string): boolean {
  return /[1-9]{2}[1-8]{1}[0-9]{3}[0-9]{4}/.test(value);
}

