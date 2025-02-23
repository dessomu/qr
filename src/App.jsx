import { useState } from "react";
import { QrReader } from "react-qr-reader";

import "./App.css";

function App() {
  const [scanResult, setScanResult] = useState(null);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>QR Code Scanner</h2>
      <QrReader
        onResult={(result, error) => {
          if (result) {
            setScanResult(result.text);
          }
        }}
        style={{ width: "300px" }}
        constraints={{ facingMode: "environment" }} // Use back camera
      />
      <p>
        <strong>Scanned Result:</strong> {scanResult || "No QR code scanned"}
      </p>
    </div>
  );
}

export default App;
