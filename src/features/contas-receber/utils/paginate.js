export const paginate = (list, page, pageSize) => list.slice((page - 1) * pageSize, page * pageSize);
