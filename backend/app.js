import { express } from "expres";

const app = new express();

app.use(express().json);

export default app;

