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
      let url = this.apiUrl+'actualizar-usuario/'+id;
      console.log(url);
      console.log(perfil);
      return this.http.put<Respuesta>(`${url}`, perfil);
    }
  obtenerusuarios(id: string): Observable<Usuario[]> {
       let url = this.apiUrl + 'obtener-usuarios' + `?id=${id}`;
       return this.http.get<Usuario[]>(`${url}`)
    }

}

