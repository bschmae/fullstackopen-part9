import patientData from '../../data/patients';
import { Patient, newPatient} from '../types';
import { v4 as uuidv4 } from 'uuid';



const patients: Patient[] = patientData as Patient[];

const getData = (): Omit<Patient, 'ssn'>[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatient = (data: newPatient): Omit<Patient, 'ssn'> => {
    const newPatient = { 
        id: uuidv4(),
         ...data 
        };

    patients.push(newPatient);
    return newPatient;
}

export default {
    getData,
    addPatient,
};
