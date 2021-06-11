function Subscribe() {
  return (
    <div className="subscribe">
      <p className="p_subscribe">
        Suscribite a nuestro newsletter para recibir las últimas novedades y
        promociones!
      </p>
      <input
        className="input_subscribe"
        type="email"
        name="email"
        placeholder="Ingresa tu correo"
      ></input>
      <button className="btn_subscribe">Suscribir</button>
    </div>
  );
}

export default Subscribe;
