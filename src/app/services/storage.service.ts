import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  save(key: string, value: any) {
    const valuesUpdated = value.map((o) => {
      const {
        name,
        description,
        updated,
        id
      } = o;

      return {
        name,
        description,
        updated,
        id
      };
    });

    localStorage.setItem(key, JSON.stringify(valuesUpdated));
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

  parse(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
}
