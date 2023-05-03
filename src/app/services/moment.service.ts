import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { Moment } from '../moments';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environments.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/api/moments`;
  constructor(private http: HttpClient){

  }

  CreateMoments(formData: FormData): Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}
