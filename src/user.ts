import {Document, Schema, model} from 'mongoose';

interface UserDocumentInterface extends Document {
  nombre: string,
  apellido: string,
  edad: number,
  email: string,
  contraseña: string
}

const UserSchema = new Schema<UserDocumentInterface>({
    nombre: {
      type: String,
      required: true,
      trim: true
    },

    apellido: {
        type: String,
        required: true,
        trim: true
    },

    edad: {
        type: Number,
        required: true,
        validate: (value: number) => {
            if (value <= 0) {
              throw new Error('Edad tiene que ser mayor que 0');
            }
        },
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    contraseña: {
        type: String,
        required: true,
        trim: true,
        validate: (value: string) => {
            if (value.length <= 5) {
              throw new Error('La contraseña debe tener mas de 5 caracteres');
            }
        },
    },
  
});
  
export const User = model<UserDocumentInterface>('User', UserSchema);