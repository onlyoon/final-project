import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ServiceContext } from '../App';
import ReactSwitch from 'react-switch';

export default function Form() {
  const { service, setService } = useContext(ServiceContext);
  console.log({ service });

  return (
    <div className="FirstPage">
      <div id={service}>
        <div className="main">
          {/* 이부분 switch에 따라서 CSS 안됨*/}
          <p className="sign" align="center">
            {/* 이부분 switch에 따라서 CSS 안됨*/}
            {service === 'seller' ? 'Seller Mode ' : 'Buyer Mode '}
          </p>
          <Link to={`/${service}`}>
            <button className="start">Enter</button>
            {/* 이부분 switch에 따라서 CSS 안됨*/}
          </Link>
          <div className="switch">
            <br />
            <ReactSwitch
              id="mode"
              onChange={() =>
                setService(service === 'seller' ? 'buyer' : 'seller')
              }
              checked={service === 'buyer'}
              offColor="#F7A701"
              onColor="#014557"
              uncheckedIcon
              checkedIcon
            />
          </div>
        </div>
      </div>
    </div>
  );
}
