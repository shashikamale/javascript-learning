<input type="text" name='user' [(ngModel)]='name'>

<p>    

<app-child  childName ={{name}} (result)="onChange($event)"></app-child>    

{{msg}}

</p>
