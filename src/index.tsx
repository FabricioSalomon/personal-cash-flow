import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

export type Transaction = {
  id: number;
  description: string;
  amount: number;
  currency: string;
  type: "income" | "outcome";
  category: string;
  createdAt: Date;
};

createServer({
  models: {
    transactions: Model,
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transactions");
    });

    this.post("/transaction", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transactions", {
        ...data,
        createdAt: new Date(),
        currency: "R$",
      });
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
