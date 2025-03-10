import Card from "react-bootstrap/Card";
import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Button from "react-bootstrap/Button";

import trash from "/trash3.svg" 

import "./avisoPerfil.css";
import CardHeader from "react-bootstrap/esm/CardHeader";

function AvisoPerfil(props) {
  const {onDelete} = props;
  const formattedPrice = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(props.aviso.precio);
  // const avisosDelete = async (avisosId) => {
  //   console.log(avisosId);
  //     try {
  //       const {data} = await del({ url: `/avisos/delete/${avisosId}`});
  //       if (data.status === 201) {
          
  //       }
  
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   }

  // console.log(aviso, "props.aviso");
  
    return (
      <>
      <div className="d-flex flex-column flex-sm-row justify-content-between">
        <Card style={{ width: "70rem", height: "12.5rem"  }} border="primary" className="card mb-3">
          <Card.Header className="card-header">
            <Card.Title className="titulo1">
              {props.aviso.titulo}
            </Card.Title>
            <div className="flex-md-row justify-content-end"> 
              <h6 className="d-flex  justify-content-end mt-3">Región: {props.aviso.ubicacion}</h6>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Text className="sueldo1">{formattedPrice}</Card.Text>
            <div className="d-flex justify-content-end mt3 btn-sm">
            <Button variant="outline-primary" onClick={onDelete} className="trash ">
              <img src={trash} alt="Eliminar" />
            </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      </>
    );
}

export default AvisoPerfil;