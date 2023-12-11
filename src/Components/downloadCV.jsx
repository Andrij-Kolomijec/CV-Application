import JsPDF from "jspdf";

export default function DownloadCV({ props }) {
  const generatePDF = (e) => {
    e.preventDefault();
    const CV = new JsPDF("portrait", "pt", "a4");
    const source = document.querySelector(".cv");
    const backgound = source.style.background;
    source.style.color = "black";
    source.style.background = "none";
    CV.html(document.querySelector(".cv")).then(() => {
      CV.save(`${props.header.lastName}-${props.header.firstName}-CV.pdf`);
      source.style.color = "white";
      source.style.background = backgound;
    });
  };

  return (
    <button onClick={generatePDF} className="download-button">
      <div>Download as PDF</div>
    </button>
  );
}
