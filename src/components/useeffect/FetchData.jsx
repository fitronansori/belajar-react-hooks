import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;

// Jelaskan tentang useEffect Hook
/**
 * 1. useEffect hook adalah hook yang digunakan untuk menjalankan kode pada saat komponen di-mount atau di-update.
 * 2. useEffect hook menerima dua parameter, yaitu callback function dan array dependencies.
 * 3. Callback function adalah function yang akan dijalankan pada saat komponen di-mount atau di-update.
 * 4. Array dependencies adalah array yang berisi nilai yang akan ditrack. Jika nilai pada array dependencies berubah, maka useEffect hook akan dijalankan kembali.
 * 5. Jika array dependencies tidak diisi, maka useEffect hook akan dijalankan setiap kali komponen di-mount atau di-update.
 * 6. Jika array dependencies diisi, maka useEffect hook akan dijalankan setiap kali nilai pada array dependencies berubah.
 * 7. useEffect hook dapat digunakan untuk menggantikan lifecycle method componentDidMount, componentDidUpdate, dan componentWillUnmount.
 */

// Jelaskan tentang componentDidMount, componentDidUpdate, dan componentWillUnmount

/**
 * 1. componentDidMount adalah lifecycle method yang digunakan untuk menjalankan kode pada saat komponen di-mount.
 * 2. componentDidUpdate adalah lifecycle method yang digunakan untuk menjalankan kode pada saat komponen di-update.
 * 3. componentWillUnmount adalah lifecycle method yang digunakan untuk menjalankan kode pada saat komponen di-unmount.
 * 4. useEffect hook dapat digunakan untuk menggantikan lifecycle method componentDidMount, componentDidUpdate, dan componentWillUnmount.
 */

/**
 * 
 * 1. We import the axios library and React library.
2. We use the useState hook to set the data state.
3. We use the useEffect hook to make an API call to fetch the data from the URL.
4. We use the map function to display the data in a list.
*/
