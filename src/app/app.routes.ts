import { Routes } from '@angular/router';
import { StudyPage } from './study-page/study-page';
import { StatisticsPage } from './statistics-page/statistics-page';
import { AboutPage } from './about-page/about-page';
import { DocumentationPage } from './documentation-page/documentation-page';
import { GlossaryPage } from './glossary-page/glossary-page';
import { SettingsPage } from './settings-page/settings-page';
import { HomePage } from './home-page/home-page';
import { PageTd3 } from './page-td3/page-td3';


export const routes: Routes = [

  {path:'', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component: HomePage},
  {path:'study', component: StudyPage},
  {path:'statistics', component: StatisticsPage},
  {path:'about', component: AboutPage},
  {path:'documentation', component: DocumentationPage},
  {path:'glossary', component: GlossaryPage},
  {path:'profile/settings', component: SettingsPage},
  {path:'td3', component: PageTd3},

];
