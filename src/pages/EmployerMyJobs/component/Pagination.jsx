import { Box, Button, Typography } from "@mui/material";

function Pagination({ totalPages, currentPage, onPageChange }) {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, currentPage + 2);

      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) {
          pageNumbers.push("...");
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push("...");
        }
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={2}
      mt={4}
    >
      <Button
        variant="outlined"
        size="medium"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>

      {renderPageNumbers().map((page, index) =>
        typeof page === "number" ? (
          <Button
            key={index}
            variant={page === currentPage ? "contained" : "outlined"}
            size="medium"
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Button>
        ) : (
          <Typography key={index} variant="body2" sx={{ px: 1 }}>
            {page}
          </Typography>
        )
      )}

      <Button
        variant="outlined"
        size="medium"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </Box>
  );
}

export default Pagination;
