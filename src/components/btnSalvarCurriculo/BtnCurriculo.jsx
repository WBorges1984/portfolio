import React from "react";
import { TbPdf } from "react-icons/tb";
import { BsFiletypeDocx } from "react-icons/bs";

const BtnSalvarCurriculo = ({ src, pdf, docx }) => {
  return (
    <button className="btn">
      {pdf && (
        <>
          {" "}
          <TbPdf size={40} />
          <a
            href={src}
            download="WillianBorges.pdf"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Baixar Currículo
          </a>
        </>
      )}
      {docx && (<> <BsFiletypeDocx size={40} />
        <a
        href={src}
        download="WillianBorges.docx"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        Baixar Currículo
      </a>
      </>
    )}
    </button>
  );
};

export default BtnSalvarCurriculo;
