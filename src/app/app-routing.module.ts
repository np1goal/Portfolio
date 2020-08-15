import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigateComponent } from './navigate/navigate.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LoadingComponent } from './loading/loading.component';
import { SkillComponent } from './skill/skill.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "skill", component: SkillComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "work", component: WorkComponent},
  {path: "contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [  HomeComponent, IntroductionComponent, AboutComponent, 
                                    SkillComponent, ProjectsComponent, WorkComponent, 
                                    ContactComponent, LoadingComponent, NavigateComponent, 
                                    FooterComponent ];