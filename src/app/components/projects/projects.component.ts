import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
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

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
