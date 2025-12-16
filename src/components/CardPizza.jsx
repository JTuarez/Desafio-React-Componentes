export default function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={`Pizza ${name}`} />

      <div className="card-body">
        <h5 className="card-title fw-bold">{name}</h5>
        <hr />

        <p className="text-muted mb-2">
          <span className="fw-semibold">Ingredientes:</span>
        </p>

        <ul className="mb-3">
          {ingredients.map((ing) => (
            <li key={ing}>🍕 {ing}</li>
          ))}
        </ul>

        <h6 className="text-center fw-bold">
          Precio: ${price.toLocaleString("es-CL")}
        </h6>
      </div>

      <div className="card-footer bg-white border-0 d-flex justify-content-between pb-3 px-3">
        <button className="btn btn-outline-secondary btn-sm" type="button">
          Ver más 👀
        </button>
        <button className="btn btn-dark btn-sm" type="button">
          Añadir 🛒
        </button>
      </div>
    </div>
  );
}
