const { createDoctor } = require('../Database-queries/doctors-database-queries');
const { linkDoctorToAppointment } = require('../Database-queries/appointment-database-queries');
const { linkDoctoorToPatient } = require('../Database-queries/patients-database-queries');


const createDoctorsService = async ({ name, surname, specialisation, location, fee, patientId, appointmentId }) => {
    const createdDoctor = await createDoctor({
        name: name,
        surname: surname,
        specialisation: specialisation,
        location: location,
        fee: fee,
        patientId: patientId,
        appointmentId: appointmentId
    });

    await linkDoctoorToPatient(patientId, createdDoctor._id);
    await linkDoctorToAppointment(appointmentId, createdDoctor._id);

    return `Operation completed successfully`;
}

module.exports = { createDoctorsService }