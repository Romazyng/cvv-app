// src/utils/formConfig.js

export const personalFields = [
  {
    id: 'name',
    placeholder: 'First name',
    stateKey: 'name',
    setterKey: 'setName',
  },
  {
    id: 'surname',
    placeholder: 'Last name',
    stateKey: 'surname',
    setterKey: 'setSurname',
  },
  {
    id: 'title',
    placeholder: 'Title',
    stateKey: 'title',
    setterKey: 'setTitle',
  },
  {
    id: 'image',
    placeholder: 'Your photo',
    type: 'url',
    stateKey: 'image',
    setterKey: 'setImage',
  },
  {
    id: 'address',
    placeholder: 'Address',
    stateKey: 'address',
    setterKey: 'setAddress',
  },
  {
    id: 'number',
    placeholder: 'Phone number',
    type: 'tel',
    stateKey: 'number',
    setterKey: 'setNumber',
  },
  {
    id: 'email',
    placeholder: 'Email',
    type: 'email',
    stateKey: 'email',
    setterKey: 'setEmail',
  },
  {
    id: 'description',
    placeholder: 'Description',
    stateKey: 'description',
    setterKey: 'setDescription',
  },
]

export const experienceData = [
  { title: 'Position', type: 'text' },
  { title: 'Company', type: 'text' },
  { title: 'City', type: 'text' },
  { title: 'From (year)', type: 'text' },
  { title: 'To (year)', type: 'text' },
]

export const educationData = [
  { title: 'University name', type: 'text' },
  { title: 'City', type: 'text' },
  { title: 'Degree', type: 'text' },
  { title: 'Subject', type: 'text' },
  { title: 'From (year)', type: 'text' },
  { title: 'To (year)', type: 'text' },
]