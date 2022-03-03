import { LightningElement, api } from "lwc";

export default class ChildRating extends LightningElement {
  pizzarating;
  deliveryrating;
  burgerrating;
  packagerating;

  rating(event) {
    if (event.target.name === "Pizza") {
      this.pizzarating = event.target.value;
    }
    if (event.target.name === "Burger") {
      this.burgerrating = event.target.value;
    }
    if (event.target.name === "Package") {
      this.packagerating = event.target.value;
    }
    if (event.target.name === "Delivery") {
      this.deliveryrating = event.target.value;
    }
  }

  getvalues() {
    alert(
      "DeliveryRating:" +
        this.deliveryrating +
        ", PizzaRating:" +
        this.pizzarating +
        ", BurgerRating:" +
        this.burgerrating +
        ", PackageRating:" +
        this.packagerating
    );
  }
}