import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // localhost:4200
  {
    path: 'users', component: UsersComponent, children: [
     { path: ':id/:name', component: UserComponent }, // localhost:4200/users
  ] }, // localhost:4200/users
  {
    path: 'servers', component: ServersComponent, children: [
    { path: ':id', component: ServerComponent }, // localhost:4200/servers
    { path: ':id/edit', component: EditServerComponent}, // localhost:4200/servers
    ]
  }, // localhost:4200/servers
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];


@NgModule({
  
})
export class AppRoutingModule {


}
