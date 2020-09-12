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
    2: { deg: -270, name: "Animations", src: "../../assets/animations.png", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'},
    3: { deg: -360, name: "Portfolio", src: "../../assets/portfolio.png", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'}
  }

  constructor() { }

  ngOnInit(): void {
    this.nextProject();
      document.getElementById('project-img0').setAttribute('src', this.projectData[0].src);
      document.getElementById('project-img0').style.transform = 'rotateZ('+this.projectData[0].deg.toString()+'deg)';
      document.getElementById('project-img0').style.opacity = '1';
      document.getElementById('project-img1').setAttribute('src', this.projectData[1].src);
      document.getElementById('project-img1').style.transform = 'rotateZ('+this.projectData[1].deg.toString()+'deg)';
      document.getElementById('project-img1').style.opacity = '0';
      document.getElementById('project-img2').setAttribute('src', this.projectData[2].src);
      document.getElementById('project-img2').style.transform = 'rotateZ('+this.projectData[2].deg.toString()+'deg)';
      document.getElementById('project-img2').style.opacity = '0';
      document.getElementById('project-img3').setAttribute('src', this.projectData[3].src);
      document.getElementById('project-img3').style.transform = 'rotateZ('+this.projectData[3].deg.toString()+'deg)';
      document.getElementById('project-img3').style.opacity = '0';
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
            this.projectStyling('project-description'+i.toString(), '0', '10%', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', 'all 1s', 'project-title'+i.toString(), '', 'project-text'+i.toString(), '', 'project-img'+i.toString(), 'rotateZ('+this.projectData[i].deg.toString()+'deg)', '0', 'all 1s');
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
            this.projectStyling('project-description'+i.toString(), '0', '10%', 'rotateZ('+this.projectData[i].deg.toString()+'deg)', 'all 1s', 'project-title'+i.toString(), '', 'project-text'+i.toString(), '', 'project-img'+i.toString(), 'rotateZ('+this.projectData[i].deg.toString()+'deg)', '0', 'all 1s');
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
    document.getElementById(projectTextId).textContent = projectTextDescription;
    document.getElementById(projectImgId).style.transform = projectImgTransform;
    document.getElementById(projectImgId).style.opacity = projectImgOpacity;
    document.getElementById(projectImgId).style.transition = projectImgTransition; 
  }
}
