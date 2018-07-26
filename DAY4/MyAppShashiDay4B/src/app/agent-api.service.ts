import { Injectable } from '@angular/core';

import { Agent } from './agent';
import { Observable } from '../../node_modules/rxjs';
import { HttpClient } from '../../node_modules/@angular/common/http';

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

  addAgent(singleAgent: Agent) {
    return null;
  }

}
