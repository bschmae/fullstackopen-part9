import express from 'express';
import patientServices from '../services/patients';
import toNewPatient from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientServices.getData());
});

router.post('/',(req, res) => {
    const newPatient = toNewPatient(req.body)
    const newObject = patientServices.addPatient(newPatient);
    res.send(newObject);
});

export default router;
