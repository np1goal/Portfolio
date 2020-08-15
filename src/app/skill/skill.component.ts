import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  activeTopic = "html";
  topicDescription = {
    "html" : {topic: "HTML", angle: "rotateY(360deg)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    "css" : {topic: "CSS", angle: "rotateY(90deg)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    "javascript" :{topic: "Javascript", angle: "rotateY(180deg)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    "angular" : {topic:"Angular", angle: "rotateY(270deg)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    "scsssass" : {topic: "SCSS/SASS", angle: "rotateX(-90deg)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    "threejs" : {topic: "Three.js", angle: "rotateX(90deg)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
  };

  constructor() { }

  ngOnInit(): void {
    this.changeTab(this.activeTopic);
  }

  changeTab(topic) {
    document.getElementById(this.activeTopic).style.color = '#707070';
    document.getElementById(this.activeTopic).style.borderRight = '0px solid transparent';
    document.getElementById(topic).style.color = '#e85a4f';
    document.getElementById(topic).style.borderRight = '2px solid #e85a4f';

    this.activeTopic = topic;
    this.descriptionDisplay(topic);
  }

  descriptionDisplay(topic) {
    document.getElementById('skill-topic').innerHTML = this.topicDescription[topic].topic;
    document.getElementById('skill-description').innerHTML = this.topicDescription[topic].description;
    document.getElementById('cube').style.transition = 'all 0.5s ease';
    document.getElementById('cube').style.transform = this.topicDescription[topic].angle;
  }
}
