import { z } from "zod";
import {
  CategorySchemaResponse,
  DrinkApiResponseSchema,
  SearchFilterSchema,
} from "../schemas/index";

export type Category = z.infer<typeof CategorySchemaResponse>;

export type SearchFilter = z.infer<typeof SearchFilterSchema>;

export type Drink = z.infer<typeof DrinkApiResponseSchema>;
