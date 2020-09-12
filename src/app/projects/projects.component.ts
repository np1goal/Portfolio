import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectData = {
    0: { deg: -90, name: "Tutorial", src: "../../assets/tutorial.png", git:"https://github.com/np1goal/Tutorial-frontend.git", website:"http://www.nishthastutorial.website", description: 'Best works for: <br><ul><li>Browsers: Chrome</li><li>Devices: Web</li></ul>The Tutorial is a web application backed on the MEAN stack. It is primarily my notes website. The notes section of this application uses HTML, CSS layouts, hierarchical styling, Angular routing, and Angular directives. The quiz section sends a GET request for the list of subjects available and questions for the selected ones. The text box allows the user to type down the answer. The list of keywords decides the correctness of the given solution and scores it. This application is yet Not ready for a pad or mobile device.'},
    1: { deg: -180 ,name: "Aditi", src: "../../assets/aditi.png", git:"https://github.com/np1goal/Aditi-frontend.git", website:"http://www.aditiray.com", description: 'Best works for: <br><ul><li>Browsers: Chrome</li><li>Devices: Web, Pad, Mobile</li></ul>Aditi is a web application backed on the MEAN stack. It is my website to exhibit my artwork to the world. I also prefer taking anonymous confessions from people to create a theme for some of my artwork. The home page displays the logo of Aditi worked in AdobeXD over two months and converted it to SVG. The Gallery displays all my artwork with its description fetched from the database. The Confessions page shows the list of all the confessions made by people before. It also allows people to write their confession by selecting a maximum of three emotions. These confessions are appraised and then published to the list within 48 hours.This application is responsive for all devices'},
    2: { deg: -270, name: "Animations", src: "../../assets/animations.png", git:"https://github.com/np1goal/Animations-.git", website:"https://nishthanimations.web.app", description: 'Best works for: <br><ul><li>Browsers: Chrome, Safari, Firefox</li><li>Devices: Web</li></ul>Animations is an Angular10 based web application. It is for learning different types of animation techniques using scss/sass. It includes animations for buttons, backgrounds, borders, SVGs, and loading. For styling, this application effectively uses: <ul><li>Selectors like ::after and ::before</li><li>Box-shadows: outline and inset</li><li>Background positions</li><li>Flex boxes</li><li>Gradients</li></ul>This application is yet Not ready for a pad or mobile device.'},
    3: { deg: -360, name: "Portfolio", src: "../../assets/portfolio.png", git:"https://github.com/np1goal/Portfolio.git", website:"http://www.nishthapatel.com", description: 'Best works for: <br><ul><li>Browsers: Chrome </li><li>Devices: Web, Pad, Mobile</li></ul> The Portfolio is an Angular10 based web application. As the name suggests, it is my developer portfolio. It is a blend of SCSS animations,  SVG animations, and Typescript tricks. This application is responsive for all devices.'}
  }

  constructor() { }

  ngOnInit(): void {
    this.nextProject();
      document.getElementById('project-img0').setAttribute('src', this.projectData[0].src);
      document.getElementById('project-img0').style.transform = 'rotateZ('+this.projectData[0].deg.toString()+'deg)';
      document.getElementById('project-img0').style.opacity = '1';
      document.getElementById('project-website0').setAttribute('href', this.projectData[0].website);
      document.getElementById('project-code0').setAttribute('href', this.projectData[0].git);
      document.getElementById('project-img1').setAttribute('src', this.projectData[1].src);
      document.getElementById('project-img1').style.transform = 'rotateZ('+this.projectData[1].deg.toString()+'deg)';
      document.getElementById('project-img1').style.opacity = '0';
      document.getElementById('project-website1').setAttribute('href', this.projectData[1].website);
      document.getElementById('project-code1').setAttribute('href', this.projectData[1].git);
      document.getElementById('project-img2').setAttribute('src', this.projectData[2].src);
      document.getElementById('project-img2').style.transform = 'rotateZ('+this.projectData[2].deg.toString()+'deg)';
      document.getElementById('project-img2').style.opacity = '0';
      document.getElementById('project-website2').setAttribute('href', this.projectData[2].website);
      document.getElementById('project-code2').setAttribute('href', this.projectData[2].git);
      document.getElementById('project-img3').setAttribute('src', this.projectData[3].src);
      document.getElementById('project-img3').style.transform = 'rotateZ('+this.projectData[3].deg.toString()+'deg)';
      document.getElementById('project-img3').style.opacity = '0';
      document.getElementById('project-website3').setAttribute('href', this.projectData[3].website);
      document.getElementById('project-code3').setAttribute('href', this.projectData[3].git);
  }

  nextProject() {
    console.log(this.projectData);
    for(var i = 0; i < 4; i++) {
      if (this.projectData[3].deg != 0) {
        document.getElementById('previous-button').style.opacity = '1';
        document.getElementById('next-button').style.opacity = '1';
        this.projectData[i].deg = this.projectData[i].deg + 90;
          if (Math.abs(this.projectData[i].deg) === 0) {
            this.projectStyling('project-description'+i.toString(), '1', '80%', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', 'all 1s ease', 'project-title'+i.toString(), this.projectData[i].name, 'project-text'+i.toString(), this.projectData[i].description, 'project-img'+i.toString(), 'rotateZ('+this.projectData[i].deg.toString()+'deg)', '1', 'all 1s ease');
          } else {
            this.projectStyling('project-description'+i.toString(), '0', '0%', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', 'all 1s', 'project-title'+i.toString(), '', 'project-text'+i.toString(), '', 'project-img'+i.toString(), 'rotateZ('+this.projectData[i].deg.toString()+'deg)', '0', 'all 1s');
          }
        
      } else {
        document.getElementById('next-button').style.opacity = '0.5';
      }
    }
  }

  previousProject() {
    console.log(this.projectData);
    for(var i = 3; i >= 0; i--) {
      if (this.projectData[0].deg != 0) {
        document.getElementById('previous-button').style.opacity = '1';
        document.getElementById('next-button').style.opacity = '1';
        this.projectData[i].deg = this.projectData[i].deg - 90;
          if (Math.abs(this.projectData[i].deg) === 0) {
            this.projectStyling('project-description'+i.toString(), '1', '80%', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', 'all 1s ease', 'project-title'+i.toString(), this.projectData[i].name, 'project-text'+i.toString(), this.projectData[i].description, 'project-img'+i.toString(), 'rotateZ('+this.projectData[i].deg.toString()+'deg)', '1', 'all 1s ease');
          } else {
            this.projectStyling('project-description'+i.toString(), '0', '0%', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', 'all 1s', 'project-title'+i.toString(), '', 'project-text'+i.toString(), '', 'project-img'+i.toString(), 'rotateZ('+this.projectData[i].deg.toString()+'deg)', '0', 'all 1s');
          }
      } else {
        document.getElementById('previous-button').style.opacity = '0.5';
      }
    }
  }

  projectLayoutStyling(projectDescriptionId, projectTitleId, projectTextId, projectImgId) {
    document.getElementById(projectDescriptionId).style.display = 'none';
    document.getElementById(projectTitleId).style.display = 'none';
    document.getElementById(projectTextId).style.display = 'none';
    document.getElementById(projectImgId).style.display = 'none';
  }

  projectStyling(projectDescriptionId, projectDescriptionOpacity, projectDescriptionWidth, projectDescriptionTransform, projectDescriptionTransition, projectTitleId, projectTitleName, projectTextId, projectTextDescription, projectImgId, projectImgTransform, projectImgOpacity, projectImgTransition) {
    document.getElementById(projectDescriptionId).style.opacity = projectDescriptionOpacity;
    document.getElementById(projectDescriptionId).style.width = projectDescriptionWidth;
    document.getElementById(projectDescriptionId).style.transform = projectDescriptionTransform;
    document.getElementById(projectDescriptionId).style.transition = projectDescriptionTransition; 
    document.getElementById(projectTitleId).textContent = projectTitleName;
    document.getElementById(projectTitleId).style.fontWeight = 'bold';
    document.getElementById(projectTitleId).style.paddingBottom = '5px';
    document.getElementById(projectTitleId).style.fontSize = '1.5em';
    document.getElementById(projectTextId).innerHTML = projectTextDescription;
    document.getElementById(projectImgId).style.transform = projectImgTransform;
    document.getElementById(projectImgId).style.opacity = projectImgOpacity;
    document.getElementById(projectImgId).style.transition = projectImgTransition; 
  }
}
