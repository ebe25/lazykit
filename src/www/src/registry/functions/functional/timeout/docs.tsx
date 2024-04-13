import { IDoc, IRegistryFunctionPropTable } from "@/types/registry.types";

const Docs = () => {
  return (
    <div className="flex flex-col gap-2">
      <p>
        The timeout function is a higher-order function that takes a function
        fn, a timeout duration time, and an optional error callback errCb as
        arguments. It returns a new function that, when called, returns a
        Promise. This Promise will resolve with the result of the fn function if
        fn completes within the specified time. If fn does not complete within
        the time, the Promise will be rejected. If an errCb function is
        provided, it will be called with the arguments passed to the wrapped
        function, and the Promise will be rejected with the result of errCb. If
        no errCb is provided, the Promise will be rejected with a new Error
        stating &apos;Function timed out&apos;. The timeout function is designed
        to handle both synchronous and asynchronous functions, as it wraps the
        call to fn with Promise.resolve. This ensures that fn is always treated
        as a Promise, allowing the use of .then and .catch to handle the result
        or any errors.
      </p>
    </div>
  );
};
export default Docs;

export const Info: IDoc = {
  description:
    "The timeout function wraps a function with a timeout. If the function does not complete within the specified time, the promise will be rejected.",
};

export const Props: IRegistryFunctionPropTable[] = [
  {
    title: "function",
    required: true,
    defaultValue: undefined,
    propDesc: "The function to be wrapped with a timeout.",
    type: "Function",
  },
  {
    title: "time",
    required: true,
    defaultValue: undefined,
    propDesc: "The timeout duration in milliseconds.",
    type: "number",
  },
  {
    title: "errCb",
    required: false,
    defaultValue: undefined,
    propDesc:
      "Optional error callback function to handle timeout errors. If not provided, the promise will be rejected with an error message.",
    type: "Function",
  },
];
