import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { EventsComponent } from './components/events/events.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

export const routes: Routes = [{
    path:'',component:HomeComponent
},
{
    path:'blogs', component:BlogsComponent
},{
    path:'events', component:EventsComponent

},{
    path:'aboutus',component:AboutusComponent
}
];
