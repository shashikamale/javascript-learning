import { Injectable } from '@angular/core';

import { Agent } from './agent';
import { Observable } from '../../node_modules/rxjs';
import { HttpClient, HttpResponse, HttpHeaders} from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgentApiService {

  baseURL = 'http://localhost:3000/agents';

  constructor(private http: HttpClient) { }

  findAllAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>(this.baseURL);
  }

  findAgentsbyId(Id: number): Observable<Agent[]> {
    return this.http.get<Agent[]>(this.baseURL + `/${Id}`);
  }

  addAgent(singleAgent: Agent): Observable<HttpResponse<{}>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<HttpResponse<{}>>(this.baseURL, singleAgent, {headers});
  }



}
