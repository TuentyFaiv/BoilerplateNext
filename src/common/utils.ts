export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
  // These options are needed to round to whole numbers if that's what you want.
  // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export class PaymentError extends Error {
  title: string;
  date: Date;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(title = "!Oh no¡", ...params: any[]) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, PaymentError);
    }

    this.name = "PaymentError";
    this.title = title;
    this.date = new Date();
  }
}

export class ServiceError extends Error {
  title: string;
  text: string;
  date: Date;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(title = "!Connection Error¡", text = "", ...params: any[]) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, PaymentError);
    }

    this.name = "ServiceError";
    this.title = title;
    this.text = text;
    this.date = new Date();
  }
}
