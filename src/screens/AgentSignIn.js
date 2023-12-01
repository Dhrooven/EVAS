import React from 'react'
import {View, SafeAreaView, Text, StyleSheet} from 'react-native'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import RNPickerSelect from 'react-native-picker-select'

const AgentSignIn = () => {
  const formik = useFormik({
    initialValues: {
      Name: '',
      VehicleType: '',
      VehicleNo: '',
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .min(3, 'Must longer than 3 characters')
        .required('Required'),
      VehicleType: Yup.string().required('Required'),
      VehicleNo: Yup.string()
        .min(10, 'Must be of 10 characters')
        .required('Required'),
    }),
  })

  return (
    <SafeAreaView>
      <View>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor='Name'>Name</label>
          <input
            id='Name'
            name='Name'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Name}
          />
          {formik.touched.Name && formik.errors.Name ? (
            <div>{formik.errors.Name}</div>
          ) : null}

          <label htmlFor='VehicleNo'>VehicleNo</label>
          <input
            id='VehicleNo'
            name='VehicleNo'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.VehicleNo}
          />
          {formik.touched.VehicleNo && formik.errors.VehicleNo ? (
            <div>{formik.errors.VehicleNo}</div>
          ) : null}
        </form>

        <RNPickerSelect
          onValueChange={formik.handleChange}
          items={[
            {label: 'JavaScript', value: 'JavaScript'},
            {label: 'TypeScript', value: 'TypeScript'},
            {label: 'Python', value: 'Python'},
            {label: 'Java', value: 'Java'},
            {label: 'C++', value: 'C++'},
            {label: 'C', value: 'C'},
          ]}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default AgentSignIn
