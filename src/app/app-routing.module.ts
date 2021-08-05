import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { OrderComponent } from './order/order.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TasklistComponent } from './tasklist/tasklist.component';

const routes: Routes = [{path:'',redirectTo:'productedit',pathMatch:'full'},

{path:'tasks',
children:[{path:'tasklists',component:TasklistComponent}]},
  
  {path:'products',
children:[{path:'edit',component:ProductEditComponent},
{path:'view',component:ProductViewComponent},
{path:'view/:id',component:ProductIdComponent}]
},
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'tasks', loadChildren: () => import('./task/task.module').then(m => m.TaskModule) },
  { path: 'todos', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule) },
// {path:'products',component:ProductsComponent},
// {path:'productview',component:ProductViewComponent},
// {path:'productedit',component:ProductEditComponent},
// {path:'product/:id',component:ProductIdComponent},
// {path:'order/:id1/:id2',component:OrderComponent},
// {path:'search',component:SearchComponent},
{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
