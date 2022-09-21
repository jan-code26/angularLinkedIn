import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor() { }

  getSchools() {
    return [
      {
        "id": 1,
        "school_name": "St. Mary's",
        "schoolDescription": "St. Mary's is a private school in the United States.",
        "schoolUserId": 1
      },
      {
        "id": 2,
        "school_name": "St. Joseph's",
        "schoolDescription": "St. Joseph's is a private school in the United States.",
        "schoolUserId": 2
      },
      {
        "id": 3,
        "school_name": "St. John's",
        "schoolDescription": "St. John's is a private school in the United States.",
        "schoolUserId": 3
      }
    ]
  }
}
