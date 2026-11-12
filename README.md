# npm run build
# node dist/classType.js
# TypeScript OOP and Types

A small TypeScript learning project with examples of classes, custom types, and common TypeScript features.

## Topics covered

- Classes, constructors, and creating instances
- Basic types and arrays
- Tuples and object types
- Type aliases, unions, intersections, and enums
- Functions and function types
- `Record` and utility types
- Interfaces and interface inheritance
- Type assertions, narrowing, and nullable values
- Generics and generic interfaces

## Requirements

- Node.js
- npm

## Install

```bash
npm install
```

## Build

Compile the TypeScript files from `src/` into `dist/`:

```bash
npm run build
```

## Run in two terminals

From the project folder, open two terminals:

**Terminal 1 — run TypeScript directly and restart when source files change:**

```bash
npm run dev
```

This runs `src/index.ts` with Node's TypeScript type stripping. It requires a Node.js version that supports `--experimental-strip-types`.

**Terminal 2 — compile the project and keep the output updated:**

```bash
npm run build:watch
```

To run the compiled project, stop the watch command, run `npm run build`, then use `npm start`. To run the other example after building, use `npm run start:custom`.

Run the compiled examples directly after building:

```bash
node dist/index.js
node dist/customType.js
```

## Project structure

```text
src/
├── customType.ts  # TypeScript type and OOP examples
└── index.ts       # TypeScript fundamentals and examples
```
