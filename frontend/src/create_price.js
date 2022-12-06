//just testing, will delete this file later 
const stripe = require("stripe")(
  "sk_test_51MC2zeDM4nrUdWXdbni6c5xPitttdngpgIbTmCoDmjrOFdzeS4oFcwQaWyqm4ZgclZQ5lKVA76uKMPhiry5Ydm8X00Xp9AfGM0"
);

stripe.products
  .create({
    name: "Starter Subscription",
    description: "$12/Month subscription",
  })
  .then((product) => {
    stripe.prices
      .create({
        unit_amount: 1200,
        currency: "usd",
        recurring: {
          interval: "month",
        },
        product: product.id,
      })
      .then((price) => {
        console.log(
          "Success! Here is your starter subscription product id: " + product.id
        );
        console.log(
          "Success! Here is your premium subscription price id: " + price.id
        );
      });
  });
