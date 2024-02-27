import { CartProvider } from "../CartContext";

export function GlobalProviders({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
