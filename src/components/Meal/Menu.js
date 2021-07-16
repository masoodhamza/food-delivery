const DUMMY_DATA = [
  {
    id: 1,
    name: "Biryani",
    description: "wonderful rice biryani with salad and raita",
    price: 300,
  },
  {
    id: 2,
    name: "Pulao",
    description: "wonderful rice pulao with salad and raita",
    price: 400,
  },
  {
    id: 3,
    name: "Pizza",
    description: "wonderful delicious pizza with soft drink",
    price: 500,
  },
  {
    id: 4,
    name: "Burger",
    description: "wonderful delicious burger",
    price: 500,
  },
];

const Menu = () => {
  return (
    <>
      {DUMMY_DATA.map((item) => (
        <div className="card my-2" key={item.id}>
          <div className="card-body">
            {/* <button href="#" className="btn btn-primary float-end">
              + Add
            </button>
            <input type="number" className="float-end form-input" /> */}
            <div class="btn-group btn-group-sm float-end" role="group">
              <input type="number" className="form-control" />
              <button type="button" class="btn btn-success">
                +Add
              </button>
            </div>
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              {item.description}
              <br />
              <span className="h6 text-danger">Rs. {item.price}/-</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Menu;
