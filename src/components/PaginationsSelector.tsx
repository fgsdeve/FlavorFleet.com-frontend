import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

type Props = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const PaginationsSelector = ({ page, pages, onPageChange }: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className="flex justify-center mt-6">
      <PaginationContent className="flex gap-2">
        {page !== 1 && (
          <PaginationItem>
            <PaginationPrevious 
              onClick={() => onPageChange(page - 1)} 
              className="px-4 py-2 rounded-md text-gray-700 hover:text-green-600 transition-colors duration-300"
            >
              Previous
            </PaginationPrevious>
          </PaginationItem>
        )}

        {pageNumbers.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink
              onClick={() => onPageChange(number)}
              className={`px-4 py-2 rounded-md ${
                page === number
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              }`}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}

        {page !== pageNumbers.length && (
          <PaginationItem>
            <PaginationNext 
              onClick={() => onPageChange(page + 1)} 
              className="px-4 py-2 rounded-md text-gray-700 hover:text-green-600 transition-colors duration-300"
            >
              Next
            </PaginationNext>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationsSelector;
