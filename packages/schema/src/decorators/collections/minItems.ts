import {JsonEntityFn} from "../common/jsonEntityFn";

/**
 *
 * An array instance is valid against `minItems` if its size is greater than, or equal to, the value of this keyword.
 *
 * ::: warning
 * The value `minItems` MUST be a non-negative integer.
 * :::
 *
 * ::: tip
 * Omitting this keyword has the same behavior as a value of 0.
 * :::
 *
 * ## Example
 *
 * ```typescript
 * class Model {
 *    @CollectionOf(String)
 *    @MinItems(10)
 *    property: string[];
 * }
 * ```
 *
 * Will produce:
 *
 * ```json
 * {
 *   "type": "object",
 *   "properties": {
 *     "property": {
 *       "type": "string",
 *       "minItems": 10
 *     }
 *   }
 * }
 * ```
 *
 * @param {number} minItems
 * @returns {Function}
 * @decorator
 * @ajv
 * @property
 * @jsonschema
 */
export function MinItems(minItems: number) {
  if (minItems < 0) {
    throw new Error("The value of minItems MUST be a non-negative integer.");
  }

  return JsonEntityFn(storedJson => {
    storedJson.schema.minItems(minItems);
  });
}
