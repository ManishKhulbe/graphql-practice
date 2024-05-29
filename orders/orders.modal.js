const orders =[
    {
      date: "2005-05-05",
      subTotal: 90.33,
      items: [
        {
          product: {
            id: "bluejean",
            description: "Old Blue Jeans",
            price: "35.55",
          },
          quantity: 2,
        },
      ],
    },
  ]


  function getAllOrders() {
    return orders
  }


  module.exports={
    getAllOrders
  }