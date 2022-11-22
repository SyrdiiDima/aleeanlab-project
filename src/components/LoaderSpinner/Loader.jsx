import React from 'react';
import { Rings } from 'react-loader-spinner';
export default function Loader() {
  return (
    <div>
      <Rings
        height="80"
        width="80"
        color="##3A4562"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        // visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
}
