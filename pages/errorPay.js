import React from "react";
import PayCompleted from "@/components/PayCompleted";

const errorPay = () => {
  return (
    <div>
      <PayCompleted title={"¡Pago cancelado!"} error={true} />
    </div>
  );
};

export default errorPay;
