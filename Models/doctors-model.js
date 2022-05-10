const { Schema, model } = require('mongoose');

const DoctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    specialisation: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    fee: {
        type: String,
        required: true
    },
    patientId: {
        type: Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    appointmentId: {
        type: Schema.Types.ObjectId,
        ref: "Appointment",
        required: true
    }
});
const doctor = model("Doctor", DoctorSchema);
module.exports = { doctor };

