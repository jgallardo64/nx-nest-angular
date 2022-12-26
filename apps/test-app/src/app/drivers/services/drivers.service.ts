import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Driver } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DriversService {
  private API_URL: string = 'http://localhost:3333/api/drivers';

  constructor(private http: HttpClient) {}

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${this.API_URL}`);
  }

  createDriver(driver: any) {
    return this.http.post<Driver>(
      `${this.API_URL}`,
      driver
    );
  }
}
