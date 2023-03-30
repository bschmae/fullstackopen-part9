import express from 'express';
import services from '../services/diagnoses';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(services.getData());
});

export default router;