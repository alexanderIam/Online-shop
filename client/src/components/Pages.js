import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="d-flex" bsPrefix="custom_pagination">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    onClick={() => device.setPage(page)}
                    className={`pagination_item ${device.page === page? 'selected' : ""}`}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;
