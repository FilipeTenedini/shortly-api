import sanitize from 'sanitize-html';

function sanitizeEntrance(value) {
  const sanitizedValue = sanitize(value);
  if (sanitizedValue === value) return value.trim();

  throw new Error("it's a invalid value");
}

export default sanitizeEntrance;
