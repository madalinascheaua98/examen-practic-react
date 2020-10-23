import React from 'react';
import {  Formik } from 'formik';
import {Form } from 'react-bootstrap';
import {connect} from 'react-redux';
import {changeUsers} from '../redux/user/UserActions';


const FormComponent = (props) => (
  <div>
    <h2 className="text-center">Formular</h2>
    <div className="container w-50">
    <Formik
      initialValues={{  nume:'', prenume: '', salariu: '', meserie: '' }}
      validate={values => {
        const errors = {};
        if (!values.nume) {
            errors.nume = 'Numele trebuie completat'
        }
       if (!values.salariu) {
           errors.salariu = 'Salariul trebuie completat'
       }
        
       return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
            const data = new Date()
            const id = props.userReducer.counter
           const valuesPlusDate ={...values, data, id}
           props.changeUsers(valuesPlusDate)
         
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        update,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
        
           <Form.Group >
               <Form.Label>Nume</Form.Label>
               <Form.Control
                
               type="text"
               name="nume"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.nume} />
           </Form.Group>
           {errors.nume && update.nume && errors.nume}

           <Form.Group >
               <Form.Label>Prenume</Form.Label>
               <Form.Control                 
               type="text"
               name="prenume"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.prenume} />
           </Form.Group>
           {errors.prenume && update.prenume && errors.prenume}

           <Form.Group >
               <Form.Label>Meserie</Form.Label>
               <Form.Control                 
               type="text"
               name="meserie"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.meserie} />
           </Form.Group>
           {errors.meserie && update.meserie && errors.meserie}
    
           <Form.Group >
               <Form.Label>Salariu</Form.Label>
               <Form.Control                 
               type="number"
               name="salariu"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.salariu} />
           </Form.Group>
           {errors.salariu && update.salariu && errors.salariu}
          <div className="text-center">
          <button className = "btn btn-danger" type="submit" disabled={isSubmitting}> Submit
          </button></div>
        </Form>
      )}
    </Formik>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
   userReducer : state.userReducer
  }
}

export default connect(mapStateToProps, {changeUsers})(FormComponent);