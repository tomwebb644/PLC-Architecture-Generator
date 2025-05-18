import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Paper
} from "@mui/material";

const AxisSensorForm = ({ onArchitectureGenerated }) => {
  const [description, setDescription] = useState("");
  const [sensors, setSensors] = useState([{ axis: "", hardwareId: "" }]);

  const handleInputChange = (index, field, value) => {
    const newSensors = [...sensors];
    newSensors[index][field] = value;
    setSensors(newSensors);
  };

  const addSensorRow = () => {
    setSensors([...sensors, { axis: "", hardwareId: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { description, sensors };

    try {
      const res = await fetch("/api/generate_architecture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      onArchitectureGenerated(data.architecture);
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 800, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Generate PLC Architecture
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Project Description"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {sensors.map((sensor, idx) => (
          <Grid container spacing={2} key={idx} sx={{ mb: 1 }}>
            <Grid item xs={6}>
              <TextField
                label="Axis"
                value={sensor.axis}
                onChange={(e) =>
                  handleInputChange(idx, "axis", e.target.value)
                }
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Hardware ID (Optional)"
                value={sensor.hardwareId}
                onChange={(e) =>
                  handleInputChange(idx, "hardwareId", e.target.value)
                }
                fullWidth
              />
            </Grid>
          </Grid>
        ))}

        <Button variant="outlined" onClick={addSensorRow} sx={{ mb: 2 }}>
          + Add Axis
        </Button>
        <Box>
          <Button type="submit" variant="contained">
            Generate
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default AxisSensorForm;
