import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/courses', pathMatch: 'full' },
    { path: 'courses', component: CourseListComponent }
];
