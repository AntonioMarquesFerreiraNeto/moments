import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { Moment } from '../moments';
import { Observable } from 'rxjs';
import { Response } from '../Response';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environments.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/api/moments`;
  constructor(private http: HttpClient) {

  }

  CreateMoments(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
  UpdateMoment(formData: FormData, id: number): Observable<FormData>{
    return this.http.put<FormData>(`${this.apiUrl}/${id}`, formData)
  }
  GetMoments(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  }

  GetMoment(id: Number): Observable<Response<Moment>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Moment>>(url);
  }

  RemoveMomentById(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
