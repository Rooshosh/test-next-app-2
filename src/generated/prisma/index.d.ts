
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model activities
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type activities = $Result.DefaultSelection<Prisma.$activitiesPayload>
/**
 * Model instruments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type instruments = $Result.DefaultSelection<Prisma.$instrumentsPayload>
/**
 * Model notes
 * 
 */
export type notes = $Result.DefaultSelection<Prisma.$notesPayload>
/**
 * Model strava_users
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type strava_users = $Result.DefaultSelection<Prisma.$strava_usersPayload>
/**
 * Model test_table
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type test_table = $Result.DefaultSelection<Prisma.$test_tablePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Activities
 * const activities = await prisma.activities.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Activities
   * const activities = await prisma.activities.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.activities`: Exposes CRUD operations for the **activities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activities.findMany()
    * ```
    */
  get activities(): Prisma.activitiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instruments`: Exposes CRUD operations for the **instruments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instruments
    * const instruments = await prisma.instruments.findMany()
    * ```
    */
  get instruments(): Prisma.instrumentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notes`: Exposes CRUD operations for the **notes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.notes.findMany()
    * ```
    */
  get notes(): Prisma.notesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.strava_users`: Exposes CRUD operations for the **strava_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Strava_users
    * const strava_users = await prisma.strava_users.findMany()
    * ```
    */
  get strava_users(): Prisma.strava_usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.test_table`: Exposes CRUD operations for the **test_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Test_tables
    * const test_tables = await prisma.test_table.findMany()
    * ```
    */
  get test_table(): Prisma.test_tableDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    activities: 'activities',
    instruments: 'instruments',
    notes: 'notes',
    strava_users: 'strava_users',
    test_table: 'test_table'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "activities" | "instruments" | "notes" | "strava_users" | "test_table"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      activities: {
        payload: Prisma.$activitiesPayload<ExtArgs>
        fields: Prisma.activitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.activitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.activitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>
          }
          findFirst: {
            args: Prisma.activitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.activitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>
          }
          findMany: {
            args: Prisma.activitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>[]
          }
          create: {
            args: Prisma.activitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>
          }
          createMany: {
            args: Prisma.activitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.activitiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>[]
          }
          delete: {
            args: Prisma.activitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>
          }
          update: {
            args: Prisma.activitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>
          }
          deleteMany: {
            args: Prisma.activitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.activitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.activitiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>[]
          }
          upsert: {
            args: Prisma.activitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>
          }
          aggregate: {
            args: Prisma.ActivitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivities>
          }
          groupBy: {
            args: Prisma.activitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.activitiesCountArgs<ExtArgs>
            result: $Utils.Optional<ActivitiesCountAggregateOutputType> | number
          }
        }
      }
      instruments: {
        payload: Prisma.$instrumentsPayload<ExtArgs>
        fields: Prisma.instrumentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.instrumentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.instrumentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload>
          }
          findFirst: {
            args: Prisma.instrumentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.instrumentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload>
          }
          findMany: {
            args: Prisma.instrumentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload>[]
          }
          create: {
            args: Prisma.instrumentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload>
          }
          createMany: {
            args: Prisma.instrumentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.instrumentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload>[]
          }
          delete: {
            args: Prisma.instrumentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload>
          }
          update: {
            args: Prisma.instrumentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload>
          }
          deleteMany: {
            args: Prisma.instrumentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.instrumentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.instrumentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload>[]
          }
          upsert: {
            args: Prisma.instrumentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instrumentsPayload>
          }
          aggregate: {
            args: Prisma.InstrumentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstruments>
          }
          groupBy: {
            args: Prisma.instrumentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstrumentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.instrumentsCountArgs<ExtArgs>
            result: $Utils.Optional<InstrumentsCountAggregateOutputType> | number
          }
        }
      }
      notes: {
        payload: Prisma.$notesPayload<ExtArgs>
        fields: Prisma.notesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          findFirst: {
            args: Prisma.notesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          findMany: {
            args: Prisma.notesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>[]
          }
          create: {
            args: Prisma.notesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          createMany: {
            args: Prisma.notesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>[]
          }
          delete: {
            args: Prisma.notesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          update: {
            args: Prisma.notesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          deleteMany: {
            args: Prisma.notesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>[]
          }
          upsert: {
            args: Prisma.notesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          aggregate: {
            args: Prisma.NotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotes>
          }
          groupBy: {
            args: Prisma.notesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.notesCountArgs<ExtArgs>
            result: $Utils.Optional<NotesCountAggregateOutputType> | number
          }
        }
      }
      strava_users: {
        payload: Prisma.$strava_usersPayload<ExtArgs>
        fields: Prisma.strava_usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.strava_usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$strava_usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.strava_usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$strava_usersPayload>
          }
          findFirst: {
            args: Prisma.strava_usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$strava_usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.strava_usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$strava_usersPayload>
          }
          findMany: {
            args: Prisma.strava_usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$strava_usersPayload>[]
          }
          create: {
            args: Prisma.strava_usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$strava_usersPayload>
          }
          createMany: {
            args: Prisma.strava_usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.strava_usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$strava_usersPayload>[]
          }
          delete: {
            args: Prisma.strava_usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$strava_usersPayload>
          }
          update: {
            args: Prisma.strava_usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$strava_usersPayload>
          }
          deleteMany: {
            args: Prisma.strava_usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.strava_usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.strava_usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$strava_usersPayload>[]
          }
          upsert: {
            args: Prisma.strava_usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$strava_usersPayload>
          }
          aggregate: {
            args: Prisma.Strava_usersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStrava_users>
          }
          groupBy: {
            args: Prisma.strava_usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Strava_usersGroupByOutputType>[]
          }
          count: {
            args: Prisma.strava_usersCountArgs<ExtArgs>
            result: $Utils.Optional<Strava_usersCountAggregateOutputType> | number
          }
        }
      }
      test_table: {
        payload: Prisma.$test_tablePayload<ExtArgs>
        fields: Prisma.test_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.test_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.test_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload>
          }
          findFirst: {
            args: Prisma.test_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.test_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload>
          }
          findMany: {
            args: Prisma.test_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload>[]
          }
          create: {
            args: Prisma.test_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload>
          }
          createMany: {
            args: Prisma.test_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.test_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload>[]
          }
          delete: {
            args: Prisma.test_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload>
          }
          update: {
            args: Prisma.test_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload>
          }
          deleteMany: {
            args: Prisma.test_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.test_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.test_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload>[]
          }
          upsert: {
            args: Prisma.test_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload>
          }
          aggregate: {
            args: Prisma.Test_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest_table>
          }
          groupBy: {
            args: Prisma.test_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Test_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.test_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Test_tableCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    activities?: activitiesOmit
    instruments?: instrumentsOmit
    notes?: notesOmit
    strava_users?: strava_usersOmit
    test_table?: test_tableOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Strava_usersCountOutputType
   */

  export type Strava_usersCountOutputType = {
    activities: number
  }

  export type Strava_usersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | Strava_usersCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * Strava_usersCountOutputType without action
   */
  export type Strava_usersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strava_usersCountOutputType
     */
    select?: Strava_usersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Strava_usersCountOutputType without action
   */
  export type Strava_usersCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activitiesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model activities
   */

  export type AggregateActivities = {
    _count: ActivitiesCountAggregateOutputType | null
    _avg: ActivitiesAvgAggregateOutputType | null
    _sum: ActivitiesSumAggregateOutputType | null
    _min: ActivitiesMinAggregateOutputType | null
    _max: ActivitiesMaxAggregateOutputType | null
  }

  export type ActivitiesAvgAggregateOutputType = {
    strava_id: number | null
    strava_athlete_id: number | null
    distance: Decimal | null
    moving_time: number | null
    elapsed_time: number | null
    total_elevation_gain: Decimal | null
    area_captured: Decimal | null
  }

  export type ActivitiesSumAggregateOutputType = {
    strava_id: bigint | null
    strava_athlete_id: bigint | null
    distance: Decimal | null
    moving_time: number | null
    elapsed_time: number | null
    total_elevation_gain: Decimal | null
    area_captured: Decimal | null
  }

  export type ActivitiesMinAggregateOutputType = {
    id: string | null
    strava_id: bigint | null
    strava_athlete_id: bigint | null
    name: string | null
    activity_type: string | null
    start_date: Date | null
    distance: Decimal | null
    moving_time: number | null
    elapsed_time: number | null
    total_elevation_gain: Decimal | null
    area_captured: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ActivitiesMaxAggregateOutputType = {
    id: string | null
    strava_id: bigint | null
    strava_athlete_id: bigint | null
    name: string | null
    activity_type: string | null
    start_date: Date | null
    distance: Decimal | null
    moving_time: number | null
    elapsed_time: number | null
    total_elevation_gain: Decimal | null
    area_captured: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ActivitiesCountAggregateOutputType = {
    id: number
    strava_id: number
    strava_athlete_id: number
    name: number
    activity_type: number
    start_date: number
    distance: number
    moving_time: number
    elapsed_time: number
    total_elevation_gain: number
    start_latlng: number
    end_latlng: number
    map_data: number
    area_captured: number
    activity_json: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ActivitiesAvgAggregateInputType = {
    strava_id?: true
    strava_athlete_id?: true
    distance?: true
    moving_time?: true
    elapsed_time?: true
    total_elevation_gain?: true
    area_captured?: true
  }

  export type ActivitiesSumAggregateInputType = {
    strava_id?: true
    strava_athlete_id?: true
    distance?: true
    moving_time?: true
    elapsed_time?: true
    total_elevation_gain?: true
    area_captured?: true
  }

  export type ActivitiesMinAggregateInputType = {
    id?: true
    strava_id?: true
    strava_athlete_id?: true
    name?: true
    activity_type?: true
    start_date?: true
    distance?: true
    moving_time?: true
    elapsed_time?: true
    total_elevation_gain?: true
    area_captured?: true
    created_at?: true
    updated_at?: true
  }

  export type ActivitiesMaxAggregateInputType = {
    id?: true
    strava_id?: true
    strava_athlete_id?: true
    name?: true
    activity_type?: true
    start_date?: true
    distance?: true
    moving_time?: true
    elapsed_time?: true
    total_elevation_gain?: true
    area_captured?: true
    created_at?: true
    updated_at?: true
  }

  export type ActivitiesCountAggregateInputType = {
    id?: true
    strava_id?: true
    strava_athlete_id?: true
    name?: true
    activity_type?: true
    start_date?: true
    distance?: true
    moving_time?: true
    elapsed_time?: true
    total_elevation_gain?: true
    start_latlng?: true
    end_latlng?: true
    map_data?: true
    area_captured?: true
    activity_json?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ActivitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activities to aggregate.
     */
    where?: activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activities to fetch.
     */
    orderBy?: activitiesOrderByWithRelationInput | activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned activities
    **/
    _count?: true | ActivitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivitiesMaxAggregateInputType
  }

  export type GetActivitiesAggregateType<T extends ActivitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateActivities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivities[P]>
      : GetScalarType<T[P], AggregateActivities[P]>
  }




  export type activitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activitiesWhereInput
    orderBy?: activitiesOrderByWithAggregationInput | activitiesOrderByWithAggregationInput[]
    by: ActivitiesScalarFieldEnum[] | ActivitiesScalarFieldEnum
    having?: activitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivitiesCountAggregateInputType | true
    _avg?: ActivitiesAvgAggregateInputType
    _sum?: ActivitiesSumAggregateInputType
    _min?: ActivitiesMinAggregateInputType
    _max?: ActivitiesMaxAggregateInputType
  }

  export type ActivitiesGroupByOutputType = {
    id: string
    strava_id: bigint
    strava_athlete_id: bigint
    name: string
    activity_type: string
    start_date: Date
    distance: Decimal
    moving_time: number
    elapsed_time: number
    total_elevation_gain: Decimal
    start_latlng: JsonValue | null
    end_latlng: JsonValue | null
    map_data: JsonValue | null
    area_captured: Decimal | null
    activity_json: JsonValue
    created_at: Date
    updated_at: Date
    _count: ActivitiesCountAggregateOutputType | null
    _avg: ActivitiesAvgAggregateOutputType | null
    _sum: ActivitiesSumAggregateOutputType | null
    _min: ActivitiesMinAggregateOutputType | null
    _max: ActivitiesMaxAggregateOutputType | null
  }

  type GetActivitiesGroupByPayload<T extends activitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivitiesGroupByOutputType[P]>
            : GetScalarType<T[P], ActivitiesGroupByOutputType[P]>
        }
      >
    >


  export type activitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    strava_id?: boolean
    strava_athlete_id?: boolean
    name?: boolean
    activity_type?: boolean
    start_date?: boolean
    distance?: boolean
    moving_time?: boolean
    elapsed_time?: boolean
    total_elevation_gain?: boolean
    start_latlng?: boolean
    end_latlng?: boolean
    map_data?: boolean
    area_captured?: boolean
    activity_json?: boolean
    created_at?: boolean
    updated_at?: boolean
    strava_users?: boolean | strava_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activities"]>

  export type activitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    strava_id?: boolean
    strava_athlete_id?: boolean
    name?: boolean
    activity_type?: boolean
    start_date?: boolean
    distance?: boolean
    moving_time?: boolean
    elapsed_time?: boolean
    total_elevation_gain?: boolean
    start_latlng?: boolean
    end_latlng?: boolean
    map_data?: boolean
    area_captured?: boolean
    activity_json?: boolean
    created_at?: boolean
    updated_at?: boolean
    strava_users?: boolean | strava_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activities"]>

  export type activitiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    strava_id?: boolean
    strava_athlete_id?: boolean
    name?: boolean
    activity_type?: boolean
    start_date?: boolean
    distance?: boolean
    moving_time?: boolean
    elapsed_time?: boolean
    total_elevation_gain?: boolean
    start_latlng?: boolean
    end_latlng?: boolean
    map_data?: boolean
    area_captured?: boolean
    activity_json?: boolean
    created_at?: boolean
    updated_at?: boolean
    strava_users?: boolean | strava_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activities"]>

  export type activitiesSelectScalar = {
    id?: boolean
    strava_id?: boolean
    strava_athlete_id?: boolean
    name?: boolean
    activity_type?: boolean
    start_date?: boolean
    distance?: boolean
    moving_time?: boolean
    elapsed_time?: boolean
    total_elevation_gain?: boolean
    start_latlng?: boolean
    end_latlng?: boolean
    map_data?: boolean
    area_captured?: boolean
    activity_json?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type activitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "strava_id" | "strava_athlete_id" | "name" | "activity_type" | "start_date" | "distance" | "moving_time" | "elapsed_time" | "total_elevation_gain" | "start_latlng" | "end_latlng" | "map_data" | "area_captured" | "activity_json" | "created_at" | "updated_at", ExtArgs["result"]["activities"]>
  export type activitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    strava_users?: boolean | strava_usersDefaultArgs<ExtArgs>
  }
  export type activitiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    strava_users?: boolean | strava_usersDefaultArgs<ExtArgs>
  }
  export type activitiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    strava_users?: boolean | strava_usersDefaultArgs<ExtArgs>
  }

  export type $activitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "activities"
    objects: {
      strava_users: Prisma.$strava_usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      strava_id: bigint
      strava_athlete_id: bigint
      name: string
      activity_type: string
      start_date: Date
      distance: Prisma.Decimal
      moving_time: number
      elapsed_time: number
      total_elevation_gain: Prisma.Decimal
      start_latlng: Prisma.JsonValue | null
      end_latlng: Prisma.JsonValue | null
      map_data: Prisma.JsonValue | null
      area_captured: Prisma.Decimal | null
      activity_json: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["activities"]>
    composites: {}
  }

  type activitiesGetPayload<S extends boolean | null | undefined | activitiesDefaultArgs> = $Result.GetResult<Prisma.$activitiesPayload, S>

  type activitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<activitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivitiesCountAggregateInputType | true
    }

  export interface activitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['activities'], meta: { name: 'activities' } }
    /**
     * Find zero or one Activities that matches the filter.
     * @param {activitiesFindUniqueArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends activitiesFindUniqueArgs>(args: SelectSubset<T, activitiesFindUniqueArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {activitiesFindUniqueOrThrowArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends activitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, activitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitiesFindFirstArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends activitiesFindFirstArgs>(args?: SelectSubset<T, activitiesFindFirstArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitiesFindFirstOrThrowArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends activitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, activitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activities.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activitiesWithIdOnly = await prisma.activities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends activitiesFindManyArgs>(args?: SelectSubset<T, activitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activities.
     * @param {activitiesCreateArgs} args - Arguments to create a Activities.
     * @example
     * // Create one Activities
     * const Activities = await prisma.activities.create({
     *   data: {
     *     // ... data to create a Activities
     *   }
     * })
     * 
     */
    create<T extends activitiesCreateArgs>(args: SelectSubset<T, activitiesCreateArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {activitiesCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activities = await prisma.activities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends activitiesCreateManyArgs>(args?: SelectSubset<T, activitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {activitiesCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activities = await prisma.activities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activitiesWithIdOnly = await prisma.activities.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends activitiesCreateManyAndReturnArgs>(args?: SelectSubset<T, activitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activities.
     * @param {activitiesDeleteArgs} args - Arguments to delete one Activities.
     * @example
     * // Delete one Activities
     * const Activities = await prisma.activities.delete({
     *   where: {
     *     // ... filter to delete one Activities
     *   }
     * })
     * 
     */
    delete<T extends activitiesDeleteArgs>(args: SelectSubset<T, activitiesDeleteArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activities.
     * @param {activitiesUpdateArgs} args - Arguments to update one Activities.
     * @example
     * // Update one Activities
     * const activities = await prisma.activities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends activitiesUpdateArgs>(args: SelectSubset<T, activitiesUpdateArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {activitiesDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends activitiesDeleteManyArgs>(args?: SelectSubset<T, activitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activities = await prisma.activities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends activitiesUpdateManyArgs>(args: SelectSubset<T, activitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {activitiesUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activities = await prisma.activities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activitiesWithIdOnly = await prisma.activities.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends activitiesUpdateManyAndReturnArgs>(args: SelectSubset<T, activitiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activities.
     * @param {activitiesUpsertArgs} args - Arguments to update or create a Activities.
     * @example
     * // Update or create a Activities
     * const activities = await prisma.activities.upsert({
     *   create: {
     *     // ... data to create a Activities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activities we want to update
     *   }
     * })
     */
    upsert<T extends activitiesUpsertArgs>(args: SelectSubset<T, activitiesUpsertArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitiesCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activities.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends activitiesCountArgs>(
      args?: Subset<T, activitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivitiesAggregateArgs>(args: Subset<T, ActivitiesAggregateArgs>): Prisma.PrismaPromise<GetActivitiesAggregateType<T>>

    /**
     * Group by Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends activitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: activitiesGroupByArgs['orderBy'] }
        : { orderBy?: activitiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, activitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the activities model
   */
  readonly fields: activitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for activities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__activitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    strava_users<T extends strava_usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, strava_usersDefaultArgs<ExtArgs>>): Prisma__strava_usersClient<$Result.GetResult<Prisma.$strava_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the activities model
   */
  interface activitiesFieldRefs {
    readonly id: FieldRef<"activities", 'String'>
    readonly strava_id: FieldRef<"activities", 'BigInt'>
    readonly strava_athlete_id: FieldRef<"activities", 'BigInt'>
    readonly name: FieldRef<"activities", 'String'>
    readonly activity_type: FieldRef<"activities", 'String'>
    readonly start_date: FieldRef<"activities", 'DateTime'>
    readonly distance: FieldRef<"activities", 'Decimal'>
    readonly moving_time: FieldRef<"activities", 'Int'>
    readonly elapsed_time: FieldRef<"activities", 'Int'>
    readonly total_elevation_gain: FieldRef<"activities", 'Decimal'>
    readonly start_latlng: FieldRef<"activities", 'Json'>
    readonly end_latlng: FieldRef<"activities", 'Json'>
    readonly map_data: FieldRef<"activities", 'Json'>
    readonly area_captured: FieldRef<"activities", 'Decimal'>
    readonly activity_json: FieldRef<"activities", 'Json'>
    readonly created_at: FieldRef<"activities", 'DateTime'>
    readonly updated_at: FieldRef<"activities", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * activities findUnique
   */
  export type activitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * Filter, which activities to fetch.
     */
    where: activitiesWhereUniqueInput
  }

  /**
   * activities findUniqueOrThrow
   */
  export type activitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * Filter, which activities to fetch.
     */
    where: activitiesWhereUniqueInput
  }

  /**
   * activities findFirst
   */
  export type activitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * Filter, which activities to fetch.
     */
    where?: activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activities to fetch.
     */
    orderBy?: activitiesOrderByWithRelationInput | activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activities.
     */
    cursor?: activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activities.
     */
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * activities findFirstOrThrow
   */
  export type activitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * Filter, which activities to fetch.
     */
    where?: activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activities to fetch.
     */
    orderBy?: activitiesOrderByWithRelationInput | activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activities.
     */
    cursor?: activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activities.
     */
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * activities findMany
   */
  export type activitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * Filter, which activities to fetch.
     */
    where?: activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activities to fetch.
     */
    orderBy?: activitiesOrderByWithRelationInput | activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing activities.
     */
    cursor?: activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activities.
     */
    skip?: number
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * activities create
   */
  export type activitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a activities.
     */
    data: XOR<activitiesCreateInput, activitiesUncheckedCreateInput>
  }

  /**
   * activities createMany
   */
  export type activitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many activities.
     */
    data: activitiesCreateManyInput | activitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * activities createManyAndReturn
   */
  export type activitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * The data used to create many activities.
     */
    data: activitiesCreateManyInput | activitiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * activities update
   */
  export type activitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a activities.
     */
    data: XOR<activitiesUpdateInput, activitiesUncheckedUpdateInput>
    /**
     * Choose, which activities to update.
     */
    where: activitiesWhereUniqueInput
  }

  /**
   * activities updateMany
   */
  export type activitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update activities.
     */
    data: XOR<activitiesUpdateManyMutationInput, activitiesUncheckedUpdateManyInput>
    /**
     * Filter which activities to update
     */
    where?: activitiesWhereInput
    /**
     * Limit how many activities to update.
     */
    limit?: number
  }

  /**
   * activities updateManyAndReturn
   */
  export type activitiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * The data used to update activities.
     */
    data: XOR<activitiesUpdateManyMutationInput, activitiesUncheckedUpdateManyInput>
    /**
     * Filter which activities to update
     */
    where?: activitiesWhereInput
    /**
     * Limit how many activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * activities upsert
   */
  export type activitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the activities to update in case it exists.
     */
    where: activitiesWhereUniqueInput
    /**
     * In case the activities found by the `where` argument doesn't exist, create a new activities with this data.
     */
    create: XOR<activitiesCreateInput, activitiesUncheckedCreateInput>
    /**
     * In case the activities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<activitiesUpdateInput, activitiesUncheckedUpdateInput>
  }

  /**
   * activities delete
   */
  export type activitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * Filter which activities to delete.
     */
    where: activitiesWhereUniqueInput
  }

  /**
   * activities deleteMany
   */
  export type activitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activities to delete
     */
    where?: activitiesWhereInput
    /**
     * Limit how many activities to delete.
     */
    limit?: number
  }

  /**
   * activities without action
   */
  export type activitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
  }


  /**
   * Model instruments
   */

  export type AggregateInstruments = {
    _count: InstrumentsCountAggregateOutputType | null
    _avg: InstrumentsAvgAggregateOutputType | null
    _sum: InstrumentsSumAggregateOutputType | null
    _min: InstrumentsMinAggregateOutputType | null
    _max: InstrumentsMaxAggregateOutputType | null
  }

  export type InstrumentsAvgAggregateOutputType = {
    id: number | null
  }

  export type InstrumentsSumAggregateOutputType = {
    id: bigint | null
  }

  export type InstrumentsMinAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type InstrumentsMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type InstrumentsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type InstrumentsAvgAggregateInputType = {
    id?: true
  }

  export type InstrumentsSumAggregateInputType = {
    id?: true
  }

  export type InstrumentsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type InstrumentsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type InstrumentsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type InstrumentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which instruments to aggregate.
     */
    where?: instrumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instruments to fetch.
     */
    orderBy?: instrumentsOrderByWithRelationInput | instrumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: instrumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned instruments
    **/
    _count?: true | InstrumentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstrumentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstrumentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstrumentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstrumentsMaxAggregateInputType
  }

  export type GetInstrumentsAggregateType<T extends InstrumentsAggregateArgs> = {
        [P in keyof T & keyof AggregateInstruments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstruments[P]>
      : GetScalarType<T[P], AggregateInstruments[P]>
  }




  export type instrumentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: instrumentsWhereInput
    orderBy?: instrumentsOrderByWithAggregationInput | instrumentsOrderByWithAggregationInput[]
    by: InstrumentsScalarFieldEnum[] | InstrumentsScalarFieldEnum
    having?: instrumentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstrumentsCountAggregateInputType | true
    _avg?: InstrumentsAvgAggregateInputType
    _sum?: InstrumentsSumAggregateInputType
    _min?: InstrumentsMinAggregateInputType
    _max?: InstrumentsMaxAggregateInputType
  }

  export type InstrumentsGroupByOutputType = {
    id: bigint
    name: string
    _count: InstrumentsCountAggregateOutputType | null
    _avg: InstrumentsAvgAggregateOutputType | null
    _sum: InstrumentsSumAggregateOutputType | null
    _min: InstrumentsMinAggregateOutputType | null
    _max: InstrumentsMaxAggregateOutputType | null
  }

  type GetInstrumentsGroupByPayload<T extends instrumentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstrumentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstrumentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstrumentsGroupByOutputType[P]>
            : GetScalarType<T[P], InstrumentsGroupByOutputType[P]>
        }
      >
    >


  export type instrumentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["instruments"]>

  export type instrumentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["instruments"]>

  export type instrumentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["instruments"]>

  export type instrumentsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type instrumentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["instruments"]>

  export type $instrumentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "instruments"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
    }, ExtArgs["result"]["instruments"]>
    composites: {}
  }

  type instrumentsGetPayload<S extends boolean | null | undefined | instrumentsDefaultArgs> = $Result.GetResult<Prisma.$instrumentsPayload, S>

  type instrumentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<instrumentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstrumentsCountAggregateInputType | true
    }

  export interface instrumentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['instruments'], meta: { name: 'instruments' } }
    /**
     * Find zero or one Instruments that matches the filter.
     * @param {instrumentsFindUniqueArgs} args - Arguments to find a Instruments
     * @example
     * // Get one Instruments
     * const instruments = await prisma.instruments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends instrumentsFindUniqueArgs>(args: SelectSubset<T, instrumentsFindUniqueArgs<ExtArgs>>): Prisma__instrumentsClient<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instruments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {instrumentsFindUniqueOrThrowArgs} args - Arguments to find a Instruments
     * @example
     * // Get one Instruments
     * const instruments = await prisma.instruments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends instrumentsFindUniqueOrThrowArgs>(args: SelectSubset<T, instrumentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__instrumentsClient<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instruments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instrumentsFindFirstArgs} args - Arguments to find a Instruments
     * @example
     * // Get one Instruments
     * const instruments = await prisma.instruments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends instrumentsFindFirstArgs>(args?: SelectSubset<T, instrumentsFindFirstArgs<ExtArgs>>): Prisma__instrumentsClient<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instruments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instrumentsFindFirstOrThrowArgs} args - Arguments to find a Instruments
     * @example
     * // Get one Instruments
     * const instruments = await prisma.instruments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends instrumentsFindFirstOrThrowArgs>(args?: SelectSubset<T, instrumentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__instrumentsClient<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instruments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instrumentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instruments
     * const instruments = await prisma.instruments.findMany()
     * 
     * // Get first 10 Instruments
     * const instruments = await prisma.instruments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instrumentsWithIdOnly = await prisma.instruments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends instrumentsFindManyArgs>(args?: SelectSubset<T, instrumentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instruments.
     * @param {instrumentsCreateArgs} args - Arguments to create a Instruments.
     * @example
     * // Create one Instruments
     * const Instruments = await prisma.instruments.create({
     *   data: {
     *     // ... data to create a Instruments
     *   }
     * })
     * 
     */
    create<T extends instrumentsCreateArgs>(args: SelectSubset<T, instrumentsCreateArgs<ExtArgs>>): Prisma__instrumentsClient<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instruments.
     * @param {instrumentsCreateManyArgs} args - Arguments to create many Instruments.
     * @example
     * // Create many Instruments
     * const instruments = await prisma.instruments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends instrumentsCreateManyArgs>(args?: SelectSubset<T, instrumentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instruments and returns the data saved in the database.
     * @param {instrumentsCreateManyAndReturnArgs} args - Arguments to create many Instruments.
     * @example
     * // Create many Instruments
     * const instruments = await prisma.instruments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instruments and only return the `id`
     * const instrumentsWithIdOnly = await prisma.instruments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends instrumentsCreateManyAndReturnArgs>(args?: SelectSubset<T, instrumentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instruments.
     * @param {instrumentsDeleteArgs} args - Arguments to delete one Instruments.
     * @example
     * // Delete one Instruments
     * const Instruments = await prisma.instruments.delete({
     *   where: {
     *     // ... filter to delete one Instruments
     *   }
     * })
     * 
     */
    delete<T extends instrumentsDeleteArgs>(args: SelectSubset<T, instrumentsDeleteArgs<ExtArgs>>): Prisma__instrumentsClient<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instruments.
     * @param {instrumentsUpdateArgs} args - Arguments to update one Instruments.
     * @example
     * // Update one Instruments
     * const instruments = await prisma.instruments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends instrumentsUpdateArgs>(args: SelectSubset<T, instrumentsUpdateArgs<ExtArgs>>): Prisma__instrumentsClient<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instruments.
     * @param {instrumentsDeleteManyArgs} args - Arguments to filter Instruments to delete.
     * @example
     * // Delete a few Instruments
     * const { count } = await prisma.instruments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends instrumentsDeleteManyArgs>(args?: SelectSubset<T, instrumentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instrumentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instruments
     * const instruments = await prisma.instruments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends instrumentsUpdateManyArgs>(args: SelectSubset<T, instrumentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instruments and returns the data updated in the database.
     * @param {instrumentsUpdateManyAndReturnArgs} args - Arguments to update many Instruments.
     * @example
     * // Update many Instruments
     * const instruments = await prisma.instruments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instruments and only return the `id`
     * const instrumentsWithIdOnly = await prisma.instruments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends instrumentsUpdateManyAndReturnArgs>(args: SelectSubset<T, instrumentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instruments.
     * @param {instrumentsUpsertArgs} args - Arguments to update or create a Instruments.
     * @example
     * // Update or create a Instruments
     * const instruments = await prisma.instruments.upsert({
     *   create: {
     *     // ... data to create a Instruments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instruments we want to update
     *   }
     * })
     */
    upsert<T extends instrumentsUpsertArgs>(args: SelectSubset<T, instrumentsUpsertArgs<ExtArgs>>): Prisma__instrumentsClient<$Result.GetResult<Prisma.$instrumentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instrumentsCountArgs} args - Arguments to filter Instruments to count.
     * @example
     * // Count the number of Instruments
     * const count = await prisma.instruments.count({
     *   where: {
     *     // ... the filter for the Instruments we want to count
     *   }
     * })
    **/
    count<T extends instrumentsCountArgs>(
      args?: Subset<T, instrumentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstrumentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstrumentsAggregateArgs>(args: Subset<T, InstrumentsAggregateArgs>): Prisma.PrismaPromise<GetInstrumentsAggregateType<T>>

    /**
     * Group by Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instrumentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends instrumentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: instrumentsGroupByArgs['orderBy'] }
        : { orderBy?: instrumentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, instrumentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstrumentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the instruments model
   */
  readonly fields: instrumentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for instruments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__instrumentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the instruments model
   */
  interface instrumentsFieldRefs {
    readonly id: FieldRef<"instruments", 'BigInt'>
    readonly name: FieldRef<"instruments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * instruments findUnique
   */
  export type instrumentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * Filter, which instruments to fetch.
     */
    where: instrumentsWhereUniqueInput
  }

  /**
   * instruments findUniqueOrThrow
   */
  export type instrumentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * Filter, which instruments to fetch.
     */
    where: instrumentsWhereUniqueInput
  }

  /**
   * instruments findFirst
   */
  export type instrumentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * Filter, which instruments to fetch.
     */
    where?: instrumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instruments to fetch.
     */
    orderBy?: instrumentsOrderByWithRelationInput | instrumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for instruments.
     */
    cursor?: instrumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of instruments.
     */
    distinct?: InstrumentsScalarFieldEnum | InstrumentsScalarFieldEnum[]
  }

  /**
   * instruments findFirstOrThrow
   */
  export type instrumentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * Filter, which instruments to fetch.
     */
    where?: instrumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instruments to fetch.
     */
    orderBy?: instrumentsOrderByWithRelationInput | instrumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for instruments.
     */
    cursor?: instrumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of instruments.
     */
    distinct?: InstrumentsScalarFieldEnum | InstrumentsScalarFieldEnum[]
  }

  /**
   * instruments findMany
   */
  export type instrumentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * Filter, which instruments to fetch.
     */
    where?: instrumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instruments to fetch.
     */
    orderBy?: instrumentsOrderByWithRelationInput | instrumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing instruments.
     */
    cursor?: instrumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instruments.
     */
    skip?: number
    distinct?: InstrumentsScalarFieldEnum | InstrumentsScalarFieldEnum[]
  }

  /**
   * instruments create
   */
  export type instrumentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * The data needed to create a instruments.
     */
    data: XOR<instrumentsCreateInput, instrumentsUncheckedCreateInput>
  }

  /**
   * instruments createMany
   */
  export type instrumentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many instruments.
     */
    data: instrumentsCreateManyInput | instrumentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * instruments createManyAndReturn
   */
  export type instrumentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * The data used to create many instruments.
     */
    data: instrumentsCreateManyInput | instrumentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * instruments update
   */
  export type instrumentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * The data needed to update a instruments.
     */
    data: XOR<instrumentsUpdateInput, instrumentsUncheckedUpdateInput>
    /**
     * Choose, which instruments to update.
     */
    where: instrumentsWhereUniqueInput
  }

  /**
   * instruments updateMany
   */
  export type instrumentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update instruments.
     */
    data: XOR<instrumentsUpdateManyMutationInput, instrumentsUncheckedUpdateManyInput>
    /**
     * Filter which instruments to update
     */
    where?: instrumentsWhereInput
    /**
     * Limit how many instruments to update.
     */
    limit?: number
  }

  /**
   * instruments updateManyAndReturn
   */
  export type instrumentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * The data used to update instruments.
     */
    data: XOR<instrumentsUpdateManyMutationInput, instrumentsUncheckedUpdateManyInput>
    /**
     * Filter which instruments to update
     */
    where?: instrumentsWhereInput
    /**
     * Limit how many instruments to update.
     */
    limit?: number
  }

  /**
   * instruments upsert
   */
  export type instrumentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * The filter to search for the instruments to update in case it exists.
     */
    where: instrumentsWhereUniqueInput
    /**
     * In case the instruments found by the `where` argument doesn't exist, create a new instruments with this data.
     */
    create: XOR<instrumentsCreateInput, instrumentsUncheckedCreateInput>
    /**
     * In case the instruments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<instrumentsUpdateInput, instrumentsUncheckedUpdateInput>
  }

  /**
   * instruments delete
   */
  export type instrumentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
    /**
     * Filter which instruments to delete.
     */
    where: instrumentsWhereUniqueInput
  }

  /**
   * instruments deleteMany
   */
  export type instrumentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which instruments to delete
     */
    where?: instrumentsWhereInput
    /**
     * Limit how many instruments to delete.
     */
    limit?: number
  }

  /**
   * instruments without action
   */
  export type instrumentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instruments
     */
    select?: instrumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instruments
     */
    omit?: instrumentsOmit<ExtArgs> | null
  }


  /**
   * Model notes
   */

  export type AggregateNotes = {
    _count: NotesCountAggregateOutputType | null
    _avg: NotesAvgAggregateOutputType | null
    _sum: NotesSumAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  export type NotesAvgAggregateOutputType = {
    id: number | null
  }

  export type NotesSumAggregateOutputType = {
    id: bigint | null
  }

  export type NotesMinAggregateOutputType = {
    id: bigint | null
    title: string | null
  }

  export type NotesMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
  }

  export type NotesCountAggregateOutputType = {
    id: number
    title: number
    _all: number
  }


  export type NotesAvgAggregateInputType = {
    id?: true
  }

  export type NotesSumAggregateInputType = {
    id?: true
  }

  export type NotesMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type NotesMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type NotesCountAggregateInputType = {
    id?: true
    title?: true
    _all?: true
  }

  export type NotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notes to aggregate.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notes
    **/
    _count?: true | NotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotesMaxAggregateInputType
  }

  export type GetNotesAggregateType<T extends NotesAggregateArgs> = {
        [P in keyof T & keyof AggregateNotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotes[P]>
      : GetScalarType<T[P], AggregateNotes[P]>
  }




  export type notesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notesWhereInput
    orderBy?: notesOrderByWithAggregationInput | notesOrderByWithAggregationInput[]
    by: NotesScalarFieldEnum[] | NotesScalarFieldEnum
    having?: notesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotesCountAggregateInputType | true
    _avg?: NotesAvgAggregateInputType
    _sum?: NotesSumAggregateInputType
    _min?: NotesMinAggregateInputType
    _max?: NotesMaxAggregateInputType
  }

  export type NotesGroupByOutputType = {
    id: bigint
    title: string | null
    _count: NotesCountAggregateOutputType | null
    _avg: NotesAvgAggregateOutputType | null
    _sum: NotesSumAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  type GetNotesGroupByPayload<T extends notesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotesGroupByOutputType[P]>
            : GetScalarType<T[P], NotesGroupByOutputType[P]>
        }
      >
    >


  export type notesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["notes"]>

  export type notesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["notes"]>

  export type notesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["notes"]>

  export type notesSelectScalar = {
    id?: boolean
    title?: boolean
  }

  export type notesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title", ExtArgs["result"]["notes"]>

  export type $notesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string | null
    }, ExtArgs["result"]["notes"]>
    composites: {}
  }

  type notesGetPayload<S extends boolean | null | undefined | notesDefaultArgs> = $Result.GetResult<Prisma.$notesPayload, S>

  type notesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotesCountAggregateInputType | true
    }

  export interface notesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notes'], meta: { name: 'notes' } }
    /**
     * Find zero or one Notes that matches the filter.
     * @param {notesFindUniqueArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notesFindUniqueArgs>(args: SelectSubset<T, notesFindUniqueArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notesFindUniqueOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notesFindUniqueOrThrowArgs>(args: SelectSubset<T, notesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesFindFirstArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notesFindFirstArgs>(args?: SelectSubset<T, notesFindFirstArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesFindFirstOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notesFindFirstOrThrowArgs>(args?: SelectSubset<T, notesFindFirstOrThrowArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.notes.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.notes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notesWithIdOnly = await prisma.notes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notesFindManyArgs>(args?: SelectSubset<T, notesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notes.
     * @param {notesCreateArgs} args - Arguments to create a Notes.
     * @example
     * // Create one Notes
     * const Notes = await prisma.notes.create({
     *   data: {
     *     // ... data to create a Notes
     *   }
     * })
     * 
     */
    create<T extends notesCreateArgs>(args: SelectSubset<T, notesCreateArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {notesCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notesCreateManyArgs>(args?: SelectSubset<T, notesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {notesCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const notesWithIdOnly = await prisma.notes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notesCreateManyAndReturnArgs>(args?: SelectSubset<T, notesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notes.
     * @param {notesDeleteArgs} args - Arguments to delete one Notes.
     * @example
     * // Delete one Notes
     * const Notes = await prisma.notes.delete({
     *   where: {
     *     // ... filter to delete one Notes
     *   }
     * })
     * 
     */
    delete<T extends notesDeleteArgs>(args: SelectSubset<T, notesDeleteArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notes.
     * @param {notesUpdateArgs} args - Arguments to update one Notes.
     * @example
     * // Update one Notes
     * const notes = await prisma.notes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notesUpdateArgs>(args: SelectSubset<T, notesUpdateArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {notesDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.notes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notesDeleteManyArgs>(args?: SelectSubset<T, notesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notesUpdateManyArgs>(args: SelectSubset<T, notesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {notesUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const notesWithIdOnly = await prisma.notes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends notesUpdateManyAndReturnArgs>(args: SelectSubset<T, notesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notes.
     * @param {notesUpsertArgs} args - Arguments to update or create a Notes.
     * @example
     * // Update or create a Notes
     * const notes = await prisma.notes.upsert({
     *   create: {
     *     // ... data to create a Notes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notes we want to update
     *   }
     * })
     */
    upsert<T extends notesUpsertArgs>(args: SelectSubset<T, notesUpsertArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.notes.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends notesCountArgs>(
      args?: Subset<T, notesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotesAggregateArgs>(args: Subset<T, NotesAggregateArgs>): Prisma.PrismaPromise<GetNotesAggregateType<T>>

    /**
     * Group by Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notesGroupByArgs['orderBy'] }
        : { orderBy?: notesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notes model
   */
  readonly fields: notesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notes model
   */
  interface notesFieldRefs {
    readonly id: FieldRef<"notes", 'BigInt'>
    readonly title: FieldRef<"notes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * notes findUnique
   */
  export type notesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes findUniqueOrThrow
   */
  export type notesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes findFirst
   */
  export type notesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notes.
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * notes findFirstOrThrow
   */
  export type notesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notes.
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * notes findMany
   */
  export type notesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notes.
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * notes create
   */
  export type notesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * The data needed to create a notes.
     */
    data?: XOR<notesCreateInput, notesUncheckedCreateInput>
  }

  /**
   * notes createMany
   */
  export type notesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notes.
     */
    data: notesCreateManyInput | notesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notes createManyAndReturn
   */
  export type notesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * The data used to create many notes.
     */
    data: notesCreateManyInput | notesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notes update
   */
  export type notesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * The data needed to update a notes.
     */
    data: XOR<notesUpdateInput, notesUncheckedUpdateInput>
    /**
     * Choose, which notes to update.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes updateMany
   */
  export type notesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notes.
     */
    data: XOR<notesUpdateManyMutationInput, notesUncheckedUpdateManyInput>
    /**
     * Filter which notes to update
     */
    where?: notesWhereInput
    /**
     * Limit how many notes to update.
     */
    limit?: number
  }

  /**
   * notes updateManyAndReturn
   */
  export type notesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * The data used to update notes.
     */
    data: XOR<notesUpdateManyMutationInput, notesUncheckedUpdateManyInput>
    /**
     * Filter which notes to update
     */
    where?: notesWhereInput
    /**
     * Limit how many notes to update.
     */
    limit?: number
  }

  /**
   * notes upsert
   */
  export type notesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * The filter to search for the notes to update in case it exists.
     */
    where: notesWhereUniqueInput
    /**
     * In case the notes found by the `where` argument doesn't exist, create a new notes with this data.
     */
    create: XOR<notesCreateInput, notesUncheckedCreateInput>
    /**
     * In case the notes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notesUpdateInput, notesUncheckedUpdateInput>
  }

  /**
   * notes delete
   */
  export type notesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Filter which notes to delete.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes deleteMany
   */
  export type notesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notes to delete
     */
    where?: notesWhereInput
    /**
     * Limit how many notes to delete.
     */
    limit?: number
  }

  /**
   * notes without action
   */
  export type notesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
  }


  /**
   * Model strava_users
   */

  export type AggregateStrava_users = {
    _count: Strava_usersCountAggregateOutputType | null
    _avg: Strava_usersAvgAggregateOutputType | null
    _sum: Strava_usersSumAggregateOutputType | null
    _min: Strava_usersMinAggregateOutputType | null
    _max: Strava_usersMaxAggregateOutputType | null
  }

  export type Strava_usersAvgAggregateOutputType = {
    strava_athlete_id: number | null
  }

  export type Strava_usersSumAggregateOutputType = {
    strava_athlete_id: bigint | null
  }

  export type Strava_usersMinAggregateOutputType = {
    id: string | null
    strava_athlete_id: bigint | null
    access_token: string | null
    refresh_token: string | null
    token_expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Strava_usersMaxAggregateOutputType = {
    id: string | null
    strava_athlete_id: bigint | null
    access_token: string | null
    refresh_token: string | null
    token_expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Strava_usersCountAggregateOutputType = {
    id: number
    strava_athlete_id: number
    athlete_data: number
    access_token: number
    refresh_token: number
    token_expires_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Strava_usersAvgAggregateInputType = {
    strava_athlete_id?: true
  }

  export type Strava_usersSumAggregateInputType = {
    strava_athlete_id?: true
  }

  export type Strava_usersMinAggregateInputType = {
    id?: true
    strava_athlete_id?: true
    access_token?: true
    refresh_token?: true
    token_expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Strava_usersMaxAggregateInputType = {
    id?: true
    strava_athlete_id?: true
    access_token?: true
    refresh_token?: true
    token_expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Strava_usersCountAggregateInputType = {
    id?: true
    strava_athlete_id?: true
    athlete_data?: true
    access_token?: true
    refresh_token?: true
    token_expires_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Strava_usersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which strava_users to aggregate.
     */
    where?: strava_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of strava_users to fetch.
     */
    orderBy?: strava_usersOrderByWithRelationInput | strava_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: strava_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` strava_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` strava_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned strava_users
    **/
    _count?: true | Strava_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Strava_usersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Strava_usersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Strava_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Strava_usersMaxAggregateInputType
  }

  export type GetStrava_usersAggregateType<T extends Strava_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateStrava_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStrava_users[P]>
      : GetScalarType<T[P], AggregateStrava_users[P]>
  }




  export type strava_usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: strava_usersWhereInput
    orderBy?: strava_usersOrderByWithAggregationInput | strava_usersOrderByWithAggregationInput[]
    by: Strava_usersScalarFieldEnum[] | Strava_usersScalarFieldEnum
    having?: strava_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Strava_usersCountAggregateInputType | true
    _avg?: Strava_usersAvgAggregateInputType
    _sum?: Strava_usersSumAggregateInputType
    _min?: Strava_usersMinAggregateInputType
    _max?: Strava_usersMaxAggregateInputType
  }

  export type Strava_usersGroupByOutputType = {
    id: string
    strava_athlete_id: bigint
    athlete_data: JsonValue
    access_token: string
    refresh_token: string
    token_expires_at: Date
    created_at: Date
    updated_at: Date
    _count: Strava_usersCountAggregateOutputType | null
    _avg: Strava_usersAvgAggregateOutputType | null
    _sum: Strava_usersSumAggregateOutputType | null
    _min: Strava_usersMinAggregateOutputType | null
    _max: Strava_usersMaxAggregateOutputType | null
  }

  type GetStrava_usersGroupByPayload<T extends strava_usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Strava_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Strava_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Strava_usersGroupByOutputType[P]>
            : GetScalarType<T[P], Strava_usersGroupByOutputType[P]>
        }
      >
    >


  export type strava_usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    strava_athlete_id?: boolean
    athlete_data?: boolean
    access_token?: boolean
    refresh_token?: boolean
    token_expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    activities?: boolean | strava_users$activitiesArgs<ExtArgs>
    _count?: boolean | Strava_usersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["strava_users"]>

  export type strava_usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    strava_athlete_id?: boolean
    athlete_data?: boolean
    access_token?: boolean
    refresh_token?: boolean
    token_expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["strava_users"]>

  export type strava_usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    strava_athlete_id?: boolean
    athlete_data?: boolean
    access_token?: boolean
    refresh_token?: boolean
    token_expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["strava_users"]>

  export type strava_usersSelectScalar = {
    id?: boolean
    strava_athlete_id?: boolean
    athlete_data?: boolean
    access_token?: boolean
    refresh_token?: boolean
    token_expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type strava_usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "strava_athlete_id" | "athlete_data" | "access_token" | "refresh_token" | "token_expires_at" | "created_at" | "updated_at", ExtArgs["result"]["strava_users"]>
  export type strava_usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | strava_users$activitiesArgs<ExtArgs>
    _count?: boolean | Strava_usersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type strava_usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type strava_usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $strava_usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "strava_users"
    objects: {
      activities: Prisma.$activitiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      strava_athlete_id: bigint
      athlete_data: Prisma.JsonValue
      access_token: string
      refresh_token: string
      token_expires_at: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["strava_users"]>
    composites: {}
  }

  type strava_usersGetPayload<S extends boolean | null | undefined | strava_usersDefaultArgs> = $Result.GetResult<Prisma.$strava_usersPayload, S>

  type strava_usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<strava_usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Strava_usersCountAggregateInputType | true
    }

  export interface strava_usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['strava_users'], meta: { name: 'strava_users' } }
    /**
     * Find zero or one Strava_users that matches the filter.
     * @param {strava_usersFindUniqueArgs} args - Arguments to find a Strava_users
     * @example
     * // Get one Strava_users
     * const strava_users = await prisma.strava_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends strava_usersFindUniqueArgs>(args: SelectSubset<T, strava_usersFindUniqueArgs<ExtArgs>>): Prisma__strava_usersClient<$Result.GetResult<Prisma.$strava_usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Strava_users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {strava_usersFindUniqueOrThrowArgs} args - Arguments to find a Strava_users
     * @example
     * // Get one Strava_users
     * const strava_users = await prisma.strava_users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends strava_usersFindUniqueOrThrowArgs>(args: SelectSubset<T, strava_usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__strava_usersClient<$Result.GetResult<Prisma.$strava_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Strava_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {strava_usersFindFirstArgs} args - Arguments to find a Strava_users
     * @example
     * // Get one Strava_users
     * const strava_users = await prisma.strava_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends strava_usersFindFirstArgs>(args?: SelectSubset<T, strava_usersFindFirstArgs<ExtArgs>>): Prisma__strava_usersClient<$Result.GetResult<Prisma.$strava_usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Strava_users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {strava_usersFindFirstOrThrowArgs} args - Arguments to find a Strava_users
     * @example
     * // Get one Strava_users
     * const strava_users = await prisma.strava_users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends strava_usersFindFirstOrThrowArgs>(args?: SelectSubset<T, strava_usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__strava_usersClient<$Result.GetResult<Prisma.$strava_usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Strava_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {strava_usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Strava_users
     * const strava_users = await prisma.strava_users.findMany()
     * 
     * // Get first 10 Strava_users
     * const strava_users = await prisma.strava_users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const strava_usersWithIdOnly = await prisma.strava_users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends strava_usersFindManyArgs>(args?: SelectSubset<T, strava_usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$strava_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Strava_users.
     * @param {strava_usersCreateArgs} args - Arguments to create a Strava_users.
     * @example
     * // Create one Strava_users
     * const Strava_users = await prisma.strava_users.create({
     *   data: {
     *     // ... data to create a Strava_users
     *   }
     * })
     * 
     */
    create<T extends strava_usersCreateArgs>(args: SelectSubset<T, strava_usersCreateArgs<ExtArgs>>): Prisma__strava_usersClient<$Result.GetResult<Prisma.$strava_usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Strava_users.
     * @param {strava_usersCreateManyArgs} args - Arguments to create many Strava_users.
     * @example
     * // Create many Strava_users
     * const strava_users = await prisma.strava_users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends strava_usersCreateManyArgs>(args?: SelectSubset<T, strava_usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Strava_users and returns the data saved in the database.
     * @param {strava_usersCreateManyAndReturnArgs} args - Arguments to create many Strava_users.
     * @example
     * // Create many Strava_users
     * const strava_users = await prisma.strava_users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Strava_users and only return the `id`
     * const strava_usersWithIdOnly = await prisma.strava_users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends strava_usersCreateManyAndReturnArgs>(args?: SelectSubset<T, strava_usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$strava_usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Strava_users.
     * @param {strava_usersDeleteArgs} args - Arguments to delete one Strava_users.
     * @example
     * // Delete one Strava_users
     * const Strava_users = await prisma.strava_users.delete({
     *   where: {
     *     // ... filter to delete one Strava_users
     *   }
     * })
     * 
     */
    delete<T extends strava_usersDeleteArgs>(args: SelectSubset<T, strava_usersDeleteArgs<ExtArgs>>): Prisma__strava_usersClient<$Result.GetResult<Prisma.$strava_usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Strava_users.
     * @param {strava_usersUpdateArgs} args - Arguments to update one Strava_users.
     * @example
     * // Update one Strava_users
     * const strava_users = await prisma.strava_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends strava_usersUpdateArgs>(args: SelectSubset<T, strava_usersUpdateArgs<ExtArgs>>): Prisma__strava_usersClient<$Result.GetResult<Prisma.$strava_usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Strava_users.
     * @param {strava_usersDeleteManyArgs} args - Arguments to filter Strava_users to delete.
     * @example
     * // Delete a few Strava_users
     * const { count } = await prisma.strava_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends strava_usersDeleteManyArgs>(args?: SelectSubset<T, strava_usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Strava_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {strava_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Strava_users
     * const strava_users = await prisma.strava_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends strava_usersUpdateManyArgs>(args: SelectSubset<T, strava_usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Strava_users and returns the data updated in the database.
     * @param {strava_usersUpdateManyAndReturnArgs} args - Arguments to update many Strava_users.
     * @example
     * // Update many Strava_users
     * const strava_users = await prisma.strava_users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Strava_users and only return the `id`
     * const strava_usersWithIdOnly = await prisma.strava_users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends strava_usersUpdateManyAndReturnArgs>(args: SelectSubset<T, strava_usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$strava_usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Strava_users.
     * @param {strava_usersUpsertArgs} args - Arguments to update or create a Strava_users.
     * @example
     * // Update or create a Strava_users
     * const strava_users = await prisma.strava_users.upsert({
     *   create: {
     *     // ... data to create a Strava_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Strava_users we want to update
     *   }
     * })
     */
    upsert<T extends strava_usersUpsertArgs>(args: SelectSubset<T, strava_usersUpsertArgs<ExtArgs>>): Prisma__strava_usersClient<$Result.GetResult<Prisma.$strava_usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Strava_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {strava_usersCountArgs} args - Arguments to filter Strava_users to count.
     * @example
     * // Count the number of Strava_users
     * const count = await prisma.strava_users.count({
     *   where: {
     *     // ... the filter for the Strava_users we want to count
     *   }
     * })
    **/
    count<T extends strava_usersCountArgs>(
      args?: Subset<T, strava_usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Strava_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Strava_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Strava_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Strava_usersAggregateArgs>(args: Subset<T, Strava_usersAggregateArgs>): Prisma.PrismaPromise<GetStrava_usersAggregateType<T>>

    /**
     * Group by Strava_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {strava_usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends strava_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: strava_usersGroupByArgs['orderBy'] }
        : { orderBy?: strava_usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, strava_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStrava_usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the strava_users model
   */
  readonly fields: strava_usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for strava_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__strava_usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activities<T extends strava_users$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, strava_users$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the strava_users model
   */
  interface strava_usersFieldRefs {
    readonly id: FieldRef<"strava_users", 'String'>
    readonly strava_athlete_id: FieldRef<"strava_users", 'BigInt'>
    readonly athlete_data: FieldRef<"strava_users", 'Json'>
    readonly access_token: FieldRef<"strava_users", 'String'>
    readonly refresh_token: FieldRef<"strava_users", 'String'>
    readonly token_expires_at: FieldRef<"strava_users", 'DateTime'>
    readonly created_at: FieldRef<"strava_users", 'DateTime'>
    readonly updated_at: FieldRef<"strava_users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * strava_users findUnique
   */
  export type strava_usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the strava_users
     */
    select?: strava_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the strava_users
     */
    omit?: strava_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: strava_usersInclude<ExtArgs> | null
    /**
     * Filter, which strava_users to fetch.
     */
    where: strava_usersWhereUniqueInput
  }

  /**
   * strava_users findUniqueOrThrow
   */
  export type strava_usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the strava_users
     */
    select?: strava_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the strava_users
     */
    omit?: strava_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: strava_usersInclude<ExtArgs> | null
    /**
     * Filter, which strava_users to fetch.
     */
    where: strava_usersWhereUniqueInput
  }

  /**
   * strava_users findFirst
   */
  export type strava_usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the strava_users
     */
    select?: strava_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the strava_users
     */
    omit?: strava_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: strava_usersInclude<ExtArgs> | null
    /**
     * Filter, which strava_users to fetch.
     */
    where?: strava_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of strava_users to fetch.
     */
    orderBy?: strava_usersOrderByWithRelationInput | strava_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for strava_users.
     */
    cursor?: strava_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` strava_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` strava_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of strava_users.
     */
    distinct?: Strava_usersScalarFieldEnum | Strava_usersScalarFieldEnum[]
  }

  /**
   * strava_users findFirstOrThrow
   */
  export type strava_usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the strava_users
     */
    select?: strava_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the strava_users
     */
    omit?: strava_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: strava_usersInclude<ExtArgs> | null
    /**
     * Filter, which strava_users to fetch.
     */
    where?: strava_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of strava_users to fetch.
     */
    orderBy?: strava_usersOrderByWithRelationInput | strava_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for strava_users.
     */
    cursor?: strava_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` strava_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` strava_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of strava_users.
     */
    distinct?: Strava_usersScalarFieldEnum | Strava_usersScalarFieldEnum[]
  }

  /**
   * strava_users findMany
   */
  export type strava_usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the strava_users
     */
    select?: strava_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the strava_users
     */
    omit?: strava_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: strava_usersInclude<ExtArgs> | null
    /**
     * Filter, which strava_users to fetch.
     */
    where?: strava_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of strava_users to fetch.
     */
    orderBy?: strava_usersOrderByWithRelationInput | strava_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing strava_users.
     */
    cursor?: strava_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` strava_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` strava_users.
     */
    skip?: number
    distinct?: Strava_usersScalarFieldEnum | Strava_usersScalarFieldEnum[]
  }

  /**
   * strava_users create
   */
  export type strava_usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the strava_users
     */
    select?: strava_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the strava_users
     */
    omit?: strava_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: strava_usersInclude<ExtArgs> | null
    /**
     * The data needed to create a strava_users.
     */
    data: XOR<strava_usersCreateInput, strava_usersUncheckedCreateInput>
  }

  /**
   * strava_users createMany
   */
  export type strava_usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many strava_users.
     */
    data: strava_usersCreateManyInput | strava_usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * strava_users createManyAndReturn
   */
  export type strava_usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the strava_users
     */
    select?: strava_usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the strava_users
     */
    omit?: strava_usersOmit<ExtArgs> | null
    /**
     * The data used to create many strava_users.
     */
    data: strava_usersCreateManyInput | strava_usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * strava_users update
   */
  export type strava_usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the strava_users
     */
    select?: strava_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the strava_users
     */
    omit?: strava_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: strava_usersInclude<ExtArgs> | null
    /**
     * The data needed to update a strava_users.
     */
    data: XOR<strava_usersUpdateInput, strava_usersUncheckedUpdateInput>
    /**
     * Choose, which strava_users to update.
     */
    where: strava_usersWhereUniqueInput
  }

  /**
   * strava_users updateMany
   */
  export type strava_usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update strava_users.
     */
    data: XOR<strava_usersUpdateManyMutationInput, strava_usersUncheckedUpdateManyInput>
    /**
     * Filter which strava_users to update
     */
    where?: strava_usersWhereInput
    /**
     * Limit how many strava_users to update.
     */
    limit?: number
  }

  /**
   * strava_users updateManyAndReturn
   */
  export type strava_usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the strava_users
     */
    select?: strava_usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the strava_users
     */
    omit?: strava_usersOmit<ExtArgs> | null
    /**
     * The data used to update strava_users.
     */
    data: XOR<strava_usersUpdateManyMutationInput, strava_usersUncheckedUpdateManyInput>
    /**
     * Filter which strava_users to update
     */
    where?: strava_usersWhereInput
    /**
     * Limit how many strava_users to update.
     */
    limit?: number
  }

  /**
   * strava_users upsert
   */
  export type strava_usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the strava_users
     */
    select?: strava_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the strava_users
     */
    omit?: strava_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: strava_usersInclude<ExtArgs> | null
    /**
     * The filter to search for the strava_users to update in case it exists.
     */
    where: strava_usersWhereUniqueInput
    /**
     * In case the strava_users found by the `where` argument doesn't exist, create a new strava_users with this data.
     */
    create: XOR<strava_usersCreateInput, strava_usersUncheckedCreateInput>
    /**
     * In case the strava_users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<strava_usersUpdateInput, strava_usersUncheckedUpdateInput>
  }

  /**
   * strava_users delete
   */
  export type strava_usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the strava_users
     */
    select?: strava_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the strava_users
     */
    omit?: strava_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: strava_usersInclude<ExtArgs> | null
    /**
     * Filter which strava_users to delete.
     */
    where: strava_usersWhereUniqueInput
  }

  /**
   * strava_users deleteMany
   */
  export type strava_usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which strava_users to delete
     */
    where?: strava_usersWhereInput
    /**
     * Limit how many strava_users to delete.
     */
    limit?: number
  }

  /**
   * strava_users.activities
   */
  export type strava_users$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    where?: activitiesWhereInput
    orderBy?: activitiesOrderByWithRelationInput | activitiesOrderByWithRelationInput[]
    cursor?: activitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * strava_users without action
   */
  export type strava_usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the strava_users
     */
    select?: strava_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the strava_users
     */
    omit?: strava_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: strava_usersInclude<ExtArgs> | null
  }


  /**
   * Model test_table
   */

  export type AggregateTest_table = {
    _count: Test_tableCountAggregateOutputType | null
    _avg: Test_tableAvgAggregateOutputType | null
    _sum: Test_tableSumAggregateOutputType | null
    _min: Test_tableMinAggregateOutputType | null
    _max: Test_tableMaxAggregateOutputType | null
  }

  export type Test_tableAvgAggregateOutputType = {
    id: number | null
  }

  export type Test_tableSumAggregateOutputType = {
    id: bigint | null
  }

  export type Test_tableMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    text: string | null
  }

  export type Test_tableMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    text: string | null
  }

  export type Test_tableCountAggregateOutputType = {
    id: number
    created_at: number
    text: number
    _all: number
  }


  export type Test_tableAvgAggregateInputType = {
    id?: true
  }

  export type Test_tableSumAggregateInputType = {
    id?: true
  }

  export type Test_tableMinAggregateInputType = {
    id?: true
    created_at?: true
    text?: true
  }

  export type Test_tableMaxAggregateInputType = {
    id?: true
    created_at?: true
    text?: true
  }

  export type Test_tableCountAggregateInputType = {
    id?: true
    created_at?: true
    text?: true
    _all?: true
  }

  export type Test_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test_table to aggregate.
     */
    where?: test_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_tables to fetch.
     */
    orderBy?: test_tableOrderByWithRelationInput | test_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: test_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned test_tables
    **/
    _count?: true | Test_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Test_tableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Test_tableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Test_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Test_tableMaxAggregateInputType
  }

  export type GetTest_tableAggregateType<T extends Test_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateTest_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest_table[P]>
      : GetScalarType<T[P], AggregateTest_table[P]>
  }




  export type test_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: test_tableWhereInput
    orderBy?: test_tableOrderByWithAggregationInput | test_tableOrderByWithAggregationInput[]
    by: Test_tableScalarFieldEnum[] | Test_tableScalarFieldEnum
    having?: test_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Test_tableCountAggregateInputType | true
    _avg?: Test_tableAvgAggregateInputType
    _sum?: Test_tableSumAggregateInputType
    _min?: Test_tableMinAggregateInputType
    _max?: Test_tableMaxAggregateInputType
  }

  export type Test_tableGroupByOutputType = {
    id: bigint
    created_at: Date
    text: string | null
    _count: Test_tableCountAggregateOutputType | null
    _avg: Test_tableAvgAggregateOutputType | null
    _sum: Test_tableSumAggregateOutputType | null
    _min: Test_tableMinAggregateOutputType | null
    _max: Test_tableMaxAggregateOutputType | null
  }

  type GetTest_tableGroupByPayload<T extends test_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Test_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Test_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Test_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Test_tableGroupByOutputType[P]>
        }
      >
    >


  export type test_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    text?: boolean
  }, ExtArgs["result"]["test_table"]>

  export type test_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    text?: boolean
  }, ExtArgs["result"]["test_table"]>

  export type test_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    text?: boolean
  }, ExtArgs["result"]["test_table"]>

  export type test_tableSelectScalar = {
    id?: boolean
    created_at?: boolean
    text?: boolean
  }

  export type test_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "text", ExtArgs["result"]["test_table"]>

  export type $test_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "test_table"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      text: string | null
    }, ExtArgs["result"]["test_table"]>
    composites: {}
  }

  type test_tableGetPayload<S extends boolean | null | undefined | test_tableDefaultArgs> = $Result.GetResult<Prisma.$test_tablePayload, S>

  type test_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<test_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Test_tableCountAggregateInputType | true
    }

  export interface test_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['test_table'], meta: { name: 'test_table' } }
    /**
     * Find zero or one Test_table that matches the filter.
     * @param {test_tableFindUniqueArgs} args - Arguments to find a Test_table
     * @example
     * // Get one Test_table
     * const test_table = await prisma.test_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends test_tableFindUniqueArgs>(args: SelectSubset<T, test_tableFindUniqueArgs<ExtArgs>>): Prisma__test_tableClient<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {test_tableFindUniqueOrThrowArgs} args - Arguments to find a Test_table
     * @example
     * // Get one Test_table
     * const test_table = await prisma.test_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends test_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, test_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__test_tableClient<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_tableFindFirstArgs} args - Arguments to find a Test_table
     * @example
     * // Get one Test_table
     * const test_table = await prisma.test_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends test_tableFindFirstArgs>(args?: SelectSubset<T, test_tableFindFirstArgs<ExtArgs>>): Prisma__test_tableClient<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_tableFindFirstOrThrowArgs} args - Arguments to find a Test_table
     * @example
     * // Get one Test_table
     * const test_table = await prisma.test_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends test_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, test_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__test_tableClient<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Test_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Test_tables
     * const test_tables = await prisma.test_table.findMany()
     * 
     * // Get first 10 Test_tables
     * const test_tables = await prisma.test_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const test_tableWithIdOnly = await prisma.test_table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends test_tableFindManyArgs>(args?: SelectSubset<T, test_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test_table.
     * @param {test_tableCreateArgs} args - Arguments to create a Test_table.
     * @example
     * // Create one Test_table
     * const Test_table = await prisma.test_table.create({
     *   data: {
     *     // ... data to create a Test_table
     *   }
     * })
     * 
     */
    create<T extends test_tableCreateArgs>(args: SelectSubset<T, test_tableCreateArgs<ExtArgs>>): Prisma__test_tableClient<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Test_tables.
     * @param {test_tableCreateManyArgs} args - Arguments to create many Test_tables.
     * @example
     * // Create many Test_tables
     * const test_table = await prisma.test_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends test_tableCreateManyArgs>(args?: SelectSubset<T, test_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Test_tables and returns the data saved in the database.
     * @param {test_tableCreateManyAndReturnArgs} args - Arguments to create many Test_tables.
     * @example
     * // Create many Test_tables
     * const test_table = await prisma.test_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Test_tables and only return the `id`
     * const test_tableWithIdOnly = await prisma.test_table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends test_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, test_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Test_table.
     * @param {test_tableDeleteArgs} args - Arguments to delete one Test_table.
     * @example
     * // Delete one Test_table
     * const Test_table = await prisma.test_table.delete({
     *   where: {
     *     // ... filter to delete one Test_table
     *   }
     * })
     * 
     */
    delete<T extends test_tableDeleteArgs>(args: SelectSubset<T, test_tableDeleteArgs<ExtArgs>>): Prisma__test_tableClient<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test_table.
     * @param {test_tableUpdateArgs} args - Arguments to update one Test_table.
     * @example
     * // Update one Test_table
     * const test_table = await prisma.test_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends test_tableUpdateArgs>(args: SelectSubset<T, test_tableUpdateArgs<ExtArgs>>): Prisma__test_tableClient<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Test_tables.
     * @param {test_tableDeleteManyArgs} args - Arguments to filter Test_tables to delete.
     * @example
     * // Delete a few Test_tables
     * const { count } = await prisma.test_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends test_tableDeleteManyArgs>(args?: SelectSubset<T, test_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Test_tables
     * const test_table = await prisma.test_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends test_tableUpdateManyArgs>(args: SelectSubset<T, test_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test_tables and returns the data updated in the database.
     * @param {test_tableUpdateManyAndReturnArgs} args - Arguments to update many Test_tables.
     * @example
     * // Update many Test_tables
     * const test_table = await prisma.test_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Test_tables and only return the `id`
     * const test_tableWithIdOnly = await prisma.test_table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends test_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, test_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Test_table.
     * @param {test_tableUpsertArgs} args - Arguments to update or create a Test_table.
     * @example
     * // Update or create a Test_table
     * const test_table = await prisma.test_table.upsert({
     *   create: {
     *     // ... data to create a Test_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test_table we want to update
     *   }
     * })
     */
    upsert<T extends test_tableUpsertArgs>(args: SelectSubset<T, test_tableUpsertArgs<ExtArgs>>): Prisma__test_tableClient<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Test_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_tableCountArgs} args - Arguments to filter Test_tables to count.
     * @example
     * // Count the number of Test_tables
     * const count = await prisma.test_table.count({
     *   where: {
     *     // ... the filter for the Test_tables we want to count
     *   }
     * })
    **/
    count<T extends test_tableCountArgs>(
      args?: Subset<T, test_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Test_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Test_tableAggregateArgs>(args: Subset<T, Test_tableAggregateArgs>): Prisma.PrismaPromise<GetTest_tableAggregateType<T>>

    /**
     * Group by Test_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends test_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: test_tableGroupByArgs['orderBy'] }
        : { orderBy?: test_tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, test_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTest_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the test_table model
   */
  readonly fields: test_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for test_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__test_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the test_table model
   */
  interface test_tableFieldRefs {
    readonly id: FieldRef<"test_table", 'BigInt'>
    readonly created_at: FieldRef<"test_table", 'DateTime'>
    readonly text: FieldRef<"test_table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * test_table findUnique
   */
  export type test_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * Filter, which test_table to fetch.
     */
    where: test_tableWhereUniqueInput
  }

  /**
   * test_table findUniqueOrThrow
   */
  export type test_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * Filter, which test_table to fetch.
     */
    where: test_tableWhereUniqueInput
  }

  /**
   * test_table findFirst
   */
  export type test_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * Filter, which test_table to fetch.
     */
    where?: test_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_tables to fetch.
     */
    orderBy?: test_tableOrderByWithRelationInput | test_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test_tables.
     */
    cursor?: test_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test_tables.
     */
    distinct?: Test_tableScalarFieldEnum | Test_tableScalarFieldEnum[]
  }

  /**
   * test_table findFirstOrThrow
   */
  export type test_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * Filter, which test_table to fetch.
     */
    where?: test_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_tables to fetch.
     */
    orderBy?: test_tableOrderByWithRelationInput | test_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test_tables.
     */
    cursor?: test_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test_tables.
     */
    distinct?: Test_tableScalarFieldEnum | Test_tableScalarFieldEnum[]
  }

  /**
   * test_table findMany
   */
  export type test_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * Filter, which test_tables to fetch.
     */
    where?: test_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_tables to fetch.
     */
    orderBy?: test_tableOrderByWithRelationInput | test_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing test_tables.
     */
    cursor?: test_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_tables.
     */
    skip?: number
    distinct?: Test_tableScalarFieldEnum | Test_tableScalarFieldEnum[]
  }

  /**
   * test_table create
   */
  export type test_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * The data needed to create a test_table.
     */
    data?: XOR<test_tableCreateInput, test_tableUncheckedCreateInput>
  }

  /**
   * test_table createMany
   */
  export type test_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many test_tables.
     */
    data: test_tableCreateManyInput | test_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * test_table createManyAndReturn
   */
  export type test_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * The data used to create many test_tables.
     */
    data: test_tableCreateManyInput | test_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * test_table update
   */
  export type test_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * The data needed to update a test_table.
     */
    data: XOR<test_tableUpdateInput, test_tableUncheckedUpdateInput>
    /**
     * Choose, which test_table to update.
     */
    where: test_tableWhereUniqueInput
  }

  /**
   * test_table updateMany
   */
  export type test_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update test_tables.
     */
    data: XOR<test_tableUpdateManyMutationInput, test_tableUncheckedUpdateManyInput>
    /**
     * Filter which test_tables to update
     */
    where?: test_tableWhereInput
    /**
     * Limit how many test_tables to update.
     */
    limit?: number
  }

  /**
   * test_table updateManyAndReturn
   */
  export type test_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * The data used to update test_tables.
     */
    data: XOR<test_tableUpdateManyMutationInput, test_tableUncheckedUpdateManyInput>
    /**
     * Filter which test_tables to update
     */
    where?: test_tableWhereInput
    /**
     * Limit how many test_tables to update.
     */
    limit?: number
  }

  /**
   * test_table upsert
   */
  export type test_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * The filter to search for the test_table to update in case it exists.
     */
    where: test_tableWhereUniqueInput
    /**
     * In case the test_table found by the `where` argument doesn't exist, create a new test_table with this data.
     */
    create: XOR<test_tableCreateInput, test_tableUncheckedCreateInput>
    /**
     * In case the test_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<test_tableUpdateInput, test_tableUncheckedUpdateInput>
  }

  /**
   * test_table delete
   */
  export type test_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * Filter which test_table to delete.
     */
    where: test_tableWhereUniqueInput
  }

  /**
   * test_table deleteMany
   */
  export type test_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test_tables to delete
     */
    where?: test_tableWhereInput
    /**
     * Limit how many test_tables to delete.
     */
    limit?: number
  }

  /**
   * test_table without action
   */
  export type test_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ActivitiesScalarFieldEnum: {
    id: 'id',
    strava_id: 'strava_id',
    strava_athlete_id: 'strava_athlete_id',
    name: 'name',
    activity_type: 'activity_type',
    start_date: 'start_date',
    distance: 'distance',
    moving_time: 'moving_time',
    elapsed_time: 'elapsed_time',
    total_elevation_gain: 'total_elevation_gain',
    start_latlng: 'start_latlng',
    end_latlng: 'end_latlng',
    map_data: 'map_data',
    area_captured: 'area_captured',
    activity_json: 'activity_json',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ActivitiesScalarFieldEnum = (typeof ActivitiesScalarFieldEnum)[keyof typeof ActivitiesScalarFieldEnum]


  export const InstrumentsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type InstrumentsScalarFieldEnum = (typeof InstrumentsScalarFieldEnum)[keyof typeof InstrumentsScalarFieldEnum]


  export const NotesScalarFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type NotesScalarFieldEnum = (typeof NotesScalarFieldEnum)[keyof typeof NotesScalarFieldEnum]


  export const Strava_usersScalarFieldEnum: {
    id: 'id',
    strava_athlete_id: 'strava_athlete_id',
    athlete_data: 'athlete_data',
    access_token: 'access_token',
    refresh_token: 'refresh_token',
    token_expires_at: 'token_expires_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Strava_usersScalarFieldEnum = (typeof Strava_usersScalarFieldEnum)[keyof typeof Strava_usersScalarFieldEnum]


  export const Test_tableScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    text: 'text'
  };

  export type Test_tableScalarFieldEnum = (typeof Test_tableScalarFieldEnum)[keyof typeof Test_tableScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type activitiesWhereInput = {
    AND?: activitiesWhereInput | activitiesWhereInput[]
    OR?: activitiesWhereInput[]
    NOT?: activitiesWhereInput | activitiesWhereInput[]
    id?: UuidFilter<"activities"> | string
    strava_id?: BigIntFilter<"activities"> | bigint | number
    strava_athlete_id?: BigIntFilter<"activities"> | bigint | number
    name?: StringFilter<"activities"> | string
    activity_type?: StringFilter<"activities"> | string
    start_date?: DateTimeFilter<"activities"> | Date | string
    distance?: DecimalFilter<"activities"> | Decimal | DecimalJsLike | number | string
    moving_time?: IntFilter<"activities"> | number
    elapsed_time?: IntFilter<"activities"> | number
    total_elevation_gain?: DecimalFilter<"activities"> | Decimal | DecimalJsLike | number | string
    start_latlng?: JsonNullableFilter<"activities">
    end_latlng?: JsonNullableFilter<"activities">
    map_data?: JsonNullableFilter<"activities">
    area_captured?: DecimalNullableFilter<"activities"> | Decimal | DecimalJsLike | number | string | null
    activity_json?: JsonFilter<"activities">
    created_at?: DateTimeFilter<"activities"> | Date | string
    updated_at?: DateTimeFilter<"activities"> | Date | string
    strava_users?: XOR<Strava_usersScalarRelationFilter, strava_usersWhereInput>
  }

  export type activitiesOrderByWithRelationInput = {
    id?: SortOrder
    strava_id?: SortOrder
    strava_athlete_id?: SortOrder
    name?: SortOrder
    activity_type?: SortOrder
    start_date?: SortOrder
    distance?: SortOrder
    moving_time?: SortOrder
    elapsed_time?: SortOrder
    total_elevation_gain?: SortOrder
    start_latlng?: SortOrderInput | SortOrder
    end_latlng?: SortOrderInput | SortOrder
    map_data?: SortOrderInput | SortOrder
    area_captured?: SortOrderInput | SortOrder
    activity_json?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    strava_users?: strava_usersOrderByWithRelationInput
  }

  export type activitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    strava_id?: bigint | number
    AND?: activitiesWhereInput | activitiesWhereInput[]
    OR?: activitiesWhereInput[]
    NOT?: activitiesWhereInput | activitiesWhereInput[]
    strava_athlete_id?: BigIntFilter<"activities"> | bigint | number
    name?: StringFilter<"activities"> | string
    activity_type?: StringFilter<"activities"> | string
    start_date?: DateTimeFilter<"activities"> | Date | string
    distance?: DecimalFilter<"activities"> | Decimal | DecimalJsLike | number | string
    moving_time?: IntFilter<"activities"> | number
    elapsed_time?: IntFilter<"activities"> | number
    total_elevation_gain?: DecimalFilter<"activities"> | Decimal | DecimalJsLike | number | string
    start_latlng?: JsonNullableFilter<"activities">
    end_latlng?: JsonNullableFilter<"activities">
    map_data?: JsonNullableFilter<"activities">
    area_captured?: DecimalNullableFilter<"activities"> | Decimal | DecimalJsLike | number | string | null
    activity_json?: JsonFilter<"activities">
    created_at?: DateTimeFilter<"activities"> | Date | string
    updated_at?: DateTimeFilter<"activities"> | Date | string
    strava_users?: XOR<Strava_usersScalarRelationFilter, strava_usersWhereInput>
  }, "id" | "strava_id">

  export type activitiesOrderByWithAggregationInput = {
    id?: SortOrder
    strava_id?: SortOrder
    strava_athlete_id?: SortOrder
    name?: SortOrder
    activity_type?: SortOrder
    start_date?: SortOrder
    distance?: SortOrder
    moving_time?: SortOrder
    elapsed_time?: SortOrder
    total_elevation_gain?: SortOrder
    start_latlng?: SortOrderInput | SortOrder
    end_latlng?: SortOrderInput | SortOrder
    map_data?: SortOrderInput | SortOrder
    area_captured?: SortOrderInput | SortOrder
    activity_json?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: activitiesCountOrderByAggregateInput
    _avg?: activitiesAvgOrderByAggregateInput
    _max?: activitiesMaxOrderByAggregateInput
    _min?: activitiesMinOrderByAggregateInput
    _sum?: activitiesSumOrderByAggregateInput
  }

  export type activitiesScalarWhereWithAggregatesInput = {
    AND?: activitiesScalarWhereWithAggregatesInput | activitiesScalarWhereWithAggregatesInput[]
    OR?: activitiesScalarWhereWithAggregatesInput[]
    NOT?: activitiesScalarWhereWithAggregatesInput | activitiesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"activities"> | string
    strava_id?: BigIntWithAggregatesFilter<"activities"> | bigint | number
    strava_athlete_id?: BigIntWithAggregatesFilter<"activities"> | bigint | number
    name?: StringWithAggregatesFilter<"activities"> | string
    activity_type?: StringWithAggregatesFilter<"activities"> | string
    start_date?: DateTimeWithAggregatesFilter<"activities"> | Date | string
    distance?: DecimalWithAggregatesFilter<"activities"> | Decimal | DecimalJsLike | number | string
    moving_time?: IntWithAggregatesFilter<"activities"> | number
    elapsed_time?: IntWithAggregatesFilter<"activities"> | number
    total_elevation_gain?: DecimalWithAggregatesFilter<"activities"> | Decimal | DecimalJsLike | number | string
    start_latlng?: JsonNullableWithAggregatesFilter<"activities">
    end_latlng?: JsonNullableWithAggregatesFilter<"activities">
    map_data?: JsonNullableWithAggregatesFilter<"activities">
    area_captured?: DecimalNullableWithAggregatesFilter<"activities"> | Decimal | DecimalJsLike | number | string | null
    activity_json?: JsonWithAggregatesFilter<"activities">
    created_at?: DateTimeWithAggregatesFilter<"activities"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"activities"> | Date | string
  }

  export type instrumentsWhereInput = {
    AND?: instrumentsWhereInput | instrumentsWhereInput[]
    OR?: instrumentsWhereInput[]
    NOT?: instrumentsWhereInput | instrumentsWhereInput[]
    id?: BigIntFilter<"instruments"> | bigint | number
    name?: StringFilter<"instruments"> | string
  }

  export type instrumentsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type instrumentsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: instrumentsWhereInput | instrumentsWhereInput[]
    OR?: instrumentsWhereInput[]
    NOT?: instrumentsWhereInput | instrumentsWhereInput[]
    name?: StringFilter<"instruments"> | string
  }, "id">

  export type instrumentsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: instrumentsCountOrderByAggregateInput
    _avg?: instrumentsAvgOrderByAggregateInput
    _max?: instrumentsMaxOrderByAggregateInput
    _min?: instrumentsMinOrderByAggregateInput
    _sum?: instrumentsSumOrderByAggregateInput
  }

  export type instrumentsScalarWhereWithAggregatesInput = {
    AND?: instrumentsScalarWhereWithAggregatesInput | instrumentsScalarWhereWithAggregatesInput[]
    OR?: instrumentsScalarWhereWithAggregatesInput[]
    NOT?: instrumentsScalarWhereWithAggregatesInput | instrumentsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"instruments"> | bigint | number
    name?: StringWithAggregatesFilter<"instruments"> | string
  }

  export type notesWhereInput = {
    AND?: notesWhereInput | notesWhereInput[]
    OR?: notesWhereInput[]
    NOT?: notesWhereInput | notesWhereInput[]
    id?: BigIntFilter<"notes"> | bigint | number
    title?: StringNullableFilter<"notes"> | string | null
  }

  export type notesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
  }

  export type notesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: notesWhereInput | notesWhereInput[]
    OR?: notesWhereInput[]
    NOT?: notesWhereInput | notesWhereInput[]
    title?: StringNullableFilter<"notes"> | string | null
  }, "id">

  export type notesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    _count?: notesCountOrderByAggregateInput
    _avg?: notesAvgOrderByAggregateInput
    _max?: notesMaxOrderByAggregateInput
    _min?: notesMinOrderByAggregateInput
    _sum?: notesSumOrderByAggregateInput
  }

  export type notesScalarWhereWithAggregatesInput = {
    AND?: notesScalarWhereWithAggregatesInput | notesScalarWhereWithAggregatesInput[]
    OR?: notesScalarWhereWithAggregatesInput[]
    NOT?: notesScalarWhereWithAggregatesInput | notesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"notes"> | bigint | number
    title?: StringNullableWithAggregatesFilter<"notes"> | string | null
  }

  export type strava_usersWhereInput = {
    AND?: strava_usersWhereInput | strava_usersWhereInput[]
    OR?: strava_usersWhereInput[]
    NOT?: strava_usersWhereInput | strava_usersWhereInput[]
    id?: UuidFilter<"strava_users"> | string
    strava_athlete_id?: BigIntFilter<"strava_users"> | bigint | number
    athlete_data?: JsonFilter<"strava_users">
    access_token?: StringFilter<"strava_users"> | string
    refresh_token?: StringFilter<"strava_users"> | string
    token_expires_at?: DateTimeFilter<"strava_users"> | Date | string
    created_at?: DateTimeFilter<"strava_users"> | Date | string
    updated_at?: DateTimeFilter<"strava_users"> | Date | string
    activities?: ActivitiesListRelationFilter
  }

  export type strava_usersOrderByWithRelationInput = {
    id?: SortOrder
    strava_athlete_id?: SortOrder
    athlete_data?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    token_expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    activities?: activitiesOrderByRelationAggregateInput
  }

  export type strava_usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    strava_athlete_id?: bigint | number
    AND?: strava_usersWhereInput | strava_usersWhereInput[]
    OR?: strava_usersWhereInput[]
    NOT?: strava_usersWhereInput | strava_usersWhereInput[]
    athlete_data?: JsonFilter<"strava_users">
    access_token?: StringFilter<"strava_users"> | string
    refresh_token?: StringFilter<"strava_users"> | string
    token_expires_at?: DateTimeFilter<"strava_users"> | Date | string
    created_at?: DateTimeFilter<"strava_users"> | Date | string
    updated_at?: DateTimeFilter<"strava_users"> | Date | string
    activities?: ActivitiesListRelationFilter
  }, "id" | "strava_athlete_id">

  export type strava_usersOrderByWithAggregationInput = {
    id?: SortOrder
    strava_athlete_id?: SortOrder
    athlete_data?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    token_expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: strava_usersCountOrderByAggregateInput
    _avg?: strava_usersAvgOrderByAggregateInput
    _max?: strava_usersMaxOrderByAggregateInput
    _min?: strava_usersMinOrderByAggregateInput
    _sum?: strava_usersSumOrderByAggregateInput
  }

  export type strava_usersScalarWhereWithAggregatesInput = {
    AND?: strava_usersScalarWhereWithAggregatesInput | strava_usersScalarWhereWithAggregatesInput[]
    OR?: strava_usersScalarWhereWithAggregatesInput[]
    NOT?: strava_usersScalarWhereWithAggregatesInput | strava_usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"strava_users"> | string
    strava_athlete_id?: BigIntWithAggregatesFilter<"strava_users"> | bigint | number
    athlete_data?: JsonWithAggregatesFilter<"strava_users">
    access_token?: StringWithAggregatesFilter<"strava_users"> | string
    refresh_token?: StringWithAggregatesFilter<"strava_users"> | string
    token_expires_at?: DateTimeWithAggregatesFilter<"strava_users"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"strava_users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"strava_users"> | Date | string
  }

  export type test_tableWhereInput = {
    AND?: test_tableWhereInput | test_tableWhereInput[]
    OR?: test_tableWhereInput[]
    NOT?: test_tableWhereInput | test_tableWhereInput[]
    id?: BigIntFilter<"test_table"> | bigint | number
    created_at?: DateTimeFilter<"test_table"> | Date | string
    text?: StringNullableFilter<"test_table"> | string | null
  }

  export type test_tableOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrderInput | SortOrder
  }

  export type test_tableWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: test_tableWhereInput | test_tableWhereInput[]
    OR?: test_tableWhereInput[]
    NOT?: test_tableWhereInput | test_tableWhereInput[]
    created_at?: DateTimeFilter<"test_table"> | Date | string
    text?: StringNullableFilter<"test_table"> | string | null
  }, "id">

  export type test_tableOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrderInput | SortOrder
    _count?: test_tableCountOrderByAggregateInput
    _avg?: test_tableAvgOrderByAggregateInput
    _max?: test_tableMaxOrderByAggregateInput
    _min?: test_tableMinOrderByAggregateInput
    _sum?: test_tableSumOrderByAggregateInput
  }

  export type test_tableScalarWhereWithAggregatesInput = {
    AND?: test_tableScalarWhereWithAggregatesInput | test_tableScalarWhereWithAggregatesInput[]
    OR?: test_tableScalarWhereWithAggregatesInput[]
    NOT?: test_tableScalarWhereWithAggregatesInput | test_tableScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"test_table"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"test_table"> | Date | string
    text?: StringNullableWithAggregatesFilter<"test_table"> | string | null
  }

  export type activitiesCreateInput = {
    id?: string
    strava_id: bigint | number
    name: string
    activity_type: string
    start_date: Date | string
    distance: Decimal | DecimalJsLike | number | string
    moving_time: number
    elapsed_time: number
    total_elevation_gain: Decimal | DecimalJsLike | number | string
    start_latlng?: NullableJsonNullValueInput | InputJsonValue
    end_latlng?: NullableJsonNullValueInput | InputJsonValue
    map_data?: NullableJsonNullValueInput | InputJsonValue
    area_captured?: Decimal | DecimalJsLike | number | string | null
    activity_json: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    strava_users: strava_usersCreateNestedOneWithoutActivitiesInput
  }

  export type activitiesUncheckedCreateInput = {
    id?: string
    strava_id: bigint | number
    strava_athlete_id: bigint | number
    name: string
    activity_type: string
    start_date: Date | string
    distance: Decimal | DecimalJsLike | number | string
    moving_time: number
    elapsed_time: number
    total_elevation_gain: Decimal | DecimalJsLike | number | string
    start_latlng?: NullableJsonNullValueInput | InputJsonValue
    end_latlng?: NullableJsonNullValueInput | InputJsonValue
    map_data?: NullableJsonNullValueInput | InputJsonValue
    area_captured?: Decimal | DecimalJsLike | number | string | null
    activity_json: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type activitiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    strava_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    activity_type?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moving_time?: IntFieldUpdateOperationsInput | number
    elapsed_time?: IntFieldUpdateOperationsInput | number
    total_elevation_gain?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_latlng?: NullableJsonNullValueInput | InputJsonValue
    end_latlng?: NullableJsonNullValueInput | InputJsonValue
    map_data?: NullableJsonNullValueInput | InputJsonValue
    area_captured?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    activity_json?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    strava_users?: strava_usersUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type activitiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    strava_id?: BigIntFieldUpdateOperationsInput | bigint | number
    strava_athlete_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    activity_type?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moving_time?: IntFieldUpdateOperationsInput | number
    elapsed_time?: IntFieldUpdateOperationsInput | number
    total_elevation_gain?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_latlng?: NullableJsonNullValueInput | InputJsonValue
    end_latlng?: NullableJsonNullValueInput | InputJsonValue
    map_data?: NullableJsonNullValueInput | InputJsonValue
    area_captured?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    activity_json?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activitiesCreateManyInput = {
    id?: string
    strava_id: bigint | number
    strava_athlete_id: bigint | number
    name: string
    activity_type: string
    start_date: Date | string
    distance: Decimal | DecimalJsLike | number | string
    moving_time: number
    elapsed_time: number
    total_elevation_gain: Decimal | DecimalJsLike | number | string
    start_latlng?: NullableJsonNullValueInput | InputJsonValue
    end_latlng?: NullableJsonNullValueInput | InputJsonValue
    map_data?: NullableJsonNullValueInput | InputJsonValue
    area_captured?: Decimal | DecimalJsLike | number | string | null
    activity_json: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type activitiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    strava_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    activity_type?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moving_time?: IntFieldUpdateOperationsInput | number
    elapsed_time?: IntFieldUpdateOperationsInput | number
    total_elevation_gain?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_latlng?: NullableJsonNullValueInput | InputJsonValue
    end_latlng?: NullableJsonNullValueInput | InputJsonValue
    map_data?: NullableJsonNullValueInput | InputJsonValue
    area_captured?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    activity_json?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activitiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    strava_id?: BigIntFieldUpdateOperationsInput | bigint | number
    strava_athlete_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    activity_type?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moving_time?: IntFieldUpdateOperationsInput | number
    elapsed_time?: IntFieldUpdateOperationsInput | number
    total_elevation_gain?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_latlng?: NullableJsonNullValueInput | InputJsonValue
    end_latlng?: NullableJsonNullValueInput | InputJsonValue
    map_data?: NullableJsonNullValueInput | InputJsonValue
    area_captured?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    activity_json?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type instrumentsCreateInput = {
    id?: bigint | number
    name: string
  }

  export type instrumentsUncheckedCreateInput = {
    id?: bigint | number
    name: string
  }

  export type instrumentsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type instrumentsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type instrumentsCreateManyInput = {
    id?: bigint | number
    name: string
  }

  export type instrumentsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type instrumentsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type notesCreateInput = {
    id?: bigint | number
    title?: string | null
  }

  export type notesUncheckedCreateInput = {
    id?: bigint | number
    title?: string | null
  }

  export type notesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type notesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type notesCreateManyInput = {
    id?: bigint | number
    title?: string | null
  }

  export type notesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type notesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type strava_usersCreateInput = {
    id?: string
    strava_athlete_id: bigint | number
    athlete_data: JsonNullValueInput | InputJsonValue
    access_token: string
    refresh_token: string
    token_expires_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    activities?: activitiesCreateNestedManyWithoutStrava_usersInput
  }

  export type strava_usersUncheckedCreateInput = {
    id?: string
    strava_athlete_id: bigint | number
    athlete_data: JsonNullValueInput | InputJsonValue
    access_token: string
    refresh_token: string
    token_expires_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    activities?: activitiesUncheckedCreateNestedManyWithoutStrava_usersInput
  }

  export type strava_usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    strava_athlete_id?: BigIntFieldUpdateOperationsInput | bigint | number
    athlete_data?: JsonNullValueInput | InputJsonValue
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    token_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: activitiesUpdateManyWithoutStrava_usersNestedInput
  }

  export type strava_usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    strava_athlete_id?: BigIntFieldUpdateOperationsInput | bigint | number
    athlete_data?: JsonNullValueInput | InputJsonValue
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    token_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: activitiesUncheckedUpdateManyWithoutStrava_usersNestedInput
  }

  export type strava_usersCreateManyInput = {
    id?: string
    strava_athlete_id: bigint | number
    athlete_data: JsonNullValueInput | InputJsonValue
    access_token: string
    refresh_token: string
    token_expires_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type strava_usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    strava_athlete_id?: BigIntFieldUpdateOperationsInput | bigint | number
    athlete_data?: JsonNullValueInput | InputJsonValue
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    token_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type strava_usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    strava_athlete_id?: BigIntFieldUpdateOperationsInput | bigint | number
    athlete_data?: JsonNullValueInput | InputJsonValue
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    token_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type test_tableCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    text?: string | null
  }

  export type test_tableUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    text?: string | null
  }

  export type test_tableUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type test_tableUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type test_tableCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    text?: string | null
  }

  export type test_tableUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type test_tableUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type Strava_usersScalarRelationFilter = {
    is?: strava_usersWhereInput
    isNot?: strava_usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type activitiesCountOrderByAggregateInput = {
    id?: SortOrder
    strava_id?: SortOrder
    strava_athlete_id?: SortOrder
    name?: SortOrder
    activity_type?: SortOrder
    start_date?: SortOrder
    distance?: SortOrder
    moving_time?: SortOrder
    elapsed_time?: SortOrder
    total_elevation_gain?: SortOrder
    start_latlng?: SortOrder
    end_latlng?: SortOrder
    map_data?: SortOrder
    area_captured?: SortOrder
    activity_json?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type activitiesAvgOrderByAggregateInput = {
    strava_id?: SortOrder
    strava_athlete_id?: SortOrder
    distance?: SortOrder
    moving_time?: SortOrder
    elapsed_time?: SortOrder
    total_elevation_gain?: SortOrder
    area_captured?: SortOrder
  }

  export type activitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    strava_id?: SortOrder
    strava_athlete_id?: SortOrder
    name?: SortOrder
    activity_type?: SortOrder
    start_date?: SortOrder
    distance?: SortOrder
    moving_time?: SortOrder
    elapsed_time?: SortOrder
    total_elevation_gain?: SortOrder
    area_captured?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type activitiesMinOrderByAggregateInput = {
    id?: SortOrder
    strava_id?: SortOrder
    strava_athlete_id?: SortOrder
    name?: SortOrder
    activity_type?: SortOrder
    start_date?: SortOrder
    distance?: SortOrder
    moving_time?: SortOrder
    elapsed_time?: SortOrder
    total_elevation_gain?: SortOrder
    area_captured?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type activitiesSumOrderByAggregateInput = {
    strava_id?: SortOrder
    strava_athlete_id?: SortOrder
    distance?: SortOrder
    moving_time?: SortOrder
    elapsed_time?: SortOrder
    total_elevation_gain?: SortOrder
    area_captured?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type instrumentsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type instrumentsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type instrumentsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type instrumentsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type instrumentsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type notesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type notesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type notesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type notesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type notesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ActivitiesListRelationFilter = {
    every?: activitiesWhereInput
    some?: activitiesWhereInput
    none?: activitiesWhereInput
  }

  export type activitiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type strava_usersCountOrderByAggregateInput = {
    id?: SortOrder
    strava_athlete_id?: SortOrder
    athlete_data?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    token_expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type strava_usersAvgOrderByAggregateInput = {
    strava_athlete_id?: SortOrder
  }

  export type strava_usersMaxOrderByAggregateInput = {
    id?: SortOrder
    strava_athlete_id?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    token_expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type strava_usersMinOrderByAggregateInput = {
    id?: SortOrder
    strava_athlete_id?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    token_expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type strava_usersSumOrderByAggregateInput = {
    strava_athlete_id?: SortOrder
  }

  export type test_tableCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrder
  }

  export type test_tableAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type test_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrder
  }

  export type test_tableMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrder
  }

  export type test_tableSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type strava_usersCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<strava_usersCreateWithoutActivitiesInput, strava_usersUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: strava_usersCreateOrConnectWithoutActivitiesInput
    connect?: strava_usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type strava_usersUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<strava_usersCreateWithoutActivitiesInput, strava_usersUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: strava_usersCreateOrConnectWithoutActivitiesInput
    upsert?: strava_usersUpsertWithoutActivitiesInput
    connect?: strava_usersWhereUniqueInput
    update?: XOR<XOR<strava_usersUpdateToOneWithWhereWithoutActivitiesInput, strava_usersUpdateWithoutActivitiesInput>, strava_usersUncheckedUpdateWithoutActivitiesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type activitiesCreateNestedManyWithoutStrava_usersInput = {
    create?: XOR<activitiesCreateWithoutStrava_usersInput, activitiesUncheckedCreateWithoutStrava_usersInput> | activitiesCreateWithoutStrava_usersInput[] | activitiesUncheckedCreateWithoutStrava_usersInput[]
    connectOrCreate?: activitiesCreateOrConnectWithoutStrava_usersInput | activitiesCreateOrConnectWithoutStrava_usersInput[]
    createMany?: activitiesCreateManyStrava_usersInputEnvelope
    connect?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
  }

  export type activitiesUncheckedCreateNestedManyWithoutStrava_usersInput = {
    create?: XOR<activitiesCreateWithoutStrava_usersInput, activitiesUncheckedCreateWithoutStrava_usersInput> | activitiesCreateWithoutStrava_usersInput[] | activitiesUncheckedCreateWithoutStrava_usersInput[]
    connectOrCreate?: activitiesCreateOrConnectWithoutStrava_usersInput | activitiesCreateOrConnectWithoutStrava_usersInput[]
    createMany?: activitiesCreateManyStrava_usersInputEnvelope
    connect?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
  }

  export type activitiesUpdateManyWithoutStrava_usersNestedInput = {
    create?: XOR<activitiesCreateWithoutStrava_usersInput, activitiesUncheckedCreateWithoutStrava_usersInput> | activitiesCreateWithoutStrava_usersInput[] | activitiesUncheckedCreateWithoutStrava_usersInput[]
    connectOrCreate?: activitiesCreateOrConnectWithoutStrava_usersInput | activitiesCreateOrConnectWithoutStrava_usersInput[]
    upsert?: activitiesUpsertWithWhereUniqueWithoutStrava_usersInput | activitiesUpsertWithWhereUniqueWithoutStrava_usersInput[]
    createMany?: activitiesCreateManyStrava_usersInputEnvelope
    set?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    disconnect?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    delete?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    connect?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    update?: activitiesUpdateWithWhereUniqueWithoutStrava_usersInput | activitiesUpdateWithWhereUniqueWithoutStrava_usersInput[]
    updateMany?: activitiesUpdateManyWithWhereWithoutStrava_usersInput | activitiesUpdateManyWithWhereWithoutStrava_usersInput[]
    deleteMany?: activitiesScalarWhereInput | activitiesScalarWhereInput[]
  }

  export type activitiesUncheckedUpdateManyWithoutStrava_usersNestedInput = {
    create?: XOR<activitiesCreateWithoutStrava_usersInput, activitiesUncheckedCreateWithoutStrava_usersInput> | activitiesCreateWithoutStrava_usersInput[] | activitiesUncheckedCreateWithoutStrava_usersInput[]
    connectOrCreate?: activitiesCreateOrConnectWithoutStrava_usersInput | activitiesCreateOrConnectWithoutStrava_usersInput[]
    upsert?: activitiesUpsertWithWhereUniqueWithoutStrava_usersInput | activitiesUpsertWithWhereUniqueWithoutStrava_usersInput[]
    createMany?: activitiesCreateManyStrava_usersInputEnvelope
    set?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    disconnect?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    delete?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    connect?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    update?: activitiesUpdateWithWhereUniqueWithoutStrava_usersInput | activitiesUpdateWithWhereUniqueWithoutStrava_usersInput[]
    updateMany?: activitiesUpdateManyWithWhereWithoutStrava_usersInput | activitiesUpdateManyWithWhereWithoutStrava_usersInput[]
    deleteMany?: activitiesScalarWhereInput | activitiesScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type strava_usersCreateWithoutActivitiesInput = {
    id?: string
    strava_athlete_id: bigint | number
    athlete_data: JsonNullValueInput | InputJsonValue
    access_token: string
    refresh_token: string
    token_expires_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type strava_usersUncheckedCreateWithoutActivitiesInput = {
    id?: string
    strava_athlete_id: bigint | number
    athlete_data: JsonNullValueInput | InputJsonValue
    access_token: string
    refresh_token: string
    token_expires_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type strava_usersCreateOrConnectWithoutActivitiesInput = {
    where: strava_usersWhereUniqueInput
    create: XOR<strava_usersCreateWithoutActivitiesInput, strava_usersUncheckedCreateWithoutActivitiesInput>
  }

  export type strava_usersUpsertWithoutActivitiesInput = {
    update: XOR<strava_usersUpdateWithoutActivitiesInput, strava_usersUncheckedUpdateWithoutActivitiesInput>
    create: XOR<strava_usersCreateWithoutActivitiesInput, strava_usersUncheckedCreateWithoutActivitiesInput>
    where?: strava_usersWhereInput
  }

  export type strava_usersUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: strava_usersWhereInput
    data: XOR<strava_usersUpdateWithoutActivitiesInput, strava_usersUncheckedUpdateWithoutActivitiesInput>
  }

  export type strava_usersUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    strava_athlete_id?: BigIntFieldUpdateOperationsInput | bigint | number
    athlete_data?: JsonNullValueInput | InputJsonValue
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    token_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type strava_usersUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    strava_athlete_id?: BigIntFieldUpdateOperationsInput | bigint | number
    athlete_data?: JsonNullValueInput | InputJsonValue
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    token_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activitiesCreateWithoutStrava_usersInput = {
    id?: string
    strava_id: bigint | number
    name: string
    activity_type: string
    start_date: Date | string
    distance: Decimal | DecimalJsLike | number | string
    moving_time: number
    elapsed_time: number
    total_elevation_gain: Decimal | DecimalJsLike | number | string
    start_latlng?: NullableJsonNullValueInput | InputJsonValue
    end_latlng?: NullableJsonNullValueInput | InputJsonValue
    map_data?: NullableJsonNullValueInput | InputJsonValue
    area_captured?: Decimal | DecimalJsLike | number | string | null
    activity_json: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type activitiesUncheckedCreateWithoutStrava_usersInput = {
    id?: string
    strava_id: bigint | number
    name: string
    activity_type: string
    start_date: Date | string
    distance: Decimal | DecimalJsLike | number | string
    moving_time: number
    elapsed_time: number
    total_elevation_gain: Decimal | DecimalJsLike | number | string
    start_latlng?: NullableJsonNullValueInput | InputJsonValue
    end_latlng?: NullableJsonNullValueInput | InputJsonValue
    map_data?: NullableJsonNullValueInput | InputJsonValue
    area_captured?: Decimal | DecimalJsLike | number | string | null
    activity_json: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type activitiesCreateOrConnectWithoutStrava_usersInput = {
    where: activitiesWhereUniqueInput
    create: XOR<activitiesCreateWithoutStrava_usersInput, activitiesUncheckedCreateWithoutStrava_usersInput>
  }

  export type activitiesCreateManyStrava_usersInputEnvelope = {
    data: activitiesCreateManyStrava_usersInput | activitiesCreateManyStrava_usersInput[]
    skipDuplicates?: boolean
  }

  export type activitiesUpsertWithWhereUniqueWithoutStrava_usersInput = {
    where: activitiesWhereUniqueInput
    update: XOR<activitiesUpdateWithoutStrava_usersInput, activitiesUncheckedUpdateWithoutStrava_usersInput>
    create: XOR<activitiesCreateWithoutStrava_usersInput, activitiesUncheckedCreateWithoutStrava_usersInput>
  }

  export type activitiesUpdateWithWhereUniqueWithoutStrava_usersInput = {
    where: activitiesWhereUniqueInput
    data: XOR<activitiesUpdateWithoutStrava_usersInput, activitiesUncheckedUpdateWithoutStrava_usersInput>
  }

  export type activitiesUpdateManyWithWhereWithoutStrava_usersInput = {
    where: activitiesScalarWhereInput
    data: XOR<activitiesUpdateManyMutationInput, activitiesUncheckedUpdateManyWithoutStrava_usersInput>
  }

  export type activitiesScalarWhereInput = {
    AND?: activitiesScalarWhereInput | activitiesScalarWhereInput[]
    OR?: activitiesScalarWhereInput[]
    NOT?: activitiesScalarWhereInput | activitiesScalarWhereInput[]
    id?: UuidFilter<"activities"> | string
    strava_id?: BigIntFilter<"activities"> | bigint | number
    strava_athlete_id?: BigIntFilter<"activities"> | bigint | number
    name?: StringFilter<"activities"> | string
    activity_type?: StringFilter<"activities"> | string
    start_date?: DateTimeFilter<"activities"> | Date | string
    distance?: DecimalFilter<"activities"> | Decimal | DecimalJsLike | number | string
    moving_time?: IntFilter<"activities"> | number
    elapsed_time?: IntFilter<"activities"> | number
    total_elevation_gain?: DecimalFilter<"activities"> | Decimal | DecimalJsLike | number | string
    start_latlng?: JsonNullableFilter<"activities">
    end_latlng?: JsonNullableFilter<"activities">
    map_data?: JsonNullableFilter<"activities">
    area_captured?: DecimalNullableFilter<"activities"> | Decimal | DecimalJsLike | number | string | null
    activity_json?: JsonFilter<"activities">
    created_at?: DateTimeFilter<"activities"> | Date | string
    updated_at?: DateTimeFilter<"activities"> | Date | string
  }

  export type activitiesCreateManyStrava_usersInput = {
    id?: string
    strava_id: bigint | number
    name: string
    activity_type: string
    start_date: Date | string
    distance: Decimal | DecimalJsLike | number | string
    moving_time: number
    elapsed_time: number
    total_elevation_gain: Decimal | DecimalJsLike | number | string
    start_latlng?: NullableJsonNullValueInput | InputJsonValue
    end_latlng?: NullableJsonNullValueInput | InputJsonValue
    map_data?: NullableJsonNullValueInput | InputJsonValue
    area_captured?: Decimal | DecimalJsLike | number | string | null
    activity_json: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type activitiesUpdateWithoutStrava_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    strava_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    activity_type?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moving_time?: IntFieldUpdateOperationsInput | number
    elapsed_time?: IntFieldUpdateOperationsInput | number
    total_elevation_gain?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_latlng?: NullableJsonNullValueInput | InputJsonValue
    end_latlng?: NullableJsonNullValueInput | InputJsonValue
    map_data?: NullableJsonNullValueInput | InputJsonValue
    area_captured?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    activity_json?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activitiesUncheckedUpdateWithoutStrava_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    strava_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    activity_type?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moving_time?: IntFieldUpdateOperationsInput | number
    elapsed_time?: IntFieldUpdateOperationsInput | number
    total_elevation_gain?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_latlng?: NullableJsonNullValueInput | InputJsonValue
    end_latlng?: NullableJsonNullValueInput | InputJsonValue
    map_data?: NullableJsonNullValueInput | InputJsonValue
    area_captured?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    activity_json?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activitiesUncheckedUpdateManyWithoutStrava_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    strava_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    activity_type?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    moving_time?: IntFieldUpdateOperationsInput | number
    elapsed_time?: IntFieldUpdateOperationsInput | number
    total_elevation_gain?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_latlng?: NullableJsonNullValueInput | InputJsonValue
    end_latlng?: NullableJsonNullValueInput | InputJsonValue
    map_data?: NullableJsonNullValueInput | InputJsonValue
    area_captured?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    activity_json?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}