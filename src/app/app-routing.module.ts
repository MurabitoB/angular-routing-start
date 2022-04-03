import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './auth-guard.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // localhost:4200
  {
    path: 'users', component: UsersComponent, children: [
     { path: ':id/:name', component: UserComponent }, // localhost:4200/users
  ] }, // localhost:4200/users
  {
    path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
    { path: ':id', component: ServerComponent }, // localhost:4200/servers
    { path: ':id/edit', component: EditServerComponent, canDeactivate:[CanDeactivateGuard ]}, // localhost:4200/servers
    ]
  }, // localhost:4200/servers
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];


@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {

}
