
import { ajax } from 'rxjs/ajax';
import { startWith } from 'rxjs/operators';

// Crear loading
const loadingDiv: HTMLDivElement = document.createElement('div');
const loadingSpinner: HTMLDivElement = document.createElement('div');
const textStrong: HTMLElement = document.createElement('strong');

loadingDiv.setAttribute('role', 'status');
loadingDiv.setAttribute('id', 'customLoading');
loadingSpinner.classList.add('spinner-border');
loadingSpinner.classList.add('text-success');
textStrong.innerHTML = 'Cargando...';

loadingDiv.append(loadingSpinner, textStrong);


// Add elementos
const body:HTMLBodyElement = document.querySelector('body');

// Stream
ajax.getJSON('https://reqres.in/api/users/2?delay=3')
    .pipe(
        startWith<unknown, boolean>(true)
    )
    .subscribe(
        resp => {
            if (resp === true){
                body.append(loadingDiv);
                return
            }
            body.querySelector('div#customLoading').remove();
            console.log(resp);
        }
    );
