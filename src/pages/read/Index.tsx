import React, { useState, useEffect } from "react";
import { Pagination } from 'antd';
import http from "../../utils/http/index";
import Data from "./components/Data";
import List from "./components/List";
import Note from "../index/components/Note";


export default () => {
  const pageSize: number = 8
  const [books, setBooks] = useState([]);
  const [total, setTotal] = useState(0);
  // const [category, setCategory] = useState([]);
  
  const getBookList = async (pageNo: number = 1) => {
    const res: any = await http.get("/api/book", { params: { pageSize, pageNo } });

    setBooks(res.items)
    setTotal(res.total)
    // const { category } = res.data;
    // setCategory(category)
  };

  useEffect(() => {
    getBookList();
  }, []);

  return (
    <div className="read-box py-10 px-4 md:px-8 max-w-1200px mx-auto">
      <Data></Data>
      <Note></Note>
      {/* <List category={category} books={books}></List> */}
      <List books={books} total={total}></List>
      <Pagination defaultCurrent={1} pageSize={pageSize} total={total} onChange={(pageNo) => getBookList(pageNo)} />,
    </div>
  );
}
