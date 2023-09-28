const Prompt = require("prompt-sync")({ sigint: true });

export const CLI = {
  input: (value: string) => Prompt(value),
  output: (value: any) => console.log(value),
};
