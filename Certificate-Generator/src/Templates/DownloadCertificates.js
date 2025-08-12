import html2canvas from "html2canvas";

function DownloadCertificates({ element }) {
  const certificateElement = document.getElementById(element);
  if (!certificateElement) return;

  html2canvas(certificateElement).then((canvas) => {
    const link = document.createElement("a");
    link.download = "certificate.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}

export default DownloadCertificates;
