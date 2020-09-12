import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  activeTopic = "html";
  topicDescription = {
    "html" : {topic: "HTML", angle: "rotateY(360deg)", description: "I know how to work with a simple HTML file to use it in a framework like Angular. Here are a few HTML concepts that I frequently work with:", conceptList: "Classes, Ids, Links, SVG, Lists, Entities, Layout"},
    "css" : {topic: "CSS", angle: "rotateY(90deg)", description: "I am familiar with the design, layout, and display of web apps for different devices and screen sizes using CSS. Here are a few CSS concepts that I frequently use:", conceptList: "Box Model, Borders, Colors and Gradients, Transitions, Animations, CSS Flexbox, CSS Grids, Mobile Responsiveness"},
    "javascript" :{topic: "Javascript", angle: "rotateY(180deg)", description: "I have mostly used Javascript to work with data on web apps. Here are a few Javascript concepts that I frequently use to make web apps:", conceptList: "Javascript Arrays, Javascript Objects, Javascript Functions, HTML DOM, Browser BOM, JS JSON"},
    "angular" : {topic:"Angular", angle: "rotateY(270deg)", description: "I use the Angular framework to create efficient web apps. Here are a few Javascript concepts that I frequently use to make web apps:", conceptList: "Angular CLI, Template Syntax, Components, Services, Directives, Routing"},
    "scsssass" : {topic: "SCSS/SASS", angle: "rotateX(-90deg)", description: "SASS/SCSS makes some concepts not possible in CSS possible. Here are a few concepts that I use frequently:", conceptList: "Nesting, Functions, Control Directives, @mixin, @extend"},
    "threejs" : {topic: "Three.js", angle: "rotateX(90deg)", description: "It is a new skill that I am presently learning. Here are a few concepts that I have learned:", conceptList: "Scenes, Camera, Renderer, Geometry, Animation"}
  };

  constructor() { }

  ngOnInit(): void {
    this.changeTab(this.activeTopic);
  }

  changeTab(topic) {
    document.getElementById(this.activeTopic).style.color = '#c9e4d7';
    document.getElementById(this.activeTopic).style.animation = 'topic-border-remove-animation 0.1s forwards';
    document.getElementById(topic).style.color = '#7bffc1';
    document.getElementById(topic).style.animation = 'topic-border-animation 0.1s forwards';

    this.activeTopic = topic;
    this.descriptionDisplay(topic);
  }

  descriptionDisplay(topic) {
    document.getElementById('skill-topic').innerHTML = this.topicDescription[topic].topic;
    var description = this.topicDescription[topic].description.split('.');
    console.log(description);
    var styledDescription = '';
    for(var i = 0; i < description.length; i++) {
      styledDescription = styledDescription + '- ' + description[i] + '<br><br>';
    }
    document.getElementById('skill-description').innerHTML = styledDescription;
    var concepts = this.topicDescription[topic].conceptList.split(',');
    var styledConcepts = '';
    for(var i = 0; i < concepts.length; i++) {
      styledConcepts = styledConcepts + '- ' + concepts[i] + '<br>';
    }
    document.getElementById('skill-concepts').innerHTML = styledConcepts;
    document.getElementById('skill-concepts').style.marginLeft = '10%';
    document.getElementById('cube').style.transition = 'all 0.5s ease';
    document.getElementById('cube').style.transform = this.topicDescription[topic].angle;
  }
}
