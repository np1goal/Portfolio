import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectIndex = 0;
  presentProject = "0";
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
      // // document.getElementById('project-description1').style.transform = 'rotateZ('+this.projectData[1].deg.toString()+'deg)';
      document.getElementById('project-img1-horizontal').setAttribute('src', this.projectData[1].src);
      document.getElementById('project-img1-horizontal').style.transform = 'rotateZ('+this.projectData[1].deg.toString()+'deg)';
      document.getElementById('project-img1-horizontal').style.opacity = '0';
      // // document.getElementById('project-description2').style.transform = 'rotateZ('+this.projectData[2].deg.toString()+'deg)';
      document.getElementById('project-img2-horizontal').setAttribute('src', this.projectData[2].src);
      document.getElementById('project-img2-horizontal').style.transform = 'rotateZ('+this.projectData[2].deg.toString()+'deg)';
      document.getElementById('project-img2-horizontal').style.opacity = '0';
      // // document.getElementById('project-description3').style.transform = 'rotateZ('+this.projectData[3].deg.toString()+'deg)';
      document.getElementById('project-img3-horizontal').setAttribute('src', this.projectData[3].src);
      document.getElementById('project-img3-horizontal').style.transform = 'rotateZ('+this.projectData[3].deg.toString()+'deg)';
      document.getElementById('project-img3-horizontal').style.opacity = '0';
    } else {
      document.getElementById('project-img0-vertical').setAttribute('src', this.projectData[0].src);
      // // document.getElementById('project-description1').style.transform = 'rotateZ('+this.projectData[1].deg.toString()+'deg)';
      document.getElementById('project-img1-vertical').setAttribute('src', this.projectData[1].src);
      document.getElementById('project-img1-vertical').style.transform = 'rotateZ('+this.projectData[1].deg.toString()+'deg)';
      document.getElementById('project-img1-vertical').style.opacity = '0';
      // // document.getElementById('project-description2').style.transform = 'rotateZ('+this.projectData[2].deg.toString()+'deg)';
      document.getElementById('project-img2-vertical').setAttribute('src', this.projectData[2].src);
      document.getElementById('project-img2-vertical').style.transform = 'rotateZ('+this.projectData[2].deg.toString()+'deg)';
      document.getElementById('project-img2-vertical').style.opacity = '0';
      // // document.getElementById('project-description3').style.transform = 'rotateZ('+this.projectData[3].deg.toString()+'deg)';
      document.getElementById('project-img3-vertical').setAttribute('src', this.projectData[3].src);
      document.getElementById('project-img3-vertical').style.transform = 'rotateZ('+this.projectData[3].deg.toString()+'deg)';
      document.getElementById('project-img3-vertical').style.opacity = '0';
    }
  }

  nextProject() {
    for(var i = 0; i < 4; i++) {
      this.projectData[i].deg = this.projectData[i].deg + 90;
      if (window.matchMedia("(max-width: 900px)").matches || window.matchMedia("(max-width: 600px)").matches) { //Check for browser width
        document.getElementById('project-description'+i.toString()+'-vertical').style.display = 'none';
        document.getElementById('project-title'+i.toString()+'-vertical').style.display = 'none';
        document.getElementById('project-text'+i.toString()+'-vertical').style.display = 'none';
        document.getElementById('project-img'+i.toString()+'-vertical').style.display = 'none';
        if (Math.abs(this.projectData[i].deg) === 0) {
          document.getElementById('project-description'+i.toString()+'-horizontal').style.opacity = '1';
          document.getElementById('project-description'+i.toString()+'-horizontal').style.width = '60vw';
          document.getElementById('project-title'+i.toString()+'-horizontal').textContent = this.projectData[i].name;
          document.getElementById('project-text'+i.toString()+'-horizontal').textContent = this.projectData[i].description;
          document.getElementById('project-description'+i.toString()+'-horizontal').style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
          document.getElementById('project-description'+i.toString()+'-horizontal').style.transition = 'all 1s ease'; 
          document.getElementById('project-img'+i.toString()+'-horizontal').style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
          document.getElementById('project-img'+i.toString()+'-horizontal').style.opacity = '1';
          document.getElementById('project-img'+i.toString()+'-horizontal').style.transition = 'all 1s ease'; 
        } else {
          document.getElementById('project-description'+i.toString()+'-horizontal').style.opacity = '0';
          document.getElementById('project-description'+i.toString()+'-horizontal').style.width = '10vw';
          document.getElementById('project-title'+i.toString()+'-horizontal').textContent = "";
          document.getElementById('project-text'+i.toString()+'-horizontal').textContent = "";
          document.getElementById('project-description'+i.toString()+'-horizontal').style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
          document.getElementById('project-img'+i.toString()+'-horizontal').style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
          document.getElementById('project-img'+i.toString()+'-horizontal').style.opacity = '0';
        }
      } else {
        document.getElementById('project-description'+i.toString()+'-horizontal').style.display = 'none';
        document.getElementById('project-title'+i.toString()+'-horizontal').style.display = 'none';
        document.getElementById('project-text'+i.toString()+'-horizontal').style.display = 'none';
        document.getElementById('project-img'+i.toString()+'-horizontal').style.display = 'none';
        if (Math.abs(this.projectData[i].deg) === 0) {
          document.getElementById('project-description'+i.toString()+'-vertical').style.opacity = '1';
          document.getElementById('project-description'+i.toString()+'-vertical').style.width = '40vw';
          document.getElementById('project-title'+i.toString()+'-vertical').textContent = this.projectData[i].name;
          document.getElementById('project-text'+i.toString()+'-vertical').textContent = this.projectData[i].description;
          document.getElementById('project-description'+i.toString()+'-vertical').style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
          document.getElementById('project-description'+i.toString()+'-vertical').style.transition = 'all 1s ease'; 
          document.getElementById('project-img'+i.toString()+'-vertical').style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
          document.getElementById('project-img'+i.toString()+'-vertical').style.opacity = '1';
          document.getElementById('project-img'+i.toString()+'-vertical').style.transition = 'all 1s ease'; 
        } else {
          document.getElementById('project-description'+i.toString()+'-vertical').style.opacity = '0';
          document.getElementById('project-description'+i.toString()+'-vertical').style.width = '10vw';
          document.getElementById('project-title'+i.toString()+'-vertical').textContent = "";
          document.getElementById('project-text'+i.toString()+'-vertical').textContent = "";
          document.getElementById('project-description'+i.toString()+'-vertical').style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
          document.getElementById('project-img'+i.toString()+'-vertical').style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
          document.getElementById('project-img'+i.toString()+'-vertical').style.opacity = '0';
        }
      }
    }
  }

  previousProject() {
    for(var i = 0; i < 4; i++) {
      this.projectData[i].deg = this.projectData[i].deg - 90;
      if (window.matchMedia("(max-width: 900px)").matches || window.matchMedia("(max-width: 600px)").matches) { //Check for browser width
        document.getElementById('project-description'+i.toString()+'-vertical').style.display = 'none';
        document.getElementById('project-title'+i.toString()+'-vertical').style.display = 'none';
        document.getElementById('project-text'+i.toString()+'-vertical').style.display = 'none';
        document.getElementById('project-img'+i.toString()+'-vertical').style.display = 'none';
        if (Math.abs(this.projectData[i].deg) === 0) {
          document.getElementById('project-description'+i.toString()+'-horizontal').style.opacity = '1';
          document.getElementById('project-description'+i.toString()+'-horizontal').style.width = '60vw';
          document.getElementById('project-title'+i.toString()+'-horizontal').textContent = this.projectData[i].name;
          document.getElementById('project-text'+i.toString()+'-horizontal').textContent = this.projectData[i].description;
          document.getElementById('project-description'+i.toString()+'-horizontal').style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
          document.getElementById('project-description'+i.toString()+'-horizontal').style.transition = 'all 1s ease'; 
          document.getElementById('project-img'+i.toString()+'-horizontal').style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
          document.getElementById('project-img'+i.toString()+'-horizontal').style.opacity = '1';
          document.getElementById('project-img'+i.toString()+'-horizontal').style.transition = 'all 1s ease'; 
        } else {
          document.getElementById('project-description'+i.toString()+'-horizontal').style.opacity = '0';
          document.getElementById('project-description'+i.toString()+'-horizontal').style.width = '10vw';
          document.getElementById('project-title'+i.toString()+'-horizontal').textContent = "";
          document.getElementById('project-text'+i.toString()+'-horizontal').textContent = "";
          document.getElementById('project-description'+i.toString()+'-horizontal').style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
          document.getElementById('project-img'+i.toString()+'-horizontal').style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
          document.getElementById('project-img'+i.toString()+'-horizontal').style.opacity = '0';
        }
      } else {
        if (Math.abs(this.projectData[i].deg) === 0) {
          document.getElementById('project-description'+i.toString()+'-vertical').style.opacity = '1';
          document.getElementById('project-description'+i.toString()+'-vertical').style.width = '40vw';
          document.getElementById('project-title'+i.toString()+'-vertical').textContent = this.projectData[i].name;
          document.getElementById('project-text'+i.toString()+'-vertical').textContent = this.projectData[i].description;
          document.getElementById('project-description'+i.toString()+'-vertical').style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
          document.getElementById('project-description'+i.toString()+'-vertical').style.transition = 'all 1s ease'; 
          document.getElementById('project-img'+i.toString()+'-vertical').style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
          document.getElementById('project-img'+i.toString()+'-vertical').style.opacity = '1';
          document.getElementById('project-img'+i.toString()+'-vertical').style.transition = 'all 1s ease'; 
        } else {
          document.getElementById('project-description'+i.toString()+'-vertical').style.opacity = '0';
          document.getElementById('project-description'+i.toString()+'-vertical').style.width = '10vw';
          document.getElementById('project-title'+i.toString()+'-vertical').textContent = "";
          document.getElementById('project-text'+i.toString()+'-vertical').textContent = "";
          document.getElementById('project-description'+i.toString()+'-vertical').style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
          document.getElementById('project-img'+i.toString()+'-vertical').style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
          document.getElementById('project-img'+i.toString()+'-vertical').style.opacity = '0';
        }
      }
    }
  }
}
