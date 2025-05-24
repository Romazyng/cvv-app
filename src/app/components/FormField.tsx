import { ReactNode } from 'react';

type FieldProps = {
    title: string,
    children: ReactNode
}

export default function FormField({ title, children }: FieldProps) {
  return (
    <fieldset className={`flex flex-col gap-5 ${title}`}>
      <legend className="text-2xl font-semibold capitalize mb-7">
        {title}
      </legend>
      {children}
    </fieldset>
  )
}