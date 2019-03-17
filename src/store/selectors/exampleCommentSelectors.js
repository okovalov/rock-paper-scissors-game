export const getExampleComments = state => state.exampleComments

export const getCommentsPaginationData = state => {
  const defaultData = {
    currentItems: [],
    totalRecords: null,
    currentPage: 1,
    pageLimit: 2
  }

  const { exampleComments } = state

  if (!exampleComments || !exampleComments.length) {
    return defaultData
  }

  const allItems = exampleComments
  const pageLimit = 2
  const { currentPage } = state

  const offset = (currentPage - 1) * pageLimit
  const currentItems = allItems.slice(offset, offset + pageLimit)

  const data = {
    currentPage,
    currentItems,
    pageLimit,
    totalRecords: allItems.length
  }

  return data
}
