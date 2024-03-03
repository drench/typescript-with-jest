export class Example {
  original: string;

  constructor(original: string) { this.original = original }

  get up() { return this.original.toUpperCase() }
  get down() { return this.original.toLowerCase() }
}
