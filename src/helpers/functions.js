const downloadQR = (qrValue) => {
  const canvas = document.getElementById("qr");
  const pngUrl = canvas.toDataURL("image/png").replace("image/png");
  const downloadLink = document.createElement("a");
  downloadLink.href = pngUrl;
  downloadLink.download = `${qrValue}.png`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

export default downloadQR;
