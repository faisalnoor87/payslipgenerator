export const employee = {
  firstName: 'David',
  lastName: 'Rudd',
  annualSalary: 60050,
  superRate: 9,
  paymentPeriod: '01 March – 31 March'
};

export const file = [employee];

export const apiResponse = {
  name: 'David Rudd',
  payPeriod: '01 March – 31 March',
  grossIncome: 5004,
  incomeTax: 922,
  netIncome: 4082,
  superAmount: 450
};

export const errorRes = {
  timestamp: 'When it happened',
  status: 0,
  error: 'Some Error',
  message: 'Required request body is missing or something',
  path: '/somePath'
};
