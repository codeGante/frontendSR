import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TodoListComponent } from './components/list/todo-list.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'dashboard', component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {}
