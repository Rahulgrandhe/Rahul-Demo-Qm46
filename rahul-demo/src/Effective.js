import React from "react";
import { AppBar, Box, Toolbar, Typography, Stack, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox } from "@mui/material";
import { styled } from "@mui/material/styles";
import HomePage from "./HomePage";

const columns = [
  { id: "documentNo", label: "Document No" },
  { id: "department", label: "Department" },
  { id: "documentType", label: "Document Type" },
  { id: "category", label: "Category" },
  { id: "documentTitle", label: "Document Title" },
  { id: "status", label: "Status" },
  { id: "preparedBy", label: "Prepared By" },
];

function createData(
  documentNo,
  department,
  documentType,
  category,
  documentTitle,
  status,
  preparedBy
) {
  return {
    documentNo,
    department,
    documentType,
    category,
    documentTitle,
    status,
    preparedBy,
  };
}

const rows = [
  createData(
    "SOP/024/001",
    "QA",
    "SOP",
    "General",
    "SOP of SOP",
    "Active",
    "Nikhil Cheedella"
  ),
  createData(
    "SOP/024/002",
    "QA",
    "SOP",
    "General",
    "SOP on Handling Test Procedures",
    "Active",
    "Harsha"
  ),
  createData(
    "ANX/024/001",
    "QC",
    "Annexure",
    "General",
    "Annexure for Test Procedures SOP",
    "Active",
    "Srikanth"
  ),
  createData(
    "ANX/024/002",
    "QC",
    "Annexure",
    "General",
    "Annexure for Log Book entry",
    "Active",
    "David"
  ),
  createData(
    "SPEC/024/001",
    "PROD",
    "Specification",
    "Methods",
    "Specification for Sample Analysis",
    "Active",
    "Helena"
  ),
  createData(
    "SPEC/024/002",
    "PROD",
    "Specification",
    "Methods",
    "Specification for Drug Dosage",
    "Active",
    "Alex"
  ),
  createData(
    "OQ/024/001",
    "ENG",
    "Operational Qualification",
    "Validation",
    "OQ for DMS",
    "Active",
    "Isabel"
  ),
  createData(
    "OQ/024/002",
    "ENG",
    "Operational Qualification",
    "Validation",
    "OQ for DMS",
    "Active",
    "Jhon"
  ),
  createData(
    "SOP/024/003",
    "DQA",
    "SOP",
    "General",
    "SOP for DMS admin",
    "Active",
    "Peter"
  ),
  createData(
    "SOP/024/004",
    "DQA",
    "SOP",
    "General",
    "SOP for Electronic signatures",
    "Active",
    "Michel"
  ),
  createData(
    "SOP/024/005",
    "QC",
    "SOP",
    "General",
    "SOP for Environment Monitoring",
    "Active",
    "Max"
  ),
];

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#FFFFFF",
  width: "100%",
  boxShadow: "none",
});

const StyledButton = styled(Button)({
  backgroundColor: "#00BFFF",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#00BFFF",
  },
  minWidth: "150px",
  marginTop: "15px",
  borderRadius: "8px",
  fontSize: "14px",
  textTransform: "none",
});

const StyledTableCell = styled(TableCell)({
  fontWeight: "bold",
  backgroundColor: "#00BFFF",
  color: "#FFFFFF",
  fontSize: "16px",
  textAlign: "center",
  padding: "4px 8px",
});

const StyledTableRow = styled(TableRow)({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F0F8FF",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#E6F7FF",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  height: "8px",
});

const StatusTableCell = styled(TableCell)({
  color: "green",
  fontWeight: "bold",
  textAlign: "center",
  padding: "4px 8px",
});

const TableCellStyled = styled(TableCell)({
  padding: "4px 8px",
  fontSize: "14px",
  textAlign: "center",
});

const Effective = () => {
  return (
    <Box sx={{ backgroundColor: "#faf9f5", height: "100vh", padding: "20px" }}>
      <HomePage />
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "black", textAlign: 'center' }}>
            Active List
          </Typography>
        </Toolbar>
      </StyledAppBar>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ marginY: 2 }}
      >
        <StyledButton>Create New</StyledButton>
        <StyledButton>Edit</StyledButton>
        <StyledButton>Send for Review</StyledButton>
        <StyledButton>Status Change</StyledButton>
      </Stack>
     
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ height: '100vh' }}>
         <Box sx={{height:'500px',}}> 
          <Table stickyHeader>
          
            <TableHead>
              
              <StyledTableRow  sx={{height:'10px',}}>
                <StyledTableCell>
                  <Checkbox />
                </StyledTableCell>
                {columns.map((column) => (
                  <StyledTableCell key={column.id}>
                    {column.label}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            </TableHead>
            
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.documentNo}>
                  <TableCellStyled>
                    <Checkbox />
                  </TableCellStyled>
                  {columns.map((column) => {
                    const value = row[column.id];
                    if (column.id === "status") {
                      return (
                        <StatusTableCell key={column.id}>
                          {value}
                        </StatusTableCell>
                      );
                    } else {
                      return (
                        <TableCellStyled key={column.id}>
                          {value}
                        </TableCellStyled>
                      );
                    }
                  })}
                </StyledTableRow>
              ))}
            </TableBody>
            {/* </Box> */}
          </Table>
          </Box>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Effective;
