import { Component, OnInit } from '@angular/core';
import { AgentApiService } from '../agent-api.service';
import { Agent } from '../agent';
@Component({
  selector: 'app-agent-manager',
  templateUrl: './agent-manager.component.html',
  styleUrls: ['./agent-manager.component.css']
})
export class AgentManagerComponent implements OnInit {
  agentList: Agent[];
  agenttext: any;

  singleAgent: Agent;
  queryString: '';
  constructor(private service: AgentApiService) { }

  ngOnInit() {
    this.service.findAllAgents().subscribe(data => this.agentList = data);

  }

  find() {
    console.log(this.agenttext);
    this.service.findAgentsbyId(this.agenttext).subscribe(data => this.agentList = data);
    }

    submit(frmData) {
      this.singleAgent = frmData;
      console.log('Agent ' + this.singleAgent);
      this.service.addAgent(this.singleAgent).subscribe( resp => console.log(resp));

    }
}


