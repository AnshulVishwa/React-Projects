import React from "react";
import DownloadCertificates from "./DownloadCertificates";

const C1 = ({name , eventName , pos , reason , logo}) => {
  // console.log(details)
  return (
    <>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n            body, html {\n                margin: 0;\n                padding: 0;\n            }\n            body {\n                color: black;\n                display: table;\n                font-family: Georgia, serif;\n                font-size: 24px;\n                text-align: center;\n            }\n            .container {\n                border: 20px solid tan;\n                width: 750px;\n                height: 563px;\n                display: table-cell;\n                vertical-align: middle;\n            }\n            .logo {\n                color: tan;\n            }\n\n            .marquee {\n                color: tan;\n                font-size: 48px;\n                margin: 20px;\n            }\n            .assignment {\n                margin: 20px;\n            }\n            .person {\n                border-bottom: 2px solid black;\n                font-size: 32px;\n                font-style: italic;\n                margin: 20px auto;\n                width: 400px;\n            }\n            .reason {\n                margin: 20px;\n            }\n        "
        }}
      />
      <div id="certificate" className="container" onClick={() => DownloadCertificates({ element: "certificate" })}>
        <img className="logo" src={`${logo}`} />
        <div className="marquee">{pos}</div>
        <div className="eventName">{eventName}</div>
        <div className="assignment">This certificate is presented to</div>
        <div className="person">{name}</div>
        <div className="reason">
          {reason}
          <br />
          and showing their wonderfull performance
        </div>
      </div>
    </>

  );
};

export default C1;
