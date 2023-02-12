export function getInitialsRegex(name: string) {
  // regex to get first character of words seperated by space, - and _
  const initials = name.match(/\b\w/g) || [];
  return initials.join('').toUpperCase();
}
