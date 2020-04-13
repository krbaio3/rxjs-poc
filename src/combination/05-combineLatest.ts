import { combineLatest, Observable } from 'rxjs';
import { getInputStream } from '../helpers/getInputstream';


const input1:HTMLInputElement = document.createElement('input');
const input2:HTMLInputElement = document.createElement('input');

input1.placeholder = 'email@gmail.com';

input2.type='password';
input2.placeholder = '************';

document.querySelector('body').append(input1, input2);

// La funcion no esta deprecada, el operador si.
combineLatest<Observable<string>>(
    getInputStream(input1),
    getInputStream(input2)
).subscribe(console.log);
