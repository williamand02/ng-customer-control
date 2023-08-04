import { ParamMap } from '@angular/router';

export class MockParamMap implements ParamMap {
  private paramMap: Map<string, string>;

  constructor(params: Map<string, string>) {
    this.paramMap = params;
  }

  get(name: string): string | null {
    return this.paramMap.get(name) || null;
  }

  getAll(name: string): string[] {
    return this.paramMap.has(name) ? [this.paramMap.get(name)!] : [];
  }

  has(name: string): boolean {
    return this.paramMap.has(name);
  }

  get keys(): string[] {
    return Array.from(this.paramMap.keys());
  }
}
