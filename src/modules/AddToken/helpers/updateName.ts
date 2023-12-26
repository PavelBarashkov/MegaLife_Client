export const updateName = (str: string) => {
  const words = str.split(" ");

  if (words.length > 1) {
    words[1] = words[1].slice(0, 1) + "...";

    words.length = 2;
  }

  return words.join(" ");
};
