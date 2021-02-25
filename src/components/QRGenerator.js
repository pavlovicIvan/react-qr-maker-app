// React
import React, { useState } from "react";

// Generator
import QRCode from "qrcode.react";

// Custom functions
import downloadQR from "../helpers/functions";

const QRGenerator = () => {
  const [qrValue, setQrValue] = useState("");

  return (
    <div className="containerMain">
      <textarea
        autoFocus
        rows="3"
        onChange={(e) => setQrValue(e.target.value)}
        value={qrValue}
        placeholder="Type your text or url here"
      />
      <QRCode id="qr" value={qrValue} size={300} includeMargin />
      <button
        disabled={!qrValue}
        type="button"
        className="downloadButton"
        onClick={() => downloadQR(qrValue)}
      >
        DOWNLOAD
      </button>
    </div>
  );
};

export default QRGenerator;
