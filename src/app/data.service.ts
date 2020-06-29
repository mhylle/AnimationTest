import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  get data(): { name: string, data: string[], showData: boolean }[] {
    return [
      {
        name: 'ABC',
        data: ['Something something', 'Something something 1', 'Something something 2', 'Something something 3', 'Something something 4'],
        showData: true
      },
      {
        name: 'DEF',
        data: ['Test1', 'Test2', 'Test3', 'Test4', 'Test5'],
        showData: true
      },
      {
        name: 'HIJ',
        data: ['Aarhus', 'Aalborg', 'København', 'Odense', 'Silkebord'],
        showData: true
      },
    ];
  }
}
