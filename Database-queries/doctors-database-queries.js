const { DoctorsModel } = require('../Models/doctors-model');

const getAllDoctors = async () => {
    const doctors = await DoctorsModel.find({});

    return doctors;
}

const getDoctorsById = async (doctorsId) => {
    const doctors = await DoctorsModel.findOne({ _id: doctorsId });

    return doctors;
}

const deleteDoctorsById = async (doctorsId) => {
    const doctors = await DoctorsModel.deleteOne({ _id: doctorsId });

    return doctors;
}

const createDoctor = async ({ name, surname, specialisation, location, fee, patientId, appointmentId }) => {
    const doctors = await DoctorsModel.create({
        name: name,
        surname: surname,
        specialisation: specialisation,
        location: location,
        fee: fee,
        patientId: patientId,
        appointmentId: appointmentId
    });

    return doctors;
}

const updateDoctor = async (doctorsId, { name, surname, specialisation, location, fee, patientId, appointmentId }) => {
    await DoctorsModel.updateOne({ _id: doctorsId },
        {
            name: name,
            surname: surname,
            specialisation: specialisation,
            location: location,
            fee: fee,
            patientId: patientId,
            appointmentId: appointmentId
        });

    return `Operation updated successfully `
}

const linkPatientToDoctor = async (doctorsId, patient) => {
    await DoctorsModel.updateOne({ _id: doctorsId }, { patientId: patient });

    return `Operation completed successfully `
}

const linkAppointmentToDoctor = async (doctorsId, appointment) => {
    await DoctorsModel.updateOne({ _id: doctorsId }, { appointmentId: appointment });

    return `Operation completed successfully `
}
module.exports = { getAllDoctors, getDoctorsById, deleteDoctorsById, createDoctor, updateDoctor, linkPatientToDoctor, linkAppointmentToDoctor }