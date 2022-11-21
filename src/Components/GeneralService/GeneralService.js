import React, { useEffect, useState } from "react";
import './GeneralService.css'


const GeneralService = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch('service.json')
      .then(res => res.json())
      .then(data => setService(data))
  }, []);
  return (
    <div className="general-service">
      {
        services.map(services => (
          <div key={services.id} className="each-service">
            <img src={services.icons} alt="" />
            <h5>{services.title}</h5>
            <p>{services.desc}</p>
          </div>
        ))
      }
    </div>
  );
};

export default GeneralService;
