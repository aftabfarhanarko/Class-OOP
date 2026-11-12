import express from "express";
const app = express();
const port = Number(process.env.PORT) || 3000;
app.use(express.json());
// TypeScript string array: every item in this array must be a string.
const names = ["Alice", "Bob", "Charlie"];
app.get("/", (_req, res) => {
    res.json({ message: "Node.js and TypeScript server is running", names });
});
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map