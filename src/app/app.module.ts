import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { InBuiltDirectivesComponent } from './in-built-directives/in-built-directives.component';
import { ParentComponent } from './data-sharing/parent/parent.component';
import { ChildComponent } from './data-sharing/child/child.component';
import { DirectivesComponent } from './directives/directives.component';
import { MyDirective } from "./directives/my-directive";
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from "./pipes/my-custom-pipe";
import { FormsComponent } from './forms/forms.component';
import { ServiceCosumer } from './service/service-consumer';
import { MyService } from './service/my-service';
import { RouterModule, Route } from "@angular/router";
import { ErrorComponent } from './error/error.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { RouteGuard } from './route-guard';
import { MyTrackService } from './my-track-service';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { InstructionsComponent } from './instructions/instructions.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { ResultPageComponent } from './result-page/result-page.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { CardsComponent } from './cards/cards.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";

const route: Route[] = [{
  path: '',
  redirectTo: 'pipes',
  pathMatch: 'full'
},{
  path: 'pipes',
  component: PipesComponent,
  children: [{
    path: '',
    redirectTo: 'in-built-directives',
    pathMatch: 'full'
  },{
    path: 'in-built-directives',
    component: InBuiltDirectivesComponent
  }]
},{
  path: 'forms/:name',
  component: FormsComponent,
  data: {
    name: 'new',
    id:'ABC@134'
  }
},
{
  path: 'admin',
  canActivate: [RouteGuard],
  loadChildren: './admin/admin#AdminModule'
},
{
  path: 'http',
  component: HttpComponent
},
{
  path: '**',
  component: ErrorComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InBuiltDirectivesComponent,
    ParentComponent,
    ChildComponent,
    DirectivesComponent,
    MyDirective,
    PipesComponent,
    CustomPipe,
    FormsComponent,
    ServiceCosumer,
    ErrorComponent,
    HttpComponent,
    PageComponent,
    InstructionsComponent,
    ResultPageComponent,
    CardsComponent,
    HistoryPageComponent
        // remaining - components, directives, pipes etc.
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule, 
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule.forRoot(route)
    // modules
  ],
  providers: [
    // service
    // MyService
    RouteGuard,
    MyTrackService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// decorator - class, property, method, parameter decorators

// class abc{
//   @Custom myName;
// }