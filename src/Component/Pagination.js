import React from 'react'
import { Button } from 'react-bootstrap'
 function Pagination({ gotoNextPage, gotoPrevPage }) {
    return (
        <div>
            <Button className="btn btn-danger" onClick={gotoPrevPage}> Previous </Button>
            <Button className="btn btn-warning" onClick={gotoNextPage}> Next </Button>

        </div>
    )
}

export default Pagination