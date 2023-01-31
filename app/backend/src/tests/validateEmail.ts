// import validateEmail from '../middlewares/validateEmail';

// describe('validateEmail', () => {
//   it('should return status 400 if all fields have not been filled', () => {
//     const req: any = { body: { email: '' } };
//     const res: any = { status: (statusCode: number) => {
//       expect(statusCode).to.equal(400);
//       return {
//         json: (message: string) => {
//           expect(message).to.equal('All fields must be filled');
//         }
//       };
//     }};
//     const next = () => {
//       throw new Error('next should not be called');
//     };
//     validateEmail(req, res, next);
//   });

//   it('should return status 400 if email is invalid', () => {
//     const req: any = { body: { email: 'not_an_email' } };
//     const res: any = { status: (statusCode: number) => {
//       expect(statusCode).to.equal(400);
//       return {
//         send: (message: string) => {
//           expect(message).to.equal('Campo "email" inválido');
//         }
//       };
//     }};
//     const next = () => {
//       throw new Error('next should not be called');
//     };
//     validateEmail(req, res, next);
//   });

//   it('should call next if email is valid', () => {
//     const req: any = { body: { email: 'valid@email.com' } };
//     const res: any = { status: (statusCode: number) => {
//       throw new Error('res.status should not be called');
//     }};
//     let calledNext = false;
//     const next = () => {
//       calledNext = true;
//     };
//     validateEmail(req, res, next);
//     expect(calledNext).to.equal(true);
//   });
// });