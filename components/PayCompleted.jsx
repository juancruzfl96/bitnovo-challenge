"use client";
import Footer from "@/components/Footer";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

export default function PayCompleted({ title, error }) {
  const router = useRouter();

  const handleRouter = () => {
    router.push("/");
  };

  return (
    <>
      <main className="flex flex-col min-h-screen items-center justify-center">
        <div className="flex-grow flex flex-col items-center justify-center ">
          <div
            style={{ width: "470px", height: "400px" }}
            className="rounded-lg mx-auto flex flex-col shadow-2xl justify-between items-center p-8"
          >
            <div
              style={{
                width: "90px",
                height: "90px",
                backgroundColor: error ? "#E4A6A6" : "#8CE4AC",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              <FontAwesomeIcon
                className="text-6xl p-4"
                color={error ? "#DC2626" : "#16A34A"}
                icon={error ? faXmark : faCheck}
              />
            </div>
            <p className="text-2xl m-4">{title}</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur. Laoreet blandit auctor et
              varius dolor elit facilisi enim. Nulla ut ut eu nunc.
            </p>
            <button
              onClick={handleRouter}
              style={{
                backgroundColor: "#035AC5",
                width: "100%",
                height: "50px",
                borderRadius: "5px",
                color: "white",
                margin: "10px 0",
              }}
            >
              Crear nuevo pago
            </button>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
