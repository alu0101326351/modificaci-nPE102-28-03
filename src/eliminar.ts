import {User} from './user'
import './mongoose';
import { exit } from 'process';

const filter = {"email": 'sergiomellado@gmail.com'}

User.findOneAndDelete(filter).then((user) => {
    if (!user) {
        console.log("Usario no encontrado");
        exit(0);
    } else {
        console.log(user);
        exit(0);
    }
  }).catch((error) => {
    console.log(error);
    exit(0);
});