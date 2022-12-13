export const extractTags = (input: string) => {
  return Array.from(new Set(input.split(' ').map((el) => (el[0] === '#' ? el : `#${el}`))));
};

