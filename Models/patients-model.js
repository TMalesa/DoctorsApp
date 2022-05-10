const { model, Schema } = require('mongoose');

const PatientSchema = new Schema({

    name: {
        type: String,
        required: true

    },
    lastname: {
        type: String,
        required: true

    },

    phoneNumber: {
        type: String,
        required: true
    },

    appointments: [{ type: Schema.Types.ObjectId, ref: "Appointment" }]

})

const PatientModel = model('Patient', PatientSchema);

exports.module = {PatientModel }