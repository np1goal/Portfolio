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
    0: { deg: 0, name: "Tutorial", src: "../../assets/tutorial.png", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'},
    1: { deg: -90 ,name: "Aditi", src: "../../assets/aditi.png", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'},
    2: { deg: -180, name: "Animations", src: "../../assets/aditi.png", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'},
    3: { deg: -270, name: "Portfolio", src: "../../assets/portfolio.png", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'}
  }

  constructor() { }

  ngOnInit(): void {
    document.getElementById('project-description0').style.transform = 'rotateZ('+this.projectData[0].deg.toString()+'deg)';
    document.getElementById('project-title0').textContent = this.projectData[0].name;
    document.getElementById('project-text0').textContent = this.projectData[0].description;
    document.getElementById('project-img0').setAttribute('src', this.projectData[0].src);
    document.getElementById('project-description1').style.transform = 'rotateZ('+this.projectData[1].deg.toString()+'deg)';
    document.getElementById('project-img1').setAttribute('src', this.projectData[1].src);
    document.getElementById('project-img1').style.transform = 'rotateZ('+this.projectData[1].deg.toString()+'deg)';
    document.getElementById('project-img1').style.opacity = '0';
    document.getElementById('project-description2').style.transform = 'rotateZ('+this.projectData[2].deg.toString()+'deg)';
    document.getElementById('project-img2').setAttribute('src', this.projectData[2].src);
    document.getElementById('project-img2').style.transform = 'rotateZ('+this.projectData[2].deg.toString()+'deg)';
    document.getElementById('project-img2').style.opacity = '0';
    document.getElementById('project-description3').style.transform = 'rotateZ('+this.projectData[3].deg.toString()+'deg)';
    document.getElementById('project-img3').setAttribute('src', this.projectData[3].src);
    document.getElementById('project-img3').style.transform = 'rotateZ('+this.projectData[3].deg.toString()+'deg)';
    document.getElementById('project-img3').style.opacity = '0';
  }

  nextProject() {
    for(var i = 0; i < 4; i++) {
      this.projectData[i].deg = this.projectData[i].deg + 90;
      if (Math.abs(this.projectData[i].deg) === 0 || Math.abs(this.projectData[i].deg) === 360 || Math.abs(this.projectData[i].deg) === 720 || Math.abs(this.projectData[i].deg) === 1080 || Math.abs(this.projectData[i].deg) === 1440 || Math.abs(this.projectData[i].deg) === 1800) {
        document.getElementById('project-description'+i.toString()).style.opacity = '1';
        document.getElementById('project-description'+i.toString()).style.width = '40vw';
        document.getElementById('project-title'+i.toString()).textContent = this.projectData[i].name;
        document.getElementById('project-text'+i.toString()).textContent = this.projectData[i].description;
        document.getElementById('project-description'+i.toString()).style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
        document.getElementById('project-description'+i.toString()).style.transition = 'all 1s ease'; 
        document.getElementById('project-img'+i.toString()).style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
        document.getElementById('project-img'+i.toString()).style.opacity = '1';
        document.getElementById('project-img'+i.toString()).style.transition = 'all 1s ease'; 
      } else {
        document.getElementById('project-description'+i.toString()).style.opacity = '0';
        document.getElementById('project-description'+i.toString()).style.width = '10vw';
        document.getElementById('project-title'+i.toString()).textContent = "";
        document.getElementById('project-text'+i.toString()).textContent = "";
        document.getElementById('project-description'+i.toString()).style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
        // document.getElementById('project-description'+i.toString()).style.transition = 'all 1s ease'; 
        document.getElementById('project-img'+i.toString()).style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
        document.getElementById('project-img'+i.toString()).style.opacity = '0';
        // document.getElementById('project-img'+i.toString()).style.transition = 'all 1s ease'; 
      }
    }
  }

  previousProject() {
    for(var i = 0; i < 4; i++) {
      this.projectData[i].deg = this.projectData[i].deg - 90;
      if (Math.abs(this.projectData[i].deg) === 0 || Math.abs(this.projectData[i].deg) === 360 || Math.abs(this.projectData[i].deg) === 720 || Math.abs(this.projectData[i].deg) === 1080 || Math.abs(this.projectData[i].deg) === 1440 || Math.abs(this.projectData[i].deg) === 1800) {
        document.getElementById('project-description'+i.toString()).style.opacity = '1';
        document.getElementById('project-description'+i.toString()).style.width = '40vw';
        document.getElementById('project-title'+i.toString()).textContent = this.projectData[i].name;
        document.getElementById('project-text'+i.toString()).textContent = this.projectData[i].description;
        document.getElementById('project-description'+i.toString()).style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
        document.getElementById('project-description'+i.toString()).style.transition = 'all 1s ease'; 
        document.getElementById('project-img'+i.toString()).style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
        document.getElementById('project-img'+i.toString()).style.opacity = '1';
        document.getElementById('project-img'+i.toString()).style.transition = 'all 1s ease'; 
      } else {
        document.getElementById('project-description'+i.toString()).style.opacity = '0';
        document.getElementById('project-description'+i.toString()).style.width = '10vw';
        document.getElementById('project-title'+i.toString()).textContent = "";
        document.getElementById('project-text'+i.toString()).textContent = "";
        document.getElementById('project-description'+i.toString()).style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
        // document.getElementById('project-description'+i.toString()).style.transition = 'all 1s ease'; 
        document.getElementById('project-img'+i.toString()).style.transform = 'rotateZ('+this.projectData[i].deg.toString()+'deg)';
        document.getElementById('project-img'+i.toString()).style.opacity = '0';
        // document.getElementById('project-img'+i.toString()).style.transition = 'all 1s ease'; 
      }
    }
  }
}
