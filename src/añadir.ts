import {User} from './user'
import './mongoose';
import { exit } from 'process';

const user = new User({
    nombre: '          Cristiano',
    apellido: 'Ronaldo',
    edad: 37,
    email: 'elbicho@gmail.com',
    contraseña: 'SIUUUUU'
});

user.save().then((user) => {
    console.log('Usuario añadido');
    console.log(user);
    exit(0);

}).catch((error) => {
    console.log(error);
    exit(0);
});