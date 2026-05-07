import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product';


const Paginate = ({ itemsPerPage , products }) => {
    const [itemOffset, setItemOffset] = useState(0);

    const items = products;

    function Items({ currentItems }) {
        return (
            <div className=' grid grid-cols-4 gap-10'>
                {currentItems &&
                    currentItems.map((item) => (
                        <div>
                            <Product item={item}/>
                        </div>
                    ))}
            </div>
        );
    }

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };
    return (
        <div >
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="NEXT >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< PREV"
                renderOnZeroPageCount={null}
                className="flex font-jost relative justify-center  mt-20 gap-7.75 font-medium text-base text-primary-black "
                previousClassName="  absolute left-0 top-2/4  -translate-y-2/4 "
                nextClassName="  absolute right-0  top-2/4  -translate-y-2/4"
                activeLinkClassName='underline'
          
           
            />
        </div>
    )
}

export default Paginate