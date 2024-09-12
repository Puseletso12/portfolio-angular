import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent implements OnInit {
  timeline = [
    {
      heading: 'CodeTribe Bootcamp',
      duration: '2024',
      subtitle: 'MLab South Africa',
      content:
        'Successfully completed a Web Development Bootcamp with MLab South Africa.',
      className1: 'mar-right',
      className2: 'prt_about_learnbox_left',
    },
    {
      heading: 'National Senior Certificate',
      duration: '2020',
      subtitle: 'Matric Board',
      content:
        'Successfully completed my National Senior Certificate studies in 2020 from Capricorn High School',
      className1: 'mar-left',
      className2: 'prt_about_learnbox_right',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
