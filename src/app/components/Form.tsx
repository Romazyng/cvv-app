// import React from 'react'
import FormField from './FormField'
import { Input } from './Input'

import Button from './button'
import {experienceData} from '../utils/formConfig'
import {educationData} from '../utils/formConfig'
import { personalFields } from '../utils/formConfig'


type FormProps = {
    states: any,
    handleResetClick: any,
    handleChange: any,
    handleAddClick: any,
    handlePDFclick: () => void,
}

export default function Form({states, handleResetClick ,handleChange, handleAddClick, handlePDFclick }:FormProps) 
{
    return (
        <form
        name="cv"
        className="w-full max-w-6xl bg-gray-200 rounded-xl shadow-lg p-7 font-sans flex flex-col gap-14">
            <FormField key={'first'} title='personal-information'>
                {personalFields.map((e) => (
                    <Input
                        id={e.id}
                        type={e.type || 'text'}
                        key={e.id}
                        placeholder={e.placeholder}
                        data={states[e.stateKey]}
                        setter={states[e.setterKey]}
                        handleChange={handleChange}
                    />
                ))}
            </FormField>
            <FormField key={'second'} title='experience'>
                {states.experience}
                <Button
                    bg="bg-green-800"
                    type='button'
                    text='add'
                    handleClick={(e: any) => (handleAddClick(e, experienceData, states.setPersonalFields))}
                />
            </FormField>
            <FormField key={'third'} title='education'>
                {states.education}
                <Button
                    bg="bg-green-800"
                    type='button'
                    text='add'
                    handleClick={(e: any) => (handleAddClick(e, educationData, states.setEducationData))}
                />
            </FormField>
            <div className="flex flex-col gap-5">
        <Button
          type="reset"
          text="reset"
          bg="bg-red-700"
          handleClick={handleResetClick}
        />

        <Button
          type="button"
          handleClick={handlePDFclick}
          text="generate PDF"
          bg="bg-green-800"
        />
      </div>
        </form>
    )
}