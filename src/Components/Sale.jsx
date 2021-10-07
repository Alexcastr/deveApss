import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";

const Sale = ({ datos }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    console.log("cambiado");
  }, [showDialog]);

  return !editMode ? (
    <>
      <tr className="tablerow">
        <td>{datos.ID}</td>
        <td>{datos.Price}</td>
        <td>
          <ul className="productList">
            {datos.ProductIds.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </td>
        <td>
          <ul className="productList">
            {datos.ProductAmounts.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </td>
        <td>
          <ul className="productList">
            {datos.ProductSinglePrice.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </td>
        <td>{datos.Date}</td>
        <td>{datos.ClientId}</td>
        <td>{datos.Client}</td>
        <td>{datos.State}</td>
        <td>{datos.Seller}</td>
        <td>
          <button className="entryButton" onClick={() => setEditMode(true)}>
            <i class="bi bi-pencil-fill editSaleButton"></i>
          </button>
          <button className="entryButton" onClick={() => setShowDialog(true)}>
            <i class="bi bi-trash-fill deleteSaleButton"></i>
          </button>
        </td>
      </tr>
      <Dialog open={showDialog}>
        <div className="deleteSaleDialog">
          <h2>Seguro que deseas eliminar esta venta?</h2>
          <div className="deleteSaleDialogButtonsDiv">
            <button
              onClick={() => {
                setShowDialog(false);
              }}
              className="confirmSaleDelete"
            >
              Si
              <i className="bi bi-check" />
            </button>
            <button
              onClick={() => setShowDialog(false)}
              className="cancelSaleDelete"
            >
              No <i className="bi bi-x" />
            </button>
          </div>
        </div>
      </Dialog>
    </>
  ) : (
    <tr className="tablerow">
      <td>{datos.ID}</td>
      <td>{datos.Price}</td>
      <td>
        <ul className="productList">
          {datos.ProductIds.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </td>
      <td>
        <ul className="productList">
          {datos.ProductAmounts.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </td>
      <td>
        <ul className="productList">
          {datos.ProductSinglePrice.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </td>
      <td></td>
      <td>
        <input
          placeholder="ID del cliente"
          type="number"
          name="clientIdInput"
          id="clientIdInput"
          className="editInput"
        />
      </td>
      <td>
        <input
          placeholder="Nombre del Cliente"
          type="text"
          name="clientInput"
          id="clientInput"
        />
      </td>
      <td>
        <select>
          <option disabled>Seleccionar</option>
          <option>En proceso</option>
          <option>En Camino</option>
          <option>Cancelada</option>
        </select>
      </td>
      <td>
        <input
          placeholder="Nombre del Vendedor"
          type="text"
          name="sellerNameInput"
          id="sellerNameInput"
        />
      </td>
      <td>
        <button className="entryButton" onClick={() => setEditMode(false)}>
          <i class="bi bi-check-circle-fill saveButton"></i>
        </button>
        <button className="entryButton" onClick={() => setEditMode(false)}>
          <i class="bi bi-x-circle-fill cancelButton"></i>
        </button>
      </td>
    </tr>
  );
};

export default Sale;