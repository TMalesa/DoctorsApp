const { PatientModel } = require('../Models/patients-model');
const express = require('express');
app = express();

//Creating a Patient
const createPatient = async ({ name, lastname, phonenumber }) => {

    const patient = await PatientModel.create({

        name: name,
        lastname: lastname,
        phonenumber: phonenumber
    });

    return patient;

};

const getAllPatient = async() => {

 const patients = await PatientModel.find({})
 
 return patients

};

const getPatientById = async(patientId)=> {

    const patient = await PatientModel.find({_id: patientId}).populate('appointments');
    return patient;
};

const deletePatientById = async(patientId) => {

const deletedpatient = await PatientModel({_id: patientId});

return `User Deleted Successfully!`;


};

const updatePatient = async(patientId, {name,lastname, phonenumber}) => {


const Patient = await  this.PatientModel({

_id: patientId,
name: name,
lastname: lastname,
phonenumber: phonenumber


})

return Patient

};

const linkAppointmentToPatient = async (patientId, appointmenId) => {

    await Patient.updateOne(
        {
            _id: patientId
        },
        { $addToSet: { appointments: appointmenId } }

    );

    return `Operation completed successfully`;
};



module.exports = { linkAppointmentToPatient, updatePatient, getPatientById, createPatient, getAllPatient, deletePatientById}