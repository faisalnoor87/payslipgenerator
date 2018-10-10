import rootReducer from './';

describe('rootReducer', () => {
  it('initializes the default state', () => {
    expect(
      rootReducer(
        {},
        {
          payslips: [],
          loading: false
        }
      )
    ).toEqual({
      error: {},
      payslip: {
        payslips: [],
        loading: false
      }
    });
  });
});
