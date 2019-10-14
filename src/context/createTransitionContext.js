import { createContext } from "react";

const transitionContext = createContext();
const { Provider, Consumer } = transitionContext;
const publicContext = createContext();
const { Provider: PublicProvider, Consumer: PublicConsumer } = publicContext;

export { Provider, Consumer, PublicProvider, PublicConsumer, publicContext, transitionContext };
