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
        let url = this.apiUrl + 'validar-iniciosesion'+`?correo=${correo}&passw=${contrasena}`;
        return this.http.get<Respuesta>(`${url}`);
    }

    registrarUsuario(usuario: Usuario): Observable<Respuesta> {
        let url = this.apiUrl + 'registrar-usuario';
        return this.http.post<Respuesta>(`${url}`, usuario);
    }

}