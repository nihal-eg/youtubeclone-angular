import { Component } from '@angular/core';

@Component({
  selector: 'app-contents',
  standalone: true,
  imports: [],
  templateUrl: './contents.component.html',
  styleUrl: './contents.component.scss'
})
export class ContentsComponent {
  image: any;
  bid :number=0;
  book:string="";
  description:string="";

  constructor() {
    this.image = "../../../assets/img/img1.png";
    this.description="Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It was originally developed by Sun Microsystems and released in 1995. Java's primary goal is to allow application developers to write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.";
    this.book="Java";
    this.bid=1;

  }
  click(id: number) {
    let api: string = "http://localhost:3000/items/" + id;
     this.image = fetch(api)
      .then((response) => response.json())
      .then((data) => {this.image=data.imageurl;
        this.bid=data.id;
        this.book=data.book;
        this.description=data.description;
      })
      .catch((error) => console.error(error));
      
  }
}
