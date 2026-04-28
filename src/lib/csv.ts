export function toCsvValue(value: unknown) {
  const s = value === null || value === undefined ? "" : String(value);
  return `"${s.replaceAll('"', '""')}"`;
}

export function toCsvRow(values: unknown[]) {
  return `${values.map(toCsvValue).join(",")}\n`;
}

