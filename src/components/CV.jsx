// <!-- -----------------------------------------------------------------
// @copyright    (C) 2023 SoAS
// @file         App.jsx
// @author       Daniel Alvarez <josamogax@gmail.com>
// @brief        Portfolio main app file.
// @details
// ------------------------------------------------------------------ -->

import React from "react";

function DownloadCVButton() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "./cv/CV_DANIEL_ALVAREZ_2023-English.pdf";
    link.download = "CV_DANIEL_ALVAREZ_2023-English.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={downloadCV}
      className="bg-sky-700 hover:bg-violet-900 text-white font-bold py-2 px-4 rounded"
    >
      Download my CV
    </button>
  );
}

export default DownloadCVButton;
