import React from "react";

import FormProvider from "../../contexts/form";

import FormRoutes from "../../routes/form.routes";

const Form: React.FC = () => {
  return (
    <FormProvider>
      <FormRoutes />
    </FormProvider>
  );
};

export default Form;
