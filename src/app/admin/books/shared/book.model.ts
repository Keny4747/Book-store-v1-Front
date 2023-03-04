export interface BookPage {
  content:          Book[];
  pageable:         Pageable;
  last:             boolean;
  totalElements:    number;
  totalPages:       number;
  size:             number;
  number:           number;
  sort:             Sort;
  first:            boolean;
  numberOfElements: number;
  empty:            boolean;
}

export interface Book {
  id:        number | null;
  title:     string;
  slug:      string;
  desc:      null | string;
  price:     number;
  coverPath:string | null;
  filePath:string | null;
  createdAt: Date;
  updatedAt: Date | null;
}

export interface Pageable {
  sort:       Sort;
  offset:     number;
  pageSize:   number;
  pageNumber: number;
  paged:      boolean;
  unpaged:    boolean;
}

export interface Sort {
  empty:    boolean;
  unsorted: boolean;
  sorted:   boolean;
}
