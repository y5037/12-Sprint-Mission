export function calculatePagination({ page, pageCount, isDataCount, btnPage }) {
    const totalPages = Math.ceil(pageCount / isDataCount);
    const currentSet = Math.ceil(page / btnPage);
    const startPage = (currentSet - 1) * btnPage + 1;
    const endPage = Math.min(startPage + btnPage - 1, totalPages);
  
    return { totalPages, currentSet, startPage, endPage };
  }
