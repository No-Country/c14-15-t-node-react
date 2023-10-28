// import React, { useState } from 'react';
// import axios from 'axios';
// import { Contacto } from './Contacto';

// const ContactForm = () => {
//   const [status, setStatus] = useState({
//     submitted: false,
//     submitting: false,
//     info: { error: false, msg: null },
//   });

//   const [inputs, setInputs] = useState({
//     email: '',
//     message: '',
//     firstname: '',
//     lastname: '',
//     observation: '',
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setInputs({
//       ...inputs,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setStatus({ submitted: true, submitting: true });

//     try {
//       const response = await axios.post('/your-submit-url', inputs);

//       if (response.data.success) {
//         setStatus({
//           submitted: true,
//           submitting: false,
//           info: { error: false, msg: 'Form submitted successfully.' },
//         });
//       } else {
//         setStatus({
//           submitted: true,
//           submitting: false,
//           info: { error: true, msg: 'There was an error while submitting the form.' },
//         });
//       }
//     } catch (error) {
//       setStatus({
//         submitted: true,
//         submitting: false,
//         info: { error: true, msg: 'There was an error while submitting the form.' },
//       });
//     }
//   };

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label htmlFor="firstname">First Name:</label>
// //           <input
// //             type="text"
// //             id="firstname"
// //             name="firstname"
// //             value={inputs.firstname}
// //             onChange={handleInputChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="lastname">Last Name:</label>
// //           <input
// //             type="text"
// //             id="lastname"
// //             name="lastname"
// //             value={inputs.lastname}
// //             onChange={handleInputChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="email">Email:</label>
// //           <input
// //             type="email"
// //             id="email"
// //             name="email"
// //             value={inputs.email}
// //             onChange={handleInputChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="message">Message:</label>
// //           <textarea
// //             id="message"
// //             name="message"
// //             value={inputs.message}
// //             onChange={handleInputChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="observation">Observation:</label>
// //           <textarea
// //             id="observation"
// //             name="observation"
// //             value={inputs.observation}
// //             onChange={handleInputChange}
// //           />
// //         </div>
// //         <button type="submit" disabled={status.submitting}>
// //           Submit
// //         </button>
// //       </form>
// //       {status.info.error && (
// //         <div className="error-message">{status.info.msg}</div>
// //       )}
// //       {status.submitted && !status.info.error && (
// //         <div className="success-message">{status.info.msg}</div>
// //       )}
// //     </div>
// //   );
//  };

// export default ContactForm;
