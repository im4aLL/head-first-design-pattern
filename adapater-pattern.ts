interface PaymentProcessor {
  pay(amount: number): void;
}

// current system works in
class PayPalProcessor implements PaymentProcessor {
  pay(amount: number) {
    console.log(`Paid $${amount} using PayPal`);
  }
}

// usage
const paymentProcessor: PaymentProcessor = new PayPalProcessor();
paymentProcessor.pay(100);

// now you have decided to add a new payment processor
class StripeAPI {
  makePayment(value: number) {
    console.log(`Paid $${value} using Stripe`);
  }
}

// what to do?
