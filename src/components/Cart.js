import { useState, useEffect, Fragment } from "react";
// import Productos from "./Productos";
import TopBar from "./TopBar";
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import {
  IconButton,
  List,
  ListItem,
  Divider,
  ListItemText,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  actionIcon: {
    fontSize: "18px",
    textAlign: "center",
  },
});

function Cart() {
  const classes = useStyles();

  var [total, setTotal] = useState(0);
  var [productos, setProductos] = useState([]);

  async function updateSubtotal(producto) {
    producto.subtotal = producto.qty * producto.price;
    return producto;
  }

  async function addQty(producto) {
    producto.qty = producto.qty + 1;
    return producto;
  }

  async function subQty(producto) {
    producto.qty = producto.qty - 1;
    return producto;
  }

  async function addStock(producto) {
    producto.stock = producto.stock + 1;
    return producto;
  }

  async function subStock(producto) {
    producto.stock = producto.stock - 1;
    return producto;
  }

  function updateProductItem(item, action) {
    return productos.map(function (producto) {
      if (producto.id == item.id) {
        if (action == "sub") {
          subQty(producto).then(addStock).then(updateSubtotal);
        } else {
          subStock(producto).then(addQty).then(updateSubtotal);
        }
      }
      return producto;
    });
  }

  function decrement(item) {
    var changed = updateProductItem(item, "sub");

    setProductos(changed);
    updateTotal();
  }

  function increment(item) {
    if (item.stock == 0) {
      return;
    }

    var changed = updateProductItem(item, "add");
    setProductos(changed);
    updateTotal();
  }

  function updateTotal() {
    let total = productos.reduce(function (a, b) {
      return a + b.price * b.qty;
    }, 0);
    setTotal(total);
  }

  useEffect(() => {
    setProductos(JSON.parse(localStorage.getItem("cart"))  || [] );
    updateTotal();
  },[]);

  return (
    <>
      <TopBar />
      <MenuBar />
      <List>
        {productos.map(function (producto) {
          return (
            <Fragment key={producto.id}>
              <ListItem >
                <ListItemText>{producto.name}</ListItemText>
                <ListItemText>
                  Disponibles: {producto.stock} - Cantidad: {producto.qty} -
                  Precio unitario: ${producto.price} - Subtotal: $
                  {producto.qty * producto.price}
                </ListItemText>
                <div>
                  <IconButton
                    disabled={producto.qty == 0}
                    onClick={() => decrement(producto)}
                  >
                    <RemoveShoppingCartIcon className={classes.actionIcon} />
                  </IconButton>
                  <span>{producto.qty}</span>
                  <IconButton
                    disabled={producto.stock == 0}
                    onClick={() => increment(producto)}
                  >
                    <AddShoppingCartIcon className={classes.actionIcon} />
                  </IconButton>
                </div>
              </ListItem>
              <Divider component="li" />
            </ Fragment>
          );
        })}
        <ListItem>
          <h3>Total a pagar: ${total}</h3>
        </ListItem>
      </List>
     
      <Footer />
    </>
  )
}

export default Cart;
