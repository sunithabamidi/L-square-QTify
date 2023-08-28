import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Accordion.module.css";

export default function BasicAccordion() {
  return (
    <div className={styles.accordionWrapper}>
      <h2 className={styles.faqs}>FAQs</h2>
      <Accordion
        sx={{
          backgroundColor: "var(--color-black)",
          color: "var(--color-white)",
          border: "1px solid white",
          borderRadius: "5px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "var(--color-primary)" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            border: "1px solid white",
            backgroundColor: "var(--color-white)",
            color: "var(--color-black)",
          }}
        >
          <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "var(--color-black)",
          color: "var(--color-white)",
          border: "1px solid white",
          borderRadius: "5px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "var(--color-primary)" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            border: "1px solid white",
            backgroundColor: "var(--color-white)",
            color: "var(--color-black)",
          }}
        >
          <Typography>
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
