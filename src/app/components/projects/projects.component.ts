import { Component, OnInit } from '@angular/core';
import faker from 'faker';

const genRandNum = (min , max) => {
  return Math.floor(Math.random() * (max - min) + min);
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
      color: '',
      type: ''
    },
    {
      title: 'READY',
      color: 'badge-secondary',
      type: ''
    },
    {
      title: 'IN PROGRESS',
      color: 'badge-primary',
      type: ''
    },
    {
      title: 'DONE',
      color: 'badge-success',
      type: ''
    },
    {
      title: 'CLOSED',
      color: 'badge-secondary',
      type: ''
    },
  ];

  constructor() { }

  ngOnInit() {
    this.issues = Array.from({ length: 10 }, i => ({
      title: faker.name.title(),
      estimate: 5,
      status: this.statutes[genRandNum(0, 4)]
    }));

    console.log('issues', this.issues, genRandNum(0, 4));
  }

}
