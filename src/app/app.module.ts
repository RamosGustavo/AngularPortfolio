import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './profile/about/about.component';
import { ContactComponent } from './profile/contact/contact.component';
import { EducationComponent } from './profile/education/education.component';
import { ExperiencieComponent } from './profile/experiencie/experiencie.component';
import { FooterComponent } from './profile/footer/footer.component';
import { HeaderComponent } from './profile/header/header.component';
import { SkillsComponent } from './profile/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ExperiencieComponent,
    FooterComponent,
    HeaderComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
