export class Validator {
  num_warns: number = 0;

  warn(message: string): void {
    this.num_warns++;
    console.warn(message);
  }
}

export const validator = new Validator();
