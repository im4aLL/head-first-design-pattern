interface PaymentProcessor {
  pay(amount: number): void;
}

// current system works in
class PayPalProcessor implements PaymentProcessor {
  pay(amount: number) {
    console.log(`Paid $${amount} using PayPal`);
  }
}

// solution
class StripeAPI {
  makePayment(value: number) {
    console.log(`Paid $${value} using Stripe`);
  }
}

class StripeAdapter implements PaymentProcessor {
  private stripe: StripeAPI;

  constructor(stripe: StripeAPI) {
    this.stripe = stripe;
  }

  pay(amount: number): void {
    this.stripe.makePayment(amount); // adapt method name
  }
}

// usage
const paypal = new PayPalProcessor();
const stripe = new StripeAdapter(new StripeAPI());

paypal.pay(100);
stripe.pay(200);
