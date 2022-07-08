import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[
  {"name":"Rahul","age":45,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumvkZyOJn7TLV3Jt_j-Cdppg4uMrfpOtQtcVgTveuagRqFC4XkNe-hNq3xaNvjk34ksA&usqp=CAU"},
  {"name":"Akku","age":19,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumvkZyOJn7TLV3Jt_j-Cdppg4uMrfpOtQtcVgTveuagRqFC4XkNe-hNq3xaNvjk34ksA&usqp=CAU"},
  {"name":"Miya","age":20,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumvkZyOJn7TLV3Jt_j-Cdppg4uMrfpOtQtcVgTveuagRqFC4XkNe-hNq3xaNvjk34ksA&usqp=CAU"},
  {"name":"Appu","age":28,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumvkZyOJn7TLV3Jt_j-Cdppg4uMrfpOtQtcVgTveuagRqFC4XkNe-hNq3xaNvjk34ksA&usqp=CAU"},
  {"name":"Mano","age":29,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumvkZyOJn7TLV3Jt_j-Cdppg4uMrfpOtQtcVgTveuagRqFC4XkNe-hNq3xaNvjk34ksA&usqp=CAU"},
  {"name":"Arya","age":18,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumvkZyOJn7TLV3Jt_j-Cdppg4uMrfpOtQtcVgTveuagRqFC4XkNe-hNq3xaNvjk34ksA&usqp=CAU"},
]

}
