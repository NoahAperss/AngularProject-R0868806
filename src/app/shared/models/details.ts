export class Details {
  'adult': boolean;
  'budget': number;
  'genres': object;
  'homepage': string;
  'id': number;
  'original_title': string;
  'overview': string;
  'revenue': number;
  'runtime': number;
   'status': string;
  'title': string;


  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
