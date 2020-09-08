import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectData = {
    0: { deg: -90, name: "Tutorial", src: "../../assets/tutorial.png", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'},
    1: { deg: -180 ,name: "Aditi", src: "../../assets/aditi.png", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'},
    2: { deg: -270, name: "Animations", src: "../../assets/aditi.png", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'},
    3: { deg: -360, name: "Portfolio", src: "../../assets/portfolio.png", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'}
  }

  constructor() { }

  ngOnInit(): void {
    this.nextProject();
    if (window.matchMedia("(max-width: 900px)").matches || window.matchMedia("(max-width: 600px)").matches) {
      document.getElementById('project-img0-horizontal').setAttribute('src', this.projectData[0].src);
      document.getElementById('project-img1-horizontal').setAttribute('src', this.projectData[1].src);
      document.getElementById('project-img1-horizontal').style.transform = 'rotateZ('+this.projectData[1].deg.toString()+'deg)';
      document.getElementById('project-img1-horizontal').style.opacity = '0';
      document.getElementById('project-img2-horizontal').setAttribute('src', this.projectData[2].src);
      document.getElementById('project-img2-horizontal').style.transform = 'rotateZ('+this.projectData[2].deg.toString()+'deg)';
      document.getElementById('project-img2-horizontal').style.opacity = '0';
      document.getElementById('project-img3-horizontal').setAttribute('src', this.projectData[3].src);
      document.getElementById('project-img3-horizontal').style.transform = 'rotateZ('+this.projectData[3].deg.toString()+'deg)';
      document.getElementById('project-img3-horizontal').style.opacity = '0';
    } else {
      document.getElementById('project-img0-vertical').setAttribute('src', this.projectData[0].src);
      document.getElementById('project-img1-vertical').setAttribute('src', this.projectData[1].src);
      document.getElementById('project-img1-vertical').style.transform = 'rotateZ('+this.projectData[1].deg.toString()+'deg)';
      document.getElementById('project-img1-vertical').style.opacity = '0';
      document.getElementById('project-img2-vertical').setAttribute('src', this.projectData[2].src);
      document.getElementById('project-img2-vertical').style.transform = 'rotateZ('+this.projectData[2].deg.toString()+'deg)';
      document.getElementById('project-img2-vertical').style.opacity = '0';
      document.getElementById('project-img3-vertical').setAttribute('src', this.projectData[3].src);
      document.getElementById('project-img3-vertical').style.transform = 'rotateZ('+this.projectData[3].deg.toString()+'deg)';
      document.getElementById('project-img3-vertical').style.opacity = '0';
    }
  }

  nextProject() {
    console.log(this.projectData);
    for(var i = 0; i < 4; i++) {
      if (this.projectData[3].deg != 0) {
        document.getElementById('previous-button').style.opacity = '1';
        document.getElementById('next-button').style.opacity = '1';
        this.projectData[i].deg = this.projectData[i].deg + 90;
        if (window.matchMedia("(max-width: 900px)").matches || window.matchMedia("(max-width: 600px)").matches) { //Check for browser width
          this.projectLayoutStyling('project-description'+i.toString()+'-vertical', 'project-title'+i.toString()+'-vertical', 'project-text'+i.toString()+'-vertical', 'project-img'+i.toString()+'-vertical');
          if (Math.abs(this.projectData[i].deg) === 0) {
            this.projectStyling('project-description'+i.toString()+'-horizontal', '1', '60vw', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', 'all 1s ease', 'project-title'+i.toString()+'-horizontal', this.projectData[i].name, 'project-text'+i.toString()+'-horizontal', this.projectData[i].description, 'project-img'+i.toString()+'-horizontal', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', '1', 'all 1s ease');
          } else {
            this.projectStyling('project-description'+i.toString()+'-horizontal', '0', '10vw', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', 'all 1s', 'project-title'+i.toString()+'-horizontal', '', 'project-text'+i.toString()+'-horizontal', '', 'project-img'+i.toString()+'-horizontal', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', '0', 'all 1s');
          }
        } else {
          this.projectLayoutStyling('project-description'+i.toString()+'-horizontal', 'project-title'+i.toString()+'-horizontal', 'project-text'+i.toString()+'-horizontal', 'project-img'+i.toString()+'-horizontal');
          if (Math.abs(this.projectData[i].deg) === 0) {
            this.projectStyling('project-description'+i.toString()+'-vertical', '1', '40vw', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', 'all 1s ease', 'project-title'+i.toString()+'-vertical', this.projectData[i].name, 'project-text'+i.toString()+'-vertical', this.projectData[i].description, 'project-img'+i.toString()+'-vertical', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', '1', 'all 1s ease');
          } else {
            this.projectStyling('project-description'+i.toString()+'-vertical', '0', '10vw', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', 'all 1s', 'project-title'+i.toString()+'-vertical', '', 'project-text'+i.toString()+'-vertical', '', 'project-img'+i.toString()+'-vertical', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', '0', 'all 1s');
          }
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
        if (window.matchMedia("(max-width: 900px)").matches || window.matchMedia("(max-width: 600px)").matches) { //Check for browser width
          this.projectLayoutStyling('project-description'+i.toString()+'-vertical', 'project-title'+i.toString()+'-vertical', 'project-text'+i.toString()+'-vertical', 'project-img'+i.toString()+'-vertical');
          if (Math.abs(this.projectData[i].deg) === 0) {
            this.projectStyling('project-description'+i.toString()+'-horizontal', '1', '60vw', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', 'all 1s ease', 'project-title'+i.toString()+'-horizontal', this.projectData[i].name, 'project-text'+i.toString()+'-horizontal', this.projectData[i].description, 'project-img'+i.toString()+'-horizontal', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', '1', 'all 1s ease');
          } else {
            this.projectStyling('project-description'+i.toString()+'-horizontal', '0', '10vw', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', 'all 1s', 'project-title'+i.toString()+'-horizontal', '', 'project-text'+i.toString()+'-horizontal', '', 'project-img'+i.toString()+'-horizontal', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', '0', 'all 1s');
          }
        } else {
          this.projectLayoutStyling('project-description'+i.toString()+'-horizontal', 'project-title'+i.toString()+'-horizontal', 'project-text'+i.toString()+'-horizontal', 'project-img'+i.toString()+'-horizontal');
          if (Math.abs(this.projectData[i].deg) === 0) {
            this.projectStyling('project-description'+i.toString()+'-vertical', '1', '40vw', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', 'all 1s ease', 'project-title'+i.toString()+'-vertical', this.projectData[i].name, 'project-text'+i.toString()+'-vertical', this.projectData[i].description, 'project-img'+i.toString()+'-vertical', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', '1', 'all 1s ease');
          } else {
            this.projectStyling('project-description'+i.toString()+'-vertical', '0', '10vw', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', 'all 1s', 'project-title'+i.toString()+'-vertical', '', 'project-text'+i.toString()+'-vertical', '', 'project-img'+i.toString()+'-vertical', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', '0', 'all 1s');
          }
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
    document.getElementById(projectTitleId).style.fontSize = '1.2em';
    document.getElementById(projectTextId).textContent = projectTextDescription;
    document.getElementById(projectImgId).style.transform = projectImgTransform;
    document.getElementById(projectImgId).style.opacity = projectImgOpacity;
    document.getElementById(projectImgId).style.transition = projectImgTransition; 
  }
}
