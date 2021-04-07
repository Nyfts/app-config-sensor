import React, { createContext, useContext } from "react";

import ProcessInterface from '../interfaces/ProcessInterface';

interface FormContextInterface {
  process: ProcessInterface;
}

const FormContext = createContext<FormContextInterface>(
  {} as FormContextInterface
);

const FormProvider: React.FC = ({ children }) => {

  return (
    <FormContext.Provider value={{} as FormContextInterface}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const context = useContext(FormContext);

  return context;
}

export default FormProvider;