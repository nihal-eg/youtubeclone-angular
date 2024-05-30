import { Component } from '@angular/core';
import { log } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-contents',
  standalone: true,
  imports: [],
  templateUrl: './contents.component.html',
  styleUrl: './contents.component.scss'
})
export class ContentsComponent {
  click(id:number) {
  let api: string = "http://localhost:3000/items/"+id;
  console.log(fetch(api).then((y)=>y.json()).then((z)=>{console.log(z.data)}));
  let a= fetch(api).then((y)=>y.json()).then((z)=>z.data)

  }
}
