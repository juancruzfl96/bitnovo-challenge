import React from "react";
import PayCompleted from "@/components/PayCompleted";

const succesPay = () => {
  return (
    <div>
      <PayCompleted title={"¡Pago completado!"} error={false} />
    </div>
  );
};

export default succesPay;
