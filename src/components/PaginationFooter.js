import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PaginationFooter = (props) => {
    return (
      <Pagination
        onPageChange={props.chooseAnotherPage}
        defaultActivePage={1}
        siblingRange={3}
        activePage={props.currentPage}
        totalPages={props.totalPages}
      />
    )
}

export default PaginationFooter;