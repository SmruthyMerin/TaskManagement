import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: "", 
        loadChildren: () => import("./tasks/tasks.module").then(x => x.TasksModule)
    },
];