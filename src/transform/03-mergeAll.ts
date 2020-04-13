import { fromEvent, Observable, pipe } from 'rxjs';
import { debounceTime, filter, map, mergeAll, pluck } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { GithubUsersResp, Item } from '../models/github';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = (usuarios: Item[])=> {
    orderList.innerHTML = '';
    for( let usuario of usuarios) {
        const ul:HTMLUListElement = document.createElement('ul');
        const img: HTMLImageElement = document.createElement('img');
        const br: HTMLBRElement = document.createElement('br');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver pagina';
        anchor.target = '_blank';

        ul.append(img);
        ul.append(br);
        ul.append(usuario.login + ' ');
        ul.append(anchor);

        orderList.append(ul);
    }
};

// Streams
const input$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>( textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    filter( value => value !== ''),
    map<string, Observable<GithubUsersResp>>( value =>
        ajax.getJSON(`https://api.github.com/search/users?q=${value}`)
    ),
    mergeAll<GithubUsersResp>(),
    pluck<GithubUsersResp, Item[]>('items')
).subscribe(mostrarUsuarios);

