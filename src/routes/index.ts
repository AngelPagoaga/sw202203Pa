import { Router } from 'express';

import CashFlowRouter from './CashFlows';

const router = Router();

//http:localhost:3001/cashflow/
//http:localhost:3001/cashflow/byindex/1 
//http:localhost:3001/cashflow/update/1 
router.use('/cashflow', CashFlowRouter);
export default router;



