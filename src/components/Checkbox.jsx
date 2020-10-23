import React from 'react'
import { Field, Form, Formik } from 'formik'
import {connect} from 'react-redux'
import {changeCheck, changeChecks} from '../redux/filter/FilterActions'

const  Check = (props) => {
    return (
  <React.Fragment>
    <div>
    <Formik
      initialValues={{
        option: ""
      }}
      onSubmit={(values) => {
        props.changeCheck(values.option) 
      }}
    >
        {({ values: { option }, handleChange, submitForm }) => { 
        return (
          <Form  onChange={e => {
              handleChange(e);
              setTimeout(() => {
              submitForm();
              });
            }}>
              
          <h5 id="checkbox-group">Sortează după</h5>
            <div role="group"  >
             <div>
              <label>
                <Field type="checkbox" name="option" value="name" /> Nume
              </label>
            </div>
            <div>
             <label>
              <Field type="checkbox" name="option" value="value"  /> Pret
             </label>
            </div>
          </div>
          </Form> )}}
     
      </Formik>
      </div>

      <div>
        <Formik
          initialValues={{ 
            checked1:[],
            checked2:[],
            checked3:[]
          }}
          onSubmit={values => {
            props.changeChecks(values)}}
        >
          {({ values, handleChange, submitForm }) => (
            <Form onChange={e => {
                handleChange(e);
                setTimeout(() => {
                submitForm();
                });
              }}>
            
          <h5 id="checkbox-group">Filtrează după</h5>
            <div role="group" aria-labelledby="checkbox-group">
              <div>
                <label>
                  <Field type="checkbox" name="checked1" value="low" /> Salariu mai mic de 2500
                </label>
              </div>
              <div>
                <label>
                  <Field type="checkbox" name="checked2" value="medium" /> Salariu între 2500 și 4000
                </label>
              </div>
              <div>
                <label>
                  <Field type="checkbox" name="checked3" value="high" /> Salariu mai mare de 4000
                </label>
                </div>
              </div> 
            </Form>
          )}
        </Formik>
      </div>
  
  </React.Fragment>
    )
}

export default connect(null, {changeCheck, changeChecks})(Check)