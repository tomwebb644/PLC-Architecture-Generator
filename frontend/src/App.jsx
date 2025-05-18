import React, { useState } from "react";
import { CssBaseline, Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AxisSensorForm from "./components/AxisSensorForm";
import ArchitectureView from "./components/ArchitectureView";

export default function App() {
  const [architecture, setArchitecture] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState("form");

  // When architecture is generated, switch to architecture view automatically
  const handleArchitectureGenerated = (arch) => {
    console.log("Architecture generated:", arch); // Debug log
    setArchitecture(arch);
    setActiveView("architecture");
  };

  // Go back resets architecture and switches back to form view
  const handleBack = () => {
    setArchitecture(null);
    setActiveView("form");
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          setActiveView={setActiveView}
        />

        <Box component="main" sx={{ flexGrow: 1, p: 3, overflowY: "auto" }}>
        <Header onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4, // add spacing below the header
          }}
          >
            {(activeView === null || activeView === "form") && (
              <AxisSensorForm onArchitectureGenerated={handleArchitectureGenerated} />
            )}

            {activeView === "architecture" && architecture && (
              <ArchitectureView architecture={architecture} onBack={handleBack} />
            )}

            {activeView === "settings" && (
              <div>
                <h2>Settings</h2>
                {/* Add your settings content here */}
              </div>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
