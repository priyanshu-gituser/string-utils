/**
 * Capitalizes the first character of the string.
 * Optionally lowercases the remainder if lowerRest is true.
 */
const capitalize = (str, lowerRest = false) => {
  if (!str) return '';
  const rest = lowerRest ? str.slice(1).toLowerCase() : str.slice(1);
  return str.charAt(0).toUpperCase() + rest;
};

/**
 * Reverses the characters in the string.
 * Handles Unicode surrogate pairs (emojis) properly using the spread operator.
 */
const reverse = (str) => {
  if (!str) return '';
  return [...str].reverse().join('');
};

/**
 * Counts the number of words, ignoring extra whitespace.
 */
const countWords = (str) => {
  const trimmed = str.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
};

/**
 * Converts a string into a URL-friendly slug:
 * - Normalizes accents/diacritics (e.g., "café" -> "cafe")
 * - Removes non-alphanumeric characters
 * - Collapses and trims hyphens
 */
const slugify = (str) => {
  if (!str) return '';
  return str
    .normalize('NFD') // Separate base characters from accent marks
    .replace(/[\u0300-\u036f]/g, '') // Strip accent marks
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Keep letters, numbers, spaces, hyphens
    .replace(/[\s_-]+/g, '-') // Convert spaces & underscores to hyphens
    .replace(/^-+|-+$/g, ''); // Trim hyphens from start/end
};

/**
 * Truncates a string to a given length and appends an ellipsis.
 */
const truncate = (str, maxLength = 20, suffix = '...') => {
  if (!str) return '';
  if (str.length <= maxLength) return str;
  const targetLength = Math.max(0, maxLength - suffix.length);
  return str.slice(0, targetLength) + suffix;
};

// Export all functions
module.exports = {
  capitalize,
  reverse,
  countWords,
  slugify,
  truncate
};