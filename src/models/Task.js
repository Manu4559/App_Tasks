import {Schema, model} from 'mongoose'

const taskSchema = new Schema({
    modulo: {
        type: String,
        required: true,
        trim: true //Para limpiar los espacios del principio y el final.
    },
    metodo: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    descripcion: String,
    ejemplo: String,
    done: {
        type: Boolean,
        default: false
    },
    
}, {
    timestamps:true,
    versionKey: false //Para que no aparezca __v:
})

export default model('Task', taskSchema)