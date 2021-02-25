import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRGenerator = () => {
  const [qrValue, setQrValue] = useState("QR Code");

  return (
    <div className="containerCenter">
      <div className="containerMain">
        <input
          type="text"
          onChange={(e) => setQrValue(e.target.value)}
          value={qrValue}
        />
        <QRCode value={qrValue} size={300} includeMargin />
      </div>
    </div>
  );
};

export default QRGenerator;
