import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Respuesta } from '../models/respuesta.model';


@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    private apiUrl = 'http://localhost:3000/api/';
    public usuario: Usuario;

    constructor(private http: HttpClient) {
        this.usuario = new Usuario();
    }

    validarInicioSesion(correo: string, contrasena: string): Observable<Respuesta> {
        let url = this.apiUrl + 'validar-iniciosesion' + `?correo=${correo}&contrasena=${contrasena}`;
        return this.http.get<Respuesta>(`${url}`);
    }

    registrarUsuario(usuario: Usuario): Observable<Respuesta> {
        let url = this.apiUrl + 'registrar-usuario';
        return this.http.post<Respuesta>(`${url}`, usuario);
    }

    validarCorreo(correo: string): Observable<Respuesta> {
        let url = this.apiUrl + 'validar-correo' + `?correo=${correo}`;
        return this.http.get<Respuesta>(`${url}`);
    }

    actualizarContrasena(id: string, contrasena: string): Observable<Respuesta> {
        let url = this.apiUrl + 'cambiar-contrasena' + `?id=${id}&contrasena=${contrasena}`;
        return this.http.put<Respuesta>(`${url}`, this.usuario);
    }
<<<<<<< HEAD

   /* obtenerUsuario(id: String ){
      return this.http.get(`${this.apiUrl}/usuarios/${id}`);

    }*/
    editarUsuario(id: string): Observable<Usuario> {
      let url = this.apiUrl + 'editar-usuario' + `?id=${id}`;
      return this.http.get<Usuario>(`${url}`);
  }
    obtenerUsuario(id: string):Observable<Usuario> {
      if (id.includes('USER')) {
        let url = this.apiUrl+'obtener-usuario'+'/'+id;
        return this.http.get<Usuario>(`${url}`);
      }else{
        let url = this.apiUrl+'obtener-usuarioId'+'/'+id;
        return this.http.get<Usuario>(`${url}`);
      }
    }
     actualizarUsuario(id:string , perfil: Usuario):Observable<Respuesta> {
      let url = this.apiUrl+'actualizar-usuario'+id;
      console.log(url);
      console.log(perfil);
      return this.http.put<Respuesta>(`${url}`, perfil);
    }
    /*actualizarUsuario(id: string,nombres:string,apellidoPaterno:string, apellidoMaterno: string, correo: string, telefono:number, gender: string, contrasena: string): Observable<Respuesta> {
      let url = this.apiUrl + 'actualizar-usuario' + `?id=${id}&nombres=${nombres}&apellidoPaterno=${apellidoPaterno}&apellidomaterno=${apellidoMaterno}&correo=${correo}&telefono=${telefono}&gender=${gender}&contrasena=${contrasena}`;
      return this.http.put<Respuesta>(`${url}`, this.usuario);
  }*/
  obtenerusuarios(id: string): Observable<Usuario[]> {
       let url = this.apiUrl + 'obtener-usuarios' + `?id=${id}`;
       return this.http.get<Usuario[]>(`${url}`)
    }
=======
>>>>>>> parent of 0a03594 (añadi funcionalidades)
}