/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from 'react'
import { ProfileCard, AutocompleteInput } from 'components/components-export'
import { Formik } from 'formik';
import * as Yup from 'yup';

import './register.scss'
import { Box, Text, Input, InputGroup, InputLeftElement, Button, Select } from '@chakra-ui/react';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi'
import { useGetBanks, useValidateBank } from 'hooks/fittedHooks';
import { DashboardContext } from 'contextAPI/DashboardContext';

const Register = () => {
    const { setScreen } = useContext(DashboardContext)
    const getBanks = useGetBanks()
    const validateAccount = useValidateBank()
    const formikRef = useRef(null);
    const [params, setParams] = useState(
        {
            bankCode: "",
            accountNo: ""
        }     
    )
    const [apiAccountName, setApiAccountName] = useState('')
    
    useEffect(() => {
        if (params.bankCode && params.accountNo.length === 10) {
            validateAccount.call(params)
        }

    }, [params])

    useEffect(() => {
        if (validateAccount.data) {
            setApiAccountName(validateAccount.data?.content?.data?.account_name)
        }
    }, [validateAccount])

  return (
    <div className='register-container'>
        <div className='register-container_header'>
            <h3>Vetted Tailor Application</h3>
            <p>One step closer to the goal! please provide us with your Bank details <br/> with which you will be recieving payment.</p>
        </div>
        <div className='register-container_content'>
            <div className='register-container_content-bio'>
                <ProfileCard />
                <div className='register-container_content-bio_details'>
                    <div className='bio-title'>
                        <p>Name:</p>
                        <p>Gender:</p>
                    </div>
                    <div className='bio-description'>
                        <p>Sikiru</p>
                        <p>Male</p>
                    </div>
                </div>
            </div>
            <div className='register-container_content-form'>
            <Formik
                    innerRef={formikRef}
                    initialValues={
                        {
                            bankName: '',
                            accountNumber:  '',
                            accountName: apiAccountName,
                        }
                    }
                    validationSchema={Yup.object({
                        bankName: Yup.string().required('bank name is required'),
                        accountNumber: Yup.string().required('account number is required').max(10),
                        accountName: Yup.string()
                    })}
                    onSubmit={() => { setScreen('SUCCESS') }
                    }
                >
                    {({ handleSubmit, getFieldProps, touched, errors, setFieldValue }) => (
                        <form onSubmit={handleSubmit}>
                            <InputGroup className='content-form_input-group'>
                            <Box className='inputs-holder'>
                                <Text>Gender you sew for</Text>
                                <Select placeholder='Select Gender'>
                                    <option value='Male'>Male</option>
                                    <option value='Female'>Female</option>
                                    <option value='Both'>Both</option>
                                </Select>
                            </Box>
                            <Box className='inputs-holder'>
                                <Text>Styles you sew</Text>
                                <Select placeholder='Select styles'>
                                    <option value='Corporate'>Corporate</option>
                                    <option value='Traditional'>Traditional</option>
                                    <option value='Weddings'>Weddings</option>
                                </Select>
                            </Box>
                            </InputGroup>
                            <Box className='inputs-holder'>
                                <Text>Bank Name</Text>
                                <AutocompleteInput options={getBanks.data?.data} onChange={(e) => { setFieldValue('bankName', e?.code); setParams({...params, bankCode: e?.code})}}/>
                                {touched.bankName && errors.bankName
                                    ? (<small>{errors.bankName}</small>)
                                    : null}
                            </Box>
                            <Box className='inputs-holder'>
                                <Text>Account Number</Text>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                    <BsGrid3X3Gap color='gray.300' />
                                    </InputLeftElement>
                                    <Input type='text' maxLength={10} placeholder='please input your account number' {...getFieldProps('accountNumber')} onInput={(e) => setParams({...params, accountNo: e.target.value})}/>
                                </InputGroup>
                                {touched.accountNumber && errors.accountNumber
                                    ? (<small>{errors.accountNumber}</small>)
                                    : null}
                            </Box>
                            <Box className='inputs-holder'>
                                <Text>Account Name</Text>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                    <BiUser color='gray.300' />
                                    </InputLeftElement>
                                    <Input type='text' disabled {...getFieldProps('accountName')} value={apiAccountName}/>
                                </InputGroup>
                                {validateAccount.error ? <small>Oops, Account details not found</small> : null}
                            </Box>
                            <Button type='submit' className='submit-button' isDisabled={!validateAccount.isSuccess}>Submit Application</Button>
                        </form>
                    )}
            </Formik>
            </div>
        </div>
    </div>
  )
}

export default Register