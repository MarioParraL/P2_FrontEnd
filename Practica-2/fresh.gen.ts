// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $add from "./routes/add.tsx";
import * as $delete from "./routes/delete.tsx";
import * as $index from "./routes/index.tsx";
import * as $pokemon_name_ from "./routes/pokemon/[name].tsx";
import * as $search from "./routes/search.tsx";
import * as $AddForm from "./islands/AddForm.tsx";
import * as $DeleteForm from "./islands/DeleteForm.tsx";
import * as $SearchForm from "./islands/SearchForm.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/add.tsx": $add,
    "./routes/delete.tsx": $delete,
    "./routes/index.tsx": $index,
    "./routes/pokemon/[name].tsx": $pokemon_name_,
    "./routes/search.tsx": $search,
  },
  islands: {
    "./islands/AddForm.tsx": $AddForm,
    "./islands/DeleteForm.tsx": $DeleteForm,
    "./islands/SearchForm.tsx": $SearchForm,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
