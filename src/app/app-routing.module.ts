
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './modulos/administracao/usuarios/usuarios.component';
import { CadastrarEditarUsuarioComponent } from './modulos/administracao/usuarios/cadastrar-e-editar-usuario/cadastrar-e-editar-usuario.component';
import { ClientesComponent } from './modulos/operador/clientes/clientes.component';
import { CadastrarEditarClienteComponent } from './modulos/operador/clientes/cadastrar-e-editar-cliente/cadastrar-e-editar-cliente.component';

const routes: Routes = [
  { path: '', redirectTo: 'administracao/usuarios', pathMatch: 'full' },
  // { path: 'home', component: UsuariosComponent },
  // { path: 'auth', component: AuthComponent },

  {
    path: 'administracao/usuarios',
    data: {
      breadcrumbs: 'Usuários'
    },
    children: [
      {
        path: '', component: UsuariosComponent
      },
      {
        path: 'cadastrar',
        data: {
          breadcrumbs: 'Novo Usuario'
        },
        component: CadastrarEditarUsuarioComponent
      },
      {
        path: 'editar/:id',
        component: CadastrarEditarUsuarioComponent
      },

    ]
  },
  {
    path: 'operador/clientes',
    data: {
      breadcrumbs: 'Clientes'
    },
    children: [
      {
        path: '', component: ClientesComponent
      },
      {
        path: 'cadastrar',
        data: {
          breadcrumbs: 'Novo Usuario'
        },
        component: CadastrarEditarClienteComponent
      },
   
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
