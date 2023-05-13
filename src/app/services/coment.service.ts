import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../comentarios';
import { environments } from 'src/environments/environments';
import { Response } from '../Response';
@Injectable({
  providedIn: 'root'
})
export class ComentService {
  baseApiUrl = environments.baseApiUrl;
  constructor(private http: HttpClient) { 

  }

  CreateComment(comment: Comment): Observable<Response<Comment>>{
    const apiURL = `${this.baseApiUrl}/api/moments/${comment.momentId}/comments`;
    return this.http.post<Response<Comment>>(apiURL, comment)
  }
}
