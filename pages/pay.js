"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import OrderDetails from "@/components/OrderDetails";
import PaymentSection from "@/components/PaymentSection";
import servicesCripto from "@/services/orders";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/router";

export default function Pay() {
  const router = useRouter();
  const [data, setData] = useState({});
  const [criptos, setCriptos] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [flag, setFlag] = useState(false);

  const criptoSelected = criptos.filter((elem) =>
    elem.symbol.includes(data?.currency_id)
  );

  useEffect(() => {
    if (localStorage.getItem("payData")) {
      setShowLoading(true);
      const identifier = JSON.parse(
        localStorage.getItem("payData")
      )?.identifier;
      servicesCripto
        .getOrderInfo(identifier)
        .then(({ data }) => setData(data[0]))
        .catch((err) => console.log(err));

      servicesCripto
        .getCripto()
        .then(({ data }) => {
          setCriptos(data);
        })
        .catch((err) => console.log(err))
        .finally(() => setShowLoading(false));
    } else {
      setFlag(true);
    }
  }, []);

  return (
    <>
      <Spinner show={showLoading} />
      <main className="flex flex-col justify-between items-center h-screen">
        <div className="flex mt-28">
          {flag ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1 className="text-xl">No se ha generado ningun pago</h1>
              <button
                onClick={() => router.push("/")}
                className=" bg-blue-600 rounded-md text-white p-3 mt-5"
              >
                Click aqui para generar uno
              </button>
            </div>
          ) : (
            <>
              <OrderDetails data={data} criptoSelected={criptoSelected} />
              <PaymentSection data={data} criptoSelected={criptoSelected} />
            </>
          )}
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </>
  );
}
