import {User} from './user'
import './mongoose';
import { exit } from 'process';

const filter = {"email": 'sergiomellado@gmail.com'}

User.find(filter).then((user) => {
    if (user.length !== 0) {
        console.log(user);
        exit(0);
    } else {
        console.log("Usario no encontrado");
        exit(0);
    }
  }).catch((error) => {
    console.log(error);
    exit(0);
});
