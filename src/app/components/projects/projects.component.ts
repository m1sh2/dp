import { Component, OnInit } from '@angular/core';
import faker from 'faker';

const genRandNum = (min , max) => {
  return Math.random() * (max - min) + min ;
};

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  issues: any[] = [];
  statutes: any[] = [
    {
      title: 'BACKLOG',
      type: ''
    }
  ];

  constructor() { }

  ngOnInit() {
    this.issues = Array.from(10, i => ({
      title: faker.name.title,
      estimate: faker.date.past,
      status: [genRandNum()]
    }));
  }

}
