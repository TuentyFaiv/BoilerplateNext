import { Http } from "@context";

export { default as useAuthService } from "./auth";

export const createHttpSSR = (token = "") => new Http(token);
