
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Rol
 * 
 */
export type Rol = $Result.DefaultSelection<Prisma.$RolPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Especialidad
 * 
 */
export type Especialidad = $Result.DefaultSelection<Prisma.$EspecialidadPayload>
/**
 * Model Servicio
 * 
 */
export type Servicio = $Result.DefaultSelection<Prisma.$ServicioPayload>
/**
 * Model ServicioAdicional
 * 
 */
export type ServicioAdicional = $Result.DefaultSelection<Prisma.$ServicioAdicionalPayload>
/**
 * Model Empleado
 * 
 */
export type Empleado = $Result.DefaultSelection<Prisma.$EmpleadoPayload>
/**
 * Model EstadoCita
 * 
 */
export type EstadoCita = $Result.DefaultSelection<Prisma.$EstadoCitaPayload>
/**
 * Model DiaSemana
 * 
 */
export type DiaSemana = $Result.DefaultSelection<Prisma.$DiaSemanaPayload>
/**
 * Model HorarioAtencion
 * 
 */
export type HorarioAtencion = $Result.DefaultSelection<Prisma.$HorarioAtencionPayload>
/**
 * Model TipoRestriccionHorario
 * 
 */
export type TipoRestriccionHorario = $Result.DefaultSelection<Prisma.$TipoRestriccionHorarioPayload>
/**
 * Model RestriccionHorario
 * 
 */
export type RestriccionHorario = $Result.DefaultSelection<Prisma.$RestriccionHorarioPayload>
/**
 * Model Cita
 * 
 */
export type Cita = $Result.DefaultSelection<Prisma.$CitaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Rols
 * const rols = await prisma.rol.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Rols
   * const rols = await prisma.rol.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.rol`: Exposes CRUD operations for the **Rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.RolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.especialidad`: Exposes CRUD operations for the **Especialidad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Especialidads
    * const especialidads = await prisma.especialidad.findMany()
    * ```
    */
  get especialidad(): Prisma.EspecialidadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicio`: Exposes CRUD operations for the **Servicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicios
    * const servicios = await prisma.servicio.findMany()
    * ```
    */
  get servicio(): Prisma.ServicioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicioAdicional`: Exposes CRUD operations for the **ServicioAdicional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServicioAdicionals
    * const servicioAdicionals = await prisma.servicioAdicional.findMany()
    * ```
    */
  get servicioAdicional(): Prisma.ServicioAdicionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.empleado`: Exposes CRUD operations for the **Empleado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empleados
    * const empleados = await prisma.empleado.findMany()
    * ```
    */
  get empleado(): Prisma.EmpleadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estadoCita`: Exposes CRUD operations for the **EstadoCita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EstadoCitas
    * const estadoCitas = await prisma.estadoCita.findMany()
    * ```
    */
  get estadoCita(): Prisma.EstadoCitaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diaSemana`: Exposes CRUD operations for the **DiaSemana** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiaSemanas
    * const diaSemanas = await prisma.diaSemana.findMany()
    * ```
    */
  get diaSemana(): Prisma.DiaSemanaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.horarioAtencion`: Exposes CRUD operations for the **HorarioAtencion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HorarioAtencions
    * const horarioAtencions = await prisma.horarioAtencion.findMany()
    * ```
    */
  get horarioAtencion(): Prisma.HorarioAtencionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoRestriccionHorario`: Exposes CRUD operations for the **TipoRestriccionHorario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoRestriccionHorarios
    * const tipoRestriccionHorarios = await prisma.tipoRestriccionHorario.findMany()
    * ```
    */
  get tipoRestriccionHorario(): Prisma.TipoRestriccionHorarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restriccionHorario`: Exposes CRUD operations for the **RestriccionHorario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RestriccionHorarios
    * const restriccionHorarios = await prisma.restriccionHorario.findMany()
    * ```
    */
  get restriccionHorario(): Prisma.RestriccionHorarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cita`: Exposes CRUD operations for the **Cita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Citas
    * const citas = await prisma.cita.findMany()
    * ```
    */
  get cita(): Prisma.CitaDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Rol: 'Rol',
    Usuario: 'Usuario',
    Especialidad: 'Especialidad',
    Servicio: 'Servicio',
    ServicioAdicional: 'ServicioAdicional',
    Empleado: 'Empleado',
    EstadoCita: 'EstadoCita',
    DiaSemana: 'DiaSemana',
    HorarioAtencion: 'HorarioAtencion',
    TipoRestriccionHorario: 'TipoRestriccionHorario',
    RestriccionHorario: 'RestriccionHorario',
    Cita: 'Cita'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "rol" | "usuario" | "especialidad" | "servicio" | "servicioAdicional" | "empleado" | "estadoCita" | "diaSemana" | "horarioAtencion" | "tipoRestriccionHorario" | "restriccionHorario" | "cita"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Rol: {
        payload: Prisma.$RolPayload<ExtArgs>
        fields: Prisma.RolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findFirst: {
            args: Prisma.RolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findMany: {
            args: Prisma.RolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          create: {
            args: Prisma.RolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          createMany: {
            args: Prisma.RolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          update: {
            args: Prisma.RolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          deleteMany: {
            args: Prisma.RolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.RolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Especialidad: {
        payload: Prisma.$EspecialidadPayload<ExtArgs>
        fields: Prisma.EspecialidadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EspecialidadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EspecialidadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          findFirst: {
            args: Prisma.EspecialidadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EspecialidadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          findMany: {
            args: Prisma.EspecialidadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>[]
          }
          create: {
            args: Prisma.EspecialidadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          createMany: {
            args: Prisma.EspecialidadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EspecialidadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          update: {
            args: Prisma.EspecialidadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          deleteMany: {
            args: Prisma.EspecialidadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EspecialidadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EspecialidadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          aggregate: {
            args: Prisma.EspecialidadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEspecialidad>
          }
          groupBy: {
            args: Prisma.EspecialidadGroupByArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadGroupByOutputType>[]
          }
          count: {
            args: Prisma.EspecialidadCountArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadCountAggregateOutputType> | number
          }
        }
      }
      Servicio: {
        payload: Prisma.$ServicioPayload<ExtArgs>
        fields: Prisma.ServicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          findFirst: {
            args: Prisma.ServicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          findMany: {
            args: Prisma.ServicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>[]
          }
          create: {
            args: Prisma.ServicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          createMany: {
            args: Prisma.ServicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          update: {
            args: Prisma.ServicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          deleteMany: {
            args: Prisma.ServicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          aggregate: {
            args: Prisma.ServicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicio>
          }
          groupBy: {
            args: Prisma.ServicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicioCountArgs<ExtArgs>
            result: $Utils.Optional<ServicioCountAggregateOutputType> | number
          }
        }
      }
      ServicioAdicional: {
        payload: Prisma.$ServicioAdicionalPayload<ExtArgs>
        fields: Prisma.ServicioAdicionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicioAdicionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioAdicionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicioAdicionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioAdicionalPayload>
          }
          findFirst: {
            args: Prisma.ServicioAdicionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioAdicionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicioAdicionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioAdicionalPayload>
          }
          findMany: {
            args: Prisma.ServicioAdicionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioAdicionalPayload>[]
          }
          create: {
            args: Prisma.ServicioAdicionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioAdicionalPayload>
          }
          createMany: {
            args: Prisma.ServicioAdicionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServicioAdicionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioAdicionalPayload>
          }
          update: {
            args: Prisma.ServicioAdicionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioAdicionalPayload>
          }
          deleteMany: {
            args: Prisma.ServicioAdicionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicioAdicionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServicioAdicionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioAdicionalPayload>
          }
          aggregate: {
            args: Prisma.ServicioAdicionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicioAdicional>
          }
          groupBy: {
            args: Prisma.ServicioAdicionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicioAdicionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicioAdicionalCountArgs<ExtArgs>
            result: $Utils.Optional<ServicioAdicionalCountAggregateOutputType> | number
          }
        }
      }
      Empleado: {
        payload: Prisma.$EmpleadoPayload<ExtArgs>
        fields: Prisma.EmpleadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpleadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpleadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          findFirst: {
            args: Prisma.EmpleadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpleadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          findMany: {
            args: Prisma.EmpleadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>[]
          }
          create: {
            args: Prisma.EmpleadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          createMany: {
            args: Prisma.EmpleadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmpleadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          update: {
            args: Prisma.EmpleadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          deleteMany: {
            args: Prisma.EmpleadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpleadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmpleadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          aggregate: {
            args: Prisma.EmpleadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpleado>
          }
          groupBy: {
            args: Prisma.EmpleadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpleadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpleadoCountArgs<ExtArgs>
            result: $Utils.Optional<EmpleadoCountAggregateOutputType> | number
          }
        }
      }
      EstadoCita: {
        payload: Prisma.$EstadoCitaPayload<ExtArgs>
        fields: Prisma.EstadoCitaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstadoCitaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoCitaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstadoCitaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoCitaPayload>
          }
          findFirst: {
            args: Prisma.EstadoCitaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoCitaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstadoCitaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoCitaPayload>
          }
          findMany: {
            args: Prisma.EstadoCitaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoCitaPayload>[]
          }
          create: {
            args: Prisma.EstadoCitaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoCitaPayload>
          }
          createMany: {
            args: Prisma.EstadoCitaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EstadoCitaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoCitaPayload>
          }
          update: {
            args: Prisma.EstadoCitaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoCitaPayload>
          }
          deleteMany: {
            args: Prisma.EstadoCitaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstadoCitaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EstadoCitaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoCitaPayload>
          }
          aggregate: {
            args: Prisma.EstadoCitaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstadoCita>
          }
          groupBy: {
            args: Prisma.EstadoCitaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstadoCitaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstadoCitaCountArgs<ExtArgs>
            result: $Utils.Optional<EstadoCitaCountAggregateOutputType> | number
          }
        }
      }
      DiaSemana: {
        payload: Prisma.$DiaSemanaPayload<ExtArgs>
        fields: Prisma.DiaSemanaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiaSemanaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiaSemanaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          findFirst: {
            args: Prisma.DiaSemanaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiaSemanaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          findMany: {
            args: Prisma.DiaSemanaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>[]
          }
          create: {
            args: Prisma.DiaSemanaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          createMany: {
            args: Prisma.DiaSemanaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DiaSemanaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          update: {
            args: Prisma.DiaSemanaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          deleteMany: {
            args: Prisma.DiaSemanaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiaSemanaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiaSemanaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          aggregate: {
            args: Prisma.DiaSemanaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiaSemana>
          }
          groupBy: {
            args: Prisma.DiaSemanaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiaSemanaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiaSemanaCountArgs<ExtArgs>
            result: $Utils.Optional<DiaSemanaCountAggregateOutputType> | number
          }
        }
      }
      HorarioAtencion: {
        payload: Prisma.$HorarioAtencionPayload<ExtArgs>
        fields: Prisma.HorarioAtencionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HorarioAtencionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioAtencionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HorarioAtencionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioAtencionPayload>
          }
          findFirst: {
            args: Prisma.HorarioAtencionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioAtencionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HorarioAtencionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioAtencionPayload>
          }
          findMany: {
            args: Prisma.HorarioAtencionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioAtencionPayload>[]
          }
          create: {
            args: Prisma.HorarioAtencionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioAtencionPayload>
          }
          createMany: {
            args: Prisma.HorarioAtencionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HorarioAtencionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioAtencionPayload>
          }
          update: {
            args: Prisma.HorarioAtencionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioAtencionPayload>
          }
          deleteMany: {
            args: Prisma.HorarioAtencionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HorarioAtencionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HorarioAtencionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioAtencionPayload>
          }
          aggregate: {
            args: Prisma.HorarioAtencionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorarioAtencion>
          }
          groupBy: {
            args: Prisma.HorarioAtencionGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorarioAtencionGroupByOutputType>[]
          }
          count: {
            args: Prisma.HorarioAtencionCountArgs<ExtArgs>
            result: $Utils.Optional<HorarioAtencionCountAggregateOutputType> | number
          }
        }
      }
      TipoRestriccionHorario: {
        payload: Prisma.$TipoRestriccionHorarioPayload<ExtArgs>
        fields: Prisma.TipoRestriccionHorarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoRestriccionHorarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRestriccionHorarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoRestriccionHorarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRestriccionHorarioPayload>
          }
          findFirst: {
            args: Prisma.TipoRestriccionHorarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRestriccionHorarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoRestriccionHorarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRestriccionHorarioPayload>
          }
          findMany: {
            args: Prisma.TipoRestriccionHorarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRestriccionHorarioPayload>[]
          }
          create: {
            args: Prisma.TipoRestriccionHorarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRestriccionHorarioPayload>
          }
          createMany: {
            args: Prisma.TipoRestriccionHorarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TipoRestriccionHorarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRestriccionHorarioPayload>
          }
          update: {
            args: Prisma.TipoRestriccionHorarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRestriccionHorarioPayload>
          }
          deleteMany: {
            args: Prisma.TipoRestriccionHorarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoRestriccionHorarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TipoRestriccionHorarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRestriccionHorarioPayload>
          }
          aggregate: {
            args: Prisma.TipoRestriccionHorarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoRestriccionHorario>
          }
          groupBy: {
            args: Prisma.TipoRestriccionHorarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoRestriccionHorarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoRestriccionHorarioCountArgs<ExtArgs>
            result: $Utils.Optional<TipoRestriccionHorarioCountAggregateOutputType> | number
          }
        }
      }
      RestriccionHorario: {
        payload: Prisma.$RestriccionHorarioPayload<ExtArgs>
        fields: Prisma.RestriccionHorarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestriccionHorarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestriccionHorarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestriccionHorarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestriccionHorarioPayload>
          }
          findFirst: {
            args: Prisma.RestriccionHorarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestriccionHorarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestriccionHorarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestriccionHorarioPayload>
          }
          findMany: {
            args: Prisma.RestriccionHorarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestriccionHorarioPayload>[]
          }
          create: {
            args: Prisma.RestriccionHorarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestriccionHorarioPayload>
          }
          createMany: {
            args: Prisma.RestriccionHorarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RestriccionHorarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestriccionHorarioPayload>
          }
          update: {
            args: Prisma.RestriccionHorarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestriccionHorarioPayload>
          }
          deleteMany: {
            args: Prisma.RestriccionHorarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestriccionHorarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RestriccionHorarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestriccionHorarioPayload>
          }
          aggregate: {
            args: Prisma.RestriccionHorarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestriccionHorario>
          }
          groupBy: {
            args: Prisma.RestriccionHorarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestriccionHorarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestriccionHorarioCountArgs<ExtArgs>
            result: $Utils.Optional<RestriccionHorarioCountAggregateOutputType> | number
          }
        }
      }
      Cita: {
        payload: Prisma.$CitaPayload<ExtArgs>
        fields: Prisma.CitaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CitaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CitaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          findFirst: {
            args: Prisma.CitaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CitaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          findMany: {
            args: Prisma.CitaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>[]
          }
          create: {
            args: Prisma.CitaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          createMany: {
            args: Prisma.CitaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CitaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          update: {
            args: Prisma.CitaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          deleteMany: {
            args: Prisma.CitaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CitaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CitaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          aggregate: {
            args: Prisma.CitaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCita>
          }
          groupBy: {
            args: Prisma.CitaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CitaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CitaCountArgs<ExtArgs>
            result: $Utils.Optional<CitaCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    rol?: RolOmit
    usuario?: UsuarioOmit
    especialidad?: EspecialidadOmit
    servicio?: ServicioOmit
    servicioAdicional?: ServicioAdicionalOmit
    empleado?: EmpleadoOmit
    estadoCita?: EstadoCitaOmit
    diaSemana?: DiaSemanaOmit
    horarioAtencion?: HorarioAtencionOmit
    tipoRestriccionHorario?: TipoRestriccionHorarioOmit
    restriccionHorario?: RestriccionHorarioOmit
    cita?: CitaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    usuarios: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | RolCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    citasCliente: number
    citasCreadas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    citasCliente?: boolean | UsuarioCountOutputTypeCountCitasClienteArgs
    citasCreadas?: boolean | UsuarioCountOutputTypeCountCitasCreadasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCitasClienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCitasCreadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
  }


  /**
   * Count Type EspecialidadCountOutputType
   */

  export type EspecialidadCountOutputType = {
    empleados: number
    servicios: number
  }

  export type EspecialidadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleados?: boolean | EspecialidadCountOutputTypeCountEmpleadosArgs
    servicios?: boolean | EspecialidadCountOutputTypeCountServiciosArgs
  }

  // Custom InputTypes
  /**
   * EspecialidadCountOutputType without action
   */
  export type EspecialidadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecialidadCountOutputType
     */
    select?: EspecialidadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EspecialidadCountOutputType without action
   */
  export type EspecialidadCountOutputTypeCountEmpleadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpleadoWhereInput
  }

  /**
   * EspecialidadCountOutputType without action
   */
  export type EspecialidadCountOutputTypeCountServiciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioWhereInput
  }


  /**
   * Count Type ServicioCountOutputType
   */

  export type ServicioCountOutputType = {
    empleados: number
    citas: number
  }

  export type ServicioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleados?: boolean | ServicioCountOutputTypeCountEmpleadosArgs
    citas?: boolean | ServicioCountOutputTypeCountCitasArgs
  }

  // Custom InputTypes
  /**
   * ServicioCountOutputType without action
   */
  export type ServicioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioCountOutputType
     */
    select?: ServicioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicioCountOutputType without action
   */
  export type ServicioCountOutputTypeCountEmpleadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpleadoWhereInput
  }

  /**
   * ServicioCountOutputType without action
   */
  export type ServicioCountOutputTypeCountCitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
  }


  /**
   * Count Type ServicioAdicionalCountOutputType
   */

  export type ServicioAdicionalCountOutputType = {
    citas: number
  }

  export type ServicioAdicionalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    citas?: boolean | ServicioAdicionalCountOutputTypeCountCitasArgs
  }

  // Custom InputTypes
  /**
   * ServicioAdicionalCountOutputType without action
   */
  export type ServicioAdicionalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioAdicionalCountOutputType
     */
    select?: ServicioAdicionalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicioAdicionalCountOutputType without action
   */
  export type ServicioAdicionalCountOutputTypeCountCitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
  }


  /**
   * Count Type EmpleadoCountOutputType
   */

  export type EmpleadoCountOutputType = {
    servicios: number
    citas: number
    restricciones: number
  }

  export type EmpleadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicios?: boolean | EmpleadoCountOutputTypeCountServiciosArgs
    citas?: boolean | EmpleadoCountOutputTypeCountCitasArgs
    restricciones?: boolean | EmpleadoCountOutputTypeCountRestriccionesArgs
  }

  // Custom InputTypes
  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpleadoCountOutputType
     */
    select?: EmpleadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeCountServiciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioWhereInput
  }

  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeCountCitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
  }

  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeCountRestriccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestriccionHorarioWhereInput
  }


  /**
   * Count Type EstadoCitaCountOutputType
   */

  export type EstadoCitaCountOutputType = {
    citas: number
  }

  export type EstadoCitaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    citas?: boolean | EstadoCitaCountOutputTypeCountCitasArgs
  }

  // Custom InputTypes
  /**
   * EstadoCitaCountOutputType without action
   */
  export type EstadoCitaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCitaCountOutputType
     */
    select?: EstadoCitaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstadoCitaCountOutputType without action
   */
  export type EstadoCitaCountOutputTypeCountCitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
  }


  /**
   * Count Type DiaSemanaCountOutputType
   */

  export type DiaSemanaCountOutputType = {
    horarios: number
  }

  export type DiaSemanaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    horarios?: boolean | DiaSemanaCountOutputTypeCountHorariosArgs
  }

  // Custom InputTypes
  /**
   * DiaSemanaCountOutputType without action
   */
  export type DiaSemanaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemanaCountOutputType
     */
    select?: DiaSemanaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiaSemanaCountOutputType without action
   */
  export type DiaSemanaCountOutputTypeCountHorariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorarioAtencionWhereInput
  }


  /**
   * Count Type TipoRestriccionHorarioCountOutputType
   */

  export type TipoRestriccionHorarioCountOutputType = {
    restricciones: number
  }

  export type TipoRestriccionHorarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restricciones?: boolean | TipoRestriccionHorarioCountOutputTypeCountRestriccionesArgs
  }

  // Custom InputTypes
  /**
   * TipoRestriccionHorarioCountOutputType without action
   */
  export type TipoRestriccionHorarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRestriccionHorarioCountOutputType
     */
    select?: TipoRestriccionHorarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoRestriccionHorarioCountOutputType without action
   */
  export type TipoRestriccionHorarioCountOutputTypeCountRestriccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestriccionHorarioWhereInput
  }


  /**
   * Count Type CitaCountOutputType
   */

  export type CitaCountOutputType = {
    adicionales: number
  }

  export type CitaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adicionales?: boolean | CitaCountOutputTypeCountAdicionalesArgs
  }

  // Custom InputTypes
  /**
   * CitaCountOutputType without action
   */
  export type CitaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitaCountOutputType
     */
    select?: CitaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CitaCountOutputType without action
   */
  export type CitaCountOutputTypeCountAdicionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioAdicionalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolAvgAggregateOutputType = {
    id: number | null
  }

  export type RolSumAggregateOutputType = {
    id: number | null
  }

  export type RolMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    activo: boolean | null
  }

  export type RolMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    activo: boolean | null
  }

  export type RolCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    activo: number
    _all: number
  }


  export type RolAvgAggregateInputType = {
    id?: true
  }

  export type RolSumAggregateInputType = {
    id?: true
  }

  export type RolMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    activo?: true
  }

  export type RolMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    activo?: true
  }

  export type RolCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    activo?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rol to aggregate.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type RolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolWhereInput
    orderBy?: RolOrderByWithAggregationInput | RolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: RolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _avg?: RolAvgAggregateInputType
    _sum?: RolSumAggregateInputType
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    activo: boolean
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends RolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type RolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    activo?: boolean
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>



  export type RolSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    activo?: boolean
  }

  export type RolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "activo", ExtArgs["result"]["rol"]>
  export type RolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rol"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      activo: boolean
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type RolGetPayload<S extends boolean | null | undefined | RolDefaultArgs> = $Result.GetResult<Prisma.$RolPayload, S>

  type RolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface RolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rol'], meta: { name: 'Rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {RolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolFindUniqueArgs>(args: SelectSubset<T, RolFindUniqueArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolFindUniqueOrThrowArgs>(args: SelectSubset<T, RolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolFindFirstArgs>(args?: SelectSubset<T, RolFindFirstArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolFindFirstOrThrowArgs>(args?: SelectSubset<T, RolFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolWithIdOnly = await prisma.rol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolFindManyArgs>(args?: SelectSubset<T, RolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {RolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends RolCreateArgs>(args: SelectSubset<T, RolCreateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {RolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolCreateManyArgs>(args?: SelectSubset<T, RolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rol.
     * @param {RolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends RolDeleteArgs>(args: SelectSubset<T, RolDeleteArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {RolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolUpdateArgs>(args: SelectSubset<T, RolUpdateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {RolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolDeleteManyArgs>(args?: SelectSubset<T, RolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolUpdateManyArgs>(args: SelectSubset<T, RolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rol.
     * @param {RolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends RolUpsertArgs>(args: SelectSubset<T, RolUpsertArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends RolCountArgs>(
      args?: Subset<T, RolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolGroupByArgs} args - Group by arguments.
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
      T extends RolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolGroupByArgs['orderBy'] }
        : { orderBy?: RolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rol model
   */
  readonly fields: RolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Rol$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rol model
   */
  interface RolFieldRefs {
    readonly id: FieldRef<"Rol", 'Int'>
    readonly nombre: FieldRef<"Rol", 'String'>
    readonly descripcion: FieldRef<"Rol", 'String'>
    readonly activo: FieldRef<"Rol", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Rol findUnique
   */
  export type RolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findUniqueOrThrow
   */
  export type RolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findFirst
   */
  export type RolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findFirstOrThrow
   */
  export type RolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findMany
   */
  export type RolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rols to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol create
   */
  export type RolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to create a Rol.
     */
    data: XOR<RolCreateInput, RolUncheckedCreateInput>
  }

  /**
   * Rol createMany
   */
  export type RolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol update
   */
  export type RolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to update a Rol.
     */
    data: XOR<RolUpdateInput, RolUncheckedUpdateInput>
    /**
     * Choose, which Rol to update.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol updateMany
   */
  export type RolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol upsert
   */
  export type RolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The filter to search for the Rol to update in case it exists.
     */
    where: RolWhereUniqueInput
    /**
     * In case the Rol found by the `where` argument doesn't exist, create a new Rol with this data.
     */
    create: XOR<RolCreateInput, RolUncheckedCreateInput>
    /**
     * In case the Rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolUpdateInput, RolUncheckedUpdateInput>
  }

  /**
   * Rol delete
   */
  export type RolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter which Rol to delete.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol deleteMany
   */
  export type RolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rols to delete
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to delete.
     */
    limit?: number
  }

  /**
   * Rol.usuarios
   */
  export type Rol$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Rol without action
   */
  export type RolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    rolId: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    rolId: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    primerApellido: string | null
    segundoApellido: string | null
    correo: string | null
    telefono: string | null
    passwordHash: string | null
    activo: boolean | null
    rolId: number | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    primerApellido: string | null
    segundoApellido: string | null
    correo: string | null
    telefono: string | null
    passwordHash: string | null
    activo: boolean | null
    rolId: number | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    primerApellido: number
    segundoApellido: number
    correo: number
    telefono: number
    passwordHash: number
    activo: number
    rolId: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    rolId?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    rolId?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    primerApellido?: true
    segundoApellido?: true
    correo?: true
    telefono?: true
    passwordHash?: true
    activo?: true
    rolId?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    primerApellido?: true
    segundoApellido?: true
    correo?: true
    telefono?: true
    passwordHash?: true
    activo?: true
    rolId?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    primerApellido?: true
    segundoApellido?: true
    correo?: true
    telefono?: true
    passwordHash?: true
    activo?: true
    rolId?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    primerApellido: string
    segundoApellido: string | null
    correo: string
    telefono: string | null
    passwordHash: string
    activo: boolean
    rolId: number
    creadoEn: Date
    actualizadoEn: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    primerApellido?: boolean
    segundoApellido?: boolean
    correo?: boolean
    telefono?: boolean
    passwordHash?: boolean
    activo?: boolean
    rolId?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    empleado?: boolean | Usuario$empleadoArgs<ExtArgs>
    citasCliente?: boolean | Usuario$citasClienteArgs<ExtArgs>
    citasCreadas?: boolean | Usuario$citasCreadasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    primerApellido?: boolean
    segundoApellido?: boolean
    correo?: boolean
    telefono?: boolean
    passwordHash?: boolean
    activo?: boolean
    rolId?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "primerApellido" | "segundoApellido" | "correo" | "telefono" | "passwordHash" | "activo" | "rolId" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    empleado?: boolean | Usuario$empleadoArgs<ExtArgs>
    citasCliente?: boolean | Usuario$citasClienteArgs<ExtArgs>
    citasCreadas?: boolean | Usuario$citasCreadasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      rol: Prisma.$RolPayload<ExtArgs>
      empleado: Prisma.$EmpleadoPayload<ExtArgs> | null
      citasCliente: Prisma.$CitaPayload<ExtArgs>[]
      citasCreadas: Prisma.$CitaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      primerApellido: string
      segundoApellido: string | null
      correo: string
      telefono: string | null
      passwordHash: string
      activo: boolean
      rolId: number
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    empleado<T extends Usuario$empleadoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$empleadoArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    citasCliente<T extends Usuario$citasClienteArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$citasClienteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    citasCreadas<T extends Usuario$citasCreadasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$citasCreadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly primerApellido: FieldRef<"Usuario", 'String'>
    readonly segundoApellido: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly telefono: FieldRef<"Usuario", 'String'>
    readonly passwordHash: FieldRef<"Usuario", 'String'>
    readonly activo: FieldRef<"Usuario", 'Boolean'>
    readonly rolId: FieldRef<"Usuario", 'Int'>
    readonly creadoEn: FieldRef<"Usuario", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.empleado
   */
  export type Usuario$empleadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    where?: EmpleadoWhereInput
  }

  /**
   * Usuario.citasCliente
   */
  export type Usuario$citasClienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    cursor?: CitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Usuario.citasCreadas
   */
  export type Usuario$citasCreadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    cursor?: CitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Especialidad
   */

  export type AggregateEspecialidad = {
    _count: EspecialidadCountAggregateOutputType | null
    _avg: EspecialidadAvgAggregateOutputType | null
    _sum: EspecialidadSumAggregateOutputType | null
    _min: EspecialidadMinAggregateOutputType | null
    _max: EspecialidadMaxAggregateOutputType | null
  }

  export type EspecialidadAvgAggregateOutputType = {
    id: number | null
  }

  export type EspecialidadSumAggregateOutputType = {
    id: number | null
  }

  export type EspecialidadMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    activo: boolean | null
  }

  export type EspecialidadMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    activo: boolean | null
  }

  export type EspecialidadCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    activo: number
    _all: number
  }


  export type EspecialidadAvgAggregateInputType = {
    id?: true
  }

  export type EspecialidadSumAggregateInputType = {
    id?: true
  }

  export type EspecialidadMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    activo?: true
  }

  export type EspecialidadMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    activo?: true
  }

  export type EspecialidadCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    activo?: true
    _all?: true
  }

  export type EspecialidadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidad to aggregate.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Especialidads
    **/
    _count?: true | EspecialidadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EspecialidadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EspecialidadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspecialidadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspecialidadMaxAggregateInputType
  }

  export type GetEspecialidadAggregateType<T extends EspecialidadAggregateArgs> = {
        [P in keyof T & keyof AggregateEspecialidad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspecialidad[P]>
      : GetScalarType<T[P], AggregateEspecialidad[P]>
  }




  export type EspecialidadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecialidadWhereInput
    orderBy?: EspecialidadOrderByWithAggregationInput | EspecialidadOrderByWithAggregationInput[]
    by: EspecialidadScalarFieldEnum[] | EspecialidadScalarFieldEnum
    having?: EspecialidadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspecialidadCountAggregateInputType | true
    _avg?: EspecialidadAvgAggregateInputType
    _sum?: EspecialidadSumAggregateInputType
    _min?: EspecialidadMinAggregateInputType
    _max?: EspecialidadMaxAggregateInputType
  }

  export type EspecialidadGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    activo: boolean
    _count: EspecialidadCountAggregateOutputType | null
    _avg: EspecialidadAvgAggregateOutputType | null
    _sum: EspecialidadSumAggregateOutputType | null
    _min: EspecialidadMinAggregateOutputType | null
    _max: EspecialidadMaxAggregateOutputType | null
  }

  type GetEspecialidadGroupByPayload<T extends EspecialidadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspecialidadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspecialidadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspecialidadGroupByOutputType[P]>
            : GetScalarType<T[P], EspecialidadGroupByOutputType[P]>
        }
      >
    >


  export type EspecialidadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    activo?: boolean
    empleados?: boolean | Especialidad$empleadosArgs<ExtArgs>
    servicios?: boolean | Especialidad$serviciosArgs<ExtArgs>
    _count?: boolean | EspecialidadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["especialidad"]>



  export type EspecialidadSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    activo?: boolean
  }

  export type EspecialidadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "activo", ExtArgs["result"]["especialidad"]>
  export type EspecialidadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleados?: boolean | Especialidad$empleadosArgs<ExtArgs>
    servicios?: boolean | Especialidad$serviciosArgs<ExtArgs>
    _count?: boolean | EspecialidadCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EspecialidadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Especialidad"
    objects: {
      empleados: Prisma.$EmpleadoPayload<ExtArgs>[]
      servicios: Prisma.$ServicioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      activo: boolean
    }, ExtArgs["result"]["especialidad"]>
    composites: {}
  }

  type EspecialidadGetPayload<S extends boolean | null | undefined | EspecialidadDefaultArgs> = $Result.GetResult<Prisma.$EspecialidadPayload, S>

  type EspecialidadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EspecialidadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EspecialidadCountAggregateInputType | true
    }

  export interface EspecialidadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Especialidad'], meta: { name: 'Especialidad' } }
    /**
     * Find zero or one Especialidad that matches the filter.
     * @param {EspecialidadFindUniqueArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EspecialidadFindUniqueArgs>(args: SelectSubset<T, EspecialidadFindUniqueArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Especialidad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EspecialidadFindUniqueOrThrowArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EspecialidadFindUniqueOrThrowArgs>(args: SelectSubset<T, EspecialidadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especialidad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadFindFirstArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EspecialidadFindFirstArgs>(args?: SelectSubset<T, EspecialidadFindFirstArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especialidad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadFindFirstOrThrowArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EspecialidadFindFirstOrThrowArgs>(args?: SelectSubset<T, EspecialidadFindFirstOrThrowArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Especialidads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Especialidads
     * const especialidads = await prisma.especialidad.findMany()
     * 
     * // Get first 10 Especialidads
     * const especialidads = await prisma.especialidad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const especialidadWithIdOnly = await prisma.especialidad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EspecialidadFindManyArgs>(args?: SelectSubset<T, EspecialidadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Especialidad.
     * @param {EspecialidadCreateArgs} args - Arguments to create a Especialidad.
     * @example
     * // Create one Especialidad
     * const Especialidad = await prisma.especialidad.create({
     *   data: {
     *     // ... data to create a Especialidad
     *   }
     * })
     * 
     */
    create<T extends EspecialidadCreateArgs>(args: SelectSubset<T, EspecialidadCreateArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Especialidads.
     * @param {EspecialidadCreateManyArgs} args - Arguments to create many Especialidads.
     * @example
     * // Create many Especialidads
     * const especialidad = await prisma.especialidad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EspecialidadCreateManyArgs>(args?: SelectSubset<T, EspecialidadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Especialidad.
     * @param {EspecialidadDeleteArgs} args - Arguments to delete one Especialidad.
     * @example
     * // Delete one Especialidad
     * const Especialidad = await prisma.especialidad.delete({
     *   where: {
     *     // ... filter to delete one Especialidad
     *   }
     * })
     * 
     */
    delete<T extends EspecialidadDeleteArgs>(args: SelectSubset<T, EspecialidadDeleteArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Especialidad.
     * @param {EspecialidadUpdateArgs} args - Arguments to update one Especialidad.
     * @example
     * // Update one Especialidad
     * const especialidad = await prisma.especialidad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EspecialidadUpdateArgs>(args: SelectSubset<T, EspecialidadUpdateArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Especialidads.
     * @param {EspecialidadDeleteManyArgs} args - Arguments to filter Especialidads to delete.
     * @example
     * // Delete a few Especialidads
     * const { count } = await prisma.especialidad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EspecialidadDeleteManyArgs>(args?: SelectSubset<T, EspecialidadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especialidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Especialidads
     * const especialidad = await prisma.especialidad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EspecialidadUpdateManyArgs>(args: SelectSubset<T, EspecialidadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Especialidad.
     * @param {EspecialidadUpsertArgs} args - Arguments to update or create a Especialidad.
     * @example
     * // Update or create a Especialidad
     * const especialidad = await prisma.especialidad.upsert({
     *   create: {
     *     // ... data to create a Especialidad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Especialidad we want to update
     *   }
     * })
     */
    upsert<T extends EspecialidadUpsertArgs>(args: SelectSubset<T, EspecialidadUpsertArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Especialidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadCountArgs} args - Arguments to filter Especialidads to count.
     * @example
     * // Count the number of Especialidads
     * const count = await prisma.especialidad.count({
     *   where: {
     *     // ... the filter for the Especialidads we want to count
     *   }
     * })
    **/
    count<T extends EspecialidadCountArgs>(
      args?: Subset<T, EspecialidadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspecialidadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Especialidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EspecialidadAggregateArgs>(args: Subset<T, EspecialidadAggregateArgs>): Prisma.PrismaPromise<GetEspecialidadAggregateType<T>>

    /**
     * Group by Especialidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadGroupByArgs} args - Group by arguments.
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
      T extends EspecialidadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EspecialidadGroupByArgs['orderBy'] }
        : { orderBy?: EspecialidadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EspecialidadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspecialidadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Especialidad model
   */
  readonly fields: EspecialidadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Especialidad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EspecialidadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empleados<T extends Especialidad$empleadosArgs<ExtArgs> = {}>(args?: Subset<T, Especialidad$empleadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    servicios<T extends Especialidad$serviciosArgs<ExtArgs> = {}>(args?: Subset<T, Especialidad$serviciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Especialidad model
   */
  interface EspecialidadFieldRefs {
    readonly id: FieldRef<"Especialidad", 'Int'>
    readonly nombre: FieldRef<"Especialidad", 'String'>
    readonly descripcion: FieldRef<"Especialidad", 'String'>
    readonly activo: FieldRef<"Especialidad", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Especialidad findUnique
   */
  export type EspecialidadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad findUniqueOrThrow
   */
  export type EspecialidadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad findFirst
   */
  export type EspecialidadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialidads.
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidads.
     */
    distinct?: EspecialidadScalarFieldEnum | EspecialidadScalarFieldEnum[]
  }

  /**
   * Especialidad findFirstOrThrow
   */
  export type EspecialidadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialidads.
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidads.
     */
    distinct?: EspecialidadScalarFieldEnum | EspecialidadScalarFieldEnum[]
  }

  /**
   * Especialidad findMany
   */
  export type EspecialidadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidads to fetch.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Especialidads.
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidads.
     */
    distinct?: EspecialidadScalarFieldEnum | EspecialidadScalarFieldEnum[]
  }

  /**
   * Especialidad create
   */
  export type EspecialidadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * The data needed to create a Especialidad.
     */
    data: XOR<EspecialidadCreateInput, EspecialidadUncheckedCreateInput>
  }

  /**
   * Especialidad createMany
   */
  export type EspecialidadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Especialidads.
     */
    data: EspecialidadCreateManyInput | EspecialidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Especialidad update
   */
  export type EspecialidadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * The data needed to update a Especialidad.
     */
    data: XOR<EspecialidadUpdateInput, EspecialidadUncheckedUpdateInput>
    /**
     * Choose, which Especialidad to update.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad updateMany
   */
  export type EspecialidadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Especialidads.
     */
    data: XOR<EspecialidadUpdateManyMutationInput, EspecialidadUncheckedUpdateManyInput>
    /**
     * Filter which Especialidads to update
     */
    where?: EspecialidadWhereInput
    /**
     * Limit how many Especialidads to update.
     */
    limit?: number
  }

  /**
   * Especialidad upsert
   */
  export type EspecialidadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * The filter to search for the Especialidad to update in case it exists.
     */
    where: EspecialidadWhereUniqueInput
    /**
     * In case the Especialidad found by the `where` argument doesn't exist, create a new Especialidad with this data.
     */
    create: XOR<EspecialidadCreateInput, EspecialidadUncheckedCreateInput>
    /**
     * In case the Especialidad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EspecialidadUpdateInput, EspecialidadUncheckedUpdateInput>
  }

  /**
   * Especialidad delete
   */
  export type EspecialidadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter which Especialidad to delete.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad deleteMany
   */
  export type EspecialidadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidads to delete
     */
    where?: EspecialidadWhereInput
    /**
     * Limit how many Especialidads to delete.
     */
    limit?: number
  }

  /**
   * Especialidad.empleados
   */
  export type Especialidad$empleadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    where?: EmpleadoWhereInput
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    cursor?: EmpleadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * Especialidad.servicios
   */
  export type Especialidad$serviciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    where?: ServicioWhereInput
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    cursor?: ServicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Especialidad without action
   */
  export type EspecialidadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
  }


  /**
   * Model Servicio
   */

  export type AggregateServicio = {
    _count: ServicioCountAggregateOutputType | null
    _avg: ServicioAvgAggregateOutputType | null
    _sum: ServicioSumAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  export type ServicioAvgAggregateOutputType = {
    id: number | null
    precioBase: Decimal | null
    duracionMinutos: number | null
    especialidadId: number | null
  }

  export type ServicioSumAggregateOutputType = {
    id: number | null
    precioBase: Decimal | null
    duracionMinutos: number | null
    especialidadId: number | null
  }

  export type ServicioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precioBase: Decimal | null
    duracionMinutos: number | null
    imagen: string | null
    activo: boolean | null
    especialidadId: number | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ServicioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precioBase: Decimal | null
    duracionMinutos: number | null
    imagen: string | null
    activo: boolean | null
    especialidadId: number | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ServicioCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    precioBase: number
    duracionMinutos: number
    imagen: number
    activo: number
    especialidadId: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type ServicioAvgAggregateInputType = {
    id?: true
    precioBase?: true
    duracionMinutos?: true
    especialidadId?: true
  }

  export type ServicioSumAggregateInputType = {
    id?: true
    precioBase?: true
    duracionMinutos?: true
    especialidadId?: true
  }

  export type ServicioMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precioBase?: true
    duracionMinutos?: true
    imagen?: true
    activo?: true
    especialidadId?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type ServicioMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precioBase?: true
    duracionMinutos?: true
    imagen?: true
    activo?: true
    especialidadId?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type ServicioCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precioBase?: true
    duracionMinutos?: true
    imagen?: true
    activo?: true
    especialidadId?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type ServicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicio to aggregate.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servicios
    **/
    _count?: true | ServicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicioMaxAggregateInputType
  }

  export type GetServicioAggregateType<T extends ServicioAggregateArgs> = {
        [P in keyof T & keyof AggregateServicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicio[P]>
      : GetScalarType<T[P], AggregateServicio[P]>
  }




  export type ServicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioWhereInput
    orderBy?: ServicioOrderByWithAggregationInput | ServicioOrderByWithAggregationInput[]
    by: ServicioScalarFieldEnum[] | ServicioScalarFieldEnum
    having?: ServicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicioCountAggregateInputType | true
    _avg?: ServicioAvgAggregateInputType
    _sum?: ServicioSumAggregateInputType
    _min?: ServicioMinAggregateInputType
    _max?: ServicioMaxAggregateInputType
  }

  export type ServicioGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    precioBase: Decimal
    duracionMinutos: number
    imagen: string | null
    activo: boolean
    especialidadId: number
    creadoEn: Date
    actualizadoEn: Date
    _count: ServicioCountAggregateOutputType | null
    _avg: ServicioAvgAggregateOutputType | null
    _sum: ServicioSumAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  type GetServicioGroupByPayload<T extends ServicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicioGroupByOutputType[P]>
            : GetScalarType<T[P], ServicioGroupByOutputType[P]>
        }
      >
    >


  export type ServicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precioBase?: boolean
    duracionMinutos?: boolean
    imagen?: boolean
    activo?: boolean
    especialidadId?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    especialidad?: boolean | EspecialidadDefaultArgs<ExtArgs>
    empleados?: boolean | Servicio$empleadosArgs<ExtArgs>
    citas?: boolean | Servicio$citasArgs<ExtArgs>
    _count?: boolean | ServicioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicio"]>



  export type ServicioSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precioBase?: boolean
    duracionMinutos?: boolean
    imagen?: boolean
    activo?: boolean
    especialidadId?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type ServicioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precioBase" | "duracionMinutos" | "imagen" | "activo" | "especialidadId" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["servicio"]>
  export type ServicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especialidad?: boolean | EspecialidadDefaultArgs<ExtArgs>
    empleados?: boolean | Servicio$empleadosArgs<ExtArgs>
    citas?: boolean | Servicio$citasArgs<ExtArgs>
    _count?: boolean | ServicioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servicio"
    objects: {
      especialidad: Prisma.$EspecialidadPayload<ExtArgs>
      empleados: Prisma.$EmpleadoPayload<ExtArgs>[]
      citas: Prisma.$CitaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      precioBase: Prisma.Decimal
      duracionMinutos: number
      imagen: string | null
      activo: boolean
      especialidadId: number
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["servicio"]>
    composites: {}
  }

  type ServicioGetPayload<S extends boolean | null | undefined | ServicioDefaultArgs> = $Result.GetResult<Prisma.$ServicioPayload, S>

  type ServicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicioCountAggregateInputType | true
    }

  export interface ServicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servicio'], meta: { name: 'Servicio' } }
    /**
     * Find zero or one Servicio that matches the filter.
     * @param {ServicioFindUniqueArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicioFindUniqueArgs>(args: SelectSubset<T, ServicioFindUniqueArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicioFindUniqueOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicioFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindFirstArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicioFindFirstArgs>(args?: SelectSubset<T, ServicioFindFirstArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindFirstOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicioFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicios
     * const servicios = await prisma.servicio.findMany()
     * 
     * // Get first 10 Servicios
     * const servicios = await prisma.servicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicioWithIdOnly = await prisma.servicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicioFindManyArgs>(args?: SelectSubset<T, ServicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servicio.
     * @param {ServicioCreateArgs} args - Arguments to create a Servicio.
     * @example
     * // Create one Servicio
     * const Servicio = await prisma.servicio.create({
     *   data: {
     *     // ... data to create a Servicio
     *   }
     * })
     * 
     */
    create<T extends ServicioCreateArgs>(args: SelectSubset<T, ServicioCreateArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicios.
     * @param {ServicioCreateManyArgs} args - Arguments to create many Servicios.
     * @example
     * // Create many Servicios
     * const servicio = await prisma.servicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicioCreateManyArgs>(args?: SelectSubset<T, ServicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Servicio.
     * @param {ServicioDeleteArgs} args - Arguments to delete one Servicio.
     * @example
     * // Delete one Servicio
     * const Servicio = await prisma.servicio.delete({
     *   where: {
     *     // ... filter to delete one Servicio
     *   }
     * })
     * 
     */
    delete<T extends ServicioDeleteArgs>(args: SelectSubset<T, ServicioDeleteArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servicio.
     * @param {ServicioUpdateArgs} args - Arguments to update one Servicio.
     * @example
     * // Update one Servicio
     * const servicio = await prisma.servicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicioUpdateArgs>(args: SelectSubset<T, ServicioUpdateArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicios.
     * @param {ServicioDeleteManyArgs} args - Arguments to filter Servicios to delete.
     * @example
     * // Delete a few Servicios
     * const { count } = await prisma.servicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicioDeleteManyArgs>(args?: SelectSubset<T, ServicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicios
     * const servicio = await prisma.servicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicioUpdateManyArgs>(args: SelectSubset<T, ServicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Servicio.
     * @param {ServicioUpsertArgs} args - Arguments to update or create a Servicio.
     * @example
     * // Update or create a Servicio
     * const servicio = await prisma.servicio.upsert({
     *   create: {
     *     // ... data to create a Servicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicio we want to update
     *   }
     * })
     */
    upsert<T extends ServicioUpsertArgs>(args: SelectSubset<T, ServicioUpsertArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioCountArgs} args - Arguments to filter Servicios to count.
     * @example
     * // Count the number of Servicios
     * const count = await prisma.servicio.count({
     *   where: {
     *     // ... the filter for the Servicios we want to count
     *   }
     * })
    **/
    count<T extends ServicioCountArgs>(
      args?: Subset<T, ServicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicioAggregateArgs>(args: Subset<T, ServicioAggregateArgs>): Prisma.PrismaPromise<GetServicioAggregateType<T>>

    /**
     * Group by Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioGroupByArgs} args - Group by arguments.
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
      T extends ServicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicioGroupByArgs['orderBy'] }
        : { orderBy?: ServicioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servicio model
   */
  readonly fields: ServicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    especialidad<T extends EspecialidadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EspecialidadDefaultArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    empleados<T extends Servicio$empleadosArgs<ExtArgs> = {}>(args?: Subset<T, Servicio$empleadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    citas<T extends Servicio$citasArgs<ExtArgs> = {}>(args?: Subset<T, Servicio$citasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Servicio model
   */
  interface ServicioFieldRefs {
    readonly id: FieldRef<"Servicio", 'Int'>
    readonly nombre: FieldRef<"Servicio", 'String'>
    readonly descripcion: FieldRef<"Servicio", 'String'>
    readonly precioBase: FieldRef<"Servicio", 'Decimal'>
    readonly duracionMinutos: FieldRef<"Servicio", 'Int'>
    readonly imagen: FieldRef<"Servicio", 'String'>
    readonly activo: FieldRef<"Servicio", 'Boolean'>
    readonly especialidadId: FieldRef<"Servicio", 'Int'>
    readonly creadoEn: FieldRef<"Servicio", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Servicio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Servicio findUnique
   */
  export type ServicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio findUniqueOrThrow
   */
  export type ServicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio findFirst
   */
  export type ServicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio findFirstOrThrow
   */
  export type ServicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio findMany
   */
  export type ServicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicios to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio create
   */
  export type ServicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The data needed to create a Servicio.
     */
    data: XOR<ServicioCreateInput, ServicioUncheckedCreateInput>
  }

  /**
   * Servicio createMany
   */
  export type ServicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servicios.
     */
    data: ServicioCreateManyInput | ServicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servicio update
   */
  export type ServicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The data needed to update a Servicio.
     */
    data: XOR<ServicioUpdateInput, ServicioUncheckedUpdateInput>
    /**
     * Choose, which Servicio to update.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio updateMany
   */
  export type ServicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servicios.
     */
    data: XOR<ServicioUpdateManyMutationInput, ServicioUncheckedUpdateManyInput>
    /**
     * Filter which Servicios to update
     */
    where?: ServicioWhereInput
    /**
     * Limit how many Servicios to update.
     */
    limit?: number
  }

  /**
   * Servicio upsert
   */
  export type ServicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The filter to search for the Servicio to update in case it exists.
     */
    where: ServicioWhereUniqueInput
    /**
     * In case the Servicio found by the `where` argument doesn't exist, create a new Servicio with this data.
     */
    create: XOR<ServicioCreateInput, ServicioUncheckedCreateInput>
    /**
     * In case the Servicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicioUpdateInput, ServicioUncheckedUpdateInput>
  }

  /**
   * Servicio delete
   */
  export type ServicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter which Servicio to delete.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio deleteMany
   */
  export type ServicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicios to delete
     */
    where?: ServicioWhereInput
    /**
     * Limit how many Servicios to delete.
     */
    limit?: number
  }

  /**
   * Servicio.empleados
   */
  export type Servicio$empleadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    where?: EmpleadoWhereInput
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    cursor?: EmpleadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * Servicio.citas
   */
  export type Servicio$citasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    cursor?: CitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Servicio without action
   */
  export type ServicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
  }


  /**
   * Model ServicioAdicional
   */

  export type AggregateServicioAdicional = {
    _count: ServicioAdicionalCountAggregateOutputType | null
    _avg: ServicioAdicionalAvgAggregateOutputType | null
    _sum: ServicioAdicionalSumAggregateOutputType | null
    _min: ServicioAdicionalMinAggregateOutputType | null
    _max: ServicioAdicionalMaxAggregateOutputType | null
  }

  export type ServicioAdicionalAvgAggregateOutputType = {
    id: number | null
    precio: Decimal | null
  }

  export type ServicioAdicionalSumAggregateOutputType = {
    id: number | null
    precio: Decimal | null
  }

  export type ServicioAdicionalMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: Decimal | null
    activo: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ServicioAdicionalMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: Decimal | null
    activo: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ServicioAdicionalCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    precio: number
    activo: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type ServicioAdicionalAvgAggregateInputType = {
    id?: true
    precio?: true
  }

  export type ServicioAdicionalSumAggregateInputType = {
    id?: true
    precio?: true
  }

  export type ServicioAdicionalMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    activo?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type ServicioAdicionalMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    activo?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type ServicioAdicionalCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    activo?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type ServicioAdicionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicioAdicional to aggregate.
     */
    where?: ServicioAdicionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicioAdicionals to fetch.
     */
    orderBy?: ServicioAdicionalOrderByWithRelationInput | ServicioAdicionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicioAdicionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicioAdicionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicioAdicionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServicioAdicionals
    **/
    _count?: true | ServicioAdicionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicioAdicionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicioAdicionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicioAdicionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicioAdicionalMaxAggregateInputType
  }

  export type GetServicioAdicionalAggregateType<T extends ServicioAdicionalAggregateArgs> = {
        [P in keyof T & keyof AggregateServicioAdicional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicioAdicional[P]>
      : GetScalarType<T[P], AggregateServicioAdicional[P]>
  }




  export type ServicioAdicionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioAdicionalWhereInput
    orderBy?: ServicioAdicionalOrderByWithAggregationInput | ServicioAdicionalOrderByWithAggregationInput[]
    by: ServicioAdicionalScalarFieldEnum[] | ServicioAdicionalScalarFieldEnum
    having?: ServicioAdicionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicioAdicionalCountAggregateInputType | true
    _avg?: ServicioAdicionalAvgAggregateInputType
    _sum?: ServicioAdicionalSumAggregateInputType
    _min?: ServicioAdicionalMinAggregateInputType
    _max?: ServicioAdicionalMaxAggregateInputType
  }

  export type ServicioAdicionalGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    precio: Decimal
    activo: boolean
    creadoEn: Date
    actualizadoEn: Date
    _count: ServicioAdicionalCountAggregateOutputType | null
    _avg: ServicioAdicionalAvgAggregateOutputType | null
    _sum: ServicioAdicionalSumAggregateOutputType | null
    _min: ServicioAdicionalMinAggregateOutputType | null
    _max: ServicioAdicionalMaxAggregateOutputType | null
  }

  type GetServicioAdicionalGroupByPayload<T extends ServicioAdicionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicioAdicionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicioAdicionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicioAdicionalGroupByOutputType[P]>
            : GetScalarType<T[P], ServicioAdicionalGroupByOutputType[P]>
        }
      >
    >


  export type ServicioAdicionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    activo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    citas?: boolean | ServicioAdicional$citasArgs<ExtArgs>
    _count?: boolean | ServicioAdicionalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicioAdicional"]>



  export type ServicioAdicionalSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    activo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type ServicioAdicionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio" | "activo" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["servicioAdicional"]>
  export type ServicioAdicionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    citas?: boolean | ServicioAdicional$citasArgs<ExtArgs>
    _count?: boolean | ServicioAdicionalCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServicioAdicionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServicioAdicional"
    objects: {
      citas: Prisma.$CitaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      precio: Prisma.Decimal
      activo: boolean
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["servicioAdicional"]>
    composites: {}
  }

  type ServicioAdicionalGetPayload<S extends boolean | null | undefined | ServicioAdicionalDefaultArgs> = $Result.GetResult<Prisma.$ServicioAdicionalPayload, S>

  type ServicioAdicionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicioAdicionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicioAdicionalCountAggregateInputType | true
    }

  export interface ServicioAdicionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServicioAdicional'], meta: { name: 'ServicioAdicional' } }
    /**
     * Find zero or one ServicioAdicional that matches the filter.
     * @param {ServicioAdicionalFindUniqueArgs} args - Arguments to find a ServicioAdicional
     * @example
     * // Get one ServicioAdicional
     * const servicioAdicional = await prisma.servicioAdicional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicioAdicionalFindUniqueArgs>(args: SelectSubset<T, ServicioAdicionalFindUniqueArgs<ExtArgs>>): Prisma__ServicioAdicionalClient<$Result.GetResult<Prisma.$ServicioAdicionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServicioAdicional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicioAdicionalFindUniqueOrThrowArgs} args - Arguments to find a ServicioAdicional
     * @example
     * // Get one ServicioAdicional
     * const servicioAdicional = await prisma.servicioAdicional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicioAdicionalFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicioAdicionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicioAdicionalClient<$Result.GetResult<Prisma.$ServicioAdicionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicioAdicional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioAdicionalFindFirstArgs} args - Arguments to find a ServicioAdicional
     * @example
     * // Get one ServicioAdicional
     * const servicioAdicional = await prisma.servicioAdicional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicioAdicionalFindFirstArgs>(args?: SelectSubset<T, ServicioAdicionalFindFirstArgs<ExtArgs>>): Prisma__ServicioAdicionalClient<$Result.GetResult<Prisma.$ServicioAdicionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicioAdicional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioAdicionalFindFirstOrThrowArgs} args - Arguments to find a ServicioAdicional
     * @example
     * // Get one ServicioAdicional
     * const servicioAdicional = await prisma.servicioAdicional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicioAdicionalFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicioAdicionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicioAdicionalClient<$Result.GetResult<Prisma.$ServicioAdicionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServicioAdicionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioAdicionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServicioAdicionals
     * const servicioAdicionals = await prisma.servicioAdicional.findMany()
     * 
     * // Get first 10 ServicioAdicionals
     * const servicioAdicionals = await prisma.servicioAdicional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicioAdicionalWithIdOnly = await prisma.servicioAdicional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicioAdicionalFindManyArgs>(args?: SelectSubset<T, ServicioAdicionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioAdicionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServicioAdicional.
     * @param {ServicioAdicionalCreateArgs} args - Arguments to create a ServicioAdicional.
     * @example
     * // Create one ServicioAdicional
     * const ServicioAdicional = await prisma.servicioAdicional.create({
     *   data: {
     *     // ... data to create a ServicioAdicional
     *   }
     * })
     * 
     */
    create<T extends ServicioAdicionalCreateArgs>(args: SelectSubset<T, ServicioAdicionalCreateArgs<ExtArgs>>): Prisma__ServicioAdicionalClient<$Result.GetResult<Prisma.$ServicioAdicionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServicioAdicionals.
     * @param {ServicioAdicionalCreateManyArgs} args - Arguments to create many ServicioAdicionals.
     * @example
     * // Create many ServicioAdicionals
     * const servicioAdicional = await prisma.servicioAdicional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicioAdicionalCreateManyArgs>(args?: SelectSubset<T, ServicioAdicionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServicioAdicional.
     * @param {ServicioAdicionalDeleteArgs} args - Arguments to delete one ServicioAdicional.
     * @example
     * // Delete one ServicioAdicional
     * const ServicioAdicional = await prisma.servicioAdicional.delete({
     *   where: {
     *     // ... filter to delete one ServicioAdicional
     *   }
     * })
     * 
     */
    delete<T extends ServicioAdicionalDeleteArgs>(args: SelectSubset<T, ServicioAdicionalDeleteArgs<ExtArgs>>): Prisma__ServicioAdicionalClient<$Result.GetResult<Prisma.$ServicioAdicionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServicioAdicional.
     * @param {ServicioAdicionalUpdateArgs} args - Arguments to update one ServicioAdicional.
     * @example
     * // Update one ServicioAdicional
     * const servicioAdicional = await prisma.servicioAdicional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicioAdicionalUpdateArgs>(args: SelectSubset<T, ServicioAdicionalUpdateArgs<ExtArgs>>): Prisma__ServicioAdicionalClient<$Result.GetResult<Prisma.$ServicioAdicionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServicioAdicionals.
     * @param {ServicioAdicionalDeleteManyArgs} args - Arguments to filter ServicioAdicionals to delete.
     * @example
     * // Delete a few ServicioAdicionals
     * const { count } = await prisma.servicioAdicional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicioAdicionalDeleteManyArgs>(args?: SelectSubset<T, ServicioAdicionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicioAdicionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioAdicionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServicioAdicionals
     * const servicioAdicional = await prisma.servicioAdicional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicioAdicionalUpdateManyArgs>(args: SelectSubset<T, ServicioAdicionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServicioAdicional.
     * @param {ServicioAdicionalUpsertArgs} args - Arguments to update or create a ServicioAdicional.
     * @example
     * // Update or create a ServicioAdicional
     * const servicioAdicional = await prisma.servicioAdicional.upsert({
     *   create: {
     *     // ... data to create a ServicioAdicional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServicioAdicional we want to update
     *   }
     * })
     */
    upsert<T extends ServicioAdicionalUpsertArgs>(args: SelectSubset<T, ServicioAdicionalUpsertArgs<ExtArgs>>): Prisma__ServicioAdicionalClient<$Result.GetResult<Prisma.$ServicioAdicionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServicioAdicionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioAdicionalCountArgs} args - Arguments to filter ServicioAdicionals to count.
     * @example
     * // Count the number of ServicioAdicionals
     * const count = await prisma.servicioAdicional.count({
     *   where: {
     *     // ... the filter for the ServicioAdicionals we want to count
     *   }
     * })
    **/
    count<T extends ServicioAdicionalCountArgs>(
      args?: Subset<T, ServicioAdicionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicioAdicionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServicioAdicional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioAdicionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicioAdicionalAggregateArgs>(args: Subset<T, ServicioAdicionalAggregateArgs>): Prisma.PrismaPromise<GetServicioAdicionalAggregateType<T>>

    /**
     * Group by ServicioAdicional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioAdicionalGroupByArgs} args - Group by arguments.
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
      T extends ServicioAdicionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicioAdicionalGroupByArgs['orderBy'] }
        : { orderBy?: ServicioAdicionalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServicioAdicionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicioAdicionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServicioAdicional model
   */
  readonly fields: ServicioAdicionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServicioAdicional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicioAdicionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    citas<T extends ServicioAdicional$citasArgs<ExtArgs> = {}>(args?: Subset<T, ServicioAdicional$citasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ServicioAdicional model
   */
  interface ServicioAdicionalFieldRefs {
    readonly id: FieldRef<"ServicioAdicional", 'Int'>
    readonly nombre: FieldRef<"ServicioAdicional", 'String'>
    readonly descripcion: FieldRef<"ServicioAdicional", 'String'>
    readonly precio: FieldRef<"ServicioAdicional", 'Decimal'>
    readonly activo: FieldRef<"ServicioAdicional", 'Boolean'>
    readonly creadoEn: FieldRef<"ServicioAdicional", 'DateTime'>
    readonly actualizadoEn: FieldRef<"ServicioAdicional", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServicioAdicional findUnique
   */
  export type ServicioAdicionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioAdicional
     */
    select?: ServicioAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioAdicional
     */
    omit?: ServicioAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioAdicionalInclude<ExtArgs> | null
    /**
     * Filter, which ServicioAdicional to fetch.
     */
    where: ServicioAdicionalWhereUniqueInput
  }

  /**
   * ServicioAdicional findUniqueOrThrow
   */
  export type ServicioAdicionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioAdicional
     */
    select?: ServicioAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioAdicional
     */
    omit?: ServicioAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioAdicionalInclude<ExtArgs> | null
    /**
     * Filter, which ServicioAdicional to fetch.
     */
    where: ServicioAdicionalWhereUniqueInput
  }

  /**
   * ServicioAdicional findFirst
   */
  export type ServicioAdicionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioAdicional
     */
    select?: ServicioAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioAdicional
     */
    omit?: ServicioAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioAdicionalInclude<ExtArgs> | null
    /**
     * Filter, which ServicioAdicional to fetch.
     */
    where?: ServicioAdicionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicioAdicionals to fetch.
     */
    orderBy?: ServicioAdicionalOrderByWithRelationInput | ServicioAdicionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicioAdicionals.
     */
    cursor?: ServicioAdicionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicioAdicionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicioAdicionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicioAdicionals.
     */
    distinct?: ServicioAdicionalScalarFieldEnum | ServicioAdicionalScalarFieldEnum[]
  }

  /**
   * ServicioAdicional findFirstOrThrow
   */
  export type ServicioAdicionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioAdicional
     */
    select?: ServicioAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioAdicional
     */
    omit?: ServicioAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioAdicionalInclude<ExtArgs> | null
    /**
     * Filter, which ServicioAdicional to fetch.
     */
    where?: ServicioAdicionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicioAdicionals to fetch.
     */
    orderBy?: ServicioAdicionalOrderByWithRelationInput | ServicioAdicionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicioAdicionals.
     */
    cursor?: ServicioAdicionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicioAdicionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicioAdicionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicioAdicionals.
     */
    distinct?: ServicioAdicionalScalarFieldEnum | ServicioAdicionalScalarFieldEnum[]
  }

  /**
   * ServicioAdicional findMany
   */
  export type ServicioAdicionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioAdicional
     */
    select?: ServicioAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioAdicional
     */
    omit?: ServicioAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioAdicionalInclude<ExtArgs> | null
    /**
     * Filter, which ServicioAdicionals to fetch.
     */
    where?: ServicioAdicionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicioAdicionals to fetch.
     */
    orderBy?: ServicioAdicionalOrderByWithRelationInput | ServicioAdicionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServicioAdicionals.
     */
    cursor?: ServicioAdicionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicioAdicionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicioAdicionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicioAdicionals.
     */
    distinct?: ServicioAdicionalScalarFieldEnum | ServicioAdicionalScalarFieldEnum[]
  }

  /**
   * ServicioAdicional create
   */
  export type ServicioAdicionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioAdicional
     */
    select?: ServicioAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioAdicional
     */
    omit?: ServicioAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioAdicionalInclude<ExtArgs> | null
    /**
     * The data needed to create a ServicioAdicional.
     */
    data: XOR<ServicioAdicionalCreateInput, ServicioAdicionalUncheckedCreateInput>
  }

  /**
   * ServicioAdicional createMany
   */
  export type ServicioAdicionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServicioAdicionals.
     */
    data: ServicioAdicionalCreateManyInput | ServicioAdicionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServicioAdicional update
   */
  export type ServicioAdicionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioAdicional
     */
    select?: ServicioAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioAdicional
     */
    omit?: ServicioAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioAdicionalInclude<ExtArgs> | null
    /**
     * The data needed to update a ServicioAdicional.
     */
    data: XOR<ServicioAdicionalUpdateInput, ServicioAdicionalUncheckedUpdateInput>
    /**
     * Choose, which ServicioAdicional to update.
     */
    where: ServicioAdicionalWhereUniqueInput
  }

  /**
   * ServicioAdicional updateMany
   */
  export type ServicioAdicionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServicioAdicionals.
     */
    data: XOR<ServicioAdicionalUpdateManyMutationInput, ServicioAdicionalUncheckedUpdateManyInput>
    /**
     * Filter which ServicioAdicionals to update
     */
    where?: ServicioAdicionalWhereInput
    /**
     * Limit how many ServicioAdicionals to update.
     */
    limit?: number
  }

  /**
   * ServicioAdicional upsert
   */
  export type ServicioAdicionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioAdicional
     */
    select?: ServicioAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioAdicional
     */
    omit?: ServicioAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioAdicionalInclude<ExtArgs> | null
    /**
     * The filter to search for the ServicioAdicional to update in case it exists.
     */
    where: ServicioAdicionalWhereUniqueInput
    /**
     * In case the ServicioAdicional found by the `where` argument doesn't exist, create a new ServicioAdicional with this data.
     */
    create: XOR<ServicioAdicionalCreateInput, ServicioAdicionalUncheckedCreateInput>
    /**
     * In case the ServicioAdicional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicioAdicionalUpdateInput, ServicioAdicionalUncheckedUpdateInput>
  }

  /**
   * ServicioAdicional delete
   */
  export type ServicioAdicionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioAdicional
     */
    select?: ServicioAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioAdicional
     */
    omit?: ServicioAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioAdicionalInclude<ExtArgs> | null
    /**
     * Filter which ServicioAdicional to delete.
     */
    where: ServicioAdicionalWhereUniqueInput
  }

  /**
   * ServicioAdicional deleteMany
   */
  export type ServicioAdicionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicioAdicionals to delete
     */
    where?: ServicioAdicionalWhereInput
    /**
     * Limit how many ServicioAdicionals to delete.
     */
    limit?: number
  }

  /**
   * ServicioAdicional.citas
   */
  export type ServicioAdicional$citasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    cursor?: CitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * ServicioAdicional without action
   */
  export type ServicioAdicionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioAdicional
     */
    select?: ServicioAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioAdicional
     */
    omit?: ServicioAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioAdicionalInclude<ExtArgs> | null
  }


  /**
   * Model Empleado
   */

  export type AggregateEmpleado = {
    _count: EmpleadoCountAggregateOutputType | null
    _avg: EmpleadoAvgAggregateOutputType | null
    _sum: EmpleadoSumAggregateOutputType | null
    _min: EmpleadoMinAggregateOutputType | null
    _max: EmpleadoMaxAggregateOutputType | null
  }

  export type EmpleadoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    especialidadId: number | null
  }

  export type EmpleadoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    especialidadId: number | null
  }

  export type EmpleadoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    especialidadId: number | null
    codigoEmpleado: string | null
    descripcion: string | null
    activo: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type EmpleadoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    especialidadId: number | null
    codigoEmpleado: string | null
    descripcion: string | null
    activo: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type EmpleadoCountAggregateOutputType = {
    id: number
    usuarioId: number
    especialidadId: number
    codigoEmpleado: number
    descripcion: number
    activo: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type EmpleadoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    especialidadId?: true
  }

  export type EmpleadoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    especialidadId?: true
  }

  export type EmpleadoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    especialidadId?: true
    codigoEmpleado?: true
    descripcion?: true
    activo?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type EmpleadoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    especialidadId?: true
    codigoEmpleado?: true
    descripcion?: true
    activo?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type EmpleadoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    especialidadId?: true
    codigoEmpleado?: true
    descripcion?: true
    activo?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type EmpleadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empleado to aggregate.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empleados
    **/
    _count?: true | EmpleadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpleadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpleadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpleadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpleadoMaxAggregateInputType
  }

  export type GetEmpleadoAggregateType<T extends EmpleadoAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpleado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpleado[P]>
      : GetScalarType<T[P], AggregateEmpleado[P]>
  }




  export type EmpleadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpleadoWhereInput
    orderBy?: EmpleadoOrderByWithAggregationInput | EmpleadoOrderByWithAggregationInput[]
    by: EmpleadoScalarFieldEnum[] | EmpleadoScalarFieldEnum
    having?: EmpleadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpleadoCountAggregateInputType | true
    _avg?: EmpleadoAvgAggregateInputType
    _sum?: EmpleadoSumAggregateInputType
    _min?: EmpleadoMinAggregateInputType
    _max?: EmpleadoMaxAggregateInputType
  }

  export type EmpleadoGroupByOutputType = {
    id: number
    usuarioId: number
    especialidadId: number
    codigoEmpleado: string
    descripcion: string | null
    activo: boolean
    creadoEn: Date
    actualizadoEn: Date
    _count: EmpleadoCountAggregateOutputType | null
    _avg: EmpleadoAvgAggregateOutputType | null
    _sum: EmpleadoSumAggregateOutputType | null
    _min: EmpleadoMinAggregateOutputType | null
    _max: EmpleadoMaxAggregateOutputType | null
  }

  type GetEmpleadoGroupByPayload<T extends EmpleadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpleadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpleadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpleadoGroupByOutputType[P]>
            : GetScalarType<T[P], EmpleadoGroupByOutputType[P]>
        }
      >
    >


  export type EmpleadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    especialidadId?: boolean
    codigoEmpleado?: boolean
    descripcion?: boolean
    activo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    especialidad?: boolean | EspecialidadDefaultArgs<ExtArgs>
    servicios?: boolean | Empleado$serviciosArgs<ExtArgs>
    citas?: boolean | Empleado$citasArgs<ExtArgs>
    restricciones?: boolean | Empleado$restriccionesArgs<ExtArgs>
    _count?: boolean | EmpleadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empleado"]>



  export type EmpleadoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    especialidadId?: boolean
    codigoEmpleado?: boolean
    descripcion?: boolean
    activo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type EmpleadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "especialidadId" | "codigoEmpleado" | "descripcion" | "activo" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["empleado"]>
  export type EmpleadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    especialidad?: boolean | EspecialidadDefaultArgs<ExtArgs>
    servicios?: boolean | Empleado$serviciosArgs<ExtArgs>
    citas?: boolean | Empleado$citasArgs<ExtArgs>
    restricciones?: boolean | Empleado$restriccionesArgs<ExtArgs>
    _count?: boolean | EmpleadoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmpleadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empleado"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      especialidad: Prisma.$EspecialidadPayload<ExtArgs>
      servicios: Prisma.$ServicioPayload<ExtArgs>[]
      citas: Prisma.$CitaPayload<ExtArgs>[]
      restricciones: Prisma.$RestriccionHorarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      especialidadId: number
      codigoEmpleado: string
      descripcion: string | null
      activo: boolean
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["empleado"]>
    composites: {}
  }

  type EmpleadoGetPayload<S extends boolean | null | undefined | EmpleadoDefaultArgs> = $Result.GetResult<Prisma.$EmpleadoPayload, S>

  type EmpleadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpleadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpleadoCountAggregateInputType | true
    }

  export interface EmpleadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empleado'], meta: { name: 'Empleado' } }
    /**
     * Find zero or one Empleado that matches the filter.
     * @param {EmpleadoFindUniqueArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpleadoFindUniqueArgs>(args: SelectSubset<T, EmpleadoFindUniqueArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empleado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpleadoFindUniqueOrThrowArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpleadoFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpleadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empleado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoFindFirstArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpleadoFindFirstArgs>(args?: SelectSubset<T, EmpleadoFindFirstArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empleado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoFindFirstOrThrowArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpleadoFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpleadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empleados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empleados
     * const empleados = await prisma.empleado.findMany()
     * 
     * // Get first 10 Empleados
     * const empleados = await prisma.empleado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empleadoWithIdOnly = await prisma.empleado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmpleadoFindManyArgs>(args?: SelectSubset<T, EmpleadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empleado.
     * @param {EmpleadoCreateArgs} args - Arguments to create a Empleado.
     * @example
     * // Create one Empleado
     * const Empleado = await prisma.empleado.create({
     *   data: {
     *     // ... data to create a Empleado
     *   }
     * })
     * 
     */
    create<T extends EmpleadoCreateArgs>(args: SelectSubset<T, EmpleadoCreateArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empleados.
     * @param {EmpleadoCreateManyArgs} args - Arguments to create many Empleados.
     * @example
     * // Create many Empleados
     * const empleado = await prisma.empleado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpleadoCreateManyArgs>(args?: SelectSubset<T, EmpleadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Empleado.
     * @param {EmpleadoDeleteArgs} args - Arguments to delete one Empleado.
     * @example
     * // Delete one Empleado
     * const Empleado = await prisma.empleado.delete({
     *   where: {
     *     // ... filter to delete one Empleado
     *   }
     * })
     * 
     */
    delete<T extends EmpleadoDeleteArgs>(args: SelectSubset<T, EmpleadoDeleteArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empleado.
     * @param {EmpleadoUpdateArgs} args - Arguments to update one Empleado.
     * @example
     * // Update one Empleado
     * const empleado = await prisma.empleado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpleadoUpdateArgs>(args: SelectSubset<T, EmpleadoUpdateArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empleados.
     * @param {EmpleadoDeleteManyArgs} args - Arguments to filter Empleados to delete.
     * @example
     * // Delete a few Empleados
     * const { count } = await prisma.empleado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpleadoDeleteManyArgs>(args?: SelectSubset<T, EmpleadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empleados
     * const empleado = await prisma.empleado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpleadoUpdateManyArgs>(args: SelectSubset<T, EmpleadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Empleado.
     * @param {EmpleadoUpsertArgs} args - Arguments to update or create a Empleado.
     * @example
     * // Update or create a Empleado
     * const empleado = await prisma.empleado.upsert({
     *   create: {
     *     // ... data to create a Empleado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empleado we want to update
     *   }
     * })
     */
    upsert<T extends EmpleadoUpsertArgs>(args: SelectSubset<T, EmpleadoUpsertArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoCountArgs} args - Arguments to filter Empleados to count.
     * @example
     * // Count the number of Empleados
     * const count = await prisma.empleado.count({
     *   where: {
     *     // ... the filter for the Empleados we want to count
     *   }
     * })
    **/
    count<T extends EmpleadoCountArgs>(
      args?: Subset<T, EmpleadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpleadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empleado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpleadoAggregateArgs>(args: Subset<T, EmpleadoAggregateArgs>): Prisma.PrismaPromise<GetEmpleadoAggregateType<T>>

    /**
     * Group by Empleado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoGroupByArgs} args - Group by arguments.
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
      T extends EmpleadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpleadoGroupByArgs['orderBy'] }
        : { orderBy?: EmpleadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmpleadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpleadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empleado model
   */
  readonly fields: EmpleadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empleado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpleadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    especialidad<T extends EspecialidadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EspecialidadDefaultArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servicios<T extends Empleado$serviciosArgs<ExtArgs> = {}>(args?: Subset<T, Empleado$serviciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    citas<T extends Empleado$citasArgs<ExtArgs> = {}>(args?: Subset<T, Empleado$citasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    restricciones<T extends Empleado$restriccionesArgs<ExtArgs> = {}>(args?: Subset<T, Empleado$restriccionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestriccionHorarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Empleado model
   */
  interface EmpleadoFieldRefs {
    readonly id: FieldRef<"Empleado", 'Int'>
    readonly usuarioId: FieldRef<"Empleado", 'Int'>
    readonly especialidadId: FieldRef<"Empleado", 'Int'>
    readonly codigoEmpleado: FieldRef<"Empleado", 'String'>
    readonly descripcion: FieldRef<"Empleado", 'String'>
    readonly activo: FieldRef<"Empleado", 'Boolean'>
    readonly creadoEn: FieldRef<"Empleado", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Empleado", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Empleado findUnique
   */
  export type EmpleadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado findUniqueOrThrow
   */
  export type EmpleadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado findFirst
   */
  export type EmpleadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empleados.
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empleados.
     */
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * Empleado findFirstOrThrow
   */
  export type EmpleadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empleados.
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empleados.
     */
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * Empleado findMany
   */
  export type EmpleadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleados to fetch.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empleados.
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empleados.
     */
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * Empleado create
   */
  export type EmpleadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Empleado.
     */
    data: XOR<EmpleadoCreateInput, EmpleadoUncheckedCreateInput>
  }

  /**
   * Empleado createMany
   */
  export type EmpleadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empleados.
     */
    data: EmpleadoCreateManyInput | EmpleadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empleado update
   */
  export type EmpleadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Empleado.
     */
    data: XOR<EmpleadoUpdateInput, EmpleadoUncheckedUpdateInput>
    /**
     * Choose, which Empleado to update.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado updateMany
   */
  export type EmpleadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empleados.
     */
    data: XOR<EmpleadoUpdateManyMutationInput, EmpleadoUncheckedUpdateManyInput>
    /**
     * Filter which Empleados to update
     */
    where?: EmpleadoWhereInput
    /**
     * Limit how many Empleados to update.
     */
    limit?: number
  }

  /**
   * Empleado upsert
   */
  export type EmpleadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Empleado to update in case it exists.
     */
    where: EmpleadoWhereUniqueInput
    /**
     * In case the Empleado found by the `where` argument doesn't exist, create a new Empleado with this data.
     */
    create: XOR<EmpleadoCreateInput, EmpleadoUncheckedCreateInput>
    /**
     * In case the Empleado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpleadoUpdateInput, EmpleadoUncheckedUpdateInput>
  }

  /**
   * Empleado delete
   */
  export type EmpleadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter which Empleado to delete.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado deleteMany
   */
  export type EmpleadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empleados to delete
     */
    where?: EmpleadoWhereInput
    /**
     * Limit how many Empleados to delete.
     */
    limit?: number
  }

  /**
   * Empleado.servicios
   */
  export type Empleado$serviciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    where?: ServicioWhereInput
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    cursor?: ServicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Empleado.citas
   */
  export type Empleado$citasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    cursor?: CitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Empleado.restricciones
   */
  export type Empleado$restriccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestriccionHorario
     */
    select?: RestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestriccionHorario
     */
    omit?: RestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestriccionHorarioInclude<ExtArgs> | null
    where?: RestriccionHorarioWhereInput
    orderBy?: RestriccionHorarioOrderByWithRelationInput | RestriccionHorarioOrderByWithRelationInput[]
    cursor?: RestriccionHorarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestriccionHorarioScalarFieldEnum | RestriccionHorarioScalarFieldEnum[]
  }

  /**
   * Empleado without action
   */
  export type EmpleadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
  }


  /**
   * Model EstadoCita
   */

  export type AggregateEstadoCita = {
    _count: EstadoCitaCountAggregateOutputType | null
    _avg: EstadoCitaAvgAggregateOutputType | null
    _sum: EstadoCitaSumAggregateOutputType | null
    _min: EstadoCitaMinAggregateOutputType | null
    _max: EstadoCitaMaxAggregateOutputType | null
  }

  export type EstadoCitaAvgAggregateOutputType = {
    id: number | null
    orden: number | null
  }

  export type EstadoCitaSumAggregateOutputType = {
    id: number | null
    orden: number | null
  }

  export type EstadoCitaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    bloqueaDisponibilidad: boolean | null
    permiteCancelacionCliente: boolean | null
    permiteEdicion: boolean | null
    color: string | null
    orden: number | null
    activo: boolean | null
  }

  export type EstadoCitaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    bloqueaDisponibilidad: boolean | null
    permiteCancelacionCliente: boolean | null
    permiteEdicion: boolean | null
    color: string | null
    orden: number | null
    activo: boolean | null
  }

  export type EstadoCitaCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    bloqueaDisponibilidad: number
    permiteCancelacionCliente: number
    permiteEdicion: number
    color: number
    orden: number
    activo: number
    _all: number
  }


  export type EstadoCitaAvgAggregateInputType = {
    id?: true
    orden?: true
  }

  export type EstadoCitaSumAggregateInputType = {
    id?: true
    orden?: true
  }

  export type EstadoCitaMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    bloqueaDisponibilidad?: true
    permiteCancelacionCliente?: true
    permiteEdicion?: true
    color?: true
    orden?: true
    activo?: true
  }

  export type EstadoCitaMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    bloqueaDisponibilidad?: true
    permiteCancelacionCliente?: true
    permiteEdicion?: true
    color?: true
    orden?: true
    activo?: true
  }

  export type EstadoCitaCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    bloqueaDisponibilidad?: true
    permiteCancelacionCliente?: true
    permiteEdicion?: true
    color?: true
    orden?: true
    activo?: true
    _all?: true
  }

  export type EstadoCitaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstadoCita to aggregate.
     */
    where?: EstadoCitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoCitas to fetch.
     */
    orderBy?: EstadoCitaOrderByWithRelationInput | EstadoCitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstadoCitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoCitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoCitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EstadoCitas
    **/
    _count?: true | EstadoCitaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstadoCitaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstadoCitaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstadoCitaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstadoCitaMaxAggregateInputType
  }

  export type GetEstadoCitaAggregateType<T extends EstadoCitaAggregateArgs> = {
        [P in keyof T & keyof AggregateEstadoCita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstadoCita[P]>
      : GetScalarType<T[P], AggregateEstadoCita[P]>
  }




  export type EstadoCitaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstadoCitaWhereInput
    orderBy?: EstadoCitaOrderByWithAggregationInput | EstadoCitaOrderByWithAggregationInput[]
    by: EstadoCitaScalarFieldEnum[] | EstadoCitaScalarFieldEnum
    having?: EstadoCitaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstadoCitaCountAggregateInputType | true
    _avg?: EstadoCitaAvgAggregateInputType
    _sum?: EstadoCitaSumAggregateInputType
    _min?: EstadoCitaMinAggregateInputType
    _max?: EstadoCitaMaxAggregateInputType
  }

  export type EstadoCitaGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    bloqueaDisponibilidad: boolean
    permiteCancelacionCliente: boolean
    permiteEdicion: boolean
    color: string | null
    orden: number | null
    activo: boolean
    _count: EstadoCitaCountAggregateOutputType | null
    _avg: EstadoCitaAvgAggregateOutputType | null
    _sum: EstadoCitaSumAggregateOutputType | null
    _min: EstadoCitaMinAggregateOutputType | null
    _max: EstadoCitaMaxAggregateOutputType | null
  }

  type GetEstadoCitaGroupByPayload<T extends EstadoCitaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstadoCitaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstadoCitaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstadoCitaGroupByOutputType[P]>
            : GetScalarType<T[P], EstadoCitaGroupByOutputType[P]>
        }
      >
    >


  export type EstadoCitaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    bloqueaDisponibilidad?: boolean
    permiteCancelacionCliente?: boolean
    permiteEdicion?: boolean
    color?: boolean
    orden?: boolean
    activo?: boolean
    citas?: boolean | EstadoCita$citasArgs<ExtArgs>
    _count?: boolean | EstadoCitaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estadoCita"]>



  export type EstadoCitaSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    bloqueaDisponibilidad?: boolean
    permiteCancelacionCliente?: boolean
    permiteEdicion?: boolean
    color?: boolean
    orden?: boolean
    activo?: boolean
  }

  export type EstadoCitaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "bloqueaDisponibilidad" | "permiteCancelacionCliente" | "permiteEdicion" | "color" | "orden" | "activo", ExtArgs["result"]["estadoCita"]>
  export type EstadoCitaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    citas?: boolean | EstadoCita$citasArgs<ExtArgs>
    _count?: boolean | EstadoCitaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EstadoCitaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EstadoCita"
    objects: {
      citas: Prisma.$CitaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      bloqueaDisponibilidad: boolean
      permiteCancelacionCliente: boolean
      permiteEdicion: boolean
      color: string | null
      orden: number | null
      activo: boolean
    }, ExtArgs["result"]["estadoCita"]>
    composites: {}
  }

  type EstadoCitaGetPayload<S extends boolean | null | undefined | EstadoCitaDefaultArgs> = $Result.GetResult<Prisma.$EstadoCitaPayload, S>

  type EstadoCitaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstadoCitaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstadoCitaCountAggregateInputType | true
    }

  export interface EstadoCitaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EstadoCita'], meta: { name: 'EstadoCita' } }
    /**
     * Find zero or one EstadoCita that matches the filter.
     * @param {EstadoCitaFindUniqueArgs} args - Arguments to find a EstadoCita
     * @example
     * // Get one EstadoCita
     * const estadoCita = await prisma.estadoCita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstadoCitaFindUniqueArgs>(args: SelectSubset<T, EstadoCitaFindUniqueArgs<ExtArgs>>): Prisma__EstadoCitaClient<$Result.GetResult<Prisma.$EstadoCitaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EstadoCita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstadoCitaFindUniqueOrThrowArgs} args - Arguments to find a EstadoCita
     * @example
     * // Get one EstadoCita
     * const estadoCita = await prisma.estadoCita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstadoCitaFindUniqueOrThrowArgs>(args: SelectSubset<T, EstadoCitaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstadoCitaClient<$Result.GetResult<Prisma.$EstadoCitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstadoCita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoCitaFindFirstArgs} args - Arguments to find a EstadoCita
     * @example
     * // Get one EstadoCita
     * const estadoCita = await prisma.estadoCita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstadoCitaFindFirstArgs>(args?: SelectSubset<T, EstadoCitaFindFirstArgs<ExtArgs>>): Prisma__EstadoCitaClient<$Result.GetResult<Prisma.$EstadoCitaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstadoCita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoCitaFindFirstOrThrowArgs} args - Arguments to find a EstadoCita
     * @example
     * // Get one EstadoCita
     * const estadoCita = await prisma.estadoCita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstadoCitaFindFirstOrThrowArgs>(args?: SelectSubset<T, EstadoCitaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstadoCitaClient<$Result.GetResult<Prisma.$EstadoCitaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EstadoCitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoCitaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EstadoCitas
     * const estadoCitas = await prisma.estadoCita.findMany()
     * 
     * // Get first 10 EstadoCitas
     * const estadoCitas = await prisma.estadoCita.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estadoCitaWithIdOnly = await prisma.estadoCita.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstadoCitaFindManyArgs>(args?: SelectSubset<T, EstadoCitaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoCitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EstadoCita.
     * @param {EstadoCitaCreateArgs} args - Arguments to create a EstadoCita.
     * @example
     * // Create one EstadoCita
     * const EstadoCita = await prisma.estadoCita.create({
     *   data: {
     *     // ... data to create a EstadoCita
     *   }
     * })
     * 
     */
    create<T extends EstadoCitaCreateArgs>(args: SelectSubset<T, EstadoCitaCreateArgs<ExtArgs>>): Prisma__EstadoCitaClient<$Result.GetResult<Prisma.$EstadoCitaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EstadoCitas.
     * @param {EstadoCitaCreateManyArgs} args - Arguments to create many EstadoCitas.
     * @example
     * // Create many EstadoCitas
     * const estadoCita = await prisma.estadoCita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstadoCitaCreateManyArgs>(args?: SelectSubset<T, EstadoCitaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EstadoCita.
     * @param {EstadoCitaDeleteArgs} args - Arguments to delete one EstadoCita.
     * @example
     * // Delete one EstadoCita
     * const EstadoCita = await prisma.estadoCita.delete({
     *   where: {
     *     // ... filter to delete one EstadoCita
     *   }
     * })
     * 
     */
    delete<T extends EstadoCitaDeleteArgs>(args: SelectSubset<T, EstadoCitaDeleteArgs<ExtArgs>>): Prisma__EstadoCitaClient<$Result.GetResult<Prisma.$EstadoCitaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EstadoCita.
     * @param {EstadoCitaUpdateArgs} args - Arguments to update one EstadoCita.
     * @example
     * // Update one EstadoCita
     * const estadoCita = await prisma.estadoCita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstadoCitaUpdateArgs>(args: SelectSubset<T, EstadoCitaUpdateArgs<ExtArgs>>): Prisma__EstadoCitaClient<$Result.GetResult<Prisma.$EstadoCitaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EstadoCitas.
     * @param {EstadoCitaDeleteManyArgs} args - Arguments to filter EstadoCitas to delete.
     * @example
     * // Delete a few EstadoCitas
     * const { count } = await prisma.estadoCita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstadoCitaDeleteManyArgs>(args?: SelectSubset<T, EstadoCitaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstadoCitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoCitaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EstadoCitas
     * const estadoCita = await prisma.estadoCita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstadoCitaUpdateManyArgs>(args: SelectSubset<T, EstadoCitaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EstadoCita.
     * @param {EstadoCitaUpsertArgs} args - Arguments to update or create a EstadoCita.
     * @example
     * // Update or create a EstadoCita
     * const estadoCita = await prisma.estadoCita.upsert({
     *   create: {
     *     // ... data to create a EstadoCita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EstadoCita we want to update
     *   }
     * })
     */
    upsert<T extends EstadoCitaUpsertArgs>(args: SelectSubset<T, EstadoCitaUpsertArgs<ExtArgs>>): Prisma__EstadoCitaClient<$Result.GetResult<Prisma.$EstadoCitaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EstadoCitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoCitaCountArgs} args - Arguments to filter EstadoCitas to count.
     * @example
     * // Count the number of EstadoCitas
     * const count = await prisma.estadoCita.count({
     *   where: {
     *     // ... the filter for the EstadoCitas we want to count
     *   }
     * })
    **/
    count<T extends EstadoCitaCountArgs>(
      args?: Subset<T, EstadoCitaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstadoCitaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EstadoCita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoCitaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstadoCitaAggregateArgs>(args: Subset<T, EstadoCitaAggregateArgs>): Prisma.PrismaPromise<GetEstadoCitaAggregateType<T>>

    /**
     * Group by EstadoCita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoCitaGroupByArgs} args - Group by arguments.
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
      T extends EstadoCitaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstadoCitaGroupByArgs['orderBy'] }
        : { orderBy?: EstadoCitaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstadoCitaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadoCitaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EstadoCita model
   */
  readonly fields: EstadoCitaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EstadoCita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstadoCitaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    citas<T extends EstadoCita$citasArgs<ExtArgs> = {}>(args?: Subset<T, EstadoCita$citasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EstadoCita model
   */
  interface EstadoCitaFieldRefs {
    readonly id: FieldRef<"EstadoCita", 'Int'>
    readonly nombre: FieldRef<"EstadoCita", 'String'>
    readonly descripcion: FieldRef<"EstadoCita", 'String'>
    readonly bloqueaDisponibilidad: FieldRef<"EstadoCita", 'Boolean'>
    readonly permiteCancelacionCliente: FieldRef<"EstadoCita", 'Boolean'>
    readonly permiteEdicion: FieldRef<"EstadoCita", 'Boolean'>
    readonly color: FieldRef<"EstadoCita", 'String'>
    readonly orden: FieldRef<"EstadoCita", 'Int'>
    readonly activo: FieldRef<"EstadoCita", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * EstadoCita findUnique
   */
  export type EstadoCitaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCita
     */
    select?: EstadoCitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCita
     */
    omit?: EstadoCitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoCitaInclude<ExtArgs> | null
    /**
     * Filter, which EstadoCita to fetch.
     */
    where: EstadoCitaWhereUniqueInput
  }

  /**
   * EstadoCita findUniqueOrThrow
   */
  export type EstadoCitaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCita
     */
    select?: EstadoCitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCita
     */
    omit?: EstadoCitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoCitaInclude<ExtArgs> | null
    /**
     * Filter, which EstadoCita to fetch.
     */
    where: EstadoCitaWhereUniqueInput
  }

  /**
   * EstadoCita findFirst
   */
  export type EstadoCitaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCita
     */
    select?: EstadoCitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCita
     */
    omit?: EstadoCitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoCitaInclude<ExtArgs> | null
    /**
     * Filter, which EstadoCita to fetch.
     */
    where?: EstadoCitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoCitas to fetch.
     */
    orderBy?: EstadoCitaOrderByWithRelationInput | EstadoCitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstadoCitas.
     */
    cursor?: EstadoCitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoCitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoCitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstadoCitas.
     */
    distinct?: EstadoCitaScalarFieldEnum | EstadoCitaScalarFieldEnum[]
  }

  /**
   * EstadoCita findFirstOrThrow
   */
  export type EstadoCitaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCita
     */
    select?: EstadoCitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCita
     */
    omit?: EstadoCitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoCitaInclude<ExtArgs> | null
    /**
     * Filter, which EstadoCita to fetch.
     */
    where?: EstadoCitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoCitas to fetch.
     */
    orderBy?: EstadoCitaOrderByWithRelationInput | EstadoCitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstadoCitas.
     */
    cursor?: EstadoCitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoCitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoCitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstadoCitas.
     */
    distinct?: EstadoCitaScalarFieldEnum | EstadoCitaScalarFieldEnum[]
  }

  /**
   * EstadoCita findMany
   */
  export type EstadoCitaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCita
     */
    select?: EstadoCitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCita
     */
    omit?: EstadoCitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoCitaInclude<ExtArgs> | null
    /**
     * Filter, which EstadoCitas to fetch.
     */
    where?: EstadoCitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoCitas to fetch.
     */
    orderBy?: EstadoCitaOrderByWithRelationInput | EstadoCitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EstadoCitas.
     */
    cursor?: EstadoCitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoCitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoCitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstadoCitas.
     */
    distinct?: EstadoCitaScalarFieldEnum | EstadoCitaScalarFieldEnum[]
  }

  /**
   * EstadoCita create
   */
  export type EstadoCitaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCita
     */
    select?: EstadoCitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCita
     */
    omit?: EstadoCitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoCitaInclude<ExtArgs> | null
    /**
     * The data needed to create a EstadoCita.
     */
    data: XOR<EstadoCitaCreateInput, EstadoCitaUncheckedCreateInput>
  }

  /**
   * EstadoCita createMany
   */
  export type EstadoCitaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EstadoCitas.
     */
    data: EstadoCitaCreateManyInput | EstadoCitaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EstadoCita update
   */
  export type EstadoCitaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCita
     */
    select?: EstadoCitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCita
     */
    omit?: EstadoCitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoCitaInclude<ExtArgs> | null
    /**
     * The data needed to update a EstadoCita.
     */
    data: XOR<EstadoCitaUpdateInput, EstadoCitaUncheckedUpdateInput>
    /**
     * Choose, which EstadoCita to update.
     */
    where: EstadoCitaWhereUniqueInput
  }

  /**
   * EstadoCita updateMany
   */
  export type EstadoCitaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EstadoCitas.
     */
    data: XOR<EstadoCitaUpdateManyMutationInput, EstadoCitaUncheckedUpdateManyInput>
    /**
     * Filter which EstadoCitas to update
     */
    where?: EstadoCitaWhereInput
    /**
     * Limit how many EstadoCitas to update.
     */
    limit?: number
  }

  /**
   * EstadoCita upsert
   */
  export type EstadoCitaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCita
     */
    select?: EstadoCitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCita
     */
    omit?: EstadoCitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoCitaInclude<ExtArgs> | null
    /**
     * The filter to search for the EstadoCita to update in case it exists.
     */
    where: EstadoCitaWhereUniqueInput
    /**
     * In case the EstadoCita found by the `where` argument doesn't exist, create a new EstadoCita with this data.
     */
    create: XOR<EstadoCitaCreateInput, EstadoCitaUncheckedCreateInput>
    /**
     * In case the EstadoCita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstadoCitaUpdateInput, EstadoCitaUncheckedUpdateInput>
  }

  /**
   * EstadoCita delete
   */
  export type EstadoCitaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCita
     */
    select?: EstadoCitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCita
     */
    omit?: EstadoCitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoCitaInclude<ExtArgs> | null
    /**
     * Filter which EstadoCita to delete.
     */
    where: EstadoCitaWhereUniqueInput
  }

  /**
   * EstadoCita deleteMany
   */
  export type EstadoCitaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstadoCitas to delete
     */
    where?: EstadoCitaWhereInput
    /**
     * Limit how many EstadoCitas to delete.
     */
    limit?: number
  }

  /**
   * EstadoCita.citas
   */
  export type EstadoCita$citasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    cursor?: CitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * EstadoCita without action
   */
  export type EstadoCitaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCita
     */
    select?: EstadoCitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCita
     */
    omit?: EstadoCitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoCitaInclude<ExtArgs> | null
  }


  /**
   * Model DiaSemana
   */

  export type AggregateDiaSemana = {
    _count: DiaSemanaCountAggregateOutputType | null
    _avg: DiaSemanaAvgAggregateOutputType | null
    _sum: DiaSemanaSumAggregateOutputType | null
    _min: DiaSemanaMinAggregateOutputType | null
    _max: DiaSemanaMaxAggregateOutputType | null
  }

  export type DiaSemanaAvgAggregateOutputType = {
    id: number | null
    numeroOrden: number | null
  }

  export type DiaSemanaSumAggregateOutputType = {
    id: number | null
    numeroOrden: number | null
  }

  export type DiaSemanaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    numeroOrden: number | null
  }

  export type DiaSemanaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    numeroOrden: number | null
  }

  export type DiaSemanaCountAggregateOutputType = {
    id: number
    nombre: number
    numeroOrden: number
    _all: number
  }


  export type DiaSemanaAvgAggregateInputType = {
    id?: true
    numeroOrden?: true
  }

  export type DiaSemanaSumAggregateInputType = {
    id?: true
    numeroOrden?: true
  }

  export type DiaSemanaMinAggregateInputType = {
    id?: true
    nombre?: true
    numeroOrden?: true
  }

  export type DiaSemanaMaxAggregateInputType = {
    id?: true
    nombre?: true
    numeroOrden?: true
  }

  export type DiaSemanaCountAggregateInputType = {
    id?: true
    nombre?: true
    numeroOrden?: true
    _all?: true
  }

  export type DiaSemanaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiaSemana to aggregate.
     */
    where?: DiaSemanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaSemanas to fetch.
     */
    orderBy?: DiaSemanaOrderByWithRelationInput | DiaSemanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiaSemanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaSemanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaSemanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiaSemanas
    **/
    _count?: true | DiaSemanaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiaSemanaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiaSemanaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiaSemanaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiaSemanaMaxAggregateInputType
  }

  export type GetDiaSemanaAggregateType<T extends DiaSemanaAggregateArgs> = {
        [P in keyof T & keyof AggregateDiaSemana]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiaSemana[P]>
      : GetScalarType<T[P], AggregateDiaSemana[P]>
  }




  export type DiaSemanaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiaSemanaWhereInput
    orderBy?: DiaSemanaOrderByWithAggregationInput | DiaSemanaOrderByWithAggregationInput[]
    by: DiaSemanaScalarFieldEnum[] | DiaSemanaScalarFieldEnum
    having?: DiaSemanaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiaSemanaCountAggregateInputType | true
    _avg?: DiaSemanaAvgAggregateInputType
    _sum?: DiaSemanaSumAggregateInputType
    _min?: DiaSemanaMinAggregateInputType
    _max?: DiaSemanaMaxAggregateInputType
  }

  export type DiaSemanaGroupByOutputType = {
    id: number
    nombre: string
    numeroOrden: number
    _count: DiaSemanaCountAggregateOutputType | null
    _avg: DiaSemanaAvgAggregateOutputType | null
    _sum: DiaSemanaSumAggregateOutputType | null
    _min: DiaSemanaMinAggregateOutputType | null
    _max: DiaSemanaMaxAggregateOutputType | null
  }

  type GetDiaSemanaGroupByPayload<T extends DiaSemanaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiaSemanaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiaSemanaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiaSemanaGroupByOutputType[P]>
            : GetScalarType<T[P], DiaSemanaGroupByOutputType[P]>
        }
      >
    >


  export type DiaSemanaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    numeroOrden?: boolean
    horarios?: boolean | DiaSemana$horariosArgs<ExtArgs>
    _count?: boolean | DiaSemanaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diaSemana"]>



  export type DiaSemanaSelectScalar = {
    id?: boolean
    nombre?: boolean
    numeroOrden?: boolean
  }

  export type DiaSemanaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "numeroOrden", ExtArgs["result"]["diaSemana"]>
  export type DiaSemanaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    horarios?: boolean | DiaSemana$horariosArgs<ExtArgs>
    _count?: boolean | DiaSemanaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DiaSemanaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiaSemana"
    objects: {
      horarios: Prisma.$HorarioAtencionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      numeroOrden: number
    }, ExtArgs["result"]["diaSemana"]>
    composites: {}
  }

  type DiaSemanaGetPayload<S extends boolean | null | undefined | DiaSemanaDefaultArgs> = $Result.GetResult<Prisma.$DiaSemanaPayload, S>

  type DiaSemanaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiaSemanaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiaSemanaCountAggregateInputType | true
    }

  export interface DiaSemanaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiaSemana'], meta: { name: 'DiaSemana' } }
    /**
     * Find zero or one DiaSemana that matches the filter.
     * @param {DiaSemanaFindUniqueArgs} args - Arguments to find a DiaSemana
     * @example
     * // Get one DiaSemana
     * const diaSemana = await prisma.diaSemana.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiaSemanaFindUniqueArgs>(args: SelectSubset<T, DiaSemanaFindUniqueArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiaSemana that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiaSemanaFindUniqueOrThrowArgs} args - Arguments to find a DiaSemana
     * @example
     * // Get one DiaSemana
     * const diaSemana = await prisma.diaSemana.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiaSemanaFindUniqueOrThrowArgs>(args: SelectSubset<T, DiaSemanaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiaSemana that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaFindFirstArgs} args - Arguments to find a DiaSemana
     * @example
     * // Get one DiaSemana
     * const diaSemana = await prisma.diaSemana.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiaSemanaFindFirstArgs>(args?: SelectSubset<T, DiaSemanaFindFirstArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiaSemana that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaFindFirstOrThrowArgs} args - Arguments to find a DiaSemana
     * @example
     * // Get one DiaSemana
     * const diaSemana = await prisma.diaSemana.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiaSemanaFindFirstOrThrowArgs>(args?: SelectSubset<T, DiaSemanaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiaSemanas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiaSemanas
     * const diaSemanas = await prisma.diaSemana.findMany()
     * 
     * // Get first 10 DiaSemanas
     * const diaSemanas = await prisma.diaSemana.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diaSemanaWithIdOnly = await prisma.diaSemana.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiaSemanaFindManyArgs>(args?: SelectSubset<T, DiaSemanaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiaSemana.
     * @param {DiaSemanaCreateArgs} args - Arguments to create a DiaSemana.
     * @example
     * // Create one DiaSemana
     * const DiaSemana = await prisma.diaSemana.create({
     *   data: {
     *     // ... data to create a DiaSemana
     *   }
     * })
     * 
     */
    create<T extends DiaSemanaCreateArgs>(args: SelectSubset<T, DiaSemanaCreateArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiaSemanas.
     * @param {DiaSemanaCreateManyArgs} args - Arguments to create many DiaSemanas.
     * @example
     * // Create many DiaSemanas
     * const diaSemana = await prisma.diaSemana.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiaSemanaCreateManyArgs>(args?: SelectSubset<T, DiaSemanaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DiaSemana.
     * @param {DiaSemanaDeleteArgs} args - Arguments to delete one DiaSemana.
     * @example
     * // Delete one DiaSemana
     * const DiaSemana = await prisma.diaSemana.delete({
     *   where: {
     *     // ... filter to delete one DiaSemana
     *   }
     * })
     * 
     */
    delete<T extends DiaSemanaDeleteArgs>(args: SelectSubset<T, DiaSemanaDeleteArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiaSemana.
     * @param {DiaSemanaUpdateArgs} args - Arguments to update one DiaSemana.
     * @example
     * // Update one DiaSemana
     * const diaSemana = await prisma.diaSemana.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiaSemanaUpdateArgs>(args: SelectSubset<T, DiaSemanaUpdateArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiaSemanas.
     * @param {DiaSemanaDeleteManyArgs} args - Arguments to filter DiaSemanas to delete.
     * @example
     * // Delete a few DiaSemanas
     * const { count } = await prisma.diaSemana.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiaSemanaDeleteManyArgs>(args?: SelectSubset<T, DiaSemanaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiaSemanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiaSemanas
     * const diaSemana = await prisma.diaSemana.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiaSemanaUpdateManyArgs>(args: SelectSubset<T, DiaSemanaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiaSemana.
     * @param {DiaSemanaUpsertArgs} args - Arguments to update or create a DiaSemana.
     * @example
     * // Update or create a DiaSemana
     * const diaSemana = await prisma.diaSemana.upsert({
     *   create: {
     *     // ... data to create a DiaSemana
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiaSemana we want to update
     *   }
     * })
     */
    upsert<T extends DiaSemanaUpsertArgs>(args: SelectSubset<T, DiaSemanaUpsertArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiaSemanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaCountArgs} args - Arguments to filter DiaSemanas to count.
     * @example
     * // Count the number of DiaSemanas
     * const count = await prisma.diaSemana.count({
     *   where: {
     *     // ... the filter for the DiaSemanas we want to count
     *   }
     * })
    **/
    count<T extends DiaSemanaCountArgs>(
      args?: Subset<T, DiaSemanaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiaSemanaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiaSemana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiaSemanaAggregateArgs>(args: Subset<T, DiaSemanaAggregateArgs>): Prisma.PrismaPromise<GetDiaSemanaAggregateType<T>>

    /**
     * Group by DiaSemana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaGroupByArgs} args - Group by arguments.
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
      T extends DiaSemanaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiaSemanaGroupByArgs['orderBy'] }
        : { orderBy?: DiaSemanaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiaSemanaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiaSemanaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiaSemana model
   */
  readonly fields: DiaSemanaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiaSemana.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiaSemanaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    horarios<T extends DiaSemana$horariosArgs<ExtArgs> = {}>(args?: Subset<T, DiaSemana$horariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioAtencionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DiaSemana model
   */
  interface DiaSemanaFieldRefs {
    readonly id: FieldRef<"DiaSemana", 'Int'>
    readonly nombre: FieldRef<"DiaSemana", 'String'>
    readonly numeroOrden: FieldRef<"DiaSemana", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DiaSemana findUnique
   */
  export type DiaSemanaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter, which DiaSemana to fetch.
     */
    where: DiaSemanaWhereUniqueInput
  }

  /**
   * DiaSemana findUniqueOrThrow
   */
  export type DiaSemanaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter, which DiaSemana to fetch.
     */
    where: DiaSemanaWhereUniqueInput
  }

  /**
   * DiaSemana findFirst
   */
  export type DiaSemanaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter, which DiaSemana to fetch.
     */
    where?: DiaSemanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaSemanas to fetch.
     */
    orderBy?: DiaSemanaOrderByWithRelationInput | DiaSemanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiaSemanas.
     */
    cursor?: DiaSemanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaSemanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaSemanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiaSemanas.
     */
    distinct?: DiaSemanaScalarFieldEnum | DiaSemanaScalarFieldEnum[]
  }

  /**
   * DiaSemana findFirstOrThrow
   */
  export type DiaSemanaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter, which DiaSemana to fetch.
     */
    where?: DiaSemanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaSemanas to fetch.
     */
    orderBy?: DiaSemanaOrderByWithRelationInput | DiaSemanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiaSemanas.
     */
    cursor?: DiaSemanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaSemanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaSemanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiaSemanas.
     */
    distinct?: DiaSemanaScalarFieldEnum | DiaSemanaScalarFieldEnum[]
  }

  /**
   * DiaSemana findMany
   */
  export type DiaSemanaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter, which DiaSemanas to fetch.
     */
    where?: DiaSemanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaSemanas to fetch.
     */
    orderBy?: DiaSemanaOrderByWithRelationInput | DiaSemanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiaSemanas.
     */
    cursor?: DiaSemanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaSemanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaSemanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiaSemanas.
     */
    distinct?: DiaSemanaScalarFieldEnum | DiaSemanaScalarFieldEnum[]
  }

  /**
   * DiaSemana create
   */
  export type DiaSemanaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * The data needed to create a DiaSemana.
     */
    data: XOR<DiaSemanaCreateInput, DiaSemanaUncheckedCreateInput>
  }

  /**
   * DiaSemana createMany
   */
  export type DiaSemanaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiaSemanas.
     */
    data: DiaSemanaCreateManyInput | DiaSemanaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiaSemana update
   */
  export type DiaSemanaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * The data needed to update a DiaSemana.
     */
    data: XOR<DiaSemanaUpdateInput, DiaSemanaUncheckedUpdateInput>
    /**
     * Choose, which DiaSemana to update.
     */
    where: DiaSemanaWhereUniqueInput
  }

  /**
   * DiaSemana updateMany
   */
  export type DiaSemanaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiaSemanas.
     */
    data: XOR<DiaSemanaUpdateManyMutationInput, DiaSemanaUncheckedUpdateManyInput>
    /**
     * Filter which DiaSemanas to update
     */
    where?: DiaSemanaWhereInput
    /**
     * Limit how many DiaSemanas to update.
     */
    limit?: number
  }

  /**
   * DiaSemana upsert
   */
  export type DiaSemanaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * The filter to search for the DiaSemana to update in case it exists.
     */
    where: DiaSemanaWhereUniqueInput
    /**
     * In case the DiaSemana found by the `where` argument doesn't exist, create a new DiaSemana with this data.
     */
    create: XOR<DiaSemanaCreateInput, DiaSemanaUncheckedCreateInput>
    /**
     * In case the DiaSemana was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiaSemanaUpdateInput, DiaSemanaUncheckedUpdateInput>
  }

  /**
   * DiaSemana delete
   */
  export type DiaSemanaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter which DiaSemana to delete.
     */
    where: DiaSemanaWhereUniqueInput
  }

  /**
   * DiaSemana deleteMany
   */
  export type DiaSemanaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiaSemanas to delete
     */
    where?: DiaSemanaWhereInput
    /**
     * Limit how many DiaSemanas to delete.
     */
    limit?: number
  }

  /**
   * DiaSemana.horarios
   */
  export type DiaSemana$horariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtencion
     */
    select?: HorarioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtencion
     */
    omit?: HorarioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtencionInclude<ExtArgs> | null
    where?: HorarioAtencionWhereInput
    orderBy?: HorarioAtencionOrderByWithRelationInput | HorarioAtencionOrderByWithRelationInput[]
    cursor?: HorarioAtencionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HorarioAtencionScalarFieldEnum | HorarioAtencionScalarFieldEnum[]
  }

  /**
   * DiaSemana without action
   */
  export type DiaSemanaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
  }


  /**
   * Model HorarioAtencion
   */

  export type AggregateHorarioAtencion = {
    _count: HorarioAtencionCountAggregateOutputType | null
    _avg: HorarioAtencionAvgAggregateOutputType | null
    _sum: HorarioAtencionSumAggregateOutputType | null
    _min: HorarioAtencionMinAggregateOutputType | null
    _max: HorarioAtencionMaxAggregateOutputType | null
  }

  export type HorarioAtencionAvgAggregateOutputType = {
    id: number | null
    diaSemanaId: number | null
  }

  export type HorarioAtencionSumAggregateOutputType = {
    id: number | null
    diaSemanaId: number | null
  }

  export type HorarioAtencionMinAggregateOutputType = {
    id: number | null
    diaSemanaId: number | null
    horaInicio: Date | null
    horaFin: Date | null
    activo: boolean | null
  }

  export type HorarioAtencionMaxAggregateOutputType = {
    id: number | null
    diaSemanaId: number | null
    horaInicio: Date | null
    horaFin: Date | null
    activo: boolean | null
  }

  export type HorarioAtencionCountAggregateOutputType = {
    id: number
    diaSemanaId: number
    horaInicio: number
    horaFin: number
    activo: number
    _all: number
  }


  export type HorarioAtencionAvgAggregateInputType = {
    id?: true
    diaSemanaId?: true
  }

  export type HorarioAtencionSumAggregateInputType = {
    id?: true
    diaSemanaId?: true
  }

  export type HorarioAtencionMinAggregateInputType = {
    id?: true
    diaSemanaId?: true
    horaInicio?: true
    horaFin?: true
    activo?: true
  }

  export type HorarioAtencionMaxAggregateInputType = {
    id?: true
    diaSemanaId?: true
    horaInicio?: true
    horaFin?: true
    activo?: true
  }

  export type HorarioAtencionCountAggregateInputType = {
    id?: true
    diaSemanaId?: true
    horaInicio?: true
    horaFin?: true
    activo?: true
    _all?: true
  }

  export type HorarioAtencionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorarioAtencion to aggregate.
     */
    where?: HorarioAtencionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioAtencions to fetch.
     */
    orderBy?: HorarioAtencionOrderByWithRelationInput | HorarioAtencionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HorarioAtencionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioAtencions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioAtencions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HorarioAtencions
    **/
    _count?: true | HorarioAtencionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HorarioAtencionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HorarioAtencionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorarioAtencionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorarioAtencionMaxAggregateInputType
  }

  export type GetHorarioAtencionAggregateType<T extends HorarioAtencionAggregateArgs> = {
        [P in keyof T & keyof AggregateHorarioAtencion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorarioAtencion[P]>
      : GetScalarType<T[P], AggregateHorarioAtencion[P]>
  }




  export type HorarioAtencionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorarioAtencionWhereInput
    orderBy?: HorarioAtencionOrderByWithAggregationInput | HorarioAtencionOrderByWithAggregationInput[]
    by: HorarioAtencionScalarFieldEnum[] | HorarioAtencionScalarFieldEnum
    having?: HorarioAtencionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorarioAtencionCountAggregateInputType | true
    _avg?: HorarioAtencionAvgAggregateInputType
    _sum?: HorarioAtencionSumAggregateInputType
    _min?: HorarioAtencionMinAggregateInputType
    _max?: HorarioAtencionMaxAggregateInputType
  }

  export type HorarioAtencionGroupByOutputType = {
    id: number
    diaSemanaId: number
    horaInicio: Date
    horaFin: Date
    activo: boolean
    _count: HorarioAtencionCountAggregateOutputType | null
    _avg: HorarioAtencionAvgAggregateOutputType | null
    _sum: HorarioAtencionSumAggregateOutputType | null
    _min: HorarioAtencionMinAggregateOutputType | null
    _max: HorarioAtencionMaxAggregateOutputType | null
  }

  type GetHorarioAtencionGroupByPayload<T extends HorarioAtencionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorarioAtencionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorarioAtencionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorarioAtencionGroupByOutputType[P]>
            : GetScalarType<T[P], HorarioAtencionGroupByOutputType[P]>
        }
      >
    >


  export type HorarioAtencionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diaSemanaId?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    activo?: boolean
    diaSemana?: boolean | DiaSemanaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horarioAtencion"]>



  export type HorarioAtencionSelectScalar = {
    id?: boolean
    diaSemanaId?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    activo?: boolean
  }

  export type HorarioAtencionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "diaSemanaId" | "horaInicio" | "horaFin" | "activo", ExtArgs["result"]["horarioAtencion"]>
  export type HorarioAtencionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diaSemana?: boolean | DiaSemanaDefaultArgs<ExtArgs>
  }

  export type $HorarioAtencionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HorarioAtencion"
    objects: {
      diaSemana: Prisma.$DiaSemanaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      diaSemanaId: number
      horaInicio: Date
      horaFin: Date
      activo: boolean
    }, ExtArgs["result"]["horarioAtencion"]>
    composites: {}
  }

  type HorarioAtencionGetPayload<S extends boolean | null | undefined | HorarioAtencionDefaultArgs> = $Result.GetResult<Prisma.$HorarioAtencionPayload, S>

  type HorarioAtencionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HorarioAtencionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HorarioAtencionCountAggregateInputType | true
    }

  export interface HorarioAtencionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HorarioAtencion'], meta: { name: 'HorarioAtencion' } }
    /**
     * Find zero or one HorarioAtencion that matches the filter.
     * @param {HorarioAtencionFindUniqueArgs} args - Arguments to find a HorarioAtencion
     * @example
     * // Get one HorarioAtencion
     * const horarioAtencion = await prisma.horarioAtencion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HorarioAtencionFindUniqueArgs>(args: SelectSubset<T, HorarioAtencionFindUniqueArgs<ExtArgs>>): Prisma__HorarioAtencionClient<$Result.GetResult<Prisma.$HorarioAtencionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HorarioAtencion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HorarioAtencionFindUniqueOrThrowArgs} args - Arguments to find a HorarioAtencion
     * @example
     * // Get one HorarioAtencion
     * const horarioAtencion = await prisma.horarioAtencion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HorarioAtencionFindUniqueOrThrowArgs>(args: SelectSubset<T, HorarioAtencionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HorarioAtencionClient<$Result.GetResult<Prisma.$HorarioAtencionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorarioAtencion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioAtencionFindFirstArgs} args - Arguments to find a HorarioAtencion
     * @example
     * // Get one HorarioAtencion
     * const horarioAtencion = await prisma.horarioAtencion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HorarioAtencionFindFirstArgs>(args?: SelectSubset<T, HorarioAtencionFindFirstArgs<ExtArgs>>): Prisma__HorarioAtencionClient<$Result.GetResult<Prisma.$HorarioAtencionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorarioAtencion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioAtencionFindFirstOrThrowArgs} args - Arguments to find a HorarioAtencion
     * @example
     * // Get one HorarioAtencion
     * const horarioAtencion = await prisma.horarioAtencion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HorarioAtencionFindFirstOrThrowArgs>(args?: SelectSubset<T, HorarioAtencionFindFirstOrThrowArgs<ExtArgs>>): Prisma__HorarioAtencionClient<$Result.GetResult<Prisma.$HorarioAtencionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HorarioAtencions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioAtencionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HorarioAtencions
     * const horarioAtencions = await prisma.horarioAtencion.findMany()
     * 
     * // Get first 10 HorarioAtencions
     * const horarioAtencions = await prisma.horarioAtencion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const horarioAtencionWithIdOnly = await prisma.horarioAtencion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HorarioAtencionFindManyArgs>(args?: SelectSubset<T, HorarioAtencionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioAtencionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HorarioAtencion.
     * @param {HorarioAtencionCreateArgs} args - Arguments to create a HorarioAtencion.
     * @example
     * // Create one HorarioAtencion
     * const HorarioAtencion = await prisma.horarioAtencion.create({
     *   data: {
     *     // ... data to create a HorarioAtencion
     *   }
     * })
     * 
     */
    create<T extends HorarioAtencionCreateArgs>(args: SelectSubset<T, HorarioAtencionCreateArgs<ExtArgs>>): Prisma__HorarioAtencionClient<$Result.GetResult<Prisma.$HorarioAtencionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HorarioAtencions.
     * @param {HorarioAtencionCreateManyArgs} args - Arguments to create many HorarioAtencions.
     * @example
     * // Create many HorarioAtencions
     * const horarioAtencion = await prisma.horarioAtencion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HorarioAtencionCreateManyArgs>(args?: SelectSubset<T, HorarioAtencionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HorarioAtencion.
     * @param {HorarioAtencionDeleteArgs} args - Arguments to delete one HorarioAtencion.
     * @example
     * // Delete one HorarioAtencion
     * const HorarioAtencion = await prisma.horarioAtencion.delete({
     *   where: {
     *     // ... filter to delete one HorarioAtencion
     *   }
     * })
     * 
     */
    delete<T extends HorarioAtencionDeleteArgs>(args: SelectSubset<T, HorarioAtencionDeleteArgs<ExtArgs>>): Prisma__HorarioAtencionClient<$Result.GetResult<Prisma.$HorarioAtencionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HorarioAtencion.
     * @param {HorarioAtencionUpdateArgs} args - Arguments to update one HorarioAtencion.
     * @example
     * // Update one HorarioAtencion
     * const horarioAtencion = await prisma.horarioAtencion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HorarioAtencionUpdateArgs>(args: SelectSubset<T, HorarioAtencionUpdateArgs<ExtArgs>>): Prisma__HorarioAtencionClient<$Result.GetResult<Prisma.$HorarioAtencionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HorarioAtencions.
     * @param {HorarioAtencionDeleteManyArgs} args - Arguments to filter HorarioAtencions to delete.
     * @example
     * // Delete a few HorarioAtencions
     * const { count } = await prisma.horarioAtencion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HorarioAtencionDeleteManyArgs>(args?: SelectSubset<T, HorarioAtencionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HorarioAtencions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioAtencionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HorarioAtencions
     * const horarioAtencion = await prisma.horarioAtencion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HorarioAtencionUpdateManyArgs>(args: SelectSubset<T, HorarioAtencionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HorarioAtencion.
     * @param {HorarioAtencionUpsertArgs} args - Arguments to update or create a HorarioAtencion.
     * @example
     * // Update or create a HorarioAtencion
     * const horarioAtencion = await prisma.horarioAtencion.upsert({
     *   create: {
     *     // ... data to create a HorarioAtencion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HorarioAtencion we want to update
     *   }
     * })
     */
    upsert<T extends HorarioAtencionUpsertArgs>(args: SelectSubset<T, HorarioAtencionUpsertArgs<ExtArgs>>): Prisma__HorarioAtencionClient<$Result.GetResult<Prisma.$HorarioAtencionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HorarioAtencions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioAtencionCountArgs} args - Arguments to filter HorarioAtencions to count.
     * @example
     * // Count the number of HorarioAtencions
     * const count = await prisma.horarioAtencion.count({
     *   where: {
     *     // ... the filter for the HorarioAtencions we want to count
     *   }
     * })
    **/
    count<T extends HorarioAtencionCountArgs>(
      args?: Subset<T, HorarioAtencionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorarioAtencionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HorarioAtencion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioAtencionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HorarioAtencionAggregateArgs>(args: Subset<T, HorarioAtencionAggregateArgs>): Prisma.PrismaPromise<GetHorarioAtencionAggregateType<T>>

    /**
     * Group by HorarioAtencion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioAtencionGroupByArgs} args - Group by arguments.
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
      T extends HorarioAtencionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HorarioAtencionGroupByArgs['orderBy'] }
        : { orderBy?: HorarioAtencionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HorarioAtencionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorarioAtencionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HorarioAtencion model
   */
  readonly fields: HorarioAtencionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HorarioAtencion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HorarioAtencionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diaSemana<T extends DiaSemanaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiaSemanaDefaultArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HorarioAtencion model
   */
  interface HorarioAtencionFieldRefs {
    readonly id: FieldRef<"HorarioAtencion", 'Int'>
    readonly diaSemanaId: FieldRef<"HorarioAtencion", 'Int'>
    readonly horaInicio: FieldRef<"HorarioAtencion", 'DateTime'>
    readonly horaFin: FieldRef<"HorarioAtencion", 'DateTime'>
    readonly activo: FieldRef<"HorarioAtencion", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * HorarioAtencion findUnique
   */
  export type HorarioAtencionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtencion
     */
    select?: HorarioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtencion
     */
    omit?: HorarioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtencionInclude<ExtArgs> | null
    /**
     * Filter, which HorarioAtencion to fetch.
     */
    where: HorarioAtencionWhereUniqueInput
  }

  /**
   * HorarioAtencion findUniqueOrThrow
   */
  export type HorarioAtencionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtencion
     */
    select?: HorarioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtencion
     */
    omit?: HorarioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtencionInclude<ExtArgs> | null
    /**
     * Filter, which HorarioAtencion to fetch.
     */
    where: HorarioAtencionWhereUniqueInput
  }

  /**
   * HorarioAtencion findFirst
   */
  export type HorarioAtencionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtencion
     */
    select?: HorarioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtencion
     */
    omit?: HorarioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtencionInclude<ExtArgs> | null
    /**
     * Filter, which HorarioAtencion to fetch.
     */
    where?: HorarioAtencionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioAtencions to fetch.
     */
    orderBy?: HorarioAtencionOrderByWithRelationInput | HorarioAtencionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorarioAtencions.
     */
    cursor?: HorarioAtencionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioAtencions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioAtencions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorarioAtencions.
     */
    distinct?: HorarioAtencionScalarFieldEnum | HorarioAtencionScalarFieldEnum[]
  }

  /**
   * HorarioAtencion findFirstOrThrow
   */
  export type HorarioAtencionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtencion
     */
    select?: HorarioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtencion
     */
    omit?: HorarioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtencionInclude<ExtArgs> | null
    /**
     * Filter, which HorarioAtencion to fetch.
     */
    where?: HorarioAtencionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioAtencions to fetch.
     */
    orderBy?: HorarioAtencionOrderByWithRelationInput | HorarioAtencionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorarioAtencions.
     */
    cursor?: HorarioAtencionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioAtencions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioAtencions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorarioAtencions.
     */
    distinct?: HorarioAtencionScalarFieldEnum | HorarioAtencionScalarFieldEnum[]
  }

  /**
   * HorarioAtencion findMany
   */
  export type HorarioAtencionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtencion
     */
    select?: HorarioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtencion
     */
    omit?: HorarioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtencionInclude<ExtArgs> | null
    /**
     * Filter, which HorarioAtencions to fetch.
     */
    where?: HorarioAtencionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioAtencions to fetch.
     */
    orderBy?: HorarioAtencionOrderByWithRelationInput | HorarioAtencionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HorarioAtencions.
     */
    cursor?: HorarioAtencionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioAtencions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioAtencions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorarioAtencions.
     */
    distinct?: HorarioAtencionScalarFieldEnum | HorarioAtencionScalarFieldEnum[]
  }

  /**
   * HorarioAtencion create
   */
  export type HorarioAtencionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtencion
     */
    select?: HorarioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtencion
     */
    omit?: HorarioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtencionInclude<ExtArgs> | null
    /**
     * The data needed to create a HorarioAtencion.
     */
    data: XOR<HorarioAtencionCreateInput, HorarioAtencionUncheckedCreateInput>
  }

  /**
   * HorarioAtencion createMany
   */
  export type HorarioAtencionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HorarioAtencions.
     */
    data: HorarioAtencionCreateManyInput | HorarioAtencionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HorarioAtencion update
   */
  export type HorarioAtencionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtencion
     */
    select?: HorarioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtencion
     */
    omit?: HorarioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtencionInclude<ExtArgs> | null
    /**
     * The data needed to update a HorarioAtencion.
     */
    data: XOR<HorarioAtencionUpdateInput, HorarioAtencionUncheckedUpdateInput>
    /**
     * Choose, which HorarioAtencion to update.
     */
    where: HorarioAtencionWhereUniqueInput
  }

  /**
   * HorarioAtencion updateMany
   */
  export type HorarioAtencionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HorarioAtencions.
     */
    data: XOR<HorarioAtencionUpdateManyMutationInput, HorarioAtencionUncheckedUpdateManyInput>
    /**
     * Filter which HorarioAtencions to update
     */
    where?: HorarioAtencionWhereInput
    /**
     * Limit how many HorarioAtencions to update.
     */
    limit?: number
  }

  /**
   * HorarioAtencion upsert
   */
  export type HorarioAtencionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtencion
     */
    select?: HorarioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtencion
     */
    omit?: HorarioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtencionInclude<ExtArgs> | null
    /**
     * The filter to search for the HorarioAtencion to update in case it exists.
     */
    where: HorarioAtencionWhereUniqueInput
    /**
     * In case the HorarioAtencion found by the `where` argument doesn't exist, create a new HorarioAtencion with this data.
     */
    create: XOR<HorarioAtencionCreateInput, HorarioAtencionUncheckedCreateInput>
    /**
     * In case the HorarioAtencion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HorarioAtencionUpdateInput, HorarioAtencionUncheckedUpdateInput>
  }

  /**
   * HorarioAtencion delete
   */
  export type HorarioAtencionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtencion
     */
    select?: HorarioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtencion
     */
    omit?: HorarioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtencionInclude<ExtArgs> | null
    /**
     * Filter which HorarioAtencion to delete.
     */
    where: HorarioAtencionWhereUniqueInput
  }

  /**
   * HorarioAtencion deleteMany
   */
  export type HorarioAtencionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorarioAtencions to delete
     */
    where?: HorarioAtencionWhereInput
    /**
     * Limit how many HorarioAtencions to delete.
     */
    limit?: number
  }

  /**
   * HorarioAtencion without action
   */
  export type HorarioAtencionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtencion
     */
    select?: HorarioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtencion
     */
    omit?: HorarioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtencionInclude<ExtArgs> | null
  }


  /**
   * Model TipoRestriccionHorario
   */

  export type AggregateTipoRestriccionHorario = {
    _count: TipoRestriccionHorarioCountAggregateOutputType | null
    _avg: TipoRestriccionHorarioAvgAggregateOutputType | null
    _sum: TipoRestriccionHorarioSumAggregateOutputType | null
    _min: TipoRestriccionHorarioMinAggregateOutputType | null
    _max: TipoRestriccionHorarioMaxAggregateOutputType | null
  }

  export type TipoRestriccionHorarioAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoRestriccionHorarioSumAggregateOutputType = {
    id: number | null
  }

  export type TipoRestriccionHorarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type TipoRestriccionHorarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type TipoRestriccionHorarioCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type TipoRestriccionHorarioAvgAggregateInputType = {
    id?: true
  }

  export type TipoRestriccionHorarioSumAggregateInputType = {
    id?: true
  }

  export type TipoRestriccionHorarioMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type TipoRestriccionHorarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type TipoRestriccionHorarioCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type TipoRestriccionHorarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoRestriccionHorario to aggregate.
     */
    where?: TipoRestriccionHorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoRestriccionHorarios to fetch.
     */
    orderBy?: TipoRestriccionHorarioOrderByWithRelationInput | TipoRestriccionHorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoRestriccionHorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoRestriccionHorarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoRestriccionHorarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoRestriccionHorarios
    **/
    _count?: true | TipoRestriccionHorarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoRestriccionHorarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoRestriccionHorarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoRestriccionHorarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoRestriccionHorarioMaxAggregateInputType
  }

  export type GetTipoRestriccionHorarioAggregateType<T extends TipoRestriccionHorarioAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoRestriccionHorario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoRestriccionHorario[P]>
      : GetScalarType<T[P], AggregateTipoRestriccionHorario[P]>
  }




  export type TipoRestriccionHorarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoRestriccionHorarioWhereInput
    orderBy?: TipoRestriccionHorarioOrderByWithAggregationInput | TipoRestriccionHorarioOrderByWithAggregationInput[]
    by: TipoRestriccionHorarioScalarFieldEnum[] | TipoRestriccionHorarioScalarFieldEnum
    having?: TipoRestriccionHorarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoRestriccionHorarioCountAggregateInputType | true
    _avg?: TipoRestriccionHorarioAvgAggregateInputType
    _sum?: TipoRestriccionHorarioSumAggregateInputType
    _min?: TipoRestriccionHorarioMinAggregateInputType
    _max?: TipoRestriccionHorarioMaxAggregateInputType
  }

  export type TipoRestriccionHorarioGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    _count: TipoRestriccionHorarioCountAggregateOutputType | null
    _avg: TipoRestriccionHorarioAvgAggregateOutputType | null
    _sum: TipoRestriccionHorarioSumAggregateOutputType | null
    _min: TipoRestriccionHorarioMinAggregateOutputType | null
    _max: TipoRestriccionHorarioMaxAggregateOutputType | null
  }

  type GetTipoRestriccionHorarioGroupByPayload<T extends TipoRestriccionHorarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoRestriccionHorarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoRestriccionHorarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoRestriccionHorarioGroupByOutputType[P]>
            : GetScalarType<T[P], TipoRestriccionHorarioGroupByOutputType[P]>
        }
      >
    >


  export type TipoRestriccionHorarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    restricciones?: boolean | TipoRestriccionHorario$restriccionesArgs<ExtArgs>
    _count?: boolean | TipoRestriccionHorarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoRestriccionHorario"]>



  export type TipoRestriccionHorarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type TipoRestriccionHorarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion", ExtArgs["result"]["tipoRestriccionHorario"]>
  export type TipoRestriccionHorarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restricciones?: boolean | TipoRestriccionHorario$restriccionesArgs<ExtArgs>
    _count?: boolean | TipoRestriccionHorarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TipoRestriccionHorarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoRestriccionHorario"
    objects: {
      restricciones: Prisma.$RestriccionHorarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
    }, ExtArgs["result"]["tipoRestriccionHorario"]>
    composites: {}
  }

  type TipoRestriccionHorarioGetPayload<S extends boolean | null | undefined | TipoRestriccionHorarioDefaultArgs> = $Result.GetResult<Prisma.$TipoRestriccionHorarioPayload, S>

  type TipoRestriccionHorarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoRestriccionHorarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoRestriccionHorarioCountAggregateInputType | true
    }

  export interface TipoRestriccionHorarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoRestriccionHorario'], meta: { name: 'TipoRestriccionHorario' } }
    /**
     * Find zero or one TipoRestriccionHorario that matches the filter.
     * @param {TipoRestriccionHorarioFindUniqueArgs} args - Arguments to find a TipoRestriccionHorario
     * @example
     * // Get one TipoRestriccionHorario
     * const tipoRestriccionHorario = await prisma.tipoRestriccionHorario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoRestriccionHorarioFindUniqueArgs>(args: SelectSubset<T, TipoRestriccionHorarioFindUniqueArgs<ExtArgs>>): Prisma__TipoRestriccionHorarioClient<$Result.GetResult<Prisma.$TipoRestriccionHorarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoRestriccionHorario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoRestriccionHorarioFindUniqueOrThrowArgs} args - Arguments to find a TipoRestriccionHorario
     * @example
     * // Get one TipoRestriccionHorario
     * const tipoRestriccionHorario = await prisma.tipoRestriccionHorario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoRestriccionHorarioFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoRestriccionHorarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoRestriccionHorarioClient<$Result.GetResult<Prisma.$TipoRestriccionHorarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoRestriccionHorario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRestriccionHorarioFindFirstArgs} args - Arguments to find a TipoRestriccionHorario
     * @example
     * // Get one TipoRestriccionHorario
     * const tipoRestriccionHorario = await prisma.tipoRestriccionHorario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoRestriccionHorarioFindFirstArgs>(args?: SelectSubset<T, TipoRestriccionHorarioFindFirstArgs<ExtArgs>>): Prisma__TipoRestriccionHorarioClient<$Result.GetResult<Prisma.$TipoRestriccionHorarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoRestriccionHorario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRestriccionHorarioFindFirstOrThrowArgs} args - Arguments to find a TipoRestriccionHorario
     * @example
     * // Get one TipoRestriccionHorario
     * const tipoRestriccionHorario = await prisma.tipoRestriccionHorario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoRestriccionHorarioFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoRestriccionHorarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoRestriccionHorarioClient<$Result.GetResult<Prisma.$TipoRestriccionHorarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoRestriccionHorarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRestriccionHorarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoRestriccionHorarios
     * const tipoRestriccionHorarios = await prisma.tipoRestriccionHorario.findMany()
     * 
     * // Get first 10 TipoRestriccionHorarios
     * const tipoRestriccionHorarios = await prisma.tipoRestriccionHorario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoRestriccionHorarioWithIdOnly = await prisma.tipoRestriccionHorario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoRestriccionHorarioFindManyArgs>(args?: SelectSubset<T, TipoRestriccionHorarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoRestriccionHorarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoRestriccionHorario.
     * @param {TipoRestriccionHorarioCreateArgs} args - Arguments to create a TipoRestriccionHorario.
     * @example
     * // Create one TipoRestriccionHorario
     * const TipoRestriccionHorario = await prisma.tipoRestriccionHorario.create({
     *   data: {
     *     // ... data to create a TipoRestriccionHorario
     *   }
     * })
     * 
     */
    create<T extends TipoRestriccionHorarioCreateArgs>(args: SelectSubset<T, TipoRestriccionHorarioCreateArgs<ExtArgs>>): Prisma__TipoRestriccionHorarioClient<$Result.GetResult<Prisma.$TipoRestriccionHorarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoRestriccionHorarios.
     * @param {TipoRestriccionHorarioCreateManyArgs} args - Arguments to create many TipoRestriccionHorarios.
     * @example
     * // Create many TipoRestriccionHorarios
     * const tipoRestriccionHorario = await prisma.tipoRestriccionHorario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoRestriccionHorarioCreateManyArgs>(args?: SelectSubset<T, TipoRestriccionHorarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TipoRestriccionHorario.
     * @param {TipoRestriccionHorarioDeleteArgs} args - Arguments to delete one TipoRestriccionHorario.
     * @example
     * // Delete one TipoRestriccionHorario
     * const TipoRestriccionHorario = await prisma.tipoRestriccionHorario.delete({
     *   where: {
     *     // ... filter to delete one TipoRestriccionHorario
     *   }
     * })
     * 
     */
    delete<T extends TipoRestriccionHorarioDeleteArgs>(args: SelectSubset<T, TipoRestriccionHorarioDeleteArgs<ExtArgs>>): Prisma__TipoRestriccionHorarioClient<$Result.GetResult<Prisma.$TipoRestriccionHorarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoRestriccionHorario.
     * @param {TipoRestriccionHorarioUpdateArgs} args - Arguments to update one TipoRestriccionHorario.
     * @example
     * // Update one TipoRestriccionHorario
     * const tipoRestriccionHorario = await prisma.tipoRestriccionHorario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoRestriccionHorarioUpdateArgs>(args: SelectSubset<T, TipoRestriccionHorarioUpdateArgs<ExtArgs>>): Prisma__TipoRestriccionHorarioClient<$Result.GetResult<Prisma.$TipoRestriccionHorarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoRestriccionHorarios.
     * @param {TipoRestriccionHorarioDeleteManyArgs} args - Arguments to filter TipoRestriccionHorarios to delete.
     * @example
     * // Delete a few TipoRestriccionHorarios
     * const { count } = await prisma.tipoRestriccionHorario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoRestriccionHorarioDeleteManyArgs>(args?: SelectSubset<T, TipoRestriccionHorarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoRestriccionHorarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRestriccionHorarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoRestriccionHorarios
     * const tipoRestriccionHorario = await prisma.tipoRestriccionHorario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoRestriccionHorarioUpdateManyArgs>(args: SelectSubset<T, TipoRestriccionHorarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TipoRestriccionHorario.
     * @param {TipoRestriccionHorarioUpsertArgs} args - Arguments to update or create a TipoRestriccionHorario.
     * @example
     * // Update or create a TipoRestriccionHorario
     * const tipoRestriccionHorario = await prisma.tipoRestriccionHorario.upsert({
     *   create: {
     *     // ... data to create a TipoRestriccionHorario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoRestriccionHorario we want to update
     *   }
     * })
     */
    upsert<T extends TipoRestriccionHorarioUpsertArgs>(args: SelectSubset<T, TipoRestriccionHorarioUpsertArgs<ExtArgs>>): Prisma__TipoRestriccionHorarioClient<$Result.GetResult<Prisma.$TipoRestriccionHorarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoRestriccionHorarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRestriccionHorarioCountArgs} args - Arguments to filter TipoRestriccionHorarios to count.
     * @example
     * // Count the number of TipoRestriccionHorarios
     * const count = await prisma.tipoRestriccionHorario.count({
     *   where: {
     *     // ... the filter for the TipoRestriccionHorarios we want to count
     *   }
     * })
    **/
    count<T extends TipoRestriccionHorarioCountArgs>(
      args?: Subset<T, TipoRestriccionHorarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoRestriccionHorarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoRestriccionHorario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRestriccionHorarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoRestriccionHorarioAggregateArgs>(args: Subset<T, TipoRestriccionHorarioAggregateArgs>): Prisma.PrismaPromise<GetTipoRestriccionHorarioAggregateType<T>>

    /**
     * Group by TipoRestriccionHorario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRestriccionHorarioGroupByArgs} args - Group by arguments.
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
      T extends TipoRestriccionHorarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoRestriccionHorarioGroupByArgs['orderBy'] }
        : { orderBy?: TipoRestriccionHorarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipoRestriccionHorarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoRestriccionHorarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoRestriccionHorario model
   */
  readonly fields: TipoRestriccionHorarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoRestriccionHorario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoRestriccionHorarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restricciones<T extends TipoRestriccionHorario$restriccionesArgs<ExtArgs> = {}>(args?: Subset<T, TipoRestriccionHorario$restriccionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestriccionHorarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TipoRestriccionHorario model
   */
  interface TipoRestriccionHorarioFieldRefs {
    readonly id: FieldRef<"TipoRestriccionHorario", 'Int'>
    readonly nombre: FieldRef<"TipoRestriccionHorario", 'String'>
    readonly descripcion: FieldRef<"TipoRestriccionHorario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TipoRestriccionHorario findUnique
   */
  export type TipoRestriccionHorarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRestriccionHorario
     */
    select?: TipoRestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRestriccionHorario
     */
    omit?: TipoRestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRestriccionHorarioInclude<ExtArgs> | null
    /**
     * Filter, which TipoRestriccionHorario to fetch.
     */
    where: TipoRestriccionHorarioWhereUniqueInput
  }

  /**
   * TipoRestriccionHorario findUniqueOrThrow
   */
  export type TipoRestriccionHorarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRestriccionHorario
     */
    select?: TipoRestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRestriccionHorario
     */
    omit?: TipoRestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRestriccionHorarioInclude<ExtArgs> | null
    /**
     * Filter, which TipoRestriccionHorario to fetch.
     */
    where: TipoRestriccionHorarioWhereUniqueInput
  }

  /**
   * TipoRestriccionHorario findFirst
   */
  export type TipoRestriccionHorarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRestriccionHorario
     */
    select?: TipoRestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRestriccionHorario
     */
    omit?: TipoRestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRestriccionHorarioInclude<ExtArgs> | null
    /**
     * Filter, which TipoRestriccionHorario to fetch.
     */
    where?: TipoRestriccionHorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoRestriccionHorarios to fetch.
     */
    orderBy?: TipoRestriccionHorarioOrderByWithRelationInput | TipoRestriccionHorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoRestriccionHorarios.
     */
    cursor?: TipoRestriccionHorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoRestriccionHorarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoRestriccionHorarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoRestriccionHorarios.
     */
    distinct?: TipoRestriccionHorarioScalarFieldEnum | TipoRestriccionHorarioScalarFieldEnum[]
  }

  /**
   * TipoRestriccionHorario findFirstOrThrow
   */
  export type TipoRestriccionHorarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRestriccionHorario
     */
    select?: TipoRestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRestriccionHorario
     */
    omit?: TipoRestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRestriccionHorarioInclude<ExtArgs> | null
    /**
     * Filter, which TipoRestriccionHorario to fetch.
     */
    where?: TipoRestriccionHorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoRestriccionHorarios to fetch.
     */
    orderBy?: TipoRestriccionHorarioOrderByWithRelationInput | TipoRestriccionHorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoRestriccionHorarios.
     */
    cursor?: TipoRestriccionHorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoRestriccionHorarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoRestriccionHorarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoRestriccionHorarios.
     */
    distinct?: TipoRestriccionHorarioScalarFieldEnum | TipoRestriccionHorarioScalarFieldEnum[]
  }

  /**
   * TipoRestriccionHorario findMany
   */
  export type TipoRestriccionHorarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRestriccionHorario
     */
    select?: TipoRestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRestriccionHorario
     */
    omit?: TipoRestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRestriccionHorarioInclude<ExtArgs> | null
    /**
     * Filter, which TipoRestriccionHorarios to fetch.
     */
    where?: TipoRestriccionHorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoRestriccionHorarios to fetch.
     */
    orderBy?: TipoRestriccionHorarioOrderByWithRelationInput | TipoRestriccionHorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoRestriccionHorarios.
     */
    cursor?: TipoRestriccionHorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoRestriccionHorarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoRestriccionHorarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoRestriccionHorarios.
     */
    distinct?: TipoRestriccionHorarioScalarFieldEnum | TipoRestriccionHorarioScalarFieldEnum[]
  }

  /**
   * TipoRestriccionHorario create
   */
  export type TipoRestriccionHorarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRestriccionHorario
     */
    select?: TipoRestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRestriccionHorario
     */
    omit?: TipoRestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRestriccionHorarioInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoRestriccionHorario.
     */
    data: XOR<TipoRestriccionHorarioCreateInput, TipoRestriccionHorarioUncheckedCreateInput>
  }

  /**
   * TipoRestriccionHorario createMany
   */
  export type TipoRestriccionHorarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoRestriccionHorarios.
     */
    data: TipoRestriccionHorarioCreateManyInput | TipoRestriccionHorarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoRestriccionHorario update
   */
  export type TipoRestriccionHorarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRestriccionHorario
     */
    select?: TipoRestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRestriccionHorario
     */
    omit?: TipoRestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRestriccionHorarioInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoRestriccionHorario.
     */
    data: XOR<TipoRestriccionHorarioUpdateInput, TipoRestriccionHorarioUncheckedUpdateInput>
    /**
     * Choose, which TipoRestriccionHorario to update.
     */
    where: TipoRestriccionHorarioWhereUniqueInput
  }

  /**
   * TipoRestriccionHorario updateMany
   */
  export type TipoRestriccionHorarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoRestriccionHorarios.
     */
    data: XOR<TipoRestriccionHorarioUpdateManyMutationInput, TipoRestriccionHorarioUncheckedUpdateManyInput>
    /**
     * Filter which TipoRestriccionHorarios to update
     */
    where?: TipoRestriccionHorarioWhereInput
    /**
     * Limit how many TipoRestriccionHorarios to update.
     */
    limit?: number
  }

  /**
   * TipoRestriccionHorario upsert
   */
  export type TipoRestriccionHorarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRestriccionHorario
     */
    select?: TipoRestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRestriccionHorario
     */
    omit?: TipoRestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRestriccionHorarioInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoRestriccionHorario to update in case it exists.
     */
    where: TipoRestriccionHorarioWhereUniqueInput
    /**
     * In case the TipoRestriccionHorario found by the `where` argument doesn't exist, create a new TipoRestriccionHorario with this data.
     */
    create: XOR<TipoRestriccionHorarioCreateInput, TipoRestriccionHorarioUncheckedCreateInput>
    /**
     * In case the TipoRestriccionHorario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoRestriccionHorarioUpdateInput, TipoRestriccionHorarioUncheckedUpdateInput>
  }

  /**
   * TipoRestriccionHorario delete
   */
  export type TipoRestriccionHorarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRestriccionHorario
     */
    select?: TipoRestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRestriccionHorario
     */
    omit?: TipoRestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRestriccionHorarioInclude<ExtArgs> | null
    /**
     * Filter which TipoRestriccionHorario to delete.
     */
    where: TipoRestriccionHorarioWhereUniqueInput
  }

  /**
   * TipoRestriccionHorario deleteMany
   */
  export type TipoRestriccionHorarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoRestriccionHorarios to delete
     */
    where?: TipoRestriccionHorarioWhereInput
    /**
     * Limit how many TipoRestriccionHorarios to delete.
     */
    limit?: number
  }

  /**
   * TipoRestriccionHorario.restricciones
   */
  export type TipoRestriccionHorario$restriccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestriccionHorario
     */
    select?: RestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestriccionHorario
     */
    omit?: RestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestriccionHorarioInclude<ExtArgs> | null
    where?: RestriccionHorarioWhereInput
    orderBy?: RestriccionHorarioOrderByWithRelationInput | RestriccionHorarioOrderByWithRelationInput[]
    cursor?: RestriccionHorarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestriccionHorarioScalarFieldEnum | RestriccionHorarioScalarFieldEnum[]
  }

  /**
   * TipoRestriccionHorario without action
   */
  export type TipoRestriccionHorarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRestriccionHorario
     */
    select?: TipoRestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRestriccionHorario
     */
    omit?: TipoRestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRestriccionHorarioInclude<ExtArgs> | null
  }


  /**
   * Model RestriccionHorario
   */

  export type AggregateRestriccionHorario = {
    _count: RestriccionHorarioCountAggregateOutputType | null
    _avg: RestriccionHorarioAvgAggregateOutputType | null
    _sum: RestriccionHorarioSumAggregateOutputType | null
    _min: RestriccionHorarioMinAggregateOutputType | null
    _max: RestriccionHorarioMaxAggregateOutputType | null
  }

  export type RestriccionHorarioAvgAggregateOutputType = {
    id: number | null
    tipoRestriccionId: number | null
    empleadoId: number | null
  }

  export type RestriccionHorarioSumAggregateOutputType = {
    id: number | null
    tipoRestriccionId: number | null
    empleadoId: number | null
  }

  export type RestriccionHorarioMinAggregateOutputType = {
    id: number | null
    tipoRestriccionId: number | null
    empleadoId: number | null
    fecha: Date | null
    horaInicio: Date | null
    horaFin: Date | null
    todoElDia: boolean | null
    motivo: string | null
    activo: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type RestriccionHorarioMaxAggregateOutputType = {
    id: number | null
    tipoRestriccionId: number | null
    empleadoId: number | null
    fecha: Date | null
    horaInicio: Date | null
    horaFin: Date | null
    todoElDia: boolean | null
    motivo: string | null
    activo: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type RestriccionHorarioCountAggregateOutputType = {
    id: number
    tipoRestriccionId: number
    empleadoId: number
    fecha: number
    horaInicio: number
    horaFin: number
    todoElDia: number
    motivo: number
    activo: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type RestriccionHorarioAvgAggregateInputType = {
    id?: true
    tipoRestriccionId?: true
    empleadoId?: true
  }

  export type RestriccionHorarioSumAggregateInputType = {
    id?: true
    tipoRestriccionId?: true
    empleadoId?: true
  }

  export type RestriccionHorarioMinAggregateInputType = {
    id?: true
    tipoRestriccionId?: true
    empleadoId?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    todoElDia?: true
    motivo?: true
    activo?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type RestriccionHorarioMaxAggregateInputType = {
    id?: true
    tipoRestriccionId?: true
    empleadoId?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    todoElDia?: true
    motivo?: true
    activo?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type RestriccionHorarioCountAggregateInputType = {
    id?: true
    tipoRestriccionId?: true
    empleadoId?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    todoElDia?: true
    motivo?: true
    activo?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type RestriccionHorarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestriccionHorario to aggregate.
     */
    where?: RestriccionHorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestriccionHorarios to fetch.
     */
    orderBy?: RestriccionHorarioOrderByWithRelationInput | RestriccionHorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestriccionHorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestriccionHorarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestriccionHorarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RestriccionHorarios
    **/
    _count?: true | RestriccionHorarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestriccionHorarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestriccionHorarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestriccionHorarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestriccionHorarioMaxAggregateInputType
  }

  export type GetRestriccionHorarioAggregateType<T extends RestriccionHorarioAggregateArgs> = {
        [P in keyof T & keyof AggregateRestriccionHorario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestriccionHorario[P]>
      : GetScalarType<T[P], AggregateRestriccionHorario[P]>
  }




  export type RestriccionHorarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestriccionHorarioWhereInput
    orderBy?: RestriccionHorarioOrderByWithAggregationInput | RestriccionHorarioOrderByWithAggregationInput[]
    by: RestriccionHorarioScalarFieldEnum[] | RestriccionHorarioScalarFieldEnum
    having?: RestriccionHorarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestriccionHorarioCountAggregateInputType | true
    _avg?: RestriccionHorarioAvgAggregateInputType
    _sum?: RestriccionHorarioSumAggregateInputType
    _min?: RestriccionHorarioMinAggregateInputType
    _max?: RestriccionHorarioMaxAggregateInputType
  }

  export type RestriccionHorarioGroupByOutputType = {
    id: number
    tipoRestriccionId: number
    empleadoId: number | null
    fecha: Date
    horaInicio: Date | null
    horaFin: Date | null
    todoElDia: boolean
    motivo: string
    activo: boolean
    creadoEn: Date
    actualizadoEn: Date
    _count: RestriccionHorarioCountAggregateOutputType | null
    _avg: RestriccionHorarioAvgAggregateOutputType | null
    _sum: RestriccionHorarioSumAggregateOutputType | null
    _min: RestriccionHorarioMinAggregateOutputType | null
    _max: RestriccionHorarioMaxAggregateOutputType | null
  }

  type GetRestriccionHorarioGroupByPayload<T extends RestriccionHorarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestriccionHorarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestriccionHorarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestriccionHorarioGroupByOutputType[P]>
            : GetScalarType<T[P], RestriccionHorarioGroupByOutputType[P]>
        }
      >
    >


  export type RestriccionHorarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipoRestriccionId?: boolean
    empleadoId?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    todoElDia?: boolean
    motivo?: boolean
    activo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    tipoRestriccion?: boolean | TipoRestriccionHorarioDefaultArgs<ExtArgs>
    empleado?: boolean | RestriccionHorario$empleadoArgs<ExtArgs>
  }, ExtArgs["result"]["restriccionHorario"]>



  export type RestriccionHorarioSelectScalar = {
    id?: boolean
    tipoRestriccionId?: boolean
    empleadoId?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    todoElDia?: boolean
    motivo?: boolean
    activo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type RestriccionHorarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipoRestriccionId" | "empleadoId" | "fecha" | "horaInicio" | "horaFin" | "todoElDia" | "motivo" | "activo" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["restriccionHorario"]>
  export type RestriccionHorarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoRestriccion?: boolean | TipoRestriccionHorarioDefaultArgs<ExtArgs>
    empleado?: boolean | RestriccionHorario$empleadoArgs<ExtArgs>
  }

  export type $RestriccionHorarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RestriccionHorario"
    objects: {
      tipoRestriccion: Prisma.$TipoRestriccionHorarioPayload<ExtArgs>
      empleado: Prisma.$EmpleadoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipoRestriccionId: number
      empleadoId: number | null
      fecha: Date
      horaInicio: Date | null
      horaFin: Date | null
      todoElDia: boolean
      motivo: string
      activo: boolean
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["restriccionHorario"]>
    composites: {}
  }

  type RestriccionHorarioGetPayload<S extends boolean | null | undefined | RestriccionHorarioDefaultArgs> = $Result.GetResult<Prisma.$RestriccionHorarioPayload, S>

  type RestriccionHorarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestriccionHorarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestriccionHorarioCountAggregateInputType | true
    }

  export interface RestriccionHorarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RestriccionHorario'], meta: { name: 'RestriccionHorario' } }
    /**
     * Find zero or one RestriccionHorario that matches the filter.
     * @param {RestriccionHorarioFindUniqueArgs} args - Arguments to find a RestriccionHorario
     * @example
     * // Get one RestriccionHorario
     * const restriccionHorario = await prisma.restriccionHorario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestriccionHorarioFindUniqueArgs>(args: SelectSubset<T, RestriccionHorarioFindUniqueArgs<ExtArgs>>): Prisma__RestriccionHorarioClient<$Result.GetResult<Prisma.$RestriccionHorarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RestriccionHorario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestriccionHorarioFindUniqueOrThrowArgs} args - Arguments to find a RestriccionHorario
     * @example
     * // Get one RestriccionHorario
     * const restriccionHorario = await prisma.restriccionHorario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestriccionHorarioFindUniqueOrThrowArgs>(args: SelectSubset<T, RestriccionHorarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestriccionHorarioClient<$Result.GetResult<Prisma.$RestriccionHorarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestriccionHorario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestriccionHorarioFindFirstArgs} args - Arguments to find a RestriccionHorario
     * @example
     * // Get one RestriccionHorario
     * const restriccionHorario = await prisma.restriccionHorario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestriccionHorarioFindFirstArgs>(args?: SelectSubset<T, RestriccionHorarioFindFirstArgs<ExtArgs>>): Prisma__RestriccionHorarioClient<$Result.GetResult<Prisma.$RestriccionHorarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestriccionHorario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestriccionHorarioFindFirstOrThrowArgs} args - Arguments to find a RestriccionHorario
     * @example
     * // Get one RestriccionHorario
     * const restriccionHorario = await prisma.restriccionHorario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestriccionHorarioFindFirstOrThrowArgs>(args?: SelectSubset<T, RestriccionHorarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestriccionHorarioClient<$Result.GetResult<Prisma.$RestriccionHorarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RestriccionHorarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestriccionHorarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RestriccionHorarios
     * const restriccionHorarios = await prisma.restriccionHorario.findMany()
     * 
     * // Get first 10 RestriccionHorarios
     * const restriccionHorarios = await prisma.restriccionHorario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restriccionHorarioWithIdOnly = await prisma.restriccionHorario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestriccionHorarioFindManyArgs>(args?: SelectSubset<T, RestriccionHorarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestriccionHorarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RestriccionHorario.
     * @param {RestriccionHorarioCreateArgs} args - Arguments to create a RestriccionHorario.
     * @example
     * // Create one RestriccionHorario
     * const RestriccionHorario = await prisma.restriccionHorario.create({
     *   data: {
     *     // ... data to create a RestriccionHorario
     *   }
     * })
     * 
     */
    create<T extends RestriccionHorarioCreateArgs>(args: SelectSubset<T, RestriccionHorarioCreateArgs<ExtArgs>>): Prisma__RestriccionHorarioClient<$Result.GetResult<Prisma.$RestriccionHorarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RestriccionHorarios.
     * @param {RestriccionHorarioCreateManyArgs} args - Arguments to create many RestriccionHorarios.
     * @example
     * // Create many RestriccionHorarios
     * const restriccionHorario = await prisma.restriccionHorario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestriccionHorarioCreateManyArgs>(args?: SelectSubset<T, RestriccionHorarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RestriccionHorario.
     * @param {RestriccionHorarioDeleteArgs} args - Arguments to delete one RestriccionHorario.
     * @example
     * // Delete one RestriccionHorario
     * const RestriccionHorario = await prisma.restriccionHorario.delete({
     *   where: {
     *     // ... filter to delete one RestriccionHorario
     *   }
     * })
     * 
     */
    delete<T extends RestriccionHorarioDeleteArgs>(args: SelectSubset<T, RestriccionHorarioDeleteArgs<ExtArgs>>): Prisma__RestriccionHorarioClient<$Result.GetResult<Prisma.$RestriccionHorarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RestriccionHorario.
     * @param {RestriccionHorarioUpdateArgs} args - Arguments to update one RestriccionHorario.
     * @example
     * // Update one RestriccionHorario
     * const restriccionHorario = await prisma.restriccionHorario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestriccionHorarioUpdateArgs>(args: SelectSubset<T, RestriccionHorarioUpdateArgs<ExtArgs>>): Prisma__RestriccionHorarioClient<$Result.GetResult<Prisma.$RestriccionHorarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RestriccionHorarios.
     * @param {RestriccionHorarioDeleteManyArgs} args - Arguments to filter RestriccionHorarios to delete.
     * @example
     * // Delete a few RestriccionHorarios
     * const { count } = await prisma.restriccionHorario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestriccionHorarioDeleteManyArgs>(args?: SelectSubset<T, RestriccionHorarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestriccionHorarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestriccionHorarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RestriccionHorarios
     * const restriccionHorario = await prisma.restriccionHorario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestriccionHorarioUpdateManyArgs>(args: SelectSubset<T, RestriccionHorarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RestriccionHorario.
     * @param {RestriccionHorarioUpsertArgs} args - Arguments to update or create a RestriccionHorario.
     * @example
     * // Update or create a RestriccionHorario
     * const restriccionHorario = await prisma.restriccionHorario.upsert({
     *   create: {
     *     // ... data to create a RestriccionHorario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RestriccionHorario we want to update
     *   }
     * })
     */
    upsert<T extends RestriccionHorarioUpsertArgs>(args: SelectSubset<T, RestriccionHorarioUpsertArgs<ExtArgs>>): Prisma__RestriccionHorarioClient<$Result.GetResult<Prisma.$RestriccionHorarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RestriccionHorarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestriccionHorarioCountArgs} args - Arguments to filter RestriccionHorarios to count.
     * @example
     * // Count the number of RestriccionHorarios
     * const count = await prisma.restriccionHorario.count({
     *   where: {
     *     // ... the filter for the RestriccionHorarios we want to count
     *   }
     * })
    **/
    count<T extends RestriccionHorarioCountArgs>(
      args?: Subset<T, RestriccionHorarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestriccionHorarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RestriccionHorario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestriccionHorarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestriccionHorarioAggregateArgs>(args: Subset<T, RestriccionHorarioAggregateArgs>): Prisma.PrismaPromise<GetRestriccionHorarioAggregateType<T>>

    /**
     * Group by RestriccionHorario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestriccionHorarioGroupByArgs} args - Group by arguments.
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
      T extends RestriccionHorarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestriccionHorarioGroupByArgs['orderBy'] }
        : { orderBy?: RestriccionHorarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RestriccionHorarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestriccionHorarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RestriccionHorario model
   */
  readonly fields: RestriccionHorarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RestriccionHorario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestriccionHorarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipoRestriccion<T extends TipoRestriccionHorarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoRestriccionHorarioDefaultArgs<ExtArgs>>): Prisma__TipoRestriccionHorarioClient<$Result.GetResult<Prisma.$TipoRestriccionHorarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    empleado<T extends RestriccionHorario$empleadoArgs<ExtArgs> = {}>(args?: Subset<T, RestriccionHorario$empleadoArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RestriccionHorario model
   */
  interface RestriccionHorarioFieldRefs {
    readonly id: FieldRef<"RestriccionHorario", 'Int'>
    readonly tipoRestriccionId: FieldRef<"RestriccionHorario", 'Int'>
    readonly empleadoId: FieldRef<"RestriccionHorario", 'Int'>
    readonly fecha: FieldRef<"RestriccionHorario", 'DateTime'>
    readonly horaInicio: FieldRef<"RestriccionHorario", 'DateTime'>
    readonly horaFin: FieldRef<"RestriccionHorario", 'DateTime'>
    readonly todoElDia: FieldRef<"RestriccionHorario", 'Boolean'>
    readonly motivo: FieldRef<"RestriccionHorario", 'String'>
    readonly activo: FieldRef<"RestriccionHorario", 'Boolean'>
    readonly creadoEn: FieldRef<"RestriccionHorario", 'DateTime'>
    readonly actualizadoEn: FieldRef<"RestriccionHorario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RestriccionHorario findUnique
   */
  export type RestriccionHorarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestriccionHorario
     */
    select?: RestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestriccionHorario
     */
    omit?: RestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestriccionHorarioInclude<ExtArgs> | null
    /**
     * Filter, which RestriccionHorario to fetch.
     */
    where: RestriccionHorarioWhereUniqueInput
  }

  /**
   * RestriccionHorario findUniqueOrThrow
   */
  export type RestriccionHorarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestriccionHorario
     */
    select?: RestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestriccionHorario
     */
    omit?: RestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestriccionHorarioInclude<ExtArgs> | null
    /**
     * Filter, which RestriccionHorario to fetch.
     */
    where: RestriccionHorarioWhereUniqueInput
  }

  /**
   * RestriccionHorario findFirst
   */
  export type RestriccionHorarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestriccionHorario
     */
    select?: RestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestriccionHorario
     */
    omit?: RestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestriccionHorarioInclude<ExtArgs> | null
    /**
     * Filter, which RestriccionHorario to fetch.
     */
    where?: RestriccionHorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestriccionHorarios to fetch.
     */
    orderBy?: RestriccionHorarioOrderByWithRelationInput | RestriccionHorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestriccionHorarios.
     */
    cursor?: RestriccionHorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestriccionHorarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestriccionHorarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestriccionHorarios.
     */
    distinct?: RestriccionHorarioScalarFieldEnum | RestriccionHorarioScalarFieldEnum[]
  }

  /**
   * RestriccionHorario findFirstOrThrow
   */
  export type RestriccionHorarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestriccionHorario
     */
    select?: RestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestriccionHorario
     */
    omit?: RestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestriccionHorarioInclude<ExtArgs> | null
    /**
     * Filter, which RestriccionHorario to fetch.
     */
    where?: RestriccionHorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestriccionHorarios to fetch.
     */
    orderBy?: RestriccionHorarioOrderByWithRelationInput | RestriccionHorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestriccionHorarios.
     */
    cursor?: RestriccionHorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestriccionHorarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestriccionHorarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestriccionHorarios.
     */
    distinct?: RestriccionHorarioScalarFieldEnum | RestriccionHorarioScalarFieldEnum[]
  }

  /**
   * RestriccionHorario findMany
   */
  export type RestriccionHorarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestriccionHorario
     */
    select?: RestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestriccionHorario
     */
    omit?: RestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestriccionHorarioInclude<ExtArgs> | null
    /**
     * Filter, which RestriccionHorarios to fetch.
     */
    where?: RestriccionHorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestriccionHorarios to fetch.
     */
    orderBy?: RestriccionHorarioOrderByWithRelationInput | RestriccionHorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RestriccionHorarios.
     */
    cursor?: RestriccionHorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestriccionHorarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestriccionHorarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestriccionHorarios.
     */
    distinct?: RestriccionHorarioScalarFieldEnum | RestriccionHorarioScalarFieldEnum[]
  }

  /**
   * RestriccionHorario create
   */
  export type RestriccionHorarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestriccionHorario
     */
    select?: RestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestriccionHorario
     */
    omit?: RestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestriccionHorarioInclude<ExtArgs> | null
    /**
     * The data needed to create a RestriccionHorario.
     */
    data: XOR<RestriccionHorarioCreateInput, RestriccionHorarioUncheckedCreateInput>
  }

  /**
   * RestriccionHorario createMany
   */
  export type RestriccionHorarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RestriccionHorarios.
     */
    data: RestriccionHorarioCreateManyInput | RestriccionHorarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RestriccionHorario update
   */
  export type RestriccionHorarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestriccionHorario
     */
    select?: RestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestriccionHorario
     */
    omit?: RestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestriccionHorarioInclude<ExtArgs> | null
    /**
     * The data needed to update a RestriccionHorario.
     */
    data: XOR<RestriccionHorarioUpdateInput, RestriccionHorarioUncheckedUpdateInput>
    /**
     * Choose, which RestriccionHorario to update.
     */
    where: RestriccionHorarioWhereUniqueInput
  }

  /**
   * RestriccionHorario updateMany
   */
  export type RestriccionHorarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RestriccionHorarios.
     */
    data: XOR<RestriccionHorarioUpdateManyMutationInput, RestriccionHorarioUncheckedUpdateManyInput>
    /**
     * Filter which RestriccionHorarios to update
     */
    where?: RestriccionHorarioWhereInput
    /**
     * Limit how many RestriccionHorarios to update.
     */
    limit?: number
  }

  /**
   * RestriccionHorario upsert
   */
  export type RestriccionHorarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestriccionHorario
     */
    select?: RestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestriccionHorario
     */
    omit?: RestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestriccionHorarioInclude<ExtArgs> | null
    /**
     * The filter to search for the RestriccionHorario to update in case it exists.
     */
    where: RestriccionHorarioWhereUniqueInput
    /**
     * In case the RestriccionHorario found by the `where` argument doesn't exist, create a new RestriccionHorario with this data.
     */
    create: XOR<RestriccionHorarioCreateInput, RestriccionHorarioUncheckedCreateInput>
    /**
     * In case the RestriccionHorario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestriccionHorarioUpdateInput, RestriccionHorarioUncheckedUpdateInput>
  }

  /**
   * RestriccionHorario delete
   */
  export type RestriccionHorarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestriccionHorario
     */
    select?: RestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestriccionHorario
     */
    omit?: RestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestriccionHorarioInclude<ExtArgs> | null
    /**
     * Filter which RestriccionHorario to delete.
     */
    where: RestriccionHorarioWhereUniqueInput
  }

  /**
   * RestriccionHorario deleteMany
   */
  export type RestriccionHorarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestriccionHorarios to delete
     */
    where?: RestriccionHorarioWhereInput
    /**
     * Limit how many RestriccionHorarios to delete.
     */
    limit?: number
  }

  /**
   * RestriccionHorario.empleado
   */
  export type RestriccionHorario$empleadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    where?: EmpleadoWhereInput
  }

  /**
   * RestriccionHorario without action
   */
  export type RestriccionHorarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestriccionHorario
     */
    select?: RestriccionHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestriccionHorario
     */
    omit?: RestriccionHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestriccionHorarioInclude<ExtArgs> | null
  }


  /**
   * Model Cita
   */

  export type AggregateCita = {
    _count: CitaCountAggregateOutputType | null
    _avg: CitaAvgAggregateOutputType | null
    _sum: CitaSumAggregateOutputType | null
    _min: CitaMinAggregateOutputType | null
    _max: CitaMaxAggregateOutputType | null
  }

  export type CitaAvgAggregateOutputType = {
    id: number | null
    clienteId: number | null
    empleadoId: number | null
    servicioId: number | null
    estadoCitaId: number | null
    creadoPorUsuarioId: number | null
    duracionMinutos: number | null
    precioServicio: Decimal | null
    costoAdicionales: Decimal | null
    costoTotal: Decimal | null
  }

  export type CitaSumAggregateOutputType = {
    id: number | null
    clienteId: number | null
    empleadoId: number | null
    servicioId: number | null
    estadoCitaId: number | null
    creadoPorUsuarioId: number | null
    duracionMinutos: number | null
    precioServicio: Decimal | null
    costoAdicionales: Decimal | null
    costoTotal: Decimal | null
  }

  export type CitaMinAggregateOutputType = {
    id: number | null
    clienteId: number | null
    empleadoId: number | null
    servicioId: number | null
    estadoCitaId: number | null
    creadoPorUsuarioId: number | null
    fecha: Date | null
    horaInicio: Date | null
    horaFin: Date | null
    duracionMinutos: number | null
    precioServicio: Decimal | null
    costoAdicionales: Decimal | null
    costoTotal: Decimal | null
    observaciones: string | null
    motivoCancelacion: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type CitaMaxAggregateOutputType = {
    id: number | null
    clienteId: number | null
    empleadoId: number | null
    servicioId: number | null
    estadoCitaId: number | null
    creadoPorUsuarioId: number | null
    fecha: Date | null
    horaInicio: Date | null
    horaFin: Date | null
    duracionMinutos: number | null
    precioServicio: Decimal | null
    costoAdicionales: Decimal | null
    costoTotal: Decimal | null
    observaciones: string | null
    motivoCancelacion: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type CitaCountAggregateOutputType = {
    id: number
    clienteId: number
    empleadoId: number
    servicioId: number
    estadoCitaId: number
    creadoPorUsuarioId: number
    fecha: number
    horaInicio: number
    horaFin: number
    duracionMinutos: number
    precioServicio: number
    costoAdicionales: number
    costoTotal: number
    observaciones: number
    motivoCancelacion: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type CitaAvgAggregateInputType = {
    id?: true
    clienteId?: true
    empleadoId?: true
    servicioId?: true
    estadoCitaId?: true
    creadoPorUsuarioId?: true
    duracionMinutos?: true
    precioServicio?: true
    costoAdicionales?: true
    costoTotal?: true
  }

  export type CitaSumAggregateInputType = {
    id?: true
    clienteId?: true
    empleadoId?: true
    servicioId?: true
    estadoCitaId?: true
    creadoPorUsuarioId?: true
    duracionMinutos?: true
    precioServicio?: true
    costoAdicionales?: true
    costoTotal?: true
  }

  export type CitaMinAggregateInputType = {
    id?: true
    clienteId?: true
    empleadoId?: true
    servicioId?: true
    estadoCitaId?: true
    creadoPorUsuarioId?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    duracionMinutos?: true
    precioServicio?: true
    costoAdicionales?: true
    costoTotal?: true
    observaciones?: true
    motivoCancelacion?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type CitaMaxAggregateInputType = {
    id?: true
    clienteId?: true
    empleadoId?: true
    servicioId?: true
    estadoCitaId?: true
    creadoPorUsuarioId?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    duracionMinutos?: true
    precioServicio?: true
    costoAdicionales?: true
    costoTotal?: true
    observaciones?: true
    motivoCancelacion?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type CitaCountAggregateInputType = {
    id?: true
    clienteId?: true
    empleadoId?: true
    servicioId?: true
    estadoCitaId?: true
    creadoPorUsuarioId?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    duracionMinutos?: true
    precioServicio?: true
    costoAdicionales?: true
    costoTotal?: true
    observaciones?: true
    motivoCancelacion?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type CitaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cita to aggregate.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Citas
    **/
    _count?: true | CitaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CitaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitaMaxAggregateInputType
  }

  export type GetCitaAggregateType<T extends CitaAggregateArgs> = {
        [P in keyof T & keyof AggregateCita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCita[P]>
      : GetScalarType<T[P], AggregateCita[P]>
  }




  export type CitaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithAggregationInput | CitaOrderByWithAggregationInput[]
    by: CitaScalarFieldEnum[] | CitaScalarFieldEnum
    having?: CitaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitaCountAggregateInputType | true
    _avg?: CitaAvgAggregateInputType
    _sum?: CitaSumAggregateInputType
    _min?: CitaMinAggregateInputType
    _max?: CitaMaxAggregateInputType
  }

  export type CitaGroupByOutputType = {
    id: number
    clienteId: number
    empleadoId: number
    servicioId: number
    estadoCitaId: number
    creadoPorUsuarioId: number
    fecha: Date
    horaInicio: Date
    horaFin: Date
    duracionMinutos: number
    precioServicio: Decimal
    costoAdicionales: Decimal
    costoTotal: Decimal
    observaciones: string | null
    motivoCancelacion: string | null
    creadoEn: Date
    actualizadoEn: Date
    _count: CitaCountAggregateOutputType | null
    _avg: CitaAvgAggregateOutputType | null
    _sum: CitaSumAggregateOutputType | null
    _min: CitaMinAggregateOutputType | null
    _max: CitaMaxAggregateOutputType | null
  }

  type GetCitaGroupByPayload<T extends CitaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitaGroupByOutputType[P]>
            : GetScalarType<T[P], CitaGroupByOutputType[P]>
        }
      >
    >


  export type CitaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    empleadoId?: boolean
    servicioId?: boolean
    estadoCitaId?: boolean
    creadoPorUsuarioId?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    duracionMinutos?: boolean
    precioServicio?: boolean
    costoAdicionales?: boolean
    costoTotal?: boolean
    observaciones?: boolean
    motivoCancelacion?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
    estadoCita?: boolean | EstadoCitaDefaultArgs<ExtArgs>
    creadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
    adicionales?: boolean | Cita$adicionalesArgs<ExtArgs>
    _count?: boolean | CitaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cita"]>



  export type CitaSelectScalar = {
    id?: boolean
    clienteId?: boolean
    empleadoId?: boolean
    servicioId?: boolean
    estadoCitaId?: boolean
    creadoPorUsuarioId?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    duracionMinutos?: boolean
    precioServicio?: boolean
    costoAdicionales?: boolean
    costoTotal?: boolean
    observaciones?: boolean
    motivoCancelacion?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type CitaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clienteId" | "empleadoId" | "servicioId" | "estadoCitaId" | "creadoPorUsuarioId" | "fecha" | "horaInicio" | "horaFin" | "duracionMinutos" | "precioServicio" | "costoAdicionales" | "costoTotal" | "observaciones" | "motivoCancelacion" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["cita"]>
  export type CitaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
    estadoCita?: boolean | EstadoCitaDefaultArgs<ExtArgs>
    creadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
    adicionales?: boolean | Cita$adicionalesArgs<ExtArgs>
    _count?: boolean | CitaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CitaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cita"
    objects: {
      cliente: Prisma.$UsuarioPayload<ExtArgs>
      empleado: Prisma.$EmpleadoPayload<ExtArgs>
      servicio: Prisma.$ServicioPayload<ExtArgs>
      estadoCita: Prisma.$EstadoCitaPayload<ExtArgs>
      creadoPor: Prisma.$UsuarioPayload<ExtArgs>
      adicionales: Prisma.$ServicioAdicionalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clienteId: number
      empleadoId: number
      servicioId: number
      estadoCitaId: number
      creadoPorUsuarioId: number
      fecha: Date
      horaInicio: Date
      horaFin: Date
      duracionMinutos: number
      precioServicio: Prisma.Decimal
      costoAdicionales: Prisma.Decimal
      costoTotal: Prisma.Decimal
      observaciones: string | null
      motivoCancelacion: string | null
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["cita"]>
    composites: {}
  }

  type CitaGetPayload<S extends boolean | null | undefined | CitaDefaultArgs> = $Result.GetResult<Prisma.$CitaPayload, S>

  type CitaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CitaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CitaCountAggregateInputType | true
    }

  export interface CitaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cita'], meta: { name: 'Cita' } }
    /**
     * Find zero or one Cita that matches the filter.
     * @param {CitaFindUniqueArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CitaFindUniqueArgs>(args: SelectSubset<T, CitaFindUniqueArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CitaFindUniqueOrThrowArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CitaFindUniqueOrThrowArgs>(args: SelectSubset<T, CitaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaFindFirstArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CitaFindFirstArgs>(args?: SelectSubset<T, CitaFindFirstArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaFindFirstOrThrowArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CitaFindFirstOrThrowArgs>(args?: SelectSubset<T, CitaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Citas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Citas
     * const citas = await prisma.cita.findMany()
     * 
     * // Get first 10 Citas
     * const citas = await prisma.cita.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const citaWithIdOnly = await prisma.cita.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CitaFindManyArgs>(args?: SelectSubset<T, CitaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cita.
     * @param {CitaCreateArgs} args - Arguments to create a Cita.
     * @example
     * // Create one Cita
     * const Cita = await prisma.cita.create({
     *   data: {
     *     // ... data to create a Cita
     *   }
     * })
     * 
     */
    create<T extends CitaCreateArgs>(args: SelectSubset<T, CitaCreateArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Citas.
     * @param {CitaCreateManyArgs} args - Arguments to create many Citas.
     * @example
     * // Create many Citas
     * const cita = await prisma.cita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CitaCreateManyArgs>(args?: SelectSubset<T, CitaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cita.
     * @param {CitaDeleteArgs} args - Arguments to delete one Cita.
     * @example
     * // Delete one Cita
     * const Cita = await prisma.cita.delete({
     *   where: {
     *     // ... filter to delete one Cita
     *   }
     * })
     * 
     */
    delete<T extends CitaDeleteArgs>(args: SelectSubset<T, CitaDeleteArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cita.
     * @param {CitaUpdateArgs} args - Arguments to update one Cita.
     * @example
     * // Update one Cita
     * const cita = await prisma.cita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CitaUpdateArgs>(args: SelectSubset<T, CitaUpdateArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Citas.
     * @param {CitaDeleteManyArgs} args - Arguments to filter Citas to delete.
     * @example
     * // Delete a few Citas
     * const { count } = await prisma.cita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CitaDeleteManyArgs>(args?: SelectSubset<T, CitaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Citas
     * const cita = await prisma.cita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CitaUpdateManyArgs>(args: SelectSubset<T, CitaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cita.
     * @param {CitaUpsertArgs} args - Arguments to update or create a Cita.
     * @example
     * // Update or create a Cita
     * const cita = await prisma.cita.upsert({
     *   create: {
     *     // ... data to create a Cita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cita we want to update
     *   }
     * })
     */
    upsert<T extends CitaUpsertArgs>(args: SelectSubset<T, CitaUpsertArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaCountArgs} args - Arguments to filter Citas to count.
     * @example
     * // Count the number of Citas
     * const count = await prisma.cita.count({
     *   where: {
     *     // ... the filter for the Citas we want to count
     *   }
     * })
    **/
    count<T extends CitaCountArgs>(
      args?: Subset<T, CitaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CitaAggregateArgs>(args: Subset<T, CitaAggregateArgs>): Prisma.PrismaPromise<GetCitaAggregateType<T>>

    /**
     * Group by Cita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaGroupByArgs} args - Group by arguments.
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
      T extends CitaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CitaGroupByArgs['orderBy'] }
        : { orderBy?: CitaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CitaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cita model
   */
  readonly fields: CitaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CitaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    empleado<T extends EmpleadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpleadoDefaultArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servicio<T extends ServicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicioDefaultArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estadoCita<T extends EstadoCitaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstadoCitaDefaultArgs<ExtArgs>>): Prisma__EstadoCitaClient<$Result.GetResult<Prisma.$EstadoCitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creadoPor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    adicionales<T extends Cita$adicionalesArgs<ExtArgs> = {}>(args?: Subset<T, Cita$adicionalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioAdicionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cita model
   */
  interface CitaFieldRefs {
    readonly id: FieldRef<"Cita", 'Int'>
    readonly clienteId: FieldRef<"Cita", 'Int'>
    readonly empleadoId: FieldRef<"Cita", 'Int'>
    readonly servicioId: FieldRef<"Cita", 'Int'>
    readonly estadoCitaId: FieldRef<"Cita", 'Int'>
    readonly creadoPorUsuarioId: FieldRef<"Cita", 'Int'>
    readonly fecha: FieldRef<"Cita", 'DateTime'>
    readonly horaInicio: FieldRef<"Cita", 'DateTime'>
    readonly horaFin: FieldRef<"Cita", 'DateTime'>
    readonly duracionMinutos: FieldRef<"Cita", 'Int'>
    readonly precioServicio: FieldRef<"Cita", 'Decimal'>
    readonly costoAdicionales: FieldRef<"Cita", 'Decimal'>
    readonly costoTotal: FieldRef<"Cita", 'Decimal'>
    readonly observaciones: FieldRef<"Cita", 'String'>
    readonly motivoCancelacion: FieldRef<"Cita", 'String'>
    readonly creadoEn: FieldRef<"Cita", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Cita", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cita findUnique
   */
  export type CitaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita findUniqueOrThrow
   */
  export type CitaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita findFirst
   */
  export type CitaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Citas.
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citas.
     */
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Cita findFirstOrThrow
   */
  export type CitaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Citas.
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citas.
     */
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Cita findMany
   */
  export type CitaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Citas to fetch.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Citas.
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citas.
     */
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Cita create
   */
  export type CitaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cita.
     */
    data: XOR<CitaCreateInput, CitaUncheckedCreateInput>
  }

  /**
   * Cita createMany
   */
  export type CitaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Citas.
     */
    data: CitaCreateManyInput | CitaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cita update
   */
  export type CitaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cita.
     */
    data: XOR<CitaUpdateInput, CitaUncheckedUpdateInput>
    /**
     * Choose, which Cita to update.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita updateMany
   */
  export type CitaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Citas.
     */
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyInput>
    /**
     * Filter which Citas to update
     */
    where?: CitaWhereInput
    /**
     * Limit how many Citas to update.
     */
    limit?: number
  }

  /**
   * Cita upsert
   */
  export type CitaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cita to update in case it exists.
     */
    where: CitaWhereUniqueInput
    /**
     * In case the Cita found by the `where` argument doesn't exist, create a new Cita with this data.
     */
    create: XOR<CitaCreateInput, CitaUncheckedCreateInput>
    /**
     * In case the Cita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CitaUpdateInput, CitaUncheckedUpdateInput>
  }

  /**
   * Cita delete
   */
  export type CitaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter which Cita to delete.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita deleteMany
   */
  export type CitaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Citas to delete
     */
    where?: CitaWhereInput
    /**
     * Limit how many Citas to delete.
     */
    limit?: number
  }

  /**
   * Cita.adicionales
   */
  export type Cita$adicionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioAdicional
     */
    select?: ServicioAdicionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioAdicional
     */
    omit?: ServicioAdicionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioAdicionalInclude<ExtArgs> | null
    where?: ServicioAdicionalWhereInput
    orderBy?: ServicioAdicionalOrderByWithRelationInput | ServicioAdicionalOrderByWithRelationInput[]
    cursor?: ServicioAdicionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicioAdicionalScalarFieldEnum | ServicioAdicionalScalarFieldEnum[]
  }

  /**
   * Cita without action
   */
  export type CitaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
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


  export const RolScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    activo: 'activo'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    primerApellido: 'primerApellido',
    segundoApellido: 'segundoApellido',
    correo: 'correo',
    telefono: 'telefono',
    passwordHash: 'passwordHash',
    activo: 'activo',
    rolId: 'rolId',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const EspecialidadScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    activo: 'activo'
  };

  export type EspecialidadScalarFieldEnum = (typeof EspecialidadScalarFieldEnum)[keyof typeof EspecialidadScalarFieldEnum]


  export const ServicioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precioBase: 'precioBase',
    duracionMinutos: 'duracionMinutos',
    imagen: 'imagen',
    activo: 'activo',
    especialidadId: 'especialidadId',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type ServicioScalarFieldEnum = (typeof ServicioScalarFieldEnum)[keyof typeof ServicioScalarFieldEnum]


  export const ServicioAdicionalScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    activo: 'activo',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type ServicioAdicionalScalarFieldEnum = (typeof ServicioAdicionalScalarFieldEnum)[keyof typeof ServicioAdicionalScalarFieldEnum]


  export const EmpleadoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    especialidadId: 'especialidadId',
    codigoEmpleado: 'codigoEmpleado',
    descripcion: 'descripcion',
    activo: 'activo',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type EmpleadoScalarFieldEnum = (typeof EmpleadoScalarFieldEnum)[keyof typeof EmpleadoScalarFieldEnum]


  export const EstadoCitaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    bloqueaDisponibilidad: 'bloqueaDisponibilidad',
    permiteCancelacionCliente: 'permiteCancelacionCliente',
    permiteEdicion: 'permiteEdicion',
    color: 'color',
    orden: 'orden',
    activo: 'activo'
  };

  export type EstadoCitaScalarFieldEnum = (typeof EstadoCitaScalarFieldEnum)[keyof typeof EstadoCitaScalarFieldEnum]


  export const DiaSemanaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    numeroOrden: 'numeroOrden'
  };

  export type DiaSemanaScalarFieldEnum = (typeof DiaSemanaScalarFieldEnum)[keyof typeof DiaSemanaScalarFieldEnum]


  export const HorarioAtencionScalarFieldEnum: {
    id: 'id',
    diaSemanaId: 'diaSemanaId',
    horaInicio: 'horaInicio',
    horaFin: 'horaFin',
    activo: 'activo'
  };

  export type HorarioAtencionScalarFieldEnum = (typeof HorarioAtencionScalarFieldEnum)[keyof typeof HorarioAtencionScalarFieldEnum]


  export const TipoRestriccionHorarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type TipoRestriccionHorarioScalarFieldEnum = (typeof TipoRestriccionHorarioScalarFieldEnum)[keyof typeof TipoRestriccionHorarioScalarFieldEnum]


  export const RestriccionHorarioScalarFieldEnum: {
    id: 'id',
    tipoRestriccionId: 'tipoRestriccionId',
    empleadoId: 'empleadoId',
    fecha: 'fecha',
    horaInicio: 'horaInicio',
    horaFin: 'horaFin',
    todoElDia: 'todoElDia',
    motivo: 'motivo',
    activo: 'activo',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type RestriccionHorarioScalarFieldEnum = (typeof RestriccionHorarioScalarFieldEnum)[keyof typeof RestriccionHorarioScalarFieldEnum]


  export const CitaScalarFieldEnum: {
    id: 'id',
    clienteId: 'clienteId',
    empleadoId: 'empleadoId',
    servicioId: 'servicioId',
    estadoCitaId: 'estadoCitaId',
    creadoPorUsuarioId: 'creadoPorUsuarioId',
    fecha: 'fecha',
    horaInicio: 'horaInicio',
    horaFin: 'horaFin',
    duracionMinutos: 'duracionMinutos',
    precioServicio: 'precioServicio',
    costoAdicionales: 'costoAdicionales',
    costoTotal: 'costoTotal',
    observaciones: 'observaciones',
    motivoCancelacion: 'motivoCancelacion',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type CitaScalarFieldEnum = (typeof CitaScalarFieldEnum)[keyof typeof CitaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const RolOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type RolOrderByRelevanceFieldEnum = (typeof RolOrderByRelevanceFieldEnum)[keyof typeof RolOrderByRelevanceFieldEnum]


  export const UsuarioOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    primerApellido: 'primerApellido',
    segundoApellido: 'segundoApellido',
    correo: 'correo',
    telefono: 'telefono',
    passwordHash: 'passwordHash'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const EspecialidadOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type EspecialidadOrderByRelevanceFieldEnum = (typeof EspecialidadOrderByRelevanceFieldEnum)[keyof typeof EspecialidadOrderByRelevanceFieldEnum]


  export const ServicioOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion',
    imagen: 'imagen'
  };

  export type ServicioOrderByRelevanceFieldEnum = (typeof ServicioOrderByRelevanceFieldEnum)[keyof typeof ServicioOrderByRelevanceFieldEnum]


  export const ServicioAdicionalOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type ServicioAdicionalOrderByRelevanceFieldEnum = (typeof ServicioAdicionalOrderByRelevanceFieldEnum)[keyof typeof ServicioAdicionalOrderByRelevanceFieldEnum]


  export const EmpleadoOrderByRelevanceFieldEnum: {
    codigoEmpleado: 'codigoEmpleado',
    descripcion: 'descripcion'
  };

  export type EmpleadoOrderByRelevanceFieldEnum = (typeof EmpleadoOrderByRelevanceFieldEnum)[keyof typeof EmpleadoOrderByRelevanceFieldEnum]


  export const EstadoCitaOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion',
    color: 'color'
  };

  export type EstadoCitaOrderByRelevanceFieldEnum = (typeof EstadoCitaOrderByRelevanceFieldEnum)[keyof typeof EstadoCitaOrderByRelevanceFieldEnum]


  export const DiaSemanaOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type DiaSemanaOrderByRelevanceFieldEnum = (typeof DiaSemanaOrderByRelevanceFieldEnum)[keyof typeof DiaSemanaOrderByRelevanceFieldEnum]


  export const TipoRestriccionHorarioOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type TipoRestriccionHorarioOrderByRelevanceFieldEnum = (typeof TipoRestriccionHorarioOrderByRelevanceFieldEnum)[keyof typeof TipoRestriccionHorarioOrderByRelevanceFieldEnum]


  export const RestriccionHorarioOrderByRelevanceFieldEnum: {
    motivo: 'motivo'
  };

  export type RestriccionHorarioOrderByRelevanceFieldEnum = (typeof RestriccionHorarioOrderByRelevanceFieldEnum)[keyof typeof RestriccionHorarioOrderByRelevanceFieldEnum]


  export const CitaOrderByRelevanceFieldEnum: {
    observaciones: 'observaciones',
    motivoCancelacion: 'motivoCancelacion'
  };

  export type CitaOrderByRelevanceFieldEnum = (typeof CitaOrderByRelevanceFieldEnum)[keyof typeof CitaOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RolWhereInput = {
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    id?: IntFilter<"Rol"> | number
    nombre?: StringFilter<"Rol"> | string
    descripcion?: StringNullableFilter<"Rol"> | string | null
    activo?: BoolFilter<"Rol"> | boolean
    usuarios?: UsuarioListRelationFilter
  }

  export type RolOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    activo?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
    _relevance?: RolOrderByRelevanceInput
  }

  export type RolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    descripcion?: StringNullableFilter<"Rol"> | string | null
    activo?: BoolFilter<"Rol"> | boolean
    usuarios?: UsuarioListRelationFilter
  }, "id" | "nombre">

  export type RolOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    activo?: SortOrder
    _count?: RolCountOrderByAggregateInput
    _avg?: RolAvgOrderByAggregateInput
    _max?: RolMaxOrderByAggregateInput
    _min?: RolMinOrderByAggregateInput
    _sum?: RolSumOrderByAggregateInput
  }

  export type RolScalarWhereWithAggregatesInput = {
    AND?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    OR?: RolScalarWhereWithAggregatesInput[]
    NOT?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rol"> | number
    nombre?: StringWithAggregatesFilter<"Rol"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Rol"> | string | null
    activo?: BoolWithAggregatesFilter<"Rol"> | boolean
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    primerApellido?: StringFilter<"Usuario"> | string
    segundoApellido?: StringNullableFilter<"Usuario"> | string | null
    correo?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    passwordHash?: StringFilter<"Usuario"> | string
    activo?: BoolFilter<"Usuario"> | boolean
    rolId?: IntFilter<"Usuario"> | number
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    actualizadoEn?: DateTimeFilter<"Usuario"> | Date | string
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    empleado?: XOR<EmpleadoNullableScalarRelationFilter, EmpleadoWhereInput> | null
    citasCliente?: CitaListRelationFilter
    citasCreadas?: CitaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    primerApellido?: SortOrder
    segundoApellido?: SortOrderInput | SortOrder
    correo?: SortOrder
    telefono?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    activo?: SortOrder
    rolId?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    rol?: RolOrderByWithRelationInput
    empleado?: EmpleadoOrderByWithRelationInput
    citasCliente?: CitaOrderByRelationAggregateInput
    citasCreadas?: CitaOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    primerApellido?: StringFilter<"Usuario"> | string
    segundoApellido?: StringNullableFilter<"Usuario"> | string | null
    telefono?: StringNullableFilter<"Usuario"> | string | null
    passwordHash?: StringFilter<"Usuario"> | string
    activo?: BoolFilter<"Usuario"> | boolean
    rolId?: IntFilter<"Usuario"> | number
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    actualizadoEn?: DateTimeFilter<"Usuario"> | Date | string
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    empleado?: XOR<EmpleadoNullableScalarRelationFilter, EmpleadoWhereInput> | null
    citasCliente?: CitaListRelationFilter
    citasCreadas?: CitaListRelationFilter
  }, "id" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    primerApellido?: SortOrder
    segundoApellido?: SortOrderInput | SortOrder
    correo?: SortOrder
    telefono?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    activo?: SortOrder
    rolId?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    primerApellido?: StringWithAggregatesFilter<"Usuario"> | string
    segundoApellido?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    telefono?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    passwordHash?: StringWithAggregatesFilter<"Usuario"> | string
    activo?: BoolWithAggregatesFilter<"Usuario"> | boolean
    rolId?: IntWithAggregatesFilter<"Usuario"> | number
    creadoEn?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type EspecialidadWhereInput = {
    AND?: EspecialidadWhereInput | EspecialidadWhereInput[]
    OR?: EspecialidadWhereInput[]
    NOT?: EspecialidadWhereInput | EspecialidadWhereInput[]
    id?: IntFilter<"Especialidad"> | number
    nombre?: StringFilter<"Especialidad"> | string
    descripcion?: StringNullableFilter<"Especialidad"> | string | null
    activo?: BoolFilter<"Especialidad"> | boolean
    empleados?: EmpleadoListRelationFilter
    servicios?: ServicioListRelationFilter
  }

  export type EspecialidadOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    activo?: SortOrder
    empleados?: EmpleadoOrderByRelationAggregateInput
    servicios?: ServicioOrderByRelationAggregateInput
    _relevance?: EspecialidadOrderByRelevanceInput
  }

  export type EspecialidadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: EspecialidadWhereInput | EspecialidadWhereInput[]
    OR?: EspecialidadWhereInput[]
    NOT?: EspecialidadWhereInput | EspecialidadWhereInput[]
    descripcion?: StringNullableFilter<"Especialidad"> | string | null
    activo?: BoolFilter<"Especialidad"> | boolean
    empleados?: EmpleadoListRelationFilter
    servicios?: ServicioListRelationFilter
  }, "id" | "nombre">

  export type EspecialidadOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    activo?: SortOrder
    _count?: EspecialidadCountOrderByAggregateInput
    _avg?: EspecialidadAvgOrderByAggregateInput
    _max?: EspecialidadMaxOrderByAggregateInput
    _min?: EspecialidadMinOrderByAggregateInput
    _sum?: EspecialidadSumOrderByAggregateInput
  }

  export type EspecialidadScalarWhereWithAggregatesInput = {
    AND?: EspecialidadScalarWhereWithAggregatesInput | EspecialidadScalarWhereWithAggregatesInput[]
    OR?: EspecialidadScalarWhereWithAggregatesInput[]
    NOT?: EspecialidadScalarWhereWithAggregatesInput | EspecialidadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Especialidad"> | number
    nombre?: StringWithAggregatesFilter<"Especialidad"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Especialidad"> | string | null
    activo?: BoolWithAggregatesFilter<"Especialidad"> | boolean
  }

  export type ServicioWhereInput = {
    AND?: ServicioWhereInput | ServicioWhereInput[]
    OR?: ServicioWhereInput[]
    NOT?: ServicioWhereInput | ServicioWhereInput[]
    id?: IntFilter<"Servicio"> | number
    nombre?: StringFilter<"Servicio"> | string
    descripcion?: StringFilter<"Servicio"> | string
    precioBase?: DecimalFilter<"Servicio"> | Decimal | DecimalJsLike | number | string
    duracionMinutos?: IntFilter<"Servicio"> | number
    imagen?: StringNullableFilter<"Servicio"> | string | null
    activo?: BoolFilter<"Servicio"> | boolean
    especialidadId?: IntFilter<"Servicio"> | number
    creadoEn?: DateTimeFilter<"Servicio"> | Date | string
    actualizadoEn?: DateTimeFilter<"Servicio"> | Date | string
    especialidad?: XOR<EspecialidadScalarRelationFilter, EspecialidadWhereInput>
    empleados?: EmpleadoListRelationFilter
    citas?: CitaListRelationFilter
  }

  export type ServicioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precioBase?: SortOrder
    duracionMinutos?: SortOrder
    imagen?: SortOrderInput | SortOrder
    activo?: SortOrder
    especialidadId?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    especialidad?: EspecialidadOrderByWithRelationInput
    empleados?: EmpleadoOrderByRelationAggregateInput
    citas?: CitaOrderByRelationAggregateInput
    _relevance?: ServicioOrderByRelevanceInput
  }

  export type ServicioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: ServicioWhereInput | ServicioWhereInput[]
    OR?: ServicioWhereInput[]
    NOT?: ServicioWhereInput | ServicioWhereInput[]
    descripcion?: StringFilter<"Servicio"> | string
    precioBase?: DecimalFilter<"Servicio"> | Decimal | DecimalJsLike | number | string
    duracionMinutos?: IntFilter<"Servicio"> | number
    imagen?: StringNullableFilter<"Servicio"> | string | null
    activo?: BoolFilter<"Servicio"> | boolean
    especialidadId?: IntFilter<"Servicio"> | number
    creadoEn?: DateTimeFilter<"Servicio"> | Date | string
    actualizadoEn?: DateTimeFilter<"Servicio"> | Date | string
    especialidad?: XOR<EspecialidadScalarRelationFilter, EspecialidadWhereInput>
    empleados?: EmpleadoListRelationFilter
    citas?: CitaListRelationFilter
  }, "id" | "nombre">

  export type ServicioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precioBase?: SortOrder
    duracionMinutos?: SortOrder
    imagen?: SortOrderInput | SortOrder
    activo?: SortOrder
    especialidadId?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: ServicioCountOrderByAggregateInput
    _avg?: ServicioAvgOrderByAggregateInput
    _max?: ServicioMaxOrderByAggregateInput
    _min?: ServicioMinOrderByAggregateInput
    _sum?: ServicioSumOrderByAggregateInput
  }

  export type ServicioScalarWhereWithAggregatesInput = {
    AND?: ServicioScalarWhereWithAggregatesInput | ServicioScalarWhereWithAggregatesInput[]
    OR?: ServicioScalarWhereWithAggregatesInput[]
    NOT?: ServicioScalarWhereWithAggregatesInput | ServicioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Servicio"> | number
    nombre?: StringWithAggregatesFilter<"Servicio"> | string
    descripcion?: StringWithAggregatesFilter<"Servicio"> | string
    precioBase?: DecimalWithAggregatesFilter<"Servicio"> | Decimal | DecimalJsLike | number | string
    duracionMinutos?: IntWithAggregatesFilter<"Servicio"> | number
    imagen?: StringNullableWithAggregatesFilter<"Servicio"> | string | null
    activo?: BoolWithAggregatesFilter<"Servicio"> | boolean
    especialidadId?: IntWithAggregatesFilter<"Servicio"> | number
    creadoEn?: DateTimeWithAggregatesFilter<"Servicio"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Servicio"> | Date | string
  }

  export type ServicioAdicionalWhereInput = {
    AND?: ServicioAdicionalWhereInput | ServicioAdicionalWhereInput[]
    OR?: ServicioAdicionalWhereInput[]
    NOT?: ServicioAdicionalWhereInput | ServicioAdicionalWhereInput[]
    id?: IntFilter<"ServicioAdicional"> | number
    nombre?: StringFilter<"ServicioAdicional"> | string
    descripcion?: StringFilter<"ServicioAdicional"> | string
    precio?: DecimalFilter<"ServicioAdicional"> | Decimal | DecimalJsLike | number | string
    activo?: BoolFilter<"ServicioAdicional"> | boolean
    creadoEn?: DateTimeFilter<"ServicioAdicional"> | Date | string
    actualizadoEn?: DateTimeFilter<"ServicioAdicional"> | Date | string
    citas?: CitaListRelationFilter
  }

  export type ServicioAdicionalOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    citas?: CitaOrderByRelationAggregateInput
    _relevance?: ServicioAdicionalOrderByRelevanceInput
  }

  export type ServicioAdicionalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: ServicioAdicionalWhereInput | ServicioAdicionalWhereInput[]
    OR?: ServicioAdicionalWhereInput[]
    NOT?: ServicioAdicionalWhereInput | ServicioAdicionalWhereInput[]
    descripcion?: StringFilter<"ServicioAdicional"> | string
    precio?: DecimalFilter<"ServicioAdicional"> | Decimal | DecimalJsLike | number | string
    activo?: BoolFilter<"ServicioAdicional"> | boolean
    creadoEn?: DateTimeFilter<"ServicioAdicional"> | Date | string
    actualizadoEn?: DateTimeFilter<"ServicioAdicional"> | Date | string
    citas?: CitaListRelationFilter
  }, "id" | "nombre">

  export type ServicioAdicionalOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: ServicioAdicionalCountOrderByAggregateInput
    _avg?: ServicioAdicionalAvgOrderByAggregateInput
    _max?: ServicioAdicionalMaxOrderByAggregateInput
    _min?: ServicioAdicionalMinOrderByAggregateInput
    _sum?: ServicioAdicionalSumOrderByAggregateInput
  }

  export type ServicioAdicionalScalarWhereWithAggregatesInput = {
    AND?: ServicioAdicionalScalarWhereWithAggregatesInput | ServicioAdicionalScalarWhereWithAggregatesInput[]
    OR?: ServicioAdicionalScalarWhereWithAggregatesInput[]
    NOT?: ServicioAdicionalScalarWhereWithAggregatesInput | ServicioAdicionalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServicioAdicional"> | number
    nombre?: StringWithAggregatesFilter<"ServicioAdicional"> | string
    descripcion?: StringWithAggregatesFilter<"ServicioAdicional"> | string
    precio?: DecimalWithAggregatesFilter<"ServicioAdicional"> | Decimal | DecimalJsLike | number | string
    activo?: BoolWithAggregatesFilter<"ServicioAdicional"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"ServicioAdicional"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"ServicioAdicional"> | Date | string
  }

  export type EmpleadoWhereInput = {
    AND?: EmpleadoWhereInput | EmpleadoWhereInput[]
    OR?: EmpleadoWhereInput[]
    NOT?: EmpleadoWhereInput | EmpleadoWhereInput[]
    id?: IntFilter<"Empleado"> | number
    usuarioId?: IntFilter<"Empleado"> | number
    especialidadId?: IntFilter<"Empleado"> | number
    codigoEmpleado?: StringFilter<"Empleado"> | string
    descripcion?: StringNullableFilter<"Empleado"> | string | null
    activo?: BoolFilter<"Empleado"> | boolean
    creadoEn?: DateTimeFilter<"Empleado"> | Date | string
    actualizadoEn?: DateTimeFilter<"Empleado"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    especialidad?: XOR<EspecialidadScalarRelationFilter, EspecialidadWhereInput>
    servicios?: ServicioListRelationFilter
    citas?: CitaListRelationFilter
    restricciones?: RestriccionHorarioListRelationFilter
  }

  export type EmpleadoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    especialidadId?: SortOrder
    codigoEmpleado?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    especialidad?: EspecialidadOrderByWithRelationInput
    servicios?: ServicioOrderByRelationAggregateInput
    citas?: CitaOrderByRelationAggregateInput
    restricciones?: RestriccionHorarioOrderByRelationAggregateInput
    _relevance?: EmpleadoOrderByRelevanceInput
  }

  export type EmpleadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId?: number
    codigoEmpleado?: string
    AND?: EmpleadoWhereInput | EmpleadoWhereInput[]
    OR?: EmpleadoWhereInput[]
    NOT?: EmpleadoWhereInput | EmpleadoWhereInput[]
    especialidadId?: IntFilter<"Empleado"> | number
    descripcion?: StringNullableFilter<"Empleado"> | string | null
    activo?: BoolFilter<"Empleado"> | boolean
    creadoEn?: DateTimeFilter<"Empleado"> | Date | string
    actualizadoEn?: DateTimeFilter<"Empleado"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    especialidad?: XOR<EspecialidadScalarRelationFilter, EspecialidadWhereInput>
    servicios?: ServicioListRelationFilter
    citas?: CitaListRelationFilter
    restricciones?: RestriccionHorarioListRelationFilter
  }, "id" | "usuarioId" | "codigoEmpleado">

  export type EmpleadoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    especialidadId?: SortOrder
    codigoEmpleado?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: EmpleadoCountOrderByAggregateInput
    _avg?: EmpleadoAvgOrderByAggregateInput
    _max?: EmpleadoMaxOrderByAggregateInput
    _min?: EmpleadoMinOrderByAggregateInput
    _sum?: EmpleadoSumOrderByAggregateInput
  }

  export type EmpleadoScalarWhereWithAggregatesInput = {
    AND?: EmpleadoScalarWhereWithAggregatesInput | EmpleadoScalarWhereWithAggregatesInput[]
    OR?: EmpleadoScalarWhereWithAggregatesInput[]
    NOT?: EmpleadoScalarWhereWithAggregatesInput | EmpleadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Empleado"> | number
    usuarioId?: IntWithAggregatesFilter<"Empleado"> | number
    especialidadId?: IntWithAggregatesFilter<"Empleado"> | number
    codigoEmpleado?: StringWithAggregatesFilter<"Empleado"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Empleado"> | string | null
    activo?: BoolWithAggregatesFilter<"Empleado"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"Empleado"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Empleado"> | Date | string
  }

  export type EstadoCitaWhereInput = {
    AND?: EstadoCitaWhereInput | EstadoCitaWhereInput[]
    OR?: EstadoCitaWhereInput[]
    NOT?: EstadoCitaWhereInput | EstadoCitaWhereInput[]
    id?: IntFilter<"EstadoCita"> | number
    nombre?: StringFilter<"EstadoCita"> | string
    descripcion?: StringNullableFilter<"EstadoCita"> | string | null
    bloqueaDisponibilidad?: BoolFilter<"EstadoCita"> | boolean
    permiteCancelacionCliente?: BoolFilter<"EstadoCita"> | boolean
    permiteEdicion?: BoolFilter<"EstadoCita"> | boolean
    color?: StringNullableFilter<"EstadoCita"> | string | null
    orden?: IntNullableFilter<"EstadoCita"> | number | null
    activo?: BoolFilter<"EstadoCita"> | boolean
    citas?: CitaListRelationFilter
  }

  export type EstadoCitaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    bloqueaDisponibilidad?: SortOrder
    permiteCancelacionCliente?: SortOrder
    permiteEdicion?: SortOrder
    color?: SortOrderInput | SortOrder
    orden?: SortOrderInput | SortOrder
    activo?: SortOrder
    citas?: CitaOrderByRelationAggregateInput
    _relevance?: EstadoCitaOrderByRelevanceInput
  }

  export type EstadoCitaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: EstadoCitaWhereInput | EstadoCitaWhereInput[]
    OR?: EstadoCitaWhereInput[]
    NOT?: EstadoCitaWhereInput | EstadoCitaWhereInput[]
    descripcion?: StringNullableFilter<"EstadoCita"> | string | null
    bloqueaDisponibilidad?: BoolFilter<"EstadoCita"> | boolean
    permiteCancelacionCliente?: BoolFilter<"EstadoCita"> | boolean
    permiteEdicion?: BoolFilter<"EstadoCita"> | boolean
    color?: StringNullableFilter<"EstadoCita"> | string | null
    orden?: IntNullableFilter<"EstadoCita"> | number | null
    activo?: BoolFilter<"EstadoCita"> | boolean
    citas?: CitaListRelationFilter
  }, "id" | "nombre">

  export type EstadoCitaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    bloqueaDisponibilidad?: SortOrder
    permiteCancelacionCliente?: SortOrder
    permiteEdicion?: SortOrder
    color?: SortOrderInput | SortOrder
    orden?: SortOrderInput | SortOrder
    activo?: SortOrder
    _count?: EstadoCitaCountOrderByAggregateInput
    _avg?: EstadoCitaAvgOrderByAggregateInput
    _max?: EstadoCitaMaxOrderByAggregateInput
    _min?: EstadoCitaMinOrderByAggregateInput
    _sum?: EstadoCitaSumOrderByAggregateInput
  }

  export type EstadoCitaScalarWhereWithAggregatesInput = {
    AND?: EstadoCitaScalarWhereWithAggregatesInput | EstadoCitaScalarWhereWithAggregatesInput[]
    OR?: EstadoCitaScalarWhereWithAggregatesInput[]
    NOT?: EstadoCitaScalarWhereWithAggregatesInput | EstadoCitaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EstadoCita"> | number
    nombre?: StringWithAggregatesFilter<"EstadoCita"> | string
    descripcion?: StringNullableWithAggregatesFilter<"EstadoCita"> | string | null
    bloqueaDisponibilidad?: BoolWithAggregatesFilter<"EstadoCita"> | boolean
    permiteCancelacionCliente?: BoolWithAggregatesFilter<"EstadoCita"> | boolean
    permiteEdicion?: BoolWithAggregatesFilter<"EstadoCita"> | boolean
    color?: StringNullableWithAggregatesFilter<"EstadoCita"> | string | null
    orden?: IntNullableWithAggregatesFilter<"EstadoCita"> | number | null
    activo?: BoolWithAggregatesFilter<"EstadoCita"> | boolean
  }

  export type DiaSemanaWhereInput = {
    AND?: DiaSemanaWhereInput | DiaSemanaWhereInput[]
    OR?: DiaSemanaWhereInput[]
    NOT?: DiaSemanaWhereInput | DiaSemanaWhereInput[]
    id?: IntFilter<"DiaSemana"> | number
    nombre?: StringFilter<"DiaSemana"> | string
    numeroOrden?: IntFilter<"DiaSemana"> | number
    horarios?: HorarioAtencionListRelationFilter
  }

  export type DiaSemanaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    numeroOrden?: SortOrder
    horarios?: HorarioAtencionOrderByRelationAggregateInput
    _relevance?: DiaSemanaOrderByRelevanceInput
  }

  export type DiaSemanaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    numeroOrden?: number
    AND?: DiaSemanaWhereInput | DiaSemanaWhereInput[]
    OR?: DiaSemanaWhereInput[]
    NOT?: DiaSemanaWhereInput | DiaSemanaWhereInput[]
    horarios?: HorarioAtencionListRelationFilter
  }, "id" | "nombre" | "numeroOrden">

  export type DiaSemanaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    numeroOrden?: SortOrder
    _count?: DiaSemanaCountOrderByAggregateInput
    _avg?: DiaSemanaAvgOrderByAggregateInput
    _max?: DiaSemanaMaxOrderByAggregateInput
    _min?: DiaSemanaMinOrderByAggregateInput
    _sum?: DiaSemanaSumOrderByAggregateInput
  }

  export type DiaSemanaScalarWhereWithAggregatesInput = {
    AND?: DiaSemanaScalarWhereWithAggregatesInput | DiaSemanaScalarWhereWithAggregatesInput[]
    OR?: DiaSemanaScalarWhereWithAggregatesInput[]
    NOT?: DiaSemanaScalarWhereWithAggregatesInput | DiaSemanaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DiaSemana"> | number
    nombre?: StringWithAggregatesFilter<"DiaSemana"> | string
    numeroOrden?: IntWithAggregatesFilter<"DiaSemana"> | number
  }

  export type HorarioAtencionWhereInput = {
    AND?: HorarioAtencionWhereInput | HorarioAtencionWhereInput[]
    OR?: HorarioAtencionWhereInput[]
    NOT?: HorarioAtencionWhereInput | HorarioAtencionWhereInput[]
    id?: IntFilter<"HorarioAtencion"> | number
    diaSemanaId?: IntFilter<"HorarioAtencion"> | number
    horaInicio?: DateTimeFilter<"HorarioAtencion"> | Date | string
    horaFin?: DateTimeFilter<"HorarioAtencion"> | Date | string
    activo?: BoolFilter<"HorarioAtencion"> | boolean
    diaSemana?: XOR<DiaSemanaScalarRelationFilter, DiaSemanaWhereInput>
  }

  export type HorarioAtencionOrderByWithRelationInput = {
    id?: SortOrder
    diaSemanaId?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    activo?: SortOrder
    diaSemana?: DiaSemanaOrderByWithRelationInput
  }

  export type HorarioAtencionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    diaSemanaId_horaInicio_horaFin?: HorarioAtencionDiaSemanaIdHoraInicioHoraFinCompoundUniqueInput
    AND?: HorarioAtencionWhereInput | HorarioAtencionWhereInput[]
    OR?: HorarioAtencionWhereInput[]
    NOT?: HorarioAtencionWhereInput | HorarioAtencionWhereInput[]
    diaSemanaId?: IntFilter<"HorarioAtencion"> | number
    horaInicio?: DateTimeFilter<"HorarioAtencion"> | Date | string
    horaFin?: DateTimeFilter<"HorarioAtencion"> | Date | string
    activo?: BoolFilter<"HorarioAtencion"> | boolean
    diaSemana?: XOR<DiaSemanaScalarRelationFilter, DiaSemanaWhereInput>
  }, "id" | "diaSemanaId_horaInicio_horaFin">

  export type HorarioAtencionOrderByWithAggregationInput = {
    id?: SortOrder
    diaSemanaId?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    activo?: SortOrder
    _count?: HorarioAtencionCountOrderByAggregateInput
    _avg?: HorarioAtencionAvgOrderByAggregateInput
    _max?: HorarioAtencionMaxOrderByAggregateInput
    _min?: HorarioAtencionMinOrderByAggregateInput
    _sum?: HorarioAtencionSumOrderByAggregateInput
  }

  export type HorarioAtencionScalarWhereWithAggregatesInput = {
    AND?: HorarioAtencionScalarWhereWithAggregatesInput | HorarioAtencionScalarWhereWithAggregatesInput[]
    OR?: HorarioAtencionScalarWhereWithAggregatesInput[]
    NOT?: HorarioAtencionScalarWhereWithAggregatesInput | HorarioAtencionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HorarioAtencion"> | number
    diaSemanaId?: IntWithAggregatesFilter<"HorarioAtencion"> | number
    horaInicio?: DateTimeWithAggregatesFilter<"HorarioAtencion"> | Date | string
    horaFin?: DateTimeWithAggregatesFilter<"HorarioAtencion"> | Date | string
    activo?: BoolWithAggregatesFilter<"HorarioAtencion"> | boolean
  }

  export type TipoRestriccionHorarioWhereInput = {
    AND?: TipoRestriccionHorarioWhereInput | TipoRestriccionHorarioWhereInput[]
    OR?: TipoRestriccionHorarioWhereInput[]
    NOT?: TipoRestriccionHorarioWhereInput | TipoRestriccionHorarioWhereInput[]
    id?: IntFilter<"TipoRestriccionHorario"> | number
    nombre?: StringFilter<"TipoRestriccionHorario"> | string
    descripcion?: StringNullableFilter<"TipoRestriccionHorario"> | string | null
    restricciones?: RestriccionHorarioListRelationFilter
  }

  export type TipoRestriccionHorarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    restricciones?: RestriccionHorarioOrderByRelationAggregateInput
    _relevance?: TipoRestriccionHorarioOrderByRelevanceInput
  }

  export type TipoRestriccionHorarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: TipoRestriccionHorarioWhereInput | TipoRestriccionHorarioWhereInput[]
    OR?: TipoRestriccionHorarioWhereInput[]
    NOT?: TipoRestriccionHorarioWhereInput | TipoRestriccionHorarioWhereInput[]
    descripcion?: StringNullableFilter<"TipoRestriccionHorario"> | string | null
    restricciones?: RestriccionHorarioListRelationFilter
  }, "id" | "nombre">

  export type TipoRestriccionHorarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: TipoRestriccionHorarioCountOrderByAggregateInput
    _avg?: TipoRestriccionHorarioAvgOrderByAggregateInput
    _max?: TipoRestriccionHorarioMaxOrderByAggregateInput
    _min?: TipoRestriccionHorarioMinOrderByAggregateInput
    _sum?: TipoRestriccionHorarioSumOrderByAggregateInput
  }

  export type TipoRestriccionHorarioScalarWhereWithAggregatesInput = {
    AND?: TipoRestriccionHorarioScalarWhereWithAggregatesInput | TipoRestriccionHorarioScalarWhereWithAggregatesInput[]
    OR?: TipoRestriccionHorarioScalarWhereWithAggregatesInput[]
    NOT?: TipoRestriccionHorarioScalarWhereWithAggregatesInput | TipoRestriccionHorarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoRestriccionHorario"> | number
    nombre?: StringWithAggregatesFilter<"TipoRestriccionHorario"> | string
    descripcion?: StringNullableWithAggregatesFilter<"TipoRestriccionHorario"> | string | null
  }

  export type RestriccionHorarioWhereInput = {
    AND?: RestriccionHorarioWhereInput | RestriccionHorarioWhereInput[]
    OR?: RestriccionHorarioWhereInput[]
    NOT?: RestriccionHorarioWhereInput | RestriccionHorarioWhereInput[]
    id?: IntFilter<"RestriccionHorario"> | number
    tipoRestriccionId?: IntFilter<"RestriccionHorario"> | number
    empleadoId?: IntNullableFilter<"RestriccionHorario"> | number | null
    fecha?: DateTimeFilter<"RestriccionHorario"> | Date | string
    horaInicio?: DateTimeNullableFilter<"RestriccionHorario"> | Date | string | null
    horaFin?: DateTimeNullableFilter<"RestriccionHorario"> | Date | string | null
    todoElDia?: BoolFilter<"RestriccionHorario"> | boolean
    motivo?: StringFilter<"RestriccionHorario"> | string
    activo?: BoolFilter<"RestriccionHorario"> | boolean
    creadoEn?: DateTimeFilter<"RestriccionHorario"> | Date | string
    actualizadoEn?: DateTimeFilter<"RestriccionHorario"> | Date | string
    tipoRestriccion?: XOR<TipoRestriccionHorarioScalarRelationFilter, TipoRestriccionHorarioWhereInput>
    empleado?: XOR<EmpleadoNullableScalarRelationFilter, EmpleadoWhereInput> | null
  }

  export type RestriccionHorarioOrderByWithRelationInput = {
    id?: SortOrder
    tipoRestriccionId?: SortOrder
    empleadoId?: SortOrderInput | SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrderInput | SortOrder
    horaFin?: SortOrderInput | SortOrder
    todoElDia?: SortOrder
    motivo?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    tipoRestriccion?: TipoRestriccionHorarioOrderByWithRelationInput
    empleado?: EmpleadoOrderByWithRelationInput
    _relevance?: RestriccionHorarioOrderByRelevanceInput
  }

  export type RestriccionHorarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RestriccionHorarioWhereInput | RestriccionHorarioWhereInput[]
    OR?: RestriccionHorarioWhereInput[]
    NOT?: RestriccionHorarioWhereInput | RestriccionHorarioWhereInput[]
    tipoRestriccionId?: IntFilter<"RestriccionHorario"> | number
    empleadoId?: IntNullableFilter<"RestriccionHorario"> | number | null
    fecha?: DateTimeFilter<"RestriccionHorario"> | Date | string
    horaInicio?: DateTimeNullableFilter<"RestriccionHorario"> | Date | string | null
    horaFin?: DateTimeNullableFilter<"RestriccionHorario"> | Date | string | null
    todoElDia?: BoolFilter<"RestriccionHorario"> | boolean
    motivo?: StringFilter<"RestriccionHorario"> | string
    activo?: BoolFilter<"RestriccionHorario"> | boolean
    creadoEn?: DateTimeFilter<"RestriccionHorario"> | Date | string
    actualizadoEn?: DateTimeFilter<"RestriccionHorario"> | Date | string
    tipoRestriccion?: XOR<TipoRestriccionHorarioScalarRelationFilter, TipoRestriccionHorarioWhereInput>
    empleado?: XOR<EmpleadoNullableScalarRelationFilter, EmpleadoWhereInput> | null
  }, "id">

  export type RestriccionHorarioOrderByWithAggregationInput = {
    id?: SortOrder
    tipoRestriccionId?: SortOrder
    empleadoId?: SortOrderInput | SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrderInput | SortOrder
    horaFin?: SortOrderInput | SortOrder
    todoElDia?: SortOrder
    motivo?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: RestriccionHorarioCountOrderByAggregateInput
    _avg?: RestriccionHorarioAvgOrderByAggregateInput
    _max?: RestriccionHorarioMaxOrderByAggregateInput
    _min?: RestriccionHorarioMinOrderByAggregateInput
    _sum?: RestriccionHorarioSumOrderByAggregateInput
  }

  export type RestriccionHorarioScalarWhereWithAggregatesInput = {
    AND?: RestriccionHorarioScalarWhereWithAggregatesInput | RestriccionHorarioScalarWhereWithAggregatesInput[]
    OR?: RestriccionHorarioScalarWhereWithAggregatesInput[]
    NOT?: RestriccionHorarioScalarWhereWithAggregatesInput | RestriccionHorarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RestriccionHorario"> | number
    tipoRestriccionId?: IntWithAggregatesFilter<"RestriccionHorario"> | number
    empleadoId?: IntNullableWithAggregatesFilter<"RestriccionHorario"> | number | null
    fecha?: DateTimeWithAggregatesFilter<"RestriccionHorario"> | Date | string
    horaInicio?: DateTimeNullableWithAggregatesFilter<"RestriccionHorario"> | Date | string | null
    horaFin?: DateTimeNullableWithAggregatesFilter<"RestriccionHorario"> | Date | string | null
    todoElDia?: BoolWithAggregatesFilter<"RestriccionHorario"> | boolean
    motivo?: StringWithAggregatesFilter<"RestriccionHorario"> | string
    activo?: BoolWithAggregatesFilter<"RestriccionHorario"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"RestriccionHorario"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"RestriccionHorario"> | Date | string
  }

  export type CitaWhereInput = {
    AND?: CitaWhereInput | CitaWhereInput[]
    OR?: CitaWhereInput[]
    NOT?: CitaWhereInput | CitaWhereInput[]
    id?: IntFilter<"Cita"> | number
    clienteId?: IntFilter<"Cita"> | number
    empleadoId?: IntFilter<"Cita"> | number
    servicioId?: IntFilter<"Cita"> | number
    estadoCitaId?: IntFilter<"Cita"> | number
    creadoPorUsuarioId?: IntFilter<"Cita"> | number
    fecha?: DateTimeFilter<"Cita"> | Date | string
    horaInicio?: DateTimeFilter<"Cita"> | Date | string
    horaFin?: DateTimeFilter<"Cita"> | Date | string
    duracionMinutos?: IntFilter<"Cita"> | number
    precioServicio?: DecimalFilter<"Cita"> | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFilter<"Cita"> | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFilter<"Cita"> | Decimal | DecimalJsLike | number | string
    observaciones?: StringNullableFilter<"Cita"> | string | null
    motivoCancelacion?: StringNullableFilter<"Cita"> | string | null
    creadoEn?: DateTimeFilter<"Cita"> | Date | string
    actualizadoEn?: DateTimeFilter<"Cita"> | Date | string
    cliente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    empleado?: XOR<EmpleadoScalarRelationFilter, EmpleadoWhereInput>
    servicio?: XOR<ServicioScalarRelationFilter, ServicioWhereInput>
    estadoCita?: XOR<EstadoCitaScalarRelationFilter, EstadoCitaWhereInput>
    creadoPor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    adicionales?: ServicioAdicionalListRelationFilter
  }

  export type CitaOrderByWithRelationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    empleadoId?: SortOrder
    servicioId?: SortOrder
    estadoCitaId?: SortOrder
    creadoPorUsuarioId?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    duracionMinutos?: SortOrder
    precioServicio?: SortOrder
    costoAdicionales?: SortOrder
    costoTotal?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    motivoCancelacion?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    cliente?: UsuarioOrderByWithRelationInput
    empleado?: EmpleadoOrderByWithRelationInput
    servicio?: ServicioOrderByWithRelationInput
    estadoCita?: EstadoCitaOrderByWithRelationInput
    creadoPor?: UsuarioOrderByWithRelationInput
    adicionales?: ServicioAdicionalOrderByRelationAggregateInput
    _relevance?: CitaOrderByRelevanceInput
  }

  export type CitaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CitaWhereInput | CitaWhereInput[]
    OR?: CitaWhereInput[]
    NOT?: CitaWhereInput | CitaWhereInput[]
    clienteId?: IntFilter<"Cita"> | number
    empleadoId?: IntFilter<"Cita"> | number
    servicioId?: IntFilter<"Cita"> | number
    estadoCitaId?: IntFilter<"Cita"> | number
    creadoPorUsuarioId?: IntFilter<"Cita"> | number
    fecha?: DateTimeFilter<"Cita"> | Date | string
    horaInicio?: DateTimeFilter<"Cita"> | Date | string
    horaFin?: DateTimeFilter<"Cita"> | Date | string
    duracionMinutos?: IntFilter<"Cita"> | number
    precioServicio?: DecimalFilter<"Cita"> | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFilter<"Cita"> | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFilter<"Cita"> | Decimal | DecimalJsLike | number | string
    observaciones?: StringNullableFilter<"Cita"> | string | null
    motivoCancelacion?: StringNullableFilter<"Cita"> | string | null
    creadoEn?: DateTimeFilter<"Cita"> | Date | string
    actualizadoEn?: DateTimeFilter<"Cita"> | Date | string
    cliente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    empleado?: XOR<EmpleadoScalarRelationFilter, EmpleadoWhereInput>
    servicio?: XOR<ServicioScalarRelationFilter, ServicioWhereInput>
    estadoCita?: XOR<EstadoCitaScalarRelationFilter, EstadoCitaWhereInput>
    creadoPor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    adicionales?: ServicioAdicionalListRelationFilter
  }, "id">

  export type CitaOrderByWithAggregationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    empleadoId?: SortOrder
    servicioId?: SortOrder
    estadoCitaId?: SortOrder
    creadoPorUsuarioId?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    duracionMinutos?: SortOrder
    precioServicio?: SortOrder
    costoAdicionales?: SortOrder
    costoTotal?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    motivoCancelacion?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: CitaCountOrderByAggregateInput
    _avg?: CitaAvgOrderByAggregateInput
    _max?: CitaMaxOrderByAggregateInput
    _min?: CitaMinOrderByAggregateInput
    _sum?: CitaSumOrderByAggregateInput
  }

  export type CitaScalarWhereWithAggregatesInput = {
    AND?: CitaScalarWhereWithAggregatesInput | CitaScalarWhereWithAggregatesInput[]
    OR?: CitaScalarWhereWithAggregatesInput[]
    NOT?: CitaScalarWhereWithAggregatesInput | CitaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cita"> | number
    clienteId?: IntWithAggregatesFilter<"Cita"> | number
    empleadoId?: IntWithAggregatesFilter<"Cita"> | number
    servicioId?: IntWithAggregatesFilter<"Cita"> | number
    estadoCitaId?: IntWithAggregatesFilter<"Cita"> | number
    creadoPorUsuarioId?: IntWithAggregatesFilter<"Cita"> | number
    fecha?: DateTimeWithAggregatesFilter<"Cita"> | Date | string
    horaInicio?: DateTimeWithAggregatesFilter<"Cita"> | Date | string
    horaFin?: DateTimeWithAggregatesFilter<"Cita"> | Date | string
    duracionMinutos?: IntWithAggregatesFilter<"Cita"> | number
    precioServicio?: DecimalWithAggregatesFilter<"Cita"> | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalWithAggregatesFilter<"Cita"> | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalWithAggregatesFilter<"Cita"> | Decimal | DecimalJsLike | number | string
    observaciones?: StringNullableWithAggregatesFilter<"Cita"> | string | null
    motivoCancelacion?: StringNullableWithAggregatesFilter<"Cita"> | string | null
    creadoEn?: DateTimeWithAggregatesFilter<"Cita"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Cita"> | Date | string
  }

  export type RolCreateInput = {
    nombre: string
    descripcion?: string | null
    activo?: boolean
    usuarios?: UsuarioCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    activo?: boolean
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    usuarios?: UsuarioUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    usuarios?: UsuarioUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    activo?: boolean
  }

  export type RolUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioCreateInput = {
    nombre: string
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    telefono?: string | null
    passwordHash: string
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    rol: RolCreateNestedOneWithoutUsuariosInput
    empleado?: EmpleadoCreateNestedOneWithoutUsuarioInput
    citasCliente?: CitaCreateNestedManyWithoutClienteInput
    citasCreadas?: CitaCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    telefono?: string | null
    passwordHash: string
    activo?: boolean
    rolId: number
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    empleado?: EmpleadoUncheckedCreateNestedOneWithoutUsuarioInput
    citasCliente?: CitaUncheckedCreateNestedManyWithoutClienteInput
    citasCreadas?: CitaUncheckedCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    empleado?: EmpleadoUpdateOneWithoutUsuarioNestedInput
    citasCliente?: CitaUpdateManyWithoutClienteNestedInput
    citasCreadas?: CitaUpdateManyWithoutCreadoPorNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    rolId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    empleado?: EmpleadoUncheckedUpdateOneWithoutUsuarioNestedInput
    citasCliente?: CitaUncheckedUpdateManyWithoutClienteNestedInput
    citasCreadas?: CitaUncheckedUpdateManyWithoutCreadoPorNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    telefono?: string | null
    passwordHash: string
    activo?: boolean
    rolId: number
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    rolId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EspecialidadCreateInput = {
    nombre: string
    descripcion?: string | null
    activo?: boolean
    empleados?: EmpleadoCreateNestedManyWithoutEspecialidadInput
    servicios?: ServicioCreateNestedManyWithoutEspecialidadInput
  }

  export type EspecialidadUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    activo?: boolean
    empleados?: EmpleadoUncheckedCreateNestedManyWithoutEspecialidadInput
    servicios?: ServicioUncheckedCreateNestedManyWithoutEspecialidadInput
  }

  export type EspecialidadUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    empleados?: EmpleadoUpdateManyWithoutEspecialidadNestedInput
    servicios?: ServicioUpdateManyWithoutEspecialidadNestedInput
  }

  export type EspecialidadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    empleados?: EmpleadoUncheckedUpdateManyWithoutEspecialidadNestedInput
    servicios?: ServicioUncheckedUpdateManyWithoutEspecialidadNestedInput
  }

  export type EspecialidadCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    activo?: boolean
  }

  export type EspecialidadUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EspecialidadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServicioCreateInput = {
    nombre: string
    descripcion: string
    precioBase: Decimal | DecimalJsLike | number | string
    duracionMinutos: number
    imagen?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    especialidad: EspecialidadCreateNestedOneWithoutServiciosInput
    empleados?: EmpleadoCreateNestedManyWithoutServiciosInput
    citas?: CitaCreateNestedManyWithoutServicioInput
  }

  export type ServicioUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    precioBase: Decimal | DecimalJsLike | number | string
    duracionMinutos: number
    imagen?: string | null
    activo?: boolean
    especialidadId: number
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    empleados?: EmpleadoUncheckedCreateNestedManyWithoutServiciosInput
    citas?: CitaUncheckedCreateNestedManyWithoutServicioInput
  }

  export type ServicioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precioBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    especialidad?: EspecialidadUpdateOneRequiredWithoutServiciosNestedInput
    empleados?: EmpleadoUpdateManyWithoutServiciosNestedInput
    citas?: CitaUpdateManyWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precioBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    especialidadId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    empleados?: EmpleadoUncheckedUpdateManyWithoutServiciosNestedInput
    citas?: CitaUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type ServicioCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    precioBase: Decimal | DecimalJsLike | number | string
    duracionMinutos: number
    imagen?: string | null
    activo?: boolean
    especialidadId: number
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ServicioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precioBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precioBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    especialidadId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicioAdicionalCreateInput = {
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    citas?: CitaCreateNestedManyWithoutAdicionalesInput
  }

  export type ServicioAdicionalUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    citas?: CitaUncheckedCreateNestedManyWithoutAdicionalesInput
  }

  export type ServicioAdicionalUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    citas?: CitaUpdateManyWithoutAdicionalesNestedInput
  }

  export type ServicioAdicionalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    citas?: CitaUncheckedUpdateManyWithoutAdicionalesNestedInput
  }

  export type ServicioAdicionalCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ServicioAdicionalUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicioAdicionalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpleadoCreateInput = {
    codigoEmpleado: string
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutEmpleadoInput
    especialidad: EspecialidadCreateNestedOneWithoutEmpleadosInput
    servicios?: ServicioCreateNestedManyWithoutEmpleadosInput
    citas?: CitaCreateNestedManyWithoutEmpleadoInput
    restricciones?: RestriccionHorarioCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    especialidadId: number
    codigoEmpleado: string
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    servicios?: ServicioUncheckedCreateNestedManyWithoutEmpleadosInput
    citas?: CitaUncheckedCreateNestedManyWithoutEmpleadoInput
    restricciones?: RestriccionHorarioUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoUpdateInput = {
    codigoEmpleado?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutEmpleadoNestedInput
    especialidad?: EspecialidadUpdateOneRequiredWithoutEmpleadosNestedInput
    servicios?: ServicioUpdateManyWithoutEmpleadosNestedInput
    citas?: CitaUpdateManyWithoutEmpleadoNestedInput
    restricciones?: RestriccionHorarioUpdateManyWithoutEmpleadoNestedInput
  }

  export type EmpleadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    especialidadId?: IntFieldUpdateOperationsInput | number
    codigoEmpleado?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    servicios?: ServicioUncheckedUpdateManyWithoutEmpleadosNestedInput
    citas?: CitaUncheckedUpdateManyWithoutEmpleadoNestedInput
    restricciones?: RestriccionHorarioUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type EmpleadoCreateManyInput = {
    id?: number
    usuarioId: number
    especialidadId: number
    codigoEmpleado: string
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type EmpleadoUpdateManyMutationInput = {
    codigoEmpleado?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpleadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    especialidadId?: IntFieldUpdateOperationsInput | number
    codigoEmpleado?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstadoCitaCreateInput = {
    nombre: string
    descripcion?: string | null
    bloqueaDisponibilidad?: boolean
    permiteCancelacionCliente?: boolean
    permiteEdicion?: boolean
    color?: string | null
    orden?: number | null
    activo?: boolean
    citas?: CitaCreateNestedManyWithoutEstadoCitaInput
  }

  export type EstadoCitaUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    bloqueaDisponibilidad?: boolean
    permiteCancelacionCliente?: boolean
    permiteEdicion?: boolean
    color?: string | null
    orden?: number | null
    activo?: boolean
    citas?: CitaUncheckedCreateNestedManyWithoutEstadoCitaInput
  }

  export type EstadoCitaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    bloqueaDisponibilidad?: BoolFieldUpdateOperationsInput | boolean
    permiteCancelacionCliente?: BoolFieldUpdateOperationsInput | boolean
    permiteEdicion?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    orden?: NullableIntFieldUpdateOperationsInput | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    citas?: CitaUpdateManyWithoutEstadoCitaNestedInput
  }

  export type EstadoCitaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    bloqueaDisponibilidad?: BoolFieldUpdateOperationsInput | boolean
    permiteCancelacionCliente?: BoolFieldUpdateOperationsInput | boolean
    permiteEdicion?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    orden?: NullableIntFieldUpdateOperationsInput | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    citas?: CitaUncheckedUpdateManyWithoutEstadoCitaNestedInput
  }

  export type EstadoCitaCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    bloqueaDisponibilidad?: boolean
    permiteCancelacionCliente?: boolean
    permiteEdicion?: boolean
    color?: string | null
    orden?: number | null
    activo?: boolean
  }

  export type EstadoCitaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    bloqueaDisponibilidad?: BoolFieldUpdateOperationsInput | boolean
    permiteCancelacionCliente?: BoolFieldUpdateOperationsInput | boolean
    permiteEdicion?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    orden?: NullableIntFieldUpdateOperationsInput | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EstadoCitaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    bloqueaDisponibilidad?: BoolFieldUpdateOperationsInput | boolean
    permiteCancelacionCliente?: BoolFieldUpdateOperationsInput | boolean
    permiteEdicion?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    orden?: NullableIntFieldUpdateOperationsInput | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DiaSemanaCreateInput = {
    nombre: string
    numeroOrden: number
    horarios?: HorarioAtencionCreateNestedManyWithoutDiaSemanaInput
  }

  export type DiaSemanaUncheckedCreateInput = {
    id?: number
    nombre: string
    numeroOrden: number
    horarios?: HorarioAtencionUncheckedCreateNestedManyWithoutDiaSemanaInput
  }

  export type DiaSemanaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    numeroOrden?: IntFieldUpdateOperationsInput | number
    horarios?: HorarioAtencionUpdateManyWithoutDiaSemanaNestedInput
  }

  export type DiaSemanaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    numeroOrden?: IntFieldUpdateOperationsInput | number
    horarios?: HorarioAtencionUncheckedUpdateManyWithoutDiaSemanaNestedInput
  }

  export type DiaSemanaCreateManyInput = {
    id?: number
    nombre: string
    numeroOrden: number
  }

  export type DiaSemanaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    numeroOrden?: IntFieldUpdateOperationsInput | number
  }

  export type DiaSemanaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    numeroOrden?: IntFieldUpdateOperationsInput | number
  }

  export type HorarioAtencionCreateInput = {
    horaInicio: Date | string
    horaFin: Date | string
    activo?: boolean
    diaSemana: DiaSemanaCreateNestedOneWithoutHorariosInput
  }

  export type HorarioAtencionUncheckedCreateInput = {
    id?: number
    diaSemanaId: number
    horaInicio: Date | string
    horaFin: Date | string
    activo?: boolean
  }

  export type HorarioAtencionUpdateInput = {
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    diaSemana?: DiaSemanaUpdateOneRequiredWithoutHorariosNestedInput
  }

  export type HorarioAtencionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    diaSemanaId?: IntFieldUpdateOperationsInput | number
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HorarioAtencionCreateManyInput = {
    id?: number
    diaSemanaId: number
    horaInicio: Date | string
    horaFin: Date | string
    activo?: boolean
  }

  export type HorarioAtencionUpdateManyMutationInput = {
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HorarioAtencionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    diaSemanaId?: IntFieldUpdateOperationsInput | number
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TipoRestriccionHorarioCreateInput = {
    nombre: string
    descripcion?: string | null
    restricciones?: RestriccionHorarioCreateNestedManyWithoutTipoRestriccionInput
  }

  export type TipoRestriccionHorarioUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    restricciones?: RestriccionHorarioUncheckedCreateNestedManyWithoutTipoRestriccionInput
  }

  export type TipoRestriccionHorarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    restricciones?: RestriccionHorarioUpdateManyWithoutTipoRestriccionNestedInput
  }

  export type TipoRestriccionHorarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    restricciones?: RestriccionHorarioUncheckedUpdateManyWithoutTipoRestriccionNestedInput
  }

  export type TipoRestriccionHorarioCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
  }

  export type TipoRestriccionHorarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TipoRestriccionHorarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RestriccionHorarioCreateInput = {
    fecha: Date | string
    horaInicio?: Date | string | null
    horaFin?: Date | string | null
    todoElDia?: boolean
    motivo: string
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    tipoRestriccion: TipoRestriccionHorarioCreateNestedOneWithoutRestriccionesInput
    empleado?: EmpleadoCreateNestedOneWithoutRestriccionesInput
  }

  export type RestriccionHorarioUncheckedCreateInput = {
    id?: number
    tipoRestriccionId: number
    empleadoId?: number | null
    fecha: Date | string
    horaInicio?: Date | string | null
    horaFin?: Date | string | null
    todoElDia?: boolean
    motivo: string
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type RestriccionHorarioUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    todoElDia?: BoolFieldUpdateOperationsInput | boolean
    motivo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoRestriccion?: TipoRestriccionHorarioUpdateOneRequiredWithoutRestriccionesNestedInput
    empleado?: EmpleadoUpdateOneWithoutRestriccionesNestedInput
  }

  export type RestriccionHorarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoRestriccionId?: IntFieldUpdateOperationsInput | number
    empleadoId?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    todoElDia?: BoolFieldUpdateOperationsInput | boolean
    motivo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestriccionHorarioCreateManyInput = {
    id?: number
    tipoRestriccionId: number
    empleadoId?: number | null
    fecha: Date | string
    horaInicio?: Date | string | null
    horaFin?: Date | string | null
    todoElDia?: boolean
    motivo: string
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type RestriccionHorarioUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    todoElDia?: BoolFieldUpdateOperationsInput | boolean
    motivo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestriccionHorarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoRestriccionId?: IntFieldUpdateOperationsInput | number
    empleadoId?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    todoElDia?: BoolFieldUpdateOperationsInput | boolean
    motivo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaCreateInput = {
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    duracionMinutos: number
    precioServicio: Decimal | DecimalJsLike | number | string
    costoAdicionales?: Decimal | DecimalJsLike | number | string
    costoTotal: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    motivoCancelacion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    cliente: UsuarioCreateNestedOneWithoutCitasClienteInput
    empleado: EmpleadoCreateNestedOneWithoutCitasInput
    servicio: ServicioCreateNestedOneWithoutCitasInput
    estadoCita: EstadoCitaCreateNestedOneWithoutCitasInput
    creadoPor: UsuarioCreateNestedOneWithoutCitasCreadasInput
    adicionales?: ServicioAdicionalCreateNestedManyWithoutCitasInput
  }

  export type CitaUncheckedCreateInput = {
    id?: number
    clienteId: number
    empleadoId: number
    servicioId: number
    estadoCitaId: number
    creadoPorUsuarioId: number
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    duracionMinutos: number
    precioServicio: Decimal | DecimalJsLike | number | string
    costoAdicionales?: Decimal | DecimalJsLike | number | string
    costoTotal: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    motivoCancelacion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    adicionales?: ServicioAdicionalUncheckedCreateNestedManyWithoutCitasInput
  }

  export type CitaUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UsuarioUpdateOneRequiredWithoutCitasClienteNestedInput
    empleado?: EmpleadoUpdateOneRequiredWithoutCitasNestedInput
    servicio?: ServicioUpdateOneRequiredWithoutCitasNestedInput
    estadoCita?: EstadoCitaUpdateOneRequiredWithoutCitasNestedInput
    creadoPor?: UsuarioUpdateOneRequiredWithoutCitasCreadasNestedInput
    adicionales?: ServicioAdicionalUpdateManyWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    servicioId?: IntFieldUpdateOperationsInput | number
    estadoCitaId?: IntFieldUpdateOperationsInput | number
    creadoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    adicionales?: ServicioAdicionalUncheckedUpdateManyWithoutCitasNestedInput
  }

  export type CitaCreateManyInput = {
    id?: number
    clienteId: number
    empleadoId: number
    servicioId: number
    estadoCitaId: number
    creadoPorUsuarioId: number
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    duracionMinutos: number
    precioServicio: Decimal | DecimalJsLike | number | string
    costoAdicionales?: Decimal | DecimalJsLike | number | string
    costoTotal: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    motivoCancelacion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type CitaUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    servicioId?: IntFieldUpdateOperationsInput | number
    estadoCitaId?: IntFieldUpdateOperationsInput | number
    creadoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolOrderByRelevanceInput = {
    fields: RolOrderByRelevanceFieldEnum | RolOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RolCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
  }

  export type RolAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
  }

  export type RolMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
  }

  export type RolSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RolScalarRelationFilter = {
    is?: RolWhereInput
    isNot?: RolWhereInput
  }

  export type EmpleadoNullableScalarRelationFilter = {
    is?: EmpleadoWhereInput | null
    isNot?: EmpleadoWhereInput | null
  }

  export type CitaListRelationFilter = {
    every?: CitaWhereInput
    some?: CitaWhereInput
    none?: CitaWhereInput
  }

  export type CitaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    primerApellido?: SortOrder
    segundoApellido?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    passwordHash?: SortOrder
    activo?: SortOrder
    rolId?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    primerApellido?: SortOrder
    segundoApellido?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    passwordHash?: SortOrder
    activo?: SortOrder
    rolId?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    primerApellido?: SortOrder
    segundoApellido?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    passwordHash?: SortOrder
    activo?: SortOrder
    rolId?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EmpleadoListRelationFilter = {
    every?: EmpleadoWhereInput
    some?: EmpleadoWhereInput
    none?: EmpleadoWhereInput
  }

  export type ServicioListRelationFilter = {
    every?: ServicioWhereInput
    some?: ServicioWhereInput
    none?: ServicioWhereInput
  }

  export type EmpleadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServicioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EspecialidadOrderByRelevanceInput = {
    fields: EspecialidadOrderByRelevanceFieldEnum | EspecialidadOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EspecialidadCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
  }

  export type EspecialidadAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EspecialidadMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
  }

  export type EspecialidadMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
  }

  export type EspecialidadSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EspecialidadScalarRelationFilter = {
    is?: EspecialidadWhereInput
    isNot?: EspecialidadWhereInput
  }

  export type ServicioOrderByRelevanceInput = {
    fields: ServicioOrderByRelevanceFieldEnum | ServicioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServicioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precioBase?: SortOrder
    duracionMinutos?: SortOrder
    imagen?: SortOrder
    activo?: SortOrder
    especialidadId?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ServicioAvgOrderByAggregateInput = {
    id?: SortOrder
    precioBase?: SortOrder
    duracionMinutos?: SortOrder
    especialidadId?: SortOrder
  }

  export type ServicioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precioBase?: SortOrder
    duracionMinutos?: SortOrder
    imagen?: SortOrder
    activo?: SortOrder
    especialidadId?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ServicioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precioBase?: SortOrder
    duracionMinutos?: SortOrder
    imagen?: SortOrder
    activo?: SortOrder
    especialidadId?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ServicioSumOrderByAggregateInput = {
    id?: SortOrder
    precioBase?: SortOrder
    duracionMinutos?: SortOrder
    especialidadId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type ServicioAdicionalOrderByRelevanceInput = {
    fields: ServicioAdicionalOrderByRelevanceFieldEnum | ServicioAdicionalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServicioAdicionalCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ServicioAdicionalAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
  }

  export type ServicioAdicionalMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ServicioAdicionalMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ServicioAdicionalSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type RestriccionHorarioListRelationFilter = {
    every?: RestriccionHorarioWhereInput
    some?: RestriccionHorarioWhereInput
    none?: RestriccionHorarioWhereInput
  }

  export type RestriccionHorarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmpleadoOrderByRelevanceInput = {
    fields: EmpleadoOrderByRelevanceFieldEnum | EmpleadoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmpleadoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    especialidadId?: SortOrder
    codigoEmpleado?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type EmpleadoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    especialidadId?: SortOrder
  }

  export type EmpleadoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    especialidadId?: SortOrder
    codigoEmpleado?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type EmpleadoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    especialidadId?: SortOrder
    codigoEmpleado?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type EmpleadoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    especialidadId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EstadoCitaOrderByRelevanceInput = {
    fields: EstadoCitaOrderByRelevanceFieldEnum | EstadoCitaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EstadoCitaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    bloqueaDisponibilidad?: SortOrder
    permiteCancelacionCliente?: SortOrder
    permiteEdicion?: SortOrder
    color?: SortOrder
    orden?: SortOrder
    activo?: SortOrder
  }

  export type EstadoCitaAvgOrderByAggregateInput = {
    id?: SortOrder
    orden?: SortOrder
  }

  export type EstadoCitaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    bloqueaDisponibilidad?: SortOrder
    permiteCancelacionCliente?: SortOrder
    permiteEdicion?: SortOrder
    color?: SortOrder
    orden?: SortOrder
    activo?: SortOrder
  }

  export type EstadoCitaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    bloqueaDisponibilidad?: SortOrder
    permiteCancelacionCliente?: SortOrder
    permiteEdicion?: SortOrder
    color?: SortOrder
    orden?: SortOrder
    activo?: SortOrder
  }

  export type EstadoCitaSumOrderByAggregateInput = {
    id?: SortOrder
    orden?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type HorarioAtencionListRelationFilter = {
    every?: HorarioAtencionWhereInput
    some?: HorarioAtencionWhereInput
    none?: HorarioAtencionWhereInput
  }

  export type HorarioAtencionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiaSemanaOrderByRelevanceInput = {
    fields: DiaSemanaOrderByRelevanceFieldEnum | DiaSemanaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DiaSemanaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    numeroOrden?: SortOrder
  }

  export type DiaSemanaAvgOrderByAggregateInput = {
    id?: SortOrder
    numeroOrden?: SortOrder
  }

  export type DiaSemanaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    numeroOrden?: SortOrder
  }

  export type DiaSemanaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    numeroOrden?: SortOrder
  }

  export type DiaSemanaSumOrderByAggregateInput = {
    id?: SortOrder
    numeroOrden?: SortOrder
  }

  export type DiaSemanaScalarRelationFilter = {
    is?: DiaSemanaWhereInput
    isNot?: DiaSemanaWhereInput
  }

  export type HorarioAtencionDiaSemanaIdHoraInicioHoraFinCompoundUniqueInput = {
    diaSemanaId: number
    horaInicio: Date | string
    horaFin: Date | string
  }

  export type HorarioAtencionCountOrderByAggregateInput = {
    id?: SortOrder
    diaSemanaId?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    activo?: SortOrder
  }

  export type HorarioAtencionAvgOrderByAggregateInput = {
    id?: SortOrder
    diaSemanaId?: SortOrder
  }

  export type HorarioAtencionMaxOrderByAggregateInput = {
    id?: SortOrder
    diaSemanaId?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    activo?: SortOrder
  }

  export type HorarioAtencionMinOrderByAggregateInput = {
    id?: SortOrder
    diaSemanaId?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    activo?: SortOrder
  }

  export type HorarioAtencionSumOrderByAggregateInput = {
    id?: SortOrder
    diaSemanaId?: SortOrder
  }

  export type TipoRestriccionHorarioOrderByRelevanceInput = {
    fields: TipoRestriccionHorarioOrderByRelevanceFieldEnum | TipoRestriccionHorarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TipoRestriccionHorarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type TipoRestriccionHorarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoRestriccionHorarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type TipoRestriccionHorarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type TipoRestriccionHorarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TipoRestriccionHorarioScalarRelationFilter = {
    is?: TipoRestriccionHorarioWhereInput
    isNot?: TipoRestriccionHorarioWhereInput
  }

  export type RestriccionHorarioOrderByRelevanceInput = {
    fields: RestriccionHorarioOrderByRelevanceFieldEnum | RestriccionHorarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RestriccionHorarioCountOrderByAggregateInput = {
    id?: SortOrder
    tipoRestriccionId?: SortOrder
    empleadoId?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    todoElDia?: SortOrder
    motivo?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type RestriccionHorarioAvgOrderByAggregateInput = {
    id?: SortOrder
    tipoRestriccionId?: SortOrder
    empleadoId?: SortOrder
  }

  export type RestriccionHorarioMaxOrderByAggregateInput = {
    id?: SortOrder
    tipoRestriccionId?: SortOrder
    empleadoId?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    todoElDia?: SortOrder
    motivo?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type RestriccionHorarioMinOrderByAggregateInput = {
    id?: SortOrder
    tipoRestriccionId?: SortOrder
    empleadoId?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    todoElDia?: SortOrder
    motivo?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type RestriccionHorarioSumOrderByAggregateInput = {
    id?: SortOrder
    tipoRestriccionId?: SortOrder
    empleadoId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EmpleadoScalarRelationFilter = {
    is?: EmpleadoWhereInput
    isNot?: EmpleadoWhereInput
  }

  export type ServicioScalarRelationFilter = {
    is?: ServicioWhereInput
    isNot?: ServicioWhereInput
  }

  export type EstadoCitaScalarRelationFilter = {
    is?: EstadoCitaWhereInput
    isNot?: EstadoCitaWhereInput
  }

  export type ServicioAdicionalListRelationFilter = {
    every?: ServicioAdicionalWhereInput
    some?: ServicioAdicionalWhereInput
    none?: ServicioAdicionalWhereInput
  }

  export type ServicioAdicionalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CitaOrderByRelevanceInput = {
    fields: CitaOrderByRelevanceFieldEnum | CitaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CitaCountOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    empleadoId?: SortOrder
    servicioId?: SortOrder
    estadoCitaId?: SortOrder
    creadoPorUsuarioId?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    duracionMinutos?: SortOrder
    precioServicio?: SortOrder
    costoAdicionales?: SortOrder
    costoTotal?: SortOrder
    observaciones?: SortOrder
    motivoCancelacion?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type CitaAvgOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    empleadoId?: SortOrder
    servicioId?: SortOrder
    estadoCitaId?: SortOrder
    creadoPorUsuarioId?: SortOrder
    duracionMinutos?: SortOrder
    precioServicio?: SortOrder
    costoAdicionales?: SortOrder
    costoTotal?: SortOrder
  }

  export type CitaMaxOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    empleadoId?: SortOrder
    servicioId?: SortOrder
    estadoCitaId?: SortOrder
    creadoPorUsuarioId?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    duracionMinutos?: SortOrder
    precioServicio?: SortOrder
    costoAdicionales?: SortOrder
    costoTotal?: SortOrder
    observaciones?: SortOrder
    motivoCancelacion?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type CitaMinOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    empleadoId?: SortOrder
    servicioId?: SortOrder
    estadoCitaId?: SortOrder
    creadoPorUsuarioId?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    duracionMinutos?: SortOrder
    precioServicio?: SortOrder
    costoAdicionales?: SortOrder
    costoTotal?: SortOrder
    observaciones?: SortOrder
    motivoCancelacion?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type CitaSumOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    empleadoId?: SortOrder
    servicioId?: SortOrder
    estadoCitaId?: SortOrder
    creadoPorUsuarioId?: SortOrder
    duracionMinutos?: SortOrder
    precioServicio?: SortOrder
    costoAdicionales?: SortOrder
    costoTotal?: SortOrder
  }

  export type UsuarioCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuarioUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRolInput | UsuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRolInput | UsuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRolInput | UsuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRolInput | UsuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRolInput | UsuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRolInput | UsuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type RolCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    connect?: RolWhereUniqueInput
  }

  export type EmpleadoCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<EmpleadoCreateWithoutUsuarioInput, EmpleadoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: EmpleadoCreateOrConnectWithoutUsuarioInput
    connect?: EmpleadoWhereUniqueInput
  }

  export type CitaCreateNestedManyWithoutClienteInput = {
    create?: XOR<CitaCreateWithoutClienteInput, CitaUncheckedCreateWithoutClienteInput> | CitaCreateWithoutClienteInput[] | CitaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutClienteInput | CitaCreateOrConnectWithoutClienteInput[]
    createMany?: CitaCreateManyClienteInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type CitaCreateNestedManyWithoutCreadoPorInput = {
    create?: XOR<CitaCreateWithoutCreadoPorInput, CitaUncheckedCreateWithoutCreadoPorInput> | CitaCreateWithoutCreadoPorInput[] | CitaUncheckedCreateWithoutCreadoPorInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutCreadoPorInput | CitaCreateOrConnectWithoutCreadoPorInput[]
    createMany?: CitaCreateManyCreadoPorInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type EmpleadoUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<EmpleadoCreateWithoutUsuarioInput, EmpleadoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: EmpleadoCreateOrConnectWithoutUsuarioInput
    connect?: EmpleadoWhereUniqueInput
  }

  export type CitaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<CitaCreateWithoutClienteInput, CitaUncheckedCreateWithoutClienteInput> | CitaCreateWithoutClienteInput[] | CitaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutClienteInput | CitaCreateOrConnectWithoutClienteInput[]
    createMany?: CitaCreateManyClienteInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type CitaUncheckedCreateNestedManyWithoutCreadoPorInput = {
    create?: XOR<CitaCreateWithoutCreadoPorInput, CitaUncheckedCreateWithoutCreadoPorInput> | CitaCreateWithoutCreadoPorInput[] | CitaUncheckedCreateWithoutCreadoPorInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutCreadoPorInput | CitaCreateOrConnectWithoutCreadoPorInput[]
    createMany?: CitaCreateManyCreadoPorInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RolUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    upsert?: RolUpsertWithoutUsuariosInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutUsuariosInput, RolUpdateWithoutUsuariosInput>, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type EmpleadoUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<EmpleadoCreateWithoutUsuarioInput, EmpleadoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: EmpleadoCreateOrConnectWithoutUsuarioInput
    upsert?: EmpleadoUpsertWithoutUsuarioInput
    disconnect?: EmpleadoWhereInput | boolean
    delete?: EmpleadoWhereInput | boolean
    connect?: EmpleadoWhereUniqueInput
    update?: XOR<XOR<EmpleadoUpdateToOneWithWhereWithoutUsuarioInput, EmpleadoUpdateWithoutUsuarioInput>, EmpleadoUncheckedUpdateWithoutUsuarioInput>
  }

  export type CitaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<CitaCreateWithoutClienteInput, CitaUncheckedCreateWithoutClienteInput> | CitaCreateWithoutClienteInput[] | CitaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutClienteInput | CitaCreateOrConnectWithoutClienteInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutClienteInput | CitaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: CitaCreateManyClienteInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutClienteInput | CitaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutClienteInput | CitaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type CitaUpdateManyWithoutCreadoPorNestedInput = {
    create?: XOR<CitaCreateWithoutCreadoPorInput, CitaUncheckedCreateWithoutCreadoPorInput> | CitaCreateWithoutCreadoPorInput[] | CitaUncheckedCreateWithoutCreadoPorInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutCreadoPorInput | CitaCreateOrConnectWithoutCreadoPorInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutCreadoPorInput | CitaUpsertWithWhereUniqueWithoutCreadoPorInput[]
    createMany?: CitaCreateManyCreadoPorInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutCreadoPorInput | CitaUpdateWithWhereUniqueWithoutCreadoPorInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutCreadoPorInput | CitaUpdateManyWithWhereWithoutCreadoPorInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type EmpleadoUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<EmpleadoCreateWithoutUsuarioInput, EmpleadoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: EmpleadoCreateOrConnectWithoutUsuarioInput
    upsert?: EmpleadoUpsertWithoutUsuarioInput
    disconnect?: EmpleadoWhereInput | boolean
    delete?: EmpleadoWhereInput | boolean
    connect?: EmpleadoWhereUniqueInput
    update?: XOR<XOR<EmpleadoUpdateToOneWithWhereWithoutUsuarioInput, EmpleadoUpdateWithoutUsuarioInput>, EmpleadoUncheckedUpdateWithoutUsuarioInput>
  }

  export type CitaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<CitaCreateWithoutClienteInput, CitaUncheckedCreateWithoutClienteInput> | CitaCreateWithoutClienteInput[] | CitaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutClienteInput | CitaCreateOrConnectWithoutClienteInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutClienteInput | CitaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: CitaCreateManyClienteInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutClienteInput | CitaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutClienteInput | CitaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type CitaUncheckedUpdateManyWithoutCreadoPorNestedInput = {
    create?: XOR<CitaCreateWithoutCreadoPorInput, CitaUncheckedCreateWithoutCreadoPorInput> | CitaCreateWithoutCreadoPorInput[] | CitaUncheckedCreateWithoutCreadoPorInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutCreadoPorInput | CitaCreateOrConnectWithoutCreadoPorInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutCreadoPorInput | CitaUpsertWithWhereUniqueWithoutCreadoPorInput[]
    createMany?: CitaCreateManyCreadoPorInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutCreadoPorInput | CitaUpdateWithWhereUniqueWithoutCreadoPorInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutCreadoPorInput | CitaUpdateManyWithWhereWithoutCreadoPorInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type EmpleadoCreateNestedManyWithoutEspecialidadInput = {
    create?: XOR<EmpleadoCreateWithoutEspecialidadInput, EmpleadoUncheckedCreateWithoutEspecialidadInput> | EmpleadoCreateWithoutEspecialidadInput[] | EmpleadoUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: EmpleadoCreateOrConnectWithoutEspecialidadInput | EmpleadoCreateOrConnectWithoutEspecialidadInput[]
    createMany?: EmpleadoCreateManyEspecialidadInputEnvelope
    connect?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
  }

  export type ServicioCreateNestedManyWithoutEspecialidadInput = {
    create?: XOR<ServicioCreateWithoutEspecialidadInput, ServicioUncheckedCreateWithoutEspecialidadInput> | ServicioCreateWithoutEspecialidadInput[] | ServicioUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutEspecialidadInput | ServicioCreateOrConnectWithoutEspecialidadInput[]
    createMany?: ServicioCreateManyEspecialidadInputEnvelope
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
  }

  export type EmpleadoUncheckedCreateNestedManyWithoutEspecialidadInput = {
    create?: XOR<EmpleadoCreateWithoutEspecialidadInput, EmpleadoUncheckedCreateWithoutEspecialidadInput> | EmpleadoCreateWithoutEspecialidadInput[] | EmpleadoUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: EmpleadoCreateOrConnectWithoutEspecialidadInput | EmpleadoCreateOrConnectWithoutEspecialidadInput[]
    createMany?: EmpleadoCreateManyEspecialidadInputEnvelope
    connect?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
  }

  export type ServicioUncheckedCreateNestedManyWithoutEspecialidadInput = {
    create?: XOR<ServicioCreateWithoutEspecialidadInput, ServicioUncheckedCreateWithoutEspecialidadInput> | ServicioCreateWithoutEspecialidadInput[] | ServicioUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutEspecialidadInput | ServicioCreateOrConnectWithoutEspecialidadInput[]
    createMany?: ServicioCreateManyEspecialidadInputEnvelope
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
  }

  export type EmpleadoUpdateManyWithoutEspecialidadNestedInput = {
    create?: XOR<EmpleadoCreateWithoutEspecialidadInput, EmpleadoUncheckedCreateWithoutEspecialidadInput> | EmpleadoCreateWithoutEspecialidadInput[] | EmpleadoUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: EmpleadoCreateOrConnectWithoutEspecialidadInput | EmpleadoCreateOrConnectWithoutEspecialidadInput[]
    upsert?: EmpleadoUpsertWithWhereUniqueWithoutEspecialidadInput | EmpleadoUpsertWithWhereUniqueWithoutEspecialidadInput[]
    createMany?: EmpleadoCreateManyEspecialidadInputEnvelope
    set?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    disconnect?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    delete?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    connect?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    update?: EmpleadoUpdateWithWhereUniqueWithoutEspecialidadInput | EmpleadoUpdateWithWhereUniqueWithoutEspecialidadInput[]
    updateMany?: EmpleadoUpdateManyWithWhereWithoutEspecialidadInput | EmpleadoUpdateManyWithWhereWithoutEspecialidadInput[]
    deleteMany?: EmpleadoScalarWhereInput | EmpleadoScalarWhereInput[]
  }

  export type ServicioUpdateManyWithoutEspecialidadNestedInput = {
    create?: XOR<ServicioCreateWithoutEspecialidadInput, ServicioUncheckedCreateWithoutEspecialidadInput> | ServicioCreateWithoutEspecialidadInput[] | ServicioUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutEspecialidadInput | ServicioCreateOrConnectWithoutEspecialidadInput[]
    upsert?: ServicioUpsertWithWhereUniqueWithoutEspecialidadInput | ServicioUpsertWithWhereUniqueWithoutEspecialidadInput[]
    createMany?: ServicioCreateManyEspecialidadInputEnvelope
    set?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    disconnect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    delete?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    update?: ServicioUpdateWithWhereUniqueWithoutEspecialidadInput | ServicioUpdateWithWhereUniqueWithoutEspecialidadInput[]
    updateMany?: ServicioUpdateManyWithWhereWithoutEspecialidadInput | ServicioUpdateManyWithWhereWithoutEspecialidadInput[]
    deleteMany?: ServicioScalarWhereInput | ServicioScalarWhereInput[]
  }

  export type EmpleadoUncheckedUpdateManyWithoutEspecialidadNestedInput = {
    create?: XOR<EmpleadoCreateWithoutEspecialidadInput, EmpleadoUncheckedCreateWithoutEspecialidadInput> | EmpleadoCreateWithoutEspecialidadInput[] | EmpleadoUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: EmpleadoCreateOrConnectWithoutEspecialidadInput | EmpleadoCreateOrConnectWithoutEspecialidadInput[]
    upsert?: EmpleadoUpsertWithWhereUniqueWithoutEspecialidadInput | EmpleadoUpsertWithWhereUniqueWithoutEspecialidadInput[]
    createMany?: EmpleadoCreateManyEspecialidadInputEnvelope
    set?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    disconnect?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    delete?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    connect?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    update?: EmpleadoUpdateWithWhereUniqueWithoutEspecialidadInput | EmpleadoUpdateWithWhereUniqueWithoutEspecialidadInput[]
    updateMany?: EmpleadoUpdateManyWithWhereWithoutEspecialidadInput | EmpleadoUpdateManyWithWhereWithoutEspecialidadInput[]
    deleteMany?: EmpleadoScalarWhereInput | EmpleadoScalarWhereInput[]
  }

  export type ServicioUncheckedUpdateManyWithoutEspecialidadNestedInput = {
    create?: XOR<ServicioCreateWithoutEspecialidadInput, ServicioUncheckedCreateWithoutEspecialidadInput> | ServicioCreateWithoutEspecialidadInput[] | ServicioUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutEspecialidadInput | ServicioCreateOrConnectWithoutEspecialidadInput[]
    upsert?: ServicioUpsertWithWhereUniqueWithoutEspecialidadInput | ServicioUpsertWithWhereUniqueWithoutEspecialidadInput[]
    createMany?: ServicioCreateManyEspecialidadInputEnvelope
    set?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    disconnect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    delete?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    update?: ServicioUpdateWithWhereUniqueWithoutEspecialidadInput | ServicioUpdateWithWhereUniqueWithoutEspecialidadInput[]
    updateMany?: ServicioUpdateManyWithWhereWithoutEspecialidadInput | ServicioUpdateManyWithWhereWithoutEspecialidadInput[]
    deleteMany?: ServicioScalarWhereInput | ServicioScalarWhereInput[]
  }

  export type EspecialidadCreateNestedOneWithoutServiciosInput = {
    create?: XOR<EspecialidadCreateWithoutServiciosInput, EspecialidadUncheckedCreateWithoutServiciosInput>
    connectOrCreate?: EspecialidadCreateOrConnectWithoutServiciosInput
    connect?: EspecialidadWhereUniqueInput
  }

  export type EmpleadoCreateNestedManyWithoutServiciosInput = {
    create?: XOR<EmpleadoCreateWithoutServiciosInput, EmpleadoUncheckedCreateWithoutServiciosInput> | EmpleadoCreateWithoutServiciosInput[] | EmpleadoUncheckedCreateWithoutServiciosInput[]
    connectOrCreate?: EmpleadoCreateOrConnectWithoutServiciosInput | EmpleadoCreateOrConnectWithoutServiciosInput[]
    connect?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
  }

  export type CitaCreateNestedManyWithoutServicioInput = {
    create?: XOR<CitaCreateWithoutServicioInput, CitaUncheckedCreateWithoutServicioInput> | CitaCreateWithoutServicioInput[] | CitaUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutServicioInput | CitaCreateOrConnectWithoutServicioInput[]
    createMany?: CitaCreateManyServicioInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type EmpleadoUncheckedCreateNestedManyWithoutServiciosInput = {
    create?: XOR<EmpleadoCreateWithoutServiciosInput, EmpleadoUncheckedCreateWithoutServiciosInput> | EmpleadoCreateWithoutServiciosInput[] | EmpleadoUncheckedCreateWithoutServiciosInput[]
    connectOrCreate?: EmpleadoCreateOrConnectWithoutServiciosInput | EmpleadoCreateOrConnectWithoutServiciosInput[]
    connect?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
  }

  export type CitaUncheckedCreateNestedManyWithoutServicioInput = {
    create?: XOR<CitaCreateWithoutServicioInput, CitaUncheckedCreateWithoutServicioInput> | CitaCreateWithoutServicioInput[] | CitaUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutServicioInput | CitaCreateOrConnectWithoutServicioInput[]
    createMany?: CitaCreateManyServicioInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EspecialidadUpdateOneRequiredWithoutServiciosNestedInput = {
    create?: XOR<EspecialidadCreateWithoutServiciosInput, EspecialidadUncheckedCreateWithoutServiciosInput>
    connectOrCreate?: EspecialidadCreateOrConnectWithoutServiciosInput
    upsert?: EspecialidadUpsertWithoutServiciosInput
    connect?: EspecialidadWhereUniqueInput
    update?: XOR<XOR<EspecialidadUpdateToOneWithWhereWithoutServiciosInput, EspecialidadUpdateWithoutServiciosInput>, EspecialidadUncheckedUpdateWithoutServiciosInput>
  }

  export type EmpleadoUpdateManyWithoutServiciosNestedInput = {
    create?: XOR<EmpleadoCreateWithoutServiciosInput, EmpleadoUncheckedCreateWithoutServiciosInput> | EmpleadoCreateWithoutServiciosInput[] | EmpleadoUncheckedCreateWithoutServiciosInput[]
    connectOrCreate?: EmpleadoCreateOrConnectWithoutServiciosInput | EmpleadoCreateOrConnectWithoutServiciosInput[]
    upsert?: EmpleadoUpsertWithWhereUniqueWithoutServiciosInput | EmpleadoUpsertWithWhereUniqueWithoutServiciosInput[]
    set?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    disconnect?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    delete?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    connect?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    update?: EmpleadoUpdateWithWhereUniqueWithoutServiciosInput | EmpleadoUpdateWithWhereUniqueWithoutServiciosInput[]
    updateMany?: EmpleadoUpdateManyWithWhereWithoutServiciosInput | EmpleadoUpdateManyWithWhereWithoutServiciosInput[]
    deleteMany?: EmpleadoScalarWhereInput | EmpleadoScalarWhereInput[]
  }

  export type CitaUpdateManyWithoutServicioNestedInput = {
    create?: XOR<CitaCreateWithoutServicioInput, CitaUncheckedCreateWithoutServicioInput> | CitaCreateWithoutServicioInput[] | CitaUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutServicioInput | CitaCreateOrConnectWithoutServicioInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutServicioInput | CitaUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: CitaCreateManyServicioInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutServicioInput | CitaUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutServicioInput | CitaUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type EmpleadoUncheckedUpdateManyWithoutServiciosNestedInput = {
    create?: XOR<EmpleadoCreateWithoutServiciosInput, EmpleadoUncheckedCreateWithoutServiciosInput> | EmpleadoCreateWithoutServiciosInput[] | EmpleadoUncheckedCreateWithoutServiciosInput[]
    connectOrCreate?: EmpleadoCreateOrConnectWithoutServiciosInput | EmpleadoCreateOrConnectWithoutServiciosInput[]
    upsert?: EmpleadoUpsertWithWhereUniqueWithoutServiciosInput | EmpleadoUpsertWithWhereUniqueWithoutServiciosInput[]
    set?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    disconnect?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    delete?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    connect?: EmpleadoWhereUniqueInput | EmpleadoWhereUniqueInput[]
    update?: EmpleadoUpdateWithWhereUniqueWithoutServiciosInput | EmpleadoUpdateWithWhereUniqueWithoutServiciosInput[]
    updateMany?: EmpleadoUpdateManyWithWhereWithoutServiciosInput | EmpleadoUpdateManyWithWhereWithoutServiciosInput[]
    deleteMany?: EmpleadoScalarWhereInput | EmpleadoScalarWhereInput[]
  }

  export type CitaUncheckedUpdateManyWithoutServicioNestedInput = {
    create?: XOR<CitaCreateWithoutServicioInput, CitaUncheckedCreateWithoutServicioInput> | CitaCreateWithoutServicioInput[] | CitaUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutServicioInput | CitaCreateOrConnectWithoutServicioInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutServicioInput | CitaUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: CitaCreateManyServicioInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutServicioInput | CitaUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutServicioInput | CitaUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type CitaCreateNestedManyWithoutAdicionalesInput = {
    create?: XOR<CitaCreateWithoutAdicionalesInput, CitaUncheckedCreateWithoutAdicionalesInput> | CitaCreateWithoutAdicionalesInput[] | CitaUncheckedCreateWithoutAdicionalesInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutAdicionalesInput | CitaCreateOrConnectWithoutAdicionalesInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type CitaUncheckedCreateNestedManyWithoutAdicionalesInput = {
    create?: XOR<CitaCreateWithoutAdicionalesInput, CitaUncheckedCreateWithoutAdicionalesInput> | CitaCreateWithoutAdicionalesInput[] | CitaUncheckedCreateWithoutAdicionalesInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutAdicionalesInput | CitaCreateOrConnectWithoutAdicionalesInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type CitaUpdateManyWithoutAdicionalesNestedInput = {
    create?: XOR<CitaCreateWithoutAdicionalesInput, CitaUncheckedCreateWithoutAdicionalesInput> | CitaCreateWithoutAdicionalesInput[] | CitaUncheckedCreateWithoutAdicionalesInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutAdicionalesInput | CitaCreateOrConnectWithoutAdicionalesInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutAdicionalesInput | CitaUpsertWithWhereUniqueWithoutAdicionalesInput[]
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutAdicionalesInput | CitaUpdateWithWhereUniqueWithoutAdicionalesInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutAdicionalesInput | CitaUpdateManyWithWhereWithoutAdicionalesInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type CitaUncheckedUpdateManyWithoutAdicionalesNestedInput = {
    create?: XOR<CitaCreateWithoutAdicionalesInput, CitaUncheckedCreateWithoutAdicionalesInput> | CitaCreateWithoutAdicionalesInput[] | CitaUncheckedCreateWithoutAdicionalesInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutAdicionalesInput | CitaCreateOrConnectWithoutAdicionalesInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutAdicionalesInput | CitaUpsertWithWhereUniqueWithoutAdicionalesInput[]
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutAdicionalesInput | CitaUpdateWithWhereUniqueWithoutAdicionalesInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutAdicionalesInput | CitaUpdateManyWithWhereWithoutAdicionalesInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutEmpleadoInput = {
    create?: XOR<UsuarioCreateWithoutEmpleadoInput, UsuarioUncheckedCreateWithoutEmpleadoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEmpleadoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EspecialidadCreateNestedOneWithoutEmpleadosInput = {
    create?: XOR<EspecialidadCreateWithoutEmpleadosInput, EspecialidadUncheckedCreateWithoutEmpleadosInput>
    connectOrCreate?: EspecialidadCreateOrConnectWithoutEmpleadosInput
    connect?: EspecialidadWhereUniqueInput
  }

  export type ServicioCreateNestedManyWithoutEmpleadosInput = {
    create?: XOR<ServicioCreateWithoutEmpleadosInput, ServicioUncheckedCreateWithoutEmpleadosInput> | ServicioCreateWithoutEmpleadosInput[] | ServicioUncheckedCreateWithoutEmpleadosInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutEmpleadosInput | ServicioCreateOrConnectWithoutEmpleadosInput[]
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
  }

  export type CitaCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<CitaCreateWithoutEmpleadoInput, CitaUncheckedCreateWithoutEmpleadoInput> | CitaCreateWithoutEmpleadoInput[] | CitaUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutEmpleadoInput | CitaCreateOrConnectWithoutEmpleadoInput[]
    createMany?: CitaCreateManyEmpleadoInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type RestriccionHorarioCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<RestriccionHorarioCreateWithoutEmpleadoInput, RestriccionHorarioUncheckedCreateWithoutEmpleadoInput> | RestriccionHorarioCreateWithoutEmpleadoInput[] | RestriccionHorarioUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: RestriccionHorarioCreateOrConnectWithoutEmpleadoInput | RestriccionHorarioCreateOrConnectWithoutEmpleadoInput[]
    createMany?: RestriccionHorarioCreateManyEmpleadoInputEnvelope
    connect?: RestriccionHorarioWhereUniqueInput | RestriccionHorarioWhereUniqueInput[]
  }

  export type ServicioUncheckedCreateNestedManyWithoutEmpleadosInput = {
    create?: XOR<ServicioCreateWithoutEmpleadosInput, ServicioUncheckedCreateWithoutEmpleadosInput> | ServicioCreateWithoutEmpleadosInput[] | ServicioUncheckedCreateWithoutEmpleadosInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutEmpleadosInput | ServicioCreateOrConnectWithoutEmpleadosInput[]
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
  }

  export type CitaUncheckedCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<CitaCreateWithoutEmpleadoInput, CitaUncheckedCreateWithoutEmpleadoInput> | CitaCreateWithoutEmpleadoInput[] | CitaUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutEmpleadoInput | CitaCreateOrConnectWithoutEmpleadoInput[]
    createMany?: CitaCreateManyEmpleadoInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type RestriccionHorarioUncheckedCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<RestriccionHorarioCreateWithoutEmpleadoInput, RestriccionHorarioUncheckedCreateWithoutEmpleadoInput> | RestriccionHorarioCreateWithoutEmpleadoInput[] | RestriccionHorarioUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: RestriccionHorarioCreateOrConnectWithoutEmpleadoInput | RestriccionHorarioCreateOrConnectWithoutEmpleadoInput[]
    createMany?: RestriccionHorarioCreateManyEmpleadoInputEnvelope
    connect?: RestriccionHorarioWhereUniqueInput | RestriccionHorarioWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutEmpleadoNestedInput = {
    create?: XOR<UsuarioCreateWithoutEmpleadoInput, UsuarioUncheckedCreateWithoutEmpleadoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEmpleadoInput
    upsert?: UsuarioUpsertWithoutEmpleadoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutEmpleadoInput, UsuarioUpdateWithoutEmpleadoInput>, UsuarioUncheckedUpdateWithoutEmpleadoInput>
  }

  export type EspecialidadUpdateOneRequiredWithoutEmpleadosNestedInput = {
    create?: XOR<EspecialidadCreateWithoutEmpleadosInput, EspecialidadUncheckedCreateWithoutEmpleadosInput>
    connectOrCreate?: EspecialidadCreateOrConnectWithoutEmpleadosInput
    upsert?: EspecialidadUpsertWithoutEmpleadosInput
    connect?: EspecialidadWhereUniqueInput
    update?: XOR<XOR<EspecialidadUpdateToOneWithWhereWithoutEmpleadosInput, EspecialidadUpdateWithoutEmpleadosInput>, EspecialidadUncheckedUpdateWithoutEmpleadosInput>
  }

  export type ServicioUpdateManyWithoutEmpleadosNestedInput = {
    create?: XOR<ServicioCreateWithoutEmpleadosInput, ServicioUncheckedCreateWithoutEmpleadosInput> | ServicioCreateWithoutEmpleadosInput[] | ServicioUncheckedCreateWithoutEmpleadosInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutEmpleadosInput | ServicioCreateOrConnectWithoutEmpleadosInput[]
    upsert?: ServicioUpsertWithWhereUniqueWithoutEmpleadosInput | ServicioUpsertWithWhereUniqueWithoutEmpleadosInput[]
    set?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    disconnect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    delete?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    update?: ServicioUpdateWithWhereUniqueWithoutEmpleadosInput | ServicioUpdateWithWhereUniqueWithoutEmpleadosInput[]
    updateMany?: ServicioUpdateManyWithWhereWithoutEmpleadosInput | ServicioUpdateManyWithWhereWithoutEmpleadosInput[]
    deleteMany?: ServicioScalarWhereInput | ServicioScalarWhereInput[]
  }

  export type CitaUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<CitaCreateWithoutEmpleadoInput, CitaUncheckedCreateWithoutEmpleadoInput> | CitaCreateWithoutEmpleadoInput[] | CitaUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutEmpleadoInput | CitaCreateOrConnectWithoutEmpleadoInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutEmpleadoInput | CitaUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: CitaCreateManyEmpleadoInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutEmpleadoInput | CitaUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutEmpleadoInput | CitaUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type RestriccionHorarioUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<RestriccionHorarioCreateWithoutEmpleadoInput, RestriccionHorarioUncheckedCreateWithoutEmpleadoInput> | RestriccionHorarioCreateWithoutEmpleadoInput[] | RestriccionHorarioUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: RestriccionHorarioCreateOrConnectWithoutEmpleadoInput | RestriccionHorarioCreateOrConnectWithoutEmpleadoInput[]
    upsert?: RestriccionHorarioUpsertWithWhereUniqueWithoutEmpleadoInput | RestriccionHorarioUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: RestriccionHorarioCreateManyEmpleadoInputEnvelope
    set?: RestriccionHorarioWhereUniqueInput | RestriccionHorarioWhereUniqueInput[]
    disconnect?: RestriccionHorarioWhereUniqueInput | RestriccionHorarioWhereUniqueInput[]
    delete?: RestriccionHorarioWhereUniqueInput | RestriccionHorarioWhereUniqueInput[]
    connect?: RestriccionHorarioWhereUniqueInput | RestriccionHorarioWhereUniqueInput[]
    update?: RestriccionHorarioUpdateWithWhereUniqueWithoutEmpleadoInput | RestriccionHorarioUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: RestriccionHorarioUpdateManyWithWhereWithoutEmpleadoInput | RestriccionHorarioUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: RestriccionHorarioScalarWhereInput | RestriccionHorarioScalarWhereInput[]
  }

  export type ServicioUncheckedUpdateManyWithoutEmpleadosNestedInput = {
    create?: XOR<ServicioCreateWithoutEmpleadosInput, ServicioUncheckedCreateWithoutEmpleadosInput> | ServicioCreateWithoutEmpleadosInput[] | ServicioUncheckedCreateWithoutEmpleadosInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutEmpleadosInput | ServicioCreateOrConnectWithoutEmpleadosInput[]
    upsert?: ServicioUpsertWithWhereUniqueWithoutEmpleadosInput | ServicioUpsertWithWhereUniqueWithoutEmpleadosInput[]
    set?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    disconnect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    delete?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    update?: ServicioUpdateWithWhereUniqueWithoutEmpleadosInput | ServicioUpdateWithWhereUniqueWithoutEmpleadosInput[]
    updateMany?: ServicioUpdateManyWithWhereWithoutEmpleadosInput | ServicioUpdateManyWithWhereWithoutEmpleadosInput[]
    deleteMany?: ServicioScalarWhereInput | ServicioScalarWhereInput[]
  }

  export type CitaUncheckedUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<CitaCreateWithoutEmpleadoInput, CitaUncheckedCreateWithoutEmpleadoInput> | CitaCreateWithoutEmpleadoInput[] | CitaUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutEmpleadoInput | CitaCreateOrConnectWithoutEmpleadoInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutEmpleadoInput | CitaUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: CitaCreateManyEmpleadoInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutEmpleadoInput | CitaUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutEmpleadoInput | CitaUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type RestriccionHorarioUncheckedUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<RestriccionHorarioCreateWithoutEmpleadoInput, RestriccionHorarioUncheckedCreateWithoutEmpleadoInput> | RestriccionHorarioCreateWithoutEmpleadoInput[] | RestriccionHorarioUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: RestriccionHorarioCreateOrConnectWithoutEmpleadoInput | RestriccionHorarioCreateOrConnectWithoutEmpleadoInput[]
    upsert?: RestriccionHorarioUpsertWithWhereUniqueWithoutEmpleadoInput | RestriccionHorarioUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: RestriccionHorarioCreateManyEmpleadoInputEnvelope
    set?: RestriccionHorarioWhereUniqueInput | RestriccionHorarioWhereUniqueInput[]
    disconnect?: RestriccionHorarioWhereUniqueInput | RestriccionHorarioWhereUniqueInput[]
    delete?: RestriccionHorarioWhereUniqueInput | RestriccionHorarioWhereUniqueInput[]
    connect?: RestriccionHorarioWhereUniqueInput | RestriccionHorarioWhereUniqueInput[]
    update?: RestriccionHorarioUpdateWithWhereUniqueWithoutEmpleadoInput | RestriccionHorarioUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: RestriccionHorarioUpdateManyWithWhereWithoutEmpleadoInput | RestriccionHorarioUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: RestriccionHorarioScalarWhereInput | RestriccionHorarioScalarWhereInput[]
  }

  export type CitaCreateNestedManyWithoutEstadoCitaInput = {
    create?: XOR<CitaCreateWithoutEstadoCitaInput, CitaUncheckedCreateWithoutEstadoCitaInput> | CitaCreateWithoutEstadoCitaInput[] | CitaUncheckedCreateWithoutEstadoCitaInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutEstadoCitaInput | CitaCreateOrConnectWithoutEstadoCitaInput[]
    createMany?: CitaCreateManyEstadoCitaInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type CitaUncheckedCreateNestedManyWithoutEstadoCitaInput = {
    create?: XOR<CitaCreateWithoutEstadoCitaInput, CitaUncheckedCreateWithoutEstadoCitaInput> | CitaCreateWithoutEstadoCitaInput[] | CitaUncheckedCreateWithoutEstadoCitaInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutEstadoCitaInput | CitaCreateOrConnectWithoutEstadoCitaInput[]
    createMany?: CitaCreateManyEstadoCitaInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CitaUpdateManyWithoutEstadoCitaNestedInput = {
    create?: XOR<CitaCreateWithoutEstadoCitaInput, CitaUncheckedCreateWithoutEstadoCitaInput> | CitaCreateWithoutEstadoCitaInput[] | CitaUncheckedCreateWithoutEstadoCitaInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutEstadoCitaInput | CitaCreateOrConnectWithoutEstadoCitaInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutEstadoCitaInput | CitaUpsertWithWhereUniqueWithoutEstadoCitaInput[]
    createMany?: CitaCreateManyEstadoCitaInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutEstadoCitaInput | CitaUpdateWithWhereUniqueWithoutEstadoCitaInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutEstadoCitaInput | CitaUpdateManyWithWhereWithoutEstadoCitaInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type CitaUncheckedUpdateManyWithoutEstadoCitaNestedInput = {
    create?: XOR<CitaCreateWithoutEstadoCitaInput, CitaUncheckedCreateWithoutEstadoCitaInput> | CitaCreateWithoutEstadoCitaInput[] | CitaUncheckedCreateWithoutEstadoCitaInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutEstadoCitaInput | CitaCreateOrConnectWithoutEstadoCitaInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutEstadoCitaInput | CitaUpsertWithWhereUniqueWithoutEstadoCitaInput[]
    createMany?: CitaCreateManyEstadoCitaInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutEstadoCitaInput | CitaUpdateWithWhereUniqueWithoutEstadoCitaInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutEstadoCitaInput | CitaUpdateManyWithWhereWithoutEstadoCitaInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type HorarioAtencionCreateNestedManyWithoutDiaSemanaInput = {
    create?: XOR<HorarioAtencionCreateWithoutDiaSemanaInput, HorarioAtencionUncheckedCreateWithoutDiaSemanaInput> | HorarioAtencionCreateWithoutDiaSemanaInput[] | HorarioAtencionUncheckedCreateWithoutDiaSemanaInput[]
    connectOrCreate?: HorarioAtencionCreateOrConnectWithoutDiaSemanaInput | HorarioAtencionCreateOrConnectWithoutDiaSemanaInput[]
    createMany?: HorarioAtencionCreateManyDiaSemanaInputEnvelope
    connect?: HorarioAtencionWhereUniqueInput | HorarioAtencionWhereUniqueInput[]
  }

  export type HorarioAtencionUncheckedCreateNestedManyWithoutDiaSemanaInput = {
    create?: XOR<HorarioAtencionCreateWithoutDiaSemanaInput, HorarioAtencionUncheckedCreateWithoutDiaSemanaInput> | HorarioAtencionCreateWithoutDiaSemanaInput[] | HorarioAtencionUncheckedCreateWithoutDiaSemanaInput[]
    connectOrCreate?: HorarioAtencionCreateOrConnectWithoutDiaSemanaInput | HorarioAtencionCreateOrConnectWithoutDiaSemanaInput[]
    createMany?: HorarioAtencionCreateManyDiaSemanaInputEnvelope
    connect?: HorarioAtencionWhereUniqueInput | HorarioAtencionWhereUniqueInput[]
  }

  export type HorarioAtencionUpdateManyWithoutDiaSemanaNestedInput = {
    create?: XOR<HorarioAtencionCreateWithoutDiaSemanaInput, HorarioAtencionUncheckedCreateWithoutDiaSemanaInput> | HorarioAtencionCreateWithoutDiaSemanaInput[] | HorarioAtencionUncheckedCreateWithoutDiaSemanaInput[]
    connectOrCreate?: HorarioAtencionCreateOrConnectWithoutDiaSemanaInput | HorarioAtencionCreateOrConnectWithoutDiaSemanaInput[]
    upsert?: HorarioAtencionUpsertWithWhereUniqueWithoutDiaSemanaInput | HorarioAtencionUpsertWithWhereUniqueWithoutDiaSemanaInput[]
    createMany?: HorarioAtencionCreateManyDiaSemanaInputEnvelope
    set?: HorarioAtencionWhereUniqueInput | HorarioAtencionWhereUniqueInput[]
    disconnect?: HorarioAtencionWhereUniqueInput | HorarioAtencionWhereUniqueInput[]
    delete?: HorarioAtencionWhereUniqueInput | HorarioAtencionWhereUniqueInput[]
    connect?: HorarioAtencionWhereUniqueInput | HorarioAtencionWhereUniqueInput[]
    update?: HorarioAtencionUpdateWithWhereUniqueWithoutDiaSemanaInput | HorarioAtencionUpdateWithWhereUniqueWithoutDiaSemanaInput[]
    updateMany?: HorarioAtencionUpdateManyWithWhereWithoutDiaSemanaInput | HorarioAtencionUpdateManyWithWhereWithoutDiaSemanaInput[]
    deleteMany?: HorarioAtencionScalarWhereInput | HorarioAtencionScalarWhereInput[]
  }

  export type HorarioAtencionUncheckedUpdateManyWithoutDiaSemanaNestedInput = {
    create?: XOR<HorarioAtencionCreateWithoutDiaSemanaInput, HorarioAtencionUncheckedCreateWithoutDiaSemanaInput> | HorarioAtencionCreateWithoutDiaSemanaInput[] | HorarioAtencionUncheckedCreateWithoutDiaSemanaInput[]
    connectOrCreate?: HorarioAtencionCreateOrConnectWithoutDiaSemanaInput | HorarioAtencionCreateOrConnectWithoutDiaSemanaInput[]
    upsert?: HorarioAtencionUpsertWithWhereUniqueWithoutDiaSemanaInput | HorarioAtencionUpsertWithWhereUniqueWithoutDiaSemanaInput[]
    createMany?: HorarioAtencionCreateManyDiaSemanaInputEnvelope
    set?: HorarioAtencionWhereUniqueInput | HorarioAtencionWhereUniqueInput[]
    disconnect?: HorarioAtencionWhereUniqueInput | HorarioAtencionWhereUniqueInput[]
    delete?: HorarioAtencionWhereUniqueInput | HorarioAtencionWhereUniqueInput[]
    connect?: HorarioAtencionWhereUniqueInput | HorarioAtencionWhereUniqueInput[]
    update?: HorarioAtencionUpdateWithWhereUniqueWithoutDiaSemanaInput | HorarioAtencionUpdateWithWhereUniqueWithoutDiaSemanaInput[]
    updateMany?: HorarioAtencionUpdateManyWithWhereWithoutDiaSemanaInput | HorarioAtencionUpdateManyWithWhereWithoutDiaSemanaInput[]
    deleteMany?: HorarioAtencionScalarWhereInput | HorarioAtencionScalarWhereInput[]
  }

  export type DiaSemanaCreateNestedOneWithoutHorariosInput = {
    create?: XOR<DiaSemanaCreateWithoutHorariosInput, DiaSemanaUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: DiaSemanaCreateOrConnectWithoutHorariosInput
    connect?: DiaSemanaWhereUniqueInput
  }

  export type DiaSemanaUpdateOneRequiredWithoutHorariosNestedInput = {
    create?: XOR<DiaSemanaCreateWithoutHorariosInput, DiaSemanaUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: DiaSemanaCreateOrConnectWithoutHorariosInput
    upsert?: DiaSemanaUpsertWithoutHorariosInput
    connect?: DiaSemanaWhereUniqueInput
    update?: XOR<XOR<DiaSemanaUpdateToOneWithWhereWithoutHorariosInput, DiaSemanaUpdateWithoutHorariosInput>, DiaSemanaUncheckedUpdateWithoutHorariosInput>
  }

  export type RestriccionHorarioCreateNestedManyWithoutTipoRestriccionInput = {
    create?: XOR<RestriccionHorarioCreateWithoutTipoRestriccionInput, RestriccionHorarioUncheckedCreateWithoutTipoRestriccionInput> | RestriccionHorarioCreateWithoutTipoRestriccionInput[] | RestriccionHorarioUncheckedCreateWithoutTipoRestriccionInput[]
    connectOrCreate?: RestriccionHorarioCreateOrConnectWithoutTipoRestriccionInput | RestriccionHorarioCreateOrConnectWithoutTipoRestriccionInput[]
    createMany?: RestriccionHorarioCreateManyTipoRestriccionInputEnvelope
    connect?: RestriccionHorarioWhereUniqueInput | RestriccionHorarioWhereUniqueInput[]
  }

  export type RestriccionHorarioUncheckedCreateNestedManyWithoutTipoRestriccionInput = {
    create?: XOR<RestriccionHorarioCreateWithoutTipoRestriccionInput, RestriccionHorarioUncheckedCreateWithoutTipoRestriccionInput> | RestriccionHorarioCreateWithoutTipoRestriccionInput[] | RestriccionHorarioUncheckedCreateWithoutTipoRestriccionInput[]
    connectOrCreate?: RestriccionHorarioCreateOrConnectWithoutTipoRestriccionInput | RestriccionHorarioCreateOrConnectWithoutTipoRestriccionInput[]
    createMany?: RestriccionHorarioCreateManyTipoRestriccionInputEnvelope
    connect?: RestriccionHorarioWhereUniqueInput | RestriccionHorarioWhereUniqueInput[]
  }

  export type RestriccionHorarioUpdateManyWithoutTipoRestriccionNestedInput = {
    create?: XOR<RestriccionHorarioCreateWithoutTipoRestriccionInput, RestriccionHorarioUncheckedCreateWithoutTipoRestriccionInput> | RestriccionHorarioCreateWithoutTipoRestriccionInput[] | RestriccionHorarioUncheckedCreateWithoutTipoRestriccionInput[]
    connectOrCreate?: RestriccionHorarioCreateOrConnectWithoutTipoRestriccionInput | RestriccionHorarioCreateOrConnectWithoutTipoRestriccionInput[]
    upsert?: RestriccionHorarioUpsertWithWhereUniqueWithoutTipoRestriccionInput | RestriccionHorarioUpsertWithWhereUniqueWithoutTipoRestriccionInput[]
    createMany?: RestriccionHorarioCreateManyTipoRestriccionInputEnvelope
    set?: RestriccionHorarioWhereUniqueInput | RestriccionHorarioWhereUniqueInput[]
    disconnect?: RestriccionHorarioWhereUniqueInput | RestriccionHorarioWhereUniqueInput[]
    delete?: RestriccionHorarioWhereUniqueInput | RestriccionHorarioWhereUniqueInput[]
    connect?: RestriccionHorarioWhereUniqueInput | RestriccionHorarioWhereUniqueInput[]
    update?: RestriccionHorarioUpdateWithWhereUniqueWithoutTipoRestriccionInput | RestriccionHorarioUpdateWithWhereUniqueWithoutTipoRestriccionInput[]
    updateMany?: RestriccionHorarioUpdateManyWithWhereWithoutTipoRestriccionInput | RestriccionHorarioUpdateManyWithWhereWithoutTipoRestriccionInput[]
    deleteMany?: RestriccionHorarioScalarWhereInput | RestriccionHorarioScalarWhereInput[]
  }

  export type RestriccionHorarioUncheckedUpdateManyWithoutTipoRestriccionNestedInput = {
    create?: XOR<RestriccionHorarioCreateWithoutTipoRestriccionInput, RestriccionHorarioUncheckedCreateWithoutTipoRestriccionInput> | RestriccionHorarioCreateWithoutTipoRestriccionInput[] | RestriccionHorarioUncheckedCreateWithoutTipoRestriccionInput[]
    connectOrCreate?: RestriccionHorarioCreateOrConnectWithoutTipoRestriccionInput | RestriccionHorarioCreateOrConnectWithoutTipoRestriccionInput[]
    upsert?: RestriccionHorarioUpsertWithWhereUniqueWithoutTipoRestriccionInput | RestriccionHorarioUpsertWithWhereUniqueWithoutTipoRestriccionInput[]
    createMany?: RestriccionHorarioCreateManyTipoRestriccionInputEnvelope
    set?: RestriccionHorarioWhereUniqueInput | RestriccionHorarioWhereUniqueInput[]
    disconnect?: RestriccionHorarioWhereUniqueInput | RestriccionHorarioWhereUniqueInput[]
    delete?: RestriccionHorarioWhereUniqueInput | RestriccionHorarioWhereUniqueInput[]
    connect?: RestriccionHorarioWhereUniqueInput | RestriccionHorarioWhereUniqueInput[]
    update?: RestriccionHorarioUpdateWithWhereUniqueWithoutTipoRestriccionInput | RestriccionHorarioUpdateWithWhereUniqueWithoutTipoRestriccionInput[]
    updateMany?: RestriccionHorarioUpdateManyWithWhereWithoutTipoRestriccionInput | RestriccionHorarioUpdateManyWithWhereWithoutTipoRestriccionInput[]
    deleteMany?: RestriccionHorarioScalarWhereInput | RestriccionHorarioScalarWhereInput[]
  }

  export type TipoRestriccionHorarioCreateNestedOneWithoutRestriccionesInput = {
    create?: XOR<TipoRestriccionHorarioCreateWithoutRestriccionesInput, TipoRestriccionHorarioUncheckedCreateWithoutRestriccionesInput>
    connectOrCreate?: TipoRestriccionHorarioCreateOrConnectWithoutRestriccionesInput
    connect?: TipoRestriccionHorarioWhereUniqueInput
  }

  export type EmpleadoCreateNestedOneWithoutRestriccionesInput = {
    create?: XOR<EmpleadoCreateWithoutRestriccionesInput, EmpleadoUncheckedCreateWithoutRestriccionesInput>
    connectOrCreate?: EmpleadoCreateOrConnectWithoutRestriccionesInput
    connect?: EmpleadoWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TipoRestriccionHorarioUpdateOneRequiredWithoutRestriccionesNestedInput = {
    create?: XOR<TipoRestriccionHorarioCreateWithoutRestriccionesInput, TipoRestriccionHorarioUncheckedCreateWithoutRestriccionesInput>
    connectOrCreate?: TipoRestriccionHorarioCreateOrConnectWithoutRestriccionesInput
    upsert?: TipoRestriccionHorarioUpsertWithoutRestriccionesInput
    connect?: TipoRestriccionHorarioWhereUniqueInput
    update?: XOR<XOR<TipoRestriccionHorarioUpdateToOneWithWhereWithoutRestriccionesInput, TipoRestriccionHorarioUpdateWithoutRestriccionesInput>, TipoRestriccionHorarioUncheckedUpdateWithoutRestriccionesInput>
  }

  export type EmpleadoUpdateOneWithoutRestriccionesNestedInput = {
    create?: XOR<EmpleadoCreateWithoutRestriccionesInput, EmpleadoUncheckedCreateWithoutRestriccionesInput>
    connectOrCreate?: EmpleadoCreateOrConnectWithoutRestriccionesInput
    upsert?: EmpleadoUpsertWithoutRestriccionesInput
    disconnect?: EmpleadoWhereInput | boolean
    delete?: EmpleadoWhereInput | boolean
    connect?: EmpleadoWhereUniqueInput
    update?: XOR<XOR<EmpleadoUpdateToOneWithWhereWithoutRestriccionesInput, EmpleadoUpdateWithoutRestriccionesInput>, EmpleadoUncheckedUpdateWithoutRestriccionesInput>
  }

  export type UsuarioCreateNestedOneWithoutCitasClienteInput = {
    create?: XOR<UsuarioCreateWithoutCitasClienteInput, UsuarioUncheckedCreateWithoutCitasClienteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCitasClienteInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EmpleadoCreateNestedOneWithoutCitasInput = {
    create?: XOR<EmpleadoCreateWithoutCitasInput, EmpleadoUncheckedCreateWithoutCitasInput>
    connectOrCreate?: EmpleadoCreateOrConnectWithoutCitasInput
    connect?: EmpleadoWhereUniqueInput
  }

  export type ServicioCreateNestedOneWithoutCitasInput = {
    create?: XOR<ServicioCreateWithoutCitasInput, ServicioUncheckedCreateWithoutCitasInput>
    connectOrCreate?: ServicioCreateOrConnectWithoutCitasInput
    connect?: ServicioWhereUniqueInput
  }

  export type EstadoCitaCreateNestedOneWithoutCitasInput = {
    create?: XOR<EstadoCitaCreateWithoutCitasInput, EstadoCitaUncheckedCreateWithoutCitasInput>
    connectOrCreate?: EstadoCitaCreateOrConnectWithoutCitasInput
    connect?: EstadoCitaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutCitasCreadasInput = {
    create?: XOR<UsuarioCreateWithoutCitasCreadasInput, UsuarioUncheckedCreateWithoutCitasCreadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCitasCreadasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ServicioAdicionalCreateNestedManyWithoutCitasInput = {
    create?: XOR<ServicioAdicionalCreateWithoutCitasInput, ServicioAdicionalUncheckedCreateWithoutCitasInput> | ServicioAdicionalCreateWithoutCitasInput[] | ServicioAdicionalUncheckedCreateWithoutCitasInput[]
    connectOrCreate?: ServicioAdicionalCreateOrConnectWithoutCitasInput | ServicioAdicionalCreateOrConnectWithoutCitasInput[]
    connect?: ServicioAdicionalWhereUniqueInput | ServicioAdicionalWhereUniqueInput[]
  }

  export type ServicioAdicionalUncheckedCreateNestedManyWithoutCitasInput = {
    create?: XOR<ServicioAdicionalCreateWithoutCitasInput, ServicioAdicionalUncheckedCreateWithoutCitasInput> | ServicioAdicionalCreateWithoutCitasInput[] | ServicioAdicionalUncheckedCreateWithoutCitasInput[]
    connectOrCreate?: ServicioAdicionalCreateOrConnectWithoutCitasInput | ServicioAdicionalCreateOrConnectWithoutCitasInput[]
    connect?: ServicioAdicionalWhereUniqueInput | ServicioAdicionalWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutCitasClienteNestedInput = {
    create?: XOR<UsuarioCreateWithoutCitasClienteInput, UsuarioUncheckedCreateWithoutCitasClienteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCitasClienteInput
    upsert?: UsuarioUpsertWithoutCitasClienteInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCitasClienteInput, UsuarioUpdateWithoutCitasClienteInput>, UsuarioUncheckedUpdateWithoutCitasClienteInput>
  }

  export type EmpleadoUpdateOneRequiredWithoutCitasNestedInput = {
    create?: XOR<EmpleadoCreateWithoutCitasInput, EmpleadoUncheckedCreateWithoutCitasInput>
    connectOrCreate?: EmpleadoCreateOrConnectWithoutCitasInput
    upsert?: EmpleadoUpsertWithoutCitasInput
    connect?: EmpleadoWhereUniqueInput
    update?: XOR<XOR<EmpleadoUpdateToOneWithWhereWithoutCitasInput, EmpleadoUpdateWithoutCitasInput>, EmpleadoUncheckedUpdateWithoutCitasInput>
  }

  export type ServicioUpdateOneRequiredWithoutCitasNestedInput = {
    create?: XOR<ServicioCreateWithoutCitasInput, ServicioUncheckedCreateWithoutCitasInput>
    connectOrCreate?: ServicioCreateOrConnectWithoutCitasInput
    upsert?: ServicioUpsertWithoutCitasInput
    connect?: ServicioWhereUniqueInput
    update?: XOR<XOR<ServicioUpdateToOneWithWhereWithoutCitasInput, ServicioUpdateWithoutCitasInput>, ServicioUncheckedUpdateWithoutCitasInput>
  }

  export type EstadoCitaUpdateOneRequiredWithoutCitasNestedInput = {
    create?: XOR<EstadoCitaCreateWithoutCitasInput, EstadoCitaUncheckedCreateWithoutCitasInput>
    connectOrCreate?: EstadoCitaCreateOrConnectWithoutCitasInput
    upsert?: EstadoCitaUpsertWithoutCitasInput
    connect?: EstadoCitaWhereUniqueInput
    update?: XOR<XOR<EstadoCitaUpdateToOneWithWhereWithoutCitasInput, EstadoCitaUpdateWithoutCitasInput>, EstadoCitaUncheckedUpdateWithoutCitasInput>
  }

  export type UsuarioUpdateOneRequiredWithoutCitasCreadasNestedInput = {
    create?: XOR<UsuarioCreateWithoutCitasCreadasInput, UsuarioUncheckedCreateWithoutCitasCreadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCitasCreadasInput
    upsert?: UsuarioUpsertWithoutCitasCreadasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCitasCreadasInput, UsuarioUpdateWithoutCitasCreadasInput>, UsuarioUncheckedUpdateWithoutCitasCreadasInput>
  }

  export type ServicioAdicionalUpdateManyWithoutCitasNestedInput = {
    create?: XOR<ServicioAdicionalCreateWithoutCitasInput, ServicioAdicionalUncheckedCreateWithoutCitasInput> | ServicioAdicionalCreateWithoutCitasInput[] | ServicioAdicionalUncheckedCreateWithoutCitasInput[]
    connectOrCreate?: ServicioAdicionalCreateOrConnectWithoutCitasInput | ServicioAdicionalCreateOrConnectWithoutCitasInput[]
    upsert?: ServicioAdicionalUpsertWithWhereUniqueWithoutCitasInput | ServicioAdicionalUpsertWithWhereUniqueWithoutCitasInput[]
    set?: ServicioAdicionalWhereUniqueInput | ServicioAdicionalWhereUniqueInput[]
    disconnect?: ServicioAdicionalWhereUniqueInput | ServicioAdicionalWhereUniqueInput[]
    delete?: ServicioAdicionalWhereUniqueInput | ServicioAdicionalWhereUniqueInput[]
    connect?: ServicioAdicionalWhereUniqueInput | ServicioAdicionalWhereUniqueInput[]
    update?: ServicioAdicionalUpdateWithWhereUniqueWithoutCitasInput | ServicioAdicionalUpdateWithWhereUniqueWithoutCitasInput[]
    updateMany?: ServicioAdicionalUpdateManyWithWhereWithoutCitasInput | ServicioAdicionalUpdateManyWithWhereWithoutCitasInput[]
    deleteMany?: ServicioAdicionalScalarWhereInput | ServicioAdicionalScalarWhereInput[]
  }

  export type ServicioAdicionalUncheckedUpdateManyWithoutCitasNestedInput = {
    create?: XOR<ServicioAdicionalCreateWithoutCitasInput, ServicioAdicionalUncheckedCreateWithoutCitasInput> | ServicioAdicionalCreateWithoutCitasInput[] | ServicioAdicionalUncheckedCreateWithoutCitasInput[]
    connectOrCreate?: ServicioAdicionalCreateOrConnectWithoutCitasInput | ServicioAdicionalCreateOrConnectWithoutCitasInput[]
    upsert?: ServicioAdicionalUpsertWithWhereUniqueWithoutCitasInput | ServicioAdicionalUpsertWithWhereUniqueWithoutCitasInput[]
    set?: ServicioAdicionalWhereUniqueInput | ServicioAdicionalWhereUniqueInput[]
    disconnect?: ServicioAdicionalWhereUniqueInput | ServicioAdicionalWhereUniqueInput[]
    delete?: ServicioAdicionalWhereUniqueInput | ServicioAdicionalWhereUniqueInput[]
    connect?: ServicioAdicionalWhereUniqueInput | ServicioAdicionalWhereUniqueInput[]
    update?: ServicioAdicionalUpdateWithWhereUniqueWithoutCitasInput | ServicioAdicionalUpdateWithWhereUniqueWithoutCitasInput[]
    updateMany?: ServicioAdicionalUpdateManyWithWhereWithoutCitasInput | ServicioAdicionalUpdateManyWithWhereWithoutCitasInput[]
    deleteMany?: ServicioAdicionalScalarWhereInput | ServicioAdicionalScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UsuarioCreateWithoutRolInput = {
    nombre: string
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    telefono?: string | null
    passwordHash: string
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    empleado?: EmpleadoCreateNestedOneWithoutUsuarioInput
    citasCliente?: CitaCreateNestedManyWithoutClienteInput
    citasCreadas?: CitaCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioUncheckedCreateWithoutRolInput = {
    id?: number
    nombre: string
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    telefono?: string | null
    passwordHash: string
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    empleado?: EmpleadoUncheckedCreateNestedOneWithoutUsuarioInput
    citasCliente?: CitaUncheckedCreateNestedManyWithoutClienteInput
    citasCreadas?: CitaUncheckedCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioCreateOrConnectWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
  }

  export type UsuarioCreateManyRolInputEnvelope = {
    data: UsuarioCreateManyRolInput | UsuarioCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutRolInput, UsuarioUncheckedUpdateWithoutRolInput>
    create: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutRolInput, UsuarioUncheckedUpdateWithoutRolInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutRolInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutRolInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    primerApellido?: StringFilter<"Usuario"> | string
    segundoApellido?: StringNullableFilter<"Usuario"> | string | null
    correo?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    passwordHash?: StringFilter<"Usuario"> | string
    activo?: BoolFilter<"Usuario"> | boolean
    rolId?: IntFilter<"Usuario"> | number
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    actualizadoEn?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type RolCreateWithoutUsuariosInput = {
    nombre: string
    descripcion?: string | null
    activo?: boolean
  }

  export type RolUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    activo?: boolean
  }

  export type RolCreateOrConnectWithoutUsuariosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
  }

  export type EmpleadoCreateWithoutUsuarioInput = {
    codigoEmpleado: string
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    especialidad: EspecialidadCreateNestedOneWithoutEmpleadosInput
    servicios?: ServicioCreateNestedManyWithoutEmpleadosInput
    citas?: CitaCreateNestedManyWithoutEmpleadoInput
    restricciones?: RestriccionHorarioCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    especialidadId: number
    codigoEmpleado: string
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    servicios?: ServicioUncheckedCreateNestedManyWithoutEmpleadosInput
    citas?: CitaUncheckedCreateNestedManyWithoutEmpleadoInput
    restricciones?: RestriccionHorarioUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoCreateOrConnectWithoutUsuarioInput = {
    where: EmpleadoWhereUniqueInput
    create: XOR<EmpleadoCreateWithoutUsuarioInput, EmpleadoUncheckedCreateWithoutUsuarioInput>
  }

  export type CitaCreateWithoutClienteInput = {
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    duracionMinutos: number
    precioServicio: Decimal | DecimalJsLike | number | string
    costoAdicionales?: Decimal | DecimalJsLike | number | string
    costoTotal: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    motivoCancelacion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    empleado: EmpleadoCreateNestedOneWithoutCitasInput
    servicio: ServicioCreateNestedOneWithoutCitasInput
    estadoCita: EstadoCitaCreateNestedOneWithoutCitasInput
    creadoPor: UsuarioCreateNestedOneWithoutCitasCreadasInput
    adicionales?: ServicioAdicionalCreateNestedManyWithoutCitasInput
  }

  export type CitaUncheckedCreateWithoutClienteInput = {
    id?: number
    empleadoId: number
    servicioId: number
    estadoCitaId: number
    creadoPorUsuarioId: number
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    duracionMinutos: number
    precioServicio: Decimal | DecimalJsLike | number | string
    costoAdicionales?: Decimal | DecimalJsLike | number | string
    costoTotal: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    motivoCancelacion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    adicionales?: ServicioAdicionalUncheckedCreateNestedManyWithoutCitasInput
  }

  export type CitaCreateOrConnectWithoutClienteInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutClienteInput, CitaUncheckedCreateWithoutClienteInput>
  }

  export type CitaCreateManyClienteInputEnvelope = {
    data: CitaCreateManyClienteInput | CitaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type CitaCreateWithoutCreadoPorInput = {
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    duracionMinutos: number
    precioServicio: Decimal | DecimalJsLike | number | string
    costoAdicionales?: Decimal | DecimalJsLike | number | string
    costoTotal: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    motivoCancelacion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    cliente: UsuarioCreateNestedOneWithoutCitasClienteInput
    empleado: EmpleadoCreateNestedOneWithoutCitasInput
    servicio: ServicioCreateNestedOneWithoutCitasInput
    estadoCita: EstadoCitaCreateNestedOneWithoutCitasInput
    adicionales?: ServicioAdicionalCreateNestedManyWithoutCitasInput
  }

  export type CitaUncheckedCreateWithoutCreadoPorInput = {
    id?: number
    clienteId: number
    empleadoId: number
    servicioId: number
    estadoCitaId: number
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    duracionMinutos: number
    precioServicio: Decimal | DecimalJsLike | number | string
    costoAdicionales?: Decimal | DecimalJsLike | number | string
    costoTotal: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    motivoCancelacion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    adicionales?: ServicioAdicionalUncheckedCreateNestedManyWithoutCitasInput
  }

  export type CitaCreateOrConnectWithoutCreadoPorInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutCreadoPorInput, CitaUncheckedCreateWithoutCreadoPorInput>
  }

  export type CitaCreateManyCreadoPorInputEnvelope = {
    data: CitaCreateManyCreadoPorInput | CitaCreateManyCreadoPorInput[]
    skipDuplicates?: boolean
  }

  export type RolUpsertWithoutUsuariosInput = {
    update: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type RolUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RolUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmpleadoUpsertWithoutUsuarioInput = {
    update: XOR<EmpleadoUpdateWithoutUsuarioInput, EmpleadoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<EmpleadoCreateWithoutUsuarioInput, EmpleadoUncheckedCreateWithoutUsuarioInput>
    where?: EmpleadoWhereInput
  }

  export type EmpleadoUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: EmpleadoWhereInput
    data: XOR<EmpleadoUpdateWithoutUsuarioInput, EmpleadoUncheckedUpdateWithoutUsuarioInput>
  }

  export type EmpleadoUpdateWithoutUsuarioInput = {
    codigoEmpleado?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    especialidad?: EspecialidadUpdateOneRequiredWithoutEmpleadosNestedInput
    servicios?: ServicioUpdateManyWithoutEmpleadosNestedInput
    citas?: CitaUpdateManyWithoutEmpleadoNestedInput
    restricciones?: RestriccionHorarioUpdateManyWithoutEmpleadoNestedInput
  }

  export type EmpleadoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    especialidadId?: IntFieldUpdateOperationsInput | number
    codigoEmpleado?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    servicios?: ServicioUncheckedUpdateManyWithoutEmpleadosNestedInput
    citas?: CitaUncheckedUpdateManyWithoutEmpleadoNestedInput
    restricciones?: RestriccionHorarioUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type CitaUpsertWithWhereUniqueWithoutClienteInput = {
    where: CitaWhereUniqueInput
    update: XOR<CitaUpdateWithoutClienteInput, CitaUncheckedUpdateWithoutClienteInput>
    create: XOR<CitaCreateWithoutClienteInput, CitaUncheckedCreateWithoutClienteInput>
  }

  export type CitaUpdateWithWhereUniqueWithoutClienteInput = {
    where: CitaWhereUniqueInput
    data: XOR<CitaUpdateWithoutClienteInput, CitaUncheckedUpdateWithoutClienteInput>
  }

  export type CitaUpdateManyWithWhereWithoutClienteInput = {
    where: CitaScalarWhereInput
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyWithoutClienteInput>
  }

  export type CitaScalarWhereInput = {
    AND?: CitaScalarWhereInput | CitaScalarWhereInput[]
    OR?: CitaScalarWhereInput[]
    NOT?: CitaScalarWhereInput | CitaScalarWhereInput[]
    id?: IntFilter<"Cita"> | number
    clienteId?: IntFilter<"Cita"> | number
    empleadoId?: IntFilter<"Cita"> | number
    servicioId?: IntFilter<"Cita"> | number
    estadoCitaId?: IntFilter<"Cita"> | number
    creadoPorUsuarioId?: IntFilter<"Cita"> | number
    fecha?: DateTimeFilter<"Cita"> | Date | string
    horaInicio?: DateTimeFilter<"Cita"> | Date | string
    horaFin?: DateTimeFilter<"Cita"> | Date | string
    duracionMinutos?: IntFilter<"Cita"> | number
    precioServicio?: DecimalFilter<"Cita"> | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFilter<"Cita"> | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFilter<"Cita"> | Decimal | DecimalJsLike | number | string
    observaciones?: StringNullableFilter<"Cita"> | string | null
    motivoCancelacion?: StringNullableFilter<"Cita"> | string | null
    creadoEn?: DateTimeFilter<"Cita"> | Date | string
    actualizadoEn?: DateTimeFilter<"Cita"> | Date | string
  }

  export type CitaUpsertWithWhereUniqueWithoutCreadoPorInput = {
    where: CitaWhereUniqueInput
    update: XOR<CitaUpdateWithoutCreadoPorInput, CitaUncheckedUpdateWithoutCreadoPorInput>
    create: XOR<CitaCreateWithoutCreadoPorInput, CitaUncheckedCreateWithoutCreadoPorInput>
  }

  export type CitaUpdateWithWhereUniqueWithoutCreadoPorInput = {
    where: CitaWhereUniqueInput
    data: XOR<CitaUpdateWithoutCreadoPorInput, CitaUncheckedUpdateWithoutCreadoPorInput>
  }

  export type CitaUpdateManyWithWhereWithoutCreadoPorInput = {
    where: CitaScalarWhereInput
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyWithoutCreadoPorInput>
  }

  export type EmpleadoCreateWithoutEspecialidadInput = {
    codigoEmpleado: string
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutEmpleadoInput
    servicios?: ServicioCreateNestedManyWithoutEmpleadosInput
    citas?: CitaCreateNestedManyWithoutEmpleadoInput
    restricciones?: RestriccionHorarioCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoUncheckedCreateWithoutEspecialidadInput = {
    id?: number
    usuarioId: number
    codigoEmpleado: string
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    servicios?: ServicioUncheckedCreateNestedManyWithoutEmpleadosInput
    citas?: CitaUncheckedCreateNestedManyWithoutEmpleadoInput
    restricciones?: RestriccionHorarioUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoCreateOrConnectWithoutEspecialidadInput = {
    where: EmpleadoWhereUniqueInput
    create: XOR<EmpleadoCreateWithoutEspecialidadInput, EmpleadoUncheckedCreateWithoutEspecialidadInput>
  }

  export type EmpleadoCreateManyEspecialidadInputEnvelope = {
    data: EmpleadoCreateManyEspecialidadInput | EmpleadoCreateManyEspecialidadInput[]
    skipDuplicates?: boolean
  }

  export type ServicioCreateWithoutEspecialidadInput = {
    nombre: string
    descripcion: string
    precioBase: Decimal | DecimalJsLike | number | string
    duracionMinutos: number
    imagen?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    empleados?: EmpleadoCreateNestedManyWithoutServiciosInput
    citas?: CitaCreateNestedManyWithoutServicioInput
  }

  export type ServicioUncheckedCreateWithoutEspecialidadInput = {
    id?: number
    nombre: string
    descripcion: string
    precioBase: Decimal | DecimalJsLike | number | string
    duracionMinutos: number
    imagen?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    empleados?: EmpleadoUncheckedCreateNestedManyWithoutServiciosInput
    citas?: CitaUncheckedCreateNestedManyWithoutServicioInput
  }

  export type ServicioCreateOrConnectWithoutEspecialidadInput = {
    where: ServicioWhereUniqueInput
    create: XOR<ServicioCreateWithoutEspecialidadInput, ServicioUncheckedCreateWithoutEspecialidadInput>
  }

  export type ServicioCreateManyEspecialidadInputEnvelope = {
    data: ServicioCreateManyEspecialidadInput | ServicioCreateManyEspecialidadInput[]
    skipDuplicates?: boolean
  }

  export type EmpleadoUpsertWithWhereUniqueWithoutEspecialidadInput = {
    where: EmpleadoWhereUniqueInput
    update: XOR<EmpleadoUpdateWithoutEspecialidadInput, EmpleadoUncheckedUpdateWithoutEspecialidadInput>
    create: XOR<EmpleadoCreateWithoutEspecialidadInput, EmpleadoUncheckedCreateWithoutEspecialidadInput>
  }

  export type EmpleadoUpdateWithWhereUniqueWithoutEspecialidadInput = {
    where: EmpleadoWhereUniqueInput
    data: XOR<EmpleadoUpdateWithoutEspecialidadInput, EmpleadoUncheckedUpdateWithoutEspecialidadInput>
  }

  export type EmpleadoUpdateManyWithWhereWithoutEspecialidadInput = {
    where: EmpleadoScalarWhereInput
    data: XOR<EmpleadoUpdateManyMutationInput, EmpleadoUncheckedUpdateManyWithoutEspecialidadInput>
  }

  export type EmpleadoScalarWhereInput = {
    AND?: EmpleadoScalarWhereInput | EmpleadoScalarWhereInput[]
    OR?: EmpleadoScalarWhereInput[]
    NOT?: EmpleadoScalarWhereInput | EmpleadoScalarWhereInput[]
    id?: IntFilter<"Empleado"> | number
    usuarioId?: IntFilter<"Empleado"> | number
    especialidadId?: IntFilter<"Empleado"> | number
    codigoEmpleado?: StringFilter<"Empleado"> | string
    descripcion?: StringNullableFilter<"Empleado"> | string | null
    activo?: BoolFilter<"Empleado"> | boolean
    creadoEn?: DateTimeFilter<"Empleado"> | Date | string
    actualizadoEn?: DateTimeFilter<"Empleado"> | Date | string
  }

  export type ServicioUpsertWithWhereUniqueWithoutEspecialidadInput = {
    where: ServicioWhereUniqueInput
    update: XOR<ServicioUpdateWithoutEspecialidadInput, ServicioUncheckedUpdateWithoutEspecialidadInput>
    create: XOR<ServicioCreateWithoutEspecialidadInput, ServicioUncheckedCreateWithoutEspecialidadInput>
  }

  export type ServicioUpdateWithWhereUniqueWithoutEspecialidadInput = {
    where: ServicioWhereUniqueInput
    data: XOR<ServicioUpdateWithoutEspecialidadInput, ServicioUncheckedUpdateWithoutEspecialidadInput>
  }

  export type ServicioUpdateManyWithWhereWithoutEspecialidadInput = {
    where: ServicioScalarWhereInput
    data: XOR<ServicioUpdateManyMutationInput, ServicioUncheckedUpdateManyWithoutEspecialidadInput>
  }

  export type ServicioScalarWhereInput = {
    AND?: ServicioScalarWhereInput | ServicioScalarWhereInput[]
    OR?: ServicioScalarWhereInput[]
    NOT?: ServicioScalarWhereInput | ServicioScalarWhereInput[]
    id?: IntFilter<"Servicio"> | number
    nombre?: StringFilter<"Servicio"> | string
    descripcion?: StringFilter<"Servicio"> | string
    precioBase?: DecimalFilter<"Servicio"> | Decimal | DecimalJsLike | number | string
    duracionMinutos?: IntFilter<"Servicio"> | number
    imagen?: StringNullableFilter<"Servicio"> | string | null
    activo?: BoolFilter<"Servicio"> | boolean
    especialidadId?: IntFilter<"Servicio"> | number
    creadoEn?: DateTimeFilter<"Servicio"> | Date | string
    actualizadoEn?: DateTimeFilter<"Servicio"> | Date | string
  }

  export type EspecialidadCreateWithoutServiciosInput = {
    nombre: string
    descripcion?: string | null
    activo?: boolean
    empleados?: EmpleadoCreateNestedManyWithoutEspecialidadInput
  }

  export type EspecialidadUncheckedCreateWithoutServiciosInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    activo?: boolean
    empleados?: EmpleadoUncheckedCreateNestedManyWithoutEspecialidadInput
  }

  export type EspecialidadCreateOrConnectWithoutServiciosInput = {
    where: EspecialidadWhereUniqueInput
    create: XOR<EspecialidadCreateWithoutServiciosInput, EspecialidadUncheckedCreateWithoutServiciosInput>
  }

  export type EmpleadoCreateWithoutServiciosInput = {
    codigoEmpleado: string
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutEmpleadoInput
    especialidad: EspecialidadCreateNestedOneWithoutEmpleadosInput
    citas?: CitaCreateNestedManyWithoutEmpleadoInput
    restricciones?: RestriccionHorarioCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoUncheckedCreateWithoutServiciosInput = {
    id?: number
    usuarioId: number
    especialidadId: number
    codigoEmpleado: string
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    citas?: CitaUncheckedCreateNestedManyWithoutEmpleadoInput
    restricciones?: RestriccionHorarioUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoCreateOrConnectWithoutServiciosInput = {
    where: EmpleadoWhereUniqueInput
    create: XOR<EmpleadoCreateWithoutServiciosInput, EmpleadoUncheckedCreateWithoutServiciosInput>
  }

  export type CitaCreateWithoutServicioInput = {
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    duracionMinutos: number
    precioServicio: Decimal | DecimalJsLike | number | string
    costoAdicionales?: Decimal | DecimalJsLike | number | string
    costoTotal: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    motivoCancelacion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    cliente: UsuarioCreateNestedOneWithoutCitasClienteInput
    empleado: EmpleadoCreateNestedOneWithoutCitasInput
    estadoCita: EstadoCitaCreateNestedOneWithoutCitasInput
    creadoPor: UsuarioCreateNestedOneWithoutCitasCreadasInput
    adicionales?: ServicioAdicionalCreateNestedManyWithoutCitasInput
  }

  export type CitaUncheckedCreateWithoutServicioInput = {
    id?: number
    clienteId: number
    empleadoId: number
    estadoCitaId: number
    creadoPorUsuarioId: number
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    duracionMinutos: number
    precioServicio: Decimal | DecimalJsLike | number | string
    costoAdicionales?: Decimal | DecimalJsLike | number | string
    costoTotal: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    motivoCancelacion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    adicionales?: ServicioAdicionalUncheckedCreateNestedManyWithoutCitasInput
  }

  export type CitaCreateOrConnectWithoutServicioInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutServicioInput, CitaUncheckedCreateWithoutServicioInput>
  }

  export type CitaCreateManyServicioInputEnvelope = {
    data: CitaCreateManyServicioInput | CitaCreateManyServicioInput[]
    skipDuplicates?: boolean
  }

  export type EspecialidadUpsertWithoutServiciosInput = {
    update: XOR<EspecialidadUpdateWithoutServiciosInput, EspecialidadUncheckedUpdateWithoutServiciosInput>
    create: XOR<EspecialidadCreateWithoutServiciosInput, EspecialidadUncheckedCreateWithoutServiciosInput>
    where?: EspecialidadWhereInput
  }

  export type EspecialidadUpdateToOneWithWhereWithoutServiciosInput = {
    where?: EspecialidadWhereInput
    data: XOR<EspecialidadUpdateWithoutServiciosInput, EspecialidadUncheckedUpdateWithoutServiciosInput>
  }

  export type EspecialidadUpdateWithoutServiciosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    empleados?: EmpleadoUpdateManyWithoutEspecialidadNestedInput
  }

  export type EspecialidadUncheckedUpdateWithoutServiciosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    empleados?: EmpleadoUncheckedUpdateManyWithoutEspecialidadNestedInput
  }

  export type EmpleadoUpsertWithWhereUniqueWithoutServiciosInput = {
    where: EmpleadoWhereUniqueInput
    update: XOR<EmpleadoUpdateWithoutServiciosInput, EmpleadoUncheckedUpdateWithoutServiciosInput>
    create: XOR<EmpleadoCreateWithoutServiciosInput, EmpleadoUncheckedCreateWithoutServiciosInput>
  }

  export type EmpleadoUpdateWithWhereUniqueWithoutServiciosInput = {
    where: EmpleadoWhereUniqueInput
    data: XOR<EmpleadoUpdateWithoutServiciosInput, EmpleadoUncheckedUpdateWithoutServiciosInput>
  }

  export type EmpleadoUpdateManyWithWhereWithoutServiciosInput = {
    where: EmpleadoScalarWhereInput
    data: XOR<EmpleadoUpdateManyMutationInput, EmpleadoUncheckedUpdateManyWithoutServiciosInput>
  }

  export type CitaUpsertWithWhereUniqueWithoutServicioInput = {
    where: CitaWhereUniqueInput
    update: XOR<CitaUpdateWithoutServicioInput, CitaUncheckedUpdateWithoutServicioInput>
    create: XOR<CitaCreateWithoutServicioInput, CitaUncheckedCreateWithoutServicioInput>
  }

  export type CitaUpdateWithWhereUniqueWithoutServicioInput = {
    where: CitaWhereUniqueInput
    data: XOR<CitaUpdateWithoutServicioInput, CitaUncheckedUpdateWithoutServicioInput>
  }

  export type CitaUpdateManyWithWhereWithoutServicioInput = {
    where: CitaScalarWhereInput
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyWithoutServicioInput>
  }

  export type CitaCreateWithoutAdicionalesInput = {
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    duracionMinutos: number
    precioServicio: Decimal | DecimalJsLike | number | string
    costoAdicionales?: Decimal | DecimalJsLike | number | string
    costoTotal: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    motivoCancelacion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    cliente: UsuarioCreateNestedOneWithoutCitasClienteInput
    empleado: EmpleadoCreateNestedOneWithoutCitasInput
    servicio: ServicioCreateNestedOneWithoutCitasInput
    estadoCita: EstadoCitaCreateNestedOneWithoutCitasInput
    creadoPor: UsuarioCreateNestedOneWithoutCitasCreadasInput
  }

  export type CitaUncheckedCreateWithoutAdicionalesInput = {
    id?: number
    clienteId: number
    empleadoId: number
    servicioId: number
    estadoCitaId: number
    creadoPorUsuarioId: number
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    duracionMinutos: number
    precioServicio: Decimal | DecimalJsLike | number | string
    costoAdicionales?: Decimal | DecimalJsLike | number | string
    costoTotal: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    motivoCancelacion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type CitaCreateOrConnectWithoutAdicionalesInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutAdicionalesInput, CitaUncheckedCreateWithoutAdicionalesInput>
  }

  export type CitaUpsertWithWhereUniqueWithoutAdicionalesInput = {
    where: CitaWhereUniqueInput
    update: XOR<CitaUpdateWithoutAdicionalesInput, CitaUncheckedUpdateWithoutAdicionalesInput>
    create: XOR<CitaCreateWithoutAdicionalesInput, CitaUncheckedCreateWithoutAdicionalesInput>
  }

  export type CitaUpdateWithWhereUniqueWithoutAdicionalesInput = {
    where: CitaWhereUniqueInput
    data: XOR<CitaUpdateWithoutAdicionalesInput, CitaUncheckedUpdateWithoutAdicionalesInput>
  }

  export type CitaUpdateManyWithWhereWithoutAdicionalesInput = {
    where: CitaScalarWhereInput
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyWithoutAdicionalesInput>
  }

  export type UsuarioCreateWithoutEmpleadoInput = {
    nombre: string
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    telefono?: string | null
    passwordHash: string
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    rol: RolCreateNestedOneWithoutUsuariosInput
    citasCliente?: CitaCreateNestedManyWithoutClienteInput
    citasCreadas?: CitaCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioUncheckedCreateWithoutEmpleadoInput = {
    id?: number
    nombre: string
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    telefono?: string | null
    passwordHash: string
    activo?: boolean
    rolId: number
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    citasCliente?: CitaUncheckedCreateNestedManyWithoutClienteInput
    citasCreadas?: CitaUncheckedCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioCreateOrConnectWithoutEmpleadoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEmpleadoInput, UsuarioUncheckedCreateWithoutEmpleadoInput>
  }

  export type EspecialidadCreateWithoutEmpleadosInput = {
    nombre: string
    descripcion?: string | null
    activo?: boolean
    servicios?: ServicioCreateNestedManyWithoutEspecialidadInput
  }

  export type EspecialidadUncheckedCreateWithoutEmpleadosInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    activo?: boolean
    servicios?: ServicioUncheckedCreateNestedManyWithoutEspecialidadInput
  }

  export type EspecialidadCreateOrConnectWithoutEmpleadosInput = {
    where: EspecialidadWhereUniqueInput
    create: XOR<EspecialidadCreateWithoutEmpleadosInput, EspecialidadUncheckedCreateWithoutEmpleadosInput>
  }

  export type ServicioCreateWithoutEmpleadosInput = {
    nombre: string
    descripcion: string
    precioBase: Decimal | DecimalJsLike | number | string
    duracionMinutos: number
    imagen?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    especialidad: EspecialidadCreateNestedOneWithoutServiciosInput
    citas?: CitaCreateNestedManyWithoutServicioInput
  }

  export type ServicioUncheckedCreateWithoutEmpleadosInput = {
    id?: number
    nombre: string
    descripcion: string
    precioBase: Decimal | DecimalJsLike | number | string
    duracionMinutos: number
    imagen?: string | null
    activo?: boolean
    especialidadId: number
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    citas?: CitaUncheckedCreateNestedManyWithoutServicioInput
  }

  export type ServicioCreateOrConnectWithoutEmpleadosInput = {
    where: ServicioWhereUniqueInput
    create: XOR<ServicioCreateWithoutEmpleadosInput, ServicioUncheckedCreateWithoutEmpleadosInput>
  }

  export type CitaCreateWithoutEmpleadoInput = {
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    duracionMinutos: number
    precioServicio: Decimal | DecimalJsLike | number | string
    costoAdicionales?: Decimal | DecimalJsLike | number | string
    costoTotal: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    motivoCancelacion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    cliente: UsuarioCreateNestedOneWithoutCitasClienteInput
    servicio: ServicioCreateNestedOneWithoutCitasInput
    estadoCita: EstadoCitaCreateNestedOneWithoutCitasInput
    creadoPor: UsuarioCreateNestedOneWithoutCitasCreadasInput
    adicionales?: ServicioAdicionalCreateNestedManyWithoutCitasInput
  }

  export type CitaUncheckedCreateWithoutEmpleadoInput = {
    id?: number
    clienteId: number
    servicioId: number
    estadoCitaId: number
    creadoPorUsuarioId: number
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    duracionMinutos: number
    precioServicio: Decimal | DecimalJsLike | number | string
    costoAdicionales?: Decimal | DecimalJsLike | number | string
    costoTotal: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    motivoCancelacion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    adicionales?: ServicioAdicionalUncheckedCreateNestedManyWithoutCitasInput
  }

  export type CitaCreateOrConnectWithoutEmpleadoInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutEmpleadoInput, CitaUncheckedCreateWithoutEmpleadoInput>
  }

  export type CitaCreateManyEmpleadoInputEnvelope = {
    data: CitaCreateManyEmpleadoInput | CitaCreateManyEmpleadoInput[]
    skipDuplicates?: boolean
  }

  export type RestriccionHorarioCreateWithoutEmpleadoInput = {
    fecha: Date | string
    horaInicio?: Date | string | null
    horaFin?: Date | string | null
    todoElDia?: boolean
    motivo: string
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    tipoRestriccion: TipoRestriccionHorarioCreateNestedOneWithoutRestriccionesInput
  }

  export type RestriccionHorarioUncheckedCreateWithoutEmpleadoInput = {
    id?: number
    tipoRestriccionId: number
    fecha: Date | string
    horaInicio?: Date | string | null
    horaFin?: Date | string | null
    todoElDia?: boolean
    motivo: string
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type RestriccionHorarioCreateOrConnectWithoutEmpleadoInput = {
    where: RestriccionHorarioWhereUniqueInput
    create: XOR<RestriccionHorarioCreateWithoutEmpleadoInput, RestriccionHorarioUncheckedCreateWithoutEmpleadoInput>
  }

  export type RestriccionHorarioCreateManyEmpleadoInputEnvelope = {
    data: RestriccionHorarioCreateManyEmpleadoInput | RestriccionHorarioCreateManyEmpleadoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutEmpleadoInput = {
    update: XOR<UsuarioUpdateWithoutEmpleadoInput, UsuarioUncheckedUpdateWithoutEmpleadoInput>
    create: XOR<UsuarioCreateWithoutEmpleadoInput, UsuarioUncheckedCreateWithoutEmpleadoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutEmpleadoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutEmpleadoInput, UsuarioUncheckedUpdateWithoutEmpleadoInput>
  }

  export type UsuarioUpdateWithoutEmpleadoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    citasCliente?: CitaUpdateManyWithoutClienteNestedInput
    citasCreadas?: CitaUpdateManyWithoutCreadoPorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutEmpleadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    rolId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    citasCliente?: CitaUncheckedUpdateManyWithoutClienteNestedInput
    citasCreadas?: CitaUncheckedUpdateManyWithoutCreadoPorNestedInput
  }

  export type EspecialidadUpsertWithoutEmpleadosInput = {
    update: XOR<EspecialidadUpdateWithoutEmpleadosInput, EspecialidadUncheckedUpdateWithoutEmpleadosInput>
    create: XOR<EspecialidadCreateWithoutEmpleadosInput, EspecialidadUncheckedCreateWithoutEmpleadosInput>
    where?: EspecialidadWhereInput
  }

  export type EspecialidadUpdateToOneWithWhereWithoutEmpleadosInput = {
    where?: EspecialidadWhereInput
    data: XOR<EspecialidadUpdateWithoutEmpleadosInput, EspecialidadUncheckedUpdateWithoutEmpleadosInput>
  }

  export type EspecialidadUpdateWithoutEmpleadosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    servicios?: ServicioUpdateManyWithoutEspecialidadNestedInput
  }

  export type EspecialidadUncheckedUpdateWithoutEmpleadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    servicios?: ServicioUncheckedUpdateManyWithoutEspecialidadNestedInput
  }

  export type ServicioUpsertWithWhereUniqueWithoutEmpleadosInput = {
    where: ServicioWhereUniqueInput
    update: XOR<ServicioUpdateWithoutEmpleadosInput, ServicioUncheckedUpdateWithoutEmpleadosInput>
    create: XOR<ServicioCreateWithoutEmpleadosInput, ServicioUncheckedCreateWithoutEmpleadosInput>
  }

  export type ServicioUpdateWithWhereUniqueWithoutEmpleadosInput = {
    where: ServicioWhereUniqueInput
    data: XOR<ServicioUpdateWithoutEmpleadosInput, ServicioUncheckedUpdateWithoutEmpleadosInput>
  }

  export type ServicioUpdateManyWithWhereWithoutEmpleadosInput = {
    where: ServicioScalarWhereInput
    data: XOR<ServicioUpdateManyMutationInput, ServicioUncheckedUpdateManyWithoutEmpleadosInput>
  }

  export type CitaUpsertWithWhereUniqueWithoutEmpleadoInput = {
    where: CitaWhereUniqueInput
    update: XOR<CitaUpdateWithoutEmpleadoInput, CitaUncheckedUpdateWithoutEmpleadoInput>
    create: XOR<CitaCreateWithoutEmpleadoInput, CitaUncheckedCreateWithoutEmpleadoInput>
  }

  export type CitaUpdateWithWhereUniqueWithoutEmpleadoInput = {
    where: CitaWhereUniqueInput
    data: XOR<CitaUpdateWithoutEmpleadoInput, CitaUncheckedUpdateWithoutEmpleadoInput>
  }

  export type CitaUpdateManyWithWhereWithoutEmpleadoInput = {
    where: CitaScalarWhereInput
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyWithoutEmpleadoInput>
  }

  export type RestriccionHorarioUpsertWithWhereUniqueWithoutEmpleadoInput = {
    where: RestriccionHorarioWhereUniqueInput
    update: XOR<RestriccionHorarioUpdateWithoutEmpleadoInput, RestriccionHorarioUncheckedUpdateWithoutEmpleadoInput>
    create: XOR<RestriccionHorarioCreateWithoutEmpleadoInput, RestriccionHorarioUncheckedCreateWithoutEmpleadoInput>
  }

  export type RestriccionHorarioUpdateWithWhereUniqueWithoutEmpleadoInput = {
    where: RestriccionHorarioWhereUniqueInput
    data: XOR<RestriccionHorarioUpdateWithoutEmpleadoInput, RestriccionHorarioUncheckedUpdateWithoutEmpleadoInput>
  }

  export type RestriccionHorarioUpdateManyWithWhereWithoutEmpleadoInput = {
    where: RestriccionHorarioScalarWhereInput
    data: XOR<RestriccionHorarioUpdateManyMutationInput, RestriccionHorarioUncheckedUpdateManyWithoutEmpleadoInput>
  }

  export type RestriccionHorarioScalarWhereInput = {
    AND?: RestriccionHorarioScalarWhereInput | RestriccionHorarioScalarWhereInput[]
    OR?: RestriccionHorarioScalarWhereInput[]
    NOT?: RestriccionHorarioScalarWhereInput | RestriccionHorarioScalarWhereInput[]
    id?: IntFilter<"RestriccionHorario"> | number
    tipoRestriccionId?: IntFilter<"RestriccionHorario"> | number
    empleadoId?: IntNullableFilter<"RestriccionHorario"> | number | null
    fecha?: DateTimeFilter<"RestriccionHorario"> | Date | string
    horaInicio?: DateTimeNullableFilter<"RestriccionHorario"> | Date | string | null
    horaFin?: DateTimeNullableFilter<"RestriccionHorario"> | Date | string | null
    todoElDia?: BoolFilter<"RestriccionHorario"> | boolean
    motivo?: StringFilter<"RestriccionHorario"> | string
    activo?: BoolFilter<"RestriccionHorario"> | boolean
    creadoEn?: DateTimeFilter<"RestriccionHorario"> | Date | string
    actualizadoEn?: DateTimeFilter<"RestriccionHorario"> | Date | string
  }

  export type CitaCreateWithoutEstadoCitaInput = {
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    duracionMinutos: number
    precioServicio: Decimal | DecimalJsLike | number | string
    costoAdicionales?: Decimal | DecimalJsLike | number | string
    costoTotal: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    motivoCancelacion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    cliente: UsuarioCreateNestedOneWithoutCitasClienteInput
    empleado: EmpleadoCreateNestedOneWithoutCitasInput
    servicio: ServicioCreateNestedOneWithoutCitasInput
    creadoPor: UsuarioCreateNestedOneWithoutCitasCreadasInput
    adicionales?: ServicioAdicionalCreateNestedManyWithoutCitasInput
  }

  export type CitaUncheckedCreateWithoutEstadoCitaInput = {
    id?: number
    clienteId: number
    empleadoId: number
    servicioId: number
    creadoPorUsuarioId: number
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    duracionMinutos: number
    precioServicio: Decimal | DecimalJsLike | number | string
    costoAdicionales?: Decimal | DecimalJsLike | number | string
    costoTotal: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    motivoCancelacion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    adicionales?: ServicioAdicionalUncheckedCreateNestedManyWithoutCitasInput
  }

  export type CitaCreateOrConnectWithoutEstadoCitaInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutEstadoCitaInput, CitaUncheckedCreateWithoutEstadoCitaInput>
  }

  export type CitaCreateManyEstadoCitaInputEnvelope = {
    data: CitaCreateManyEstadoCitaInput | CitaCreateManyEstadoCitaInput[]
    skipDuplicates?: boolean
  }

  export type CitaUpsertWithWhereUniqueWithoutEstadoCitaInput = {
    where: CitaWhereUniqueInput
    update: XOR<CitaUpdateWithoutEstadoCitaInput, CitaUncheckedUpdateWithoutEstadoCitaInput>
    create: XOR<CitaCreateWithoutEstadoCitaInput, CitaUncheckedCreateWithoutEstadoCitaInput>
  }

  export type CitaUpdateWithWhereUniqueWithoutEstadoCitaInput = {
    where: CitaWhereUniqueInput
    data: XOR<CitaUpdateWithoutEstadoCitaInput, CitaUncheckedUpdateWithoutEstadoCitaInput>
  }

  export type CitaUpdateManyWithWhereWithoutEstadoCitaInput = {
    where: CitaScalarWhereInput
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyWithoutEstadoCitaInput>
  }

  export type HorarioAtencionCreateWithoutDiaSemanaInput = {
    horaInicio: Date | string
    horaFin: Date | string
    activo?: boolean
  }

  export type HorarioAtencionUncheckedCreateWithoutDiaSemanaInput = {
    id?: number
    horaInicio: Date | string
    horaFin: Date | string
    activo?: boolean
  }

  export type HorarioAtencionCreateOrConnectWithoutDiaSemanaInput = {
    where: HorarioAtencionWhereUniqueInput
    create: XOR<HorarioAtencionCreateWithoutDiaSemanaInput, HorarioAtencionUncheckedCreateWithoutDiaSemanaInput>
  }

  export type HorarioAtencionCreateManyDiaSemanaInputEnvelope = {
    data: HorarioAtencionCreateManyDiaSemanaInput | HorarioAtencionCreateManyDiaSemanaInput[]
    skipDuplicates?: boolean
  }

  export type HorarioAtencionUpsertWithWhereUniqueWithoutDiaSemanaInput = {
    where: HorarioAtencionWhereUniqueInput
    update: XOR<HorarioAtencionUpdateWithoutDiaSemanaInput, HorarioAtencionUncheckedUpdateWithoutDiaSemanaInput>
    create: XOR<HorarioAtencionCreateWithoutDiaSemanaInput, HorarioAtencionUncheckedCreateWithoutDiaSemanaInput>
  }

  export type HorarioAtencionUpdateWithWhereUniqueWithoutDiaSemanaInput = {
    where: HorarioAtencionWhereUniqueInput
    data: XOR<HorarioAtencionUpdateWithoutDiaSemanaInput, HorarioAtencionUncheckedUpdateWithoutDiaSemanaInput>
  }

  export type HorarioAtencionUpdateManyWithWhereWithoutDiaSemanaInput = {
    where: HorarioAtencionScalarWhereInput
    data: XOR<HorarioAtencionUpdateManyMutationInput, HorarioAtencionUncheckedUpdateManyWithoutDiaSemanaInput>
  }

  export type HorarioAtencionScalarWhereInput = {
    AND?: HorarioAtencionScalarWhereInput | HorarioAtencionScalarWhereInput[]
    OR?: HorarioAtencionScalarWhereInput[]
    NOT?: HorarioAtencionScalarWhereInput | HorarioAtencionScalarWhereInput[]
    id?: IntFilter<"HorarioAtencion"> | number
    diaSemanaId?: IntFilter<"HorarioAtencion"> | number
    horaInicio?: DateTimeFilter<"HorarioAtencion"> | Date | string
    horaFin?: DateTimeFilter<"HorarioAtencion"> | Date | string
    activo?: BoolFilter<"HorarioAtencion"> | boolean
  }

  export type DiaSemanaCreateWithoutHorariosInput = {
    nombre: string
    numeroOrden: number
  }

  export type DiaSemanaUncheckedCreateWithoutHorariosInput = {
    id?: number
    nombre: string
    numeroOrden: number
  }

  export type DiaSemanaCreateOrConnectWithoutHorariosInput = {
    where: DiaSemanaWhereUniqueInput
    create: XOR<DiaSemanaCreateWithoutHorariosInput, DiaSemanaUncheckedCreateWithoutHorariosInput>
  }

  export type DiaSemanaUpsertWithoutHorariosInput = {
    update: XOR<DiaSemanaUpdateWithoutHorariosInput, DiaSemanaUncheckedUpdateWithoutHorariosInput>
    create: XOR<DiaSemanaCreateWithoutHorariosInput, DiaSemanaUncheckedCreateWithoutHorariosInput>
    where?: DiaSemanaWhereInput
  }

  export type DiaSemanaUpdateToOneWithWhereWithoutHorariosInput = {
    where?: DiaSemanaWhereInput
    data: XOR<DiaSemanaUpdateWithoutHorariosInput, DiaSemanaUncheckedUpdateWithoutHorariosInput>
  }

  export type DiaSemanaUpdateWithoutHorariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    numeroOrden?: IntFieldUpdateOperationsInput | number
  }

  export type DiaSemanaUncheckedUpdateWithoutHorariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    numeroOrden?: IntFieldUpdateOperationsInput | number
  }

  export type RestriccionHorarioCreateWithoutTipoRestriccionInput = {
    fecha: Date | string
    horaInicio?: Date | string | null
    horaFin?: Date | string | null
    todoElDia?: boolean
    motivo: string
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    empleado?: EmpleadoCreateNestedOneWithoutRestriccionesInput
  }

  export type RestriccionHorarioUncheckedCreateWithoutTipoRestriccionInput = {
    id?: number
    empleadoId?: number | null
    fecha: Date | string
    horaInicio?: Date | string | null
    horaFin?: Date | string | null
    todoElDia?: boolean
    motivo: string
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type RestriccionHorarioCreateOrConnectWithoutTipoRestriccionInput = {
    where: RestriccionHorarioWhereUniqueInput
    create: XOR<RestriccionHorarioCreateWithoutTipoRestriccionInput, RestriccionHorarioUncheckedCreateWithoutTipoRestriccionInput>
  }

  export type RestriccionHorarioCreateManyTipoRestriccionInputEnvelope = {
    data: RestriccionHorarioCreateManyTipoRestriccionInput | RestriccionHorarioCreateManyTipoRestriccionInput[]
    skipDuplicates?: boolean
  }

  export type RestriccionHorarioUpsertWithWhereUniqueWithoutTipoRestriccionInput = {
    where: RestriccionHorarioWhereUniqueInput
    update: XOR<RestriccionHorarioUpdateWithoutTipoRestriccionInput, RestriccionHorarioUncheckedUpdateWithoutTipoRestriccionInput>
    create: XOR<RestriccionHorarioCreateWithoutTipoRestriccionInput, RestriccionHorarioUncheckedCreateWithoutTipoRestriccionInput>
  }

  export type RestriccionHorarioUpdateWithWhereUniqueWithoutTipoRestriccionInput = {
    where: RestriccionHorarioWhereUniqueInput
    data: XOR<RestriccionHorarioUpdateWithoutTipoRestriccionInput, RestriccionHorarioUncheckedUpdateWithoutTipoRestriccionInput>
  }

  export type RestriccionHorarioUpdateManyWithWhereWithoutTipoRestriccionInput = {
    where: RestriccionHorarioScalarWhereInput
    data: XOR<RestriccionHorarioUpdateManyMutationInput, RestriccionHorarioUncheckedUpdateManyWithoutTipoRestriccionInput>
  }

  export type TipoRestriccionHorarioCreateWithoutRestriccionesInput = {
    nombre: string
    descripcion?: string | null
  }

  export type TipoRestriccionHorarioUncheckedCreateWithoutRestriccionesInput = {
    id?: number
    nombre: string
    descripcion?: string | null
  }

  export type TipoRestriccionHorarioCreateOrConnectWithoutRestriccionesInput = {
    where: TipoRestriccionHorarioWhereUniqueInput
    create: XOR<TipoRestriccionHorarioCreateWithoutRestriccionesInput, TipoRestriccionHorarioUncheckedCreateWithoutRestriccionesInput>
  }

  export type EmpleadoCreateWithoutRestriccionesInput = {
    codigoEmpleado: string
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutEmpleadoInput
    especialidad: EspecialidadCreateNestedOneWithoutEmpleadosInput
    servicios?: ServicioCreateNestedManyWithoutEmpleadosInput
    citas?: CitaCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoUncheckedCreateWithoutRestriccionesInput = {
    id?: number
    usuarioId: number
    especialidadId: number
    codigoEmpleado: string
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    servicios?: ServicioUncheckedCreateNestedManyWithoutEmpleadosInput
    citas?: CitaUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoCreateOrConnectWithoutRestriccionesInput = {
    where: EmpleadoWhereUniqueInput
    create: XOR<EmpleadoCreateWithoutRestriccionesInput, EmpleadoUncheckedCreateWithoutRestriccionesInput>
  }

  export type TipoRestriccionHorarioUpsertWithoutRestriccionesInput = {
    update: XOR<TipoRestriccionHorarioUpdateWithoutRestriccionesInput, TipoRestriccionHorarioUncheckedUpdateWithoutRestriccionesInput>
    create: XOR<TipoRestriccionHorarioCreateWithoutRestriccionesInput, TipoRestriccionHorarioUncheckedCreateWithoutRestriccionesInput>
    where?: TipoRestriccionHorarioWhereInput
  }

  export type TipoRestriccionHorarioUpdateToOneWithWhereWithoutRestriccionesInput = {
    where?: TipoRestriccionHorarioWhereInput
    data: XOR<TipoRestriccionHorarioUpdateWithoutRestriccionesInput, TipoRestriccionHorarioUncheckedUpdateWithoutRestriccionesInput>
  }

  export type TipoRestriccionHorarioUpdateWithoutRestriccionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TipoRestriccionHorarioUncheckedUpdateWithoutRestriccionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmpleadoUpsertWithoutRestriccionesInput = {
    update: XOR<EmpleadoUpdateWithoutRestriccionesInput, EmpleadoUncheckedUpdateWithoutRestriccionesInput>
    create: XOR<EmpleadoCreateWithoutRestriccionesInput, EmpleadoUncheckedCreateWithoutRestriccionesInput>
    where?: EmpleadoWhereInput
  }

  export type EmpleadoUpdateToOneWithWhereWithoutRestriccionesInput = {
    where?: EmpleadoWhereInput
    data: XOR<EmpleadoUpdateWithoutRestriccionesInput, EmpleadoUncheckedUpdateWithoutRestriccionesInput>
  }

  export type EmpleadoUpdateWithoutRestriccionesInput = {
    codigoEmpleado?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutEmpleadoNestedInput
    especialidad?: EspecialidadUpdateOneRequiredWithoutEmpleadosNestedInput
    servicios?: ServicioUpdateManyWithoutEmpleadosNestedInput
    citas?: CitaUpdateManyWithoutEmpleadoNestedInput
  }

  export type EmpleadoUncheckedUpdateWithoutRestriccionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    especialidadId?: IntFieldUpdateOperationsInput | number
    codigoEmpleado?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    servicios?: ServicioUncheckedUpdateManyWithoutEmpleadosNestedInput
    citas?: CitaUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type UsuarioCreateWithoutCitasClienteInput = {
    nombre: string
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    telefono?: string | null
    passwordHash: string
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    rol: RolCreateNestedOneWithoutUsuariosInput
    empleado?: EmpleadoCreateNestedOneWithoutUsuarioInput
    citasCreadas?: CitaCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioUncheckedCreateWithoutCitasClienteInput = {
    id?: number
    nombre: string
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    telefono?: string | null
    passwordHash: string
    activo?: boolean
    rolId: number
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    empleado?: EmpleadoUncheckedCreateNestedOneWithoutUsuarioInput
    citasCreadas?: CitaUncheckedCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioCreateOrConnectWithoutCitasClienteInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCitasClienteInput, UsuarioUncheckedCreateWithoutCitasClienteInput>
  }

  export type EmpleadoCreateWithoutCitasInput = {
    codigoEmpleado: string
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutEmpleadoInput
    especialidad: EspecialidadCreateNestedOneWithoutEmpleadosInput
    servicios?: ServicioCreateNestedManyWithoutEmpleadosInput
    restricciones?: RestriccionHorarioCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoUncheckedCreateWithoutCitasInput = {
    id?: number
    usuarioId: number
    especialidadId: number
    codigoEmpleado: string
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    servicios?: ServicioUncheckedCreateNestedManyWithoutEmpleadosInput
    restricciones?: RestriccionHorarioUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoCreateOrConnectWithoutCitasInput = {
    where: EmpleadoWhereUniqueInput
    create: XOR<EmpleadoCreateWithoutCitasInput, EmpleadoUncheckedCreateWithoutCitasInput>
  }

  export type ServicioCreateWithoutCitasInput = {
    nombre: string
    descripcion: string
    precioBase: Decimal | DecimalJsLike | number | string
    duracionMinutos: number
    imagen?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    especialidad: EspecialidadCreateNestedOneWithoutServiciosInput
    empleados?: EmpleadoCreateNestedManyWithoutServiciosInput
  }

  export type ServicioUncheckedCreateWithoutCitasInput = {
    id?: number
    nombre: string
    descripcion: string
    precioBase: Decimal | DecimalJsLike | number | string
    duracionMinutos: number
    imagen?: string | null
    activo?: boolean
    especialidadId: number
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    empleados?: EmpleadoUncheckedCreateNestedManyWithoutServiciosInput
  }

  export type ServicioCreateOrConnectWithoutCitasInput = {
    where: ServicioWhereUniqueInput
    create: XOR<ServicioCreateWithoutCitasInput, ServicioUncheckedCreateWithoutCitasInput>
  }

  export type EstadoCitaCreateWithoutCitasInput = {
    nombre: string
    descripcion?: string | null
    bloqueaDisponibilidad?: boolean
    permiteCancelacionCliente?: boolean
    permiteEdicion?: boolean
    color?: string | null
    orden?: number | null
    activo?: boolean
  }

  export type EstadoCitaUncheckedCreateWithoutCitasInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    bloqueaDisponibilidad?: boolean
    permiteCancelacionCliente?: boolean
    permiteEdicion?: boolean
    color?: string | null
    orden?: number | null
    activo?: boolean
  }

  export type EstadoCitaCreateOrConnectWithoutCitasInput = {
    where: EstadoCitaWhereUniqueInput
    create: XOR<EstadoCitaCreateWithoutCitasInput, EstadoCitaUncheckedCreateWithoutCitasInput>
  }

  export type UsuarioCreateWithoutCitasCreadasInput = {
    nombre: string
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    telefono?: string | null
    passwordHash: string
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    rol: RolCreateNestedOneWithoutUsuariosInput
    empleado?: EmpleadoCreateNestedOneWithoutUsuarioInput
    citasCliente?: CitaCreateNestedManyWithoutClienteInput
  }

  export type UsuarioUncheckedCreateWithoutCitasCreadasInput = {
    id?: number
    nombre: string
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    telefono?: string | null
    passwordHash: string
    activo?: boolean
    rolId: number
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    empleado?: EmpleadoUncheckedCreateNestedOneWithoutUsuarioInput
    citasCliente?: CitaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type UsuarioCreateOrConnectWithoutCitasCreadasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCitasCreadasInput, UsuarioUncheckedCreateWithoutCitasCreadasInput>
  }

  export type ServicioAdicionalCreateWithoutCitasInput = {
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ServicioAdicionalUncheckedCreateWithoutCitasInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ServicioAdicionalCreateOrConnectWithoutCitasInput = {
    where: ServicioAdicionalWhereUniqueInput
    create: XOR<ServicioAdicionalCreateWithoutCitasInput, ServicioAdicionalUncheckedCreateWithoutCitasInput>
  }

  export type UsuarioUpsertWithoutCitasClienteInput = {
    update: XOR<UsuarioUpdateWithoutCitasClienteInput, UsuarioUncheckedUpdateWithoutCitasClienteInput>
    create: XOR<UsuarioCreateWithoutCitasClienteInput, UsuarioUncheckedCreateWithoutCitasClienteInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCitasClienteInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCitasClienteInput, UsuarioUncheckedUpdateWithoutCitasClienteInput>
  }

  export type UsuarioUpdateWithoutCitasClienteInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    empleado?: EmpleadoUpdateOneWithoutUsuarioNestedInput
    citasCreadas?: CitaUpdateManyWithoutCreadoPorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCitasClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    rolId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    empleado?: EmpleadoUncheckedUpdateOneWithoutUsuarioNestedInput
    citasCreadas?: CitaUncheckedUpdateManyWithoutCreadoPorNestedInput
  }

  export type EmpleadoUpsertWithoutCitasInput = {
    update: XOR<EmpleadoUpdateWithoutCitasInput, EmpleadoUncheckedUpdateWithoutCitasInput>
    create: XOR<EmpleadoCreateWithoutCitasInput, EmpleadoUncheckedCreateWithoutCitasInput>
    where?: EmpleadoWhereInput
  }

  export type EmpleadoUpdateToOneWithWhereWithoutCitasInput = {
    where?: EmpleadoWhereInput
    data: XOR<EmpleadoUpdateWithoutCitasInput, EmpleadoUncheckedUpdateWithoutCitasInput>
  }

  export type EmpleadoUpdateWithoutCitasInput = {
    codigoEmpleado?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutEmpleadoNestedInput
    especialidad?: EspecialidadUpdateOneRequiredWithoutEmpleadosNestedInput
    servicios?: ServicioUpdateManyWithoutEmpleadosNestedInput
    restricciones?: RestriccionHorarioUpdateManyWithoutEmpleadoNestedInput
  }

  export type EmpleadoUncheckedUpdateWithoutCitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    especialidadId?: IntFieldUpdateOperationsInput | number
    codigoEmpleado?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    servicios?: ServicioUncheckedUpdateManyWithoutEmpleadosNestedInput
    restricciones?: RestriccionHorarioUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type ServicioUpsertWithoutCitasInput = {
    update: XOR<ServicioUpdateWithoutCitasInput, ServicioUncheckedUpdateWithoutCitasInput>
    create: XOR<ServicioCreateWithoutCitasInput, ServicioUncheckedCreateWithoutCitasInput>
    where?: ServicioWhereInput
  }

  export type ServicioUpdateToOneWithWhereWithoutCitasInput = {
    where?: ServicioWhereInput
    data: XOR<ServicioUpdateWithoutCitasInput, ServicioUncheckedUpdateWithoutCitasInput>
  }

  export type ServicioUpdateWithoutCitasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precioBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    especialidad?: EspecialidadUpdateOneRequiredWithoutServiciosNestedInput
    empleados?: EmpleadoUpdateManyWithoutServiciosNestedInput
  }

  export type ServicioUncheckedUpdateWithoutCitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precioBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    especialidadId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    empleados?: EmpleadoUncheckedUpdateManyWithoutServiciosNestedInput
  }

  export type EstadoCitaUpsertWithoutCitasInput = {
    update: XOR<EstadoCitaUpdateWithoutCitasInput, EstadoCitaUncheckedUpdateWithoutCitasInput>
    create: XOR<EstadoCitaCreateWithoutCitasInput, EstadoCitaUncheckedCreateWithoutCitasInput>
    where?: EstadoCitaWhereInput
  }

  export type EstadoCitaUpdateToOneWithWhereWithoutCitasInput = {
    where?: EstadoCitaWhereInput
    data: XOR<EstadoCitaUpdateWithoutCitasInput, EstadoCitaUncheckedUpdateWithoutCitasInput>
  }

  export type EstadoCitaUpdateWithoutCitasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    bloqueaDisponibilidad?: BoolFieldUpdateOperationsInput | boolean
    permiteCancelacionCliente?: BoolFieldUpdateOperationsInput | boolean
    permiteEdicion?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    orden?: NullableIntFieldUpdateOperationsInput | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EstadoCitaUncheckedUpdateWithoutCitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    bloqueaDisponibilidad?: BoolFieldUpdateOperationsInput | boolean
    permiteCancelacionCliente?: BoolFieldUpdateOperationsInput | boolean
    permiteEdicion?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    orden?: NullableIntFieldUpdateOperationsInput | number | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUpsertWithoutCitasCreadasInput = {
    update: XOR<UsuarioUpdateWithoutCitasCreadasInput, UsuarioUncheckedUpdateWithoutCitasCreadasInput>
    create: XOR<UsuarioCreateWithoutCitasCreadasInput, UsuarioUncheckedCreateWithoutCitasCreadasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCitasCreadasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCitasCreadasInput, UsuarioUncheckedUpdateWithoutCitasCreadasInput>
  }

  export type UsuarioUpdateWithoutCitasCreadasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    empleado?: EmpleadoUpdateOneWithoutUsuarioNestedInput
    citasCliente?: CitaUpdateManyWithoutClienteNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCitasCreadasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    rolId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    empleado?: EmpleadoUncheckedUpdateOneWithoutUsuarioNestedInput
    citasCliente?: CitaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ServicioAdicionalUpsertWithWhereUniqueWithoutCitasInput = {
    where: ServicioAdicionalWhereUniqueInput
    update: XOR<ServicioAdicionalUpdateWithoutCitasInput, ServicioAdicionalUncheckedUpdateWithoutCitasInput>
    create: XOR<ServicioAdicionalCreateWithoutCitasInput, ServicioAdicionalUncheckedCreateWithoutCitasInput>
  }

  export type ServicioAdicionalUpdateWithWhereUniqueWithoutCitasInput = {
    where: ServicioAdicionalWhereUniqueInput
    data: XOR<ServicioAdicionalUpdateWithoutCitasInput, ServicioAdicionalUncheckedUpdateWithoutCitasInput>
  }

  export type ServicioAdicionalUpdateManyWithWhereWithoutCitasInput = {
    where: ServicioAdicionalScalarWhereInput
    data: XOR<ServicioAdicionalUpdateManyMutationInput, ServicioAdicionalUncheckedUpdateManyWithoutCitasInput>
  }

  export type ServicioAdicionalScalarWhereInput = {
    AND?: ServicioAdicionalScalarWhereInput | ServicioAdicionalScalarWhereInput[]
    OR?: ServicioAdicionalScalarWhereInput[]
    NOT?: ServicioAdicionalScalarWhereInput | ServicioAdicionalScalarWhereInput[]
    id?: IntFilter<"ServicioAdicional"> | number
    nombre?: StringFilter<"ServicioAdicional"> | string
    descripcion?: StringFilter<"ServicioAdicional"> | string
    precio?: DecimalFilter<"ServicioAdicional"> | Decimal | DecimalJsLike | number | string
    activo?: BoolFilter<"ServicioAdicional"> | boolean
    creadoEn?: DateTimeFilter<"ServicioAdicional"> | Date | string
    actualizadoEn?: DateTimeFilter<"ServicioAdicional"> | Date | string
  }

  export type UsuarioCreateManyRolInput = {
    id?: number
    nombre: string
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    telefono?: string | null
    passwordHash: string
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type UsuarioUpdateWithoutRolInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    empleado?: EmpleadoUpdateOneWithoutUsuarioNestedInput
    citasCliente?: CitaUpdateManyWithoutClienteNestedInput
    citasCreadas?: CitaUpdateManyWithoutCreadoPorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    empleado?: EmpleadoUncheckedUpdateOneWithoutUsuarioNestedInput
    citasCliente?: CitaUncheckedUpdateManyWithoutClienteNestedInput
    citasCreadas?: CitaUncheckedUpdateManyWithoutCreadoPorNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaCreateManyClienteInput = {
    id?: number
    empleadoId: number
    servicioId: number
    estadoCitaId: number
    creadoPorUsuarioId: number
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    duracionMinutos: number
    precioServicio: Decimal | DecimalJsLike | number | string
    costoAdicionales?: Decimal | DecimalJsLike | number | string
    costoTotal: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    motivoCancelacion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type CitaCreateManyCreadoPorInput = {
    id?: number
    clienteId: number
    empleadoId: number
    servicioId: number
    estadoCitaId: number
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    duracionMinutos: number
    precioServicio: Decimal | DecimalJsLike | number | string
    costoAdicionales?: Decimal | DecimalJsLike | number | string
    costoTotal: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    motivoCancelacion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type CitaUpdateWithoutClienteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    empleado?: EmpleadoUpdateOneRequiredWithoutCitasNestedInput
    servicio?: ServicioUpdateOneRequiredWithoutCitasNestedInput
    estadoCita?: EstadoCitaUpdateOneRequiredWithoutCitasNestedInput
    creadoPor?: UsuarioUpdateOneRequiredWithoutCitasCreadasNestedInput
    adicionales?: ServicioAdicionalUpdateManyWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    servicioId?: IntFieldUpdateOperationsInput | number
    estadoCitaId?: IntFieldUpdateOperationsInput | number
    creadoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    adicionales?: ServicioAdicionalUncheckedUpdateManyWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    servicioId?: IntFieldUpdateOperationsInput | number
    estadoCitaId?: IntFieldUpdateOperationsInput | number
    creadoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaUpdateWithoutCreadoPorInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UsuarioUpdateOneRequiredWithoutCitasClienteNestedInput
    empleado?: EmpleadoUpdateOneRequiredWithoutCitasNestedInput
    servicio?: ServicioUpdateOneRequiredWithoutCitasNestedInput
    estadoCita?: EstadoCitaUpdateOneRequiredWithoutCitasNestedInput
    adicionales?: ServicioAdicionalUpdateManyWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateWithoutCreadoPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    servicioId?: IntFieldUpdateOperationsInput | number
    estadoCitaId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    adicionales?: ServicioAdicionalUncheckedUpdateManyWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateManyWithoutCreadoPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    servicioId?: IntFieldUpdateOperationsInput | number
    estadoCitaId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpleadoCreateManyEspecialidadInput = {
    id?: number
    usuarioId: number
    codigoEmpleado: string
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ServicioCreateManyEspecialidadInput = {
    id?: number
    nombre: string
    descripcion: string
    precioBase: Decimal | DecimalJsLike | number | string
    duracionMinutos: number
    imagen?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type EmpleadoUpdateWithoutEspecialidadInput = {
    codigoEmpleado?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutEmpleadoNestedInput
    servicios?: ServicioUpdateManyWithoutEmpleadosNestedInput
    citas?: CitaUpdateManyWithoutEmpleadoNestedInput
    restricciones?: RestriccionHorarioUpdateManyWithoutEmpleadoNestedInput
  }

  export type EmpleadoUncheckedUpdateWithoutEspecialidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    codigoEmpleado?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    servicios?: ServicioUncheckedUpdateManyWithoutEmpleadosNestedInput
    citas?: CitaUncheckedUpdateManyWithoutEmpleadoNestedInput
    restricciones?: RestriccionHorarioUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type EmpleadoUncheckedUpdateManyWithoutEspecialidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    codigoEmpleado?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicioUpdateWithoutEspecialidadInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precioBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    empleados?: EmpleadoUpdateManyWithoutServiciosNestedInput
    citas?: CitaUpdateManyWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateWithoutEspecialidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precioBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    empleados?: EmpleadoUncheckedUpdateManyWithoutServiciosNestedInput
    citas?: CitaUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateManyWithoutEspecialidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precioBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaCreateManyServicioInput = {
    id?: number
    clienteId: number
    empleadoId: number
    estadoCitaId: number
    creadoPorUsuarioId: number
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    duracionMinutos: number
    precioServicio: Decimal | DecimalJsLike | number | string
    costoAdicionales?: Decimal | DecimalJsLike | number | string
    costoTotal: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    motivoCancelacion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type EmpleadoUpdateWithoutServiciosInput = {
    codigoEmpleado?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutEmpleadoNestedInput
    especialidad?: EspecialidadUpdateOneRequiredWithoutEmpleadosNestedInput
    citas?: CitaUpdateManyWithoutEmpleadoNestedInput
    restricciones?: RestriccionHorarioUpdateManyWithoutEmpleadoNestedInput
  }

  export type EmpleadoUncheckedUpdateWithoutServiciosInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    especialidadId?: IntFieldUpdateOperationsInput | number
    codigoEmpleado?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    citas?: CitaUncheckedUpdateManyWithoutEmpleadoNestedInput
    restricciones?: RestriccionHorarioUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type EmpleadoUncheckedUpdateManyWithoutServiciosInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    especialidadId?: IntFieldUpdateOperationsInput | number
    codigoEmpleado?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaUpdateWithoutServicioInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UsuarioUpdateOneRequiredWithoutCitasClienteNestedInput
    empleado?: EmpleadoUpdateOneRequiredWithoutCitasNestedInput
    estadoCita?: EstadoCitaUpdateOneRequiredWithoutCitasNestedInput
    creadoPor?: UsuarioUpdateOneRequiredWithoutCitasCreadasNestedInput
    adicionales?: ServicioAdicionalUpdateManyWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateWithoutServicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    estadoCitaId?: IntFieldUpdateOperationsInput | number
    creadoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    adicionales?: ServicioAdicionalUncheckedUpdateManyWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateManyWithoutServicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    estadoCitaId?: IntFieldUpdateOperationsInput | number
    creadoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaUpdateWithoutAdicionalesInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UsuarioUpdateOneRequiredWithoutCitasClienteNestedInput
    empleado?: EmpleadoUpdateOneRequiredWithoutCitasNestedInput
    servicio?: ServicioUpdateOneRequiredWithoutCitasNestedInput
    estadoCita?: EstadoCitaUpdateOneRequiredWithoutCitasNestedInput
    creadoPor?: UsuarioUpdateOneRequiredWithoutCitasCreadasNestedInput
  }

  export type CitaUncheckedUpdateWithoutAdicionalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    servicioId?: IntFieldUpdateOperationsInput | number
    estadoCitaId?: IntFieldUpdateOperationsInput | number
    creadoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaUncheckedUpdateManyWithoutAdicionalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    servicioId?: IntFieldUpdateOperationsInput | number
    estadoCitaId?: IntFieldUpdateOperationsInput | number
    creadoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaCreateManyEmpleadoInput = {
    id?: number
    clienteId: number
    servicioId: number
    estadoCitaId: number
    creadoPorUsuarioId: number
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    duracionMinutos: number
    precioServicio: Decimal | DecimalJsLike | number | string
    costoAdicionales?: Decimal | DecimalJsLike | number | string
    costoTotal: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    motivoCancelacion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type RestriccionHorarioCreateManyEmpleadoInput = {
    id?: number
    tipoRestriccionId: number
    fecha: Date | string
    horaInicio?: Date | string | null
    horaFin?: Date | string | null
    todoElDia?: boolean
    motivo: string
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ServicioUpdateWithoutEmpleadosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precioBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    especialidad?: EspecialidadUpdateOneRequiredWithoutServiciosNestedInput
    citas?: CitaUpdateManyWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateWithoutEmpleadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precioBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    especialidadId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    citas?: CitaUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateManyWithoutEmpleadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precioBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    especialidadId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaUpdateWithoutEmpleadoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UsuarioUpdateOneRequiredWithoutCitasClienteNestedInput
    servicio?: ServicioUpdateOneRequiredWithoutCitasNestedInput
    estadoCita?: EstadoCitaUpdateOneRequiredWithoutCitasNestedInput
    creadoPor?: UsuarioUpdateOneRequiredWithoutCitasCreadasNestedInput
    adicionales?: ServicioAdicionalUpdateManyWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateWithoutEmpleadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    servicioId?: IntFieldUpdateOperationsInput | number
    estadoCitaId?: IntFieldUpdateOperationsInput | number
    creadoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    adicionales?: ServicioAdicionalUncheckedUpdateManyWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateManyWithoutEmpleadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    servicioId?: IntFieldUpdateOperationsInput | number
    estadoCitaId?: IntFieldUpdateOperationsInput | number
    creadoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestriccionHorarioUpdateWithoutEmpleadoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    todoElDia?: BoolFieldUpdateOperationsInput | boolean
    motivo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoRestriccion?: TipoRestriccionHorarioUpdateOneRequiredWithoutRestriccionesNestedInput
  }

  export type RestriccionHorarioUncheckedUpdateWithoutEmpleadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoRestriccionId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    todoElDia?: BoolFieldUpdateOperationsInput | boolean
    motivo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestriccionHorarioUncheckedUpdateManyWithoutEmpleadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoRestriccionId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    todoElDia?: BoolFieldUpdateOperationsInput | boolean
    motivo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaCreateManyEstadoCitaInput = {
    id?: number
    clienteId: number
    empleadoId: number
    servicioId: number
    creadoPorUsuarioId: number
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    duracionMinutos: number
    precioServicio: Decimal | DecimalJsLike | number | string
    costoAdicionales?: Decimal | DecimalJsLike | number | string
    costoTotal: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    motivoCancelacion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type CitaUpdateWithoutEstadoCitaInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UsuarioUpdateOneRequiredWithoutCitasClienteNestedInput
    empleado?: EmpleadoUpdateOneRequiredWithoutCitasNestedInput
    servicio?: ServicioUpdateOneRequiredWithoutCitasNestedInput
    creadoPor?: UsuarioUpdateOneRequiredWithoutCitasCreadasNestedInput
    adicionales?: ServicioAdicionalUpdateManyWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateWithoutEstadoCitaInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    servicioId?: IntFieldUpdateOperationsInput | number
    creadoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    adicionales?: ServicioAdicionalUncheckedUpdateManyWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateManyWithoutEstadoCitaInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    servicioId?: IntFieldUpdateOperationsInput | number
    creadoPorUsuarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    duracionMinutos?: IntFieldUpdateOperationsInput | number
    precioServicio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoAdicionales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    motivoCancelacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioAtencionCreateManyDiaSemanaInput = {
    id?: number
    horaInicio: Date | string
    horaFin: Date | string
    activo?: boolean
  }

  export type HorarioAtencionUpdateWithoutDiaSemanaInput = {
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HorarioAtencionUncheckedUpdateWithoutDiaSemanaInput = {
    id?: IntFieldUpdateOperationsInput | number
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HorarioAtencionUncheckedUpdateManyWithoutDiaSemanaInput = {
    id?: IntFieldUpdateOperationsInput | number
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RestriccionHorarioCreateManyTipoRestriccionInput = {
    id?: number
    empleadoId?: number | null
    fecha: Date | string
    horaInicio?: Date | string | null
    horaFin?: Date | string | null
    todoElDia?: boolean
    motivo: string
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type RestriccionHorarioUpdateWithoutTipoRestriccionInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    todoElDia?: BoolFieldUpdateOperationsInput | boolean
    motivo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    empleado?: EmpleadoUpdateOneWithoutRestriccionesNestedInput
  }

  export type RestriccionHorarioUncheckedUpdateWithoutTipoRestriccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoId?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    todoElDia?: BoolFieldUpdateOperationsInput | boolean
    motivo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestriccionHorarioUncheckedUpdateManyWithoutTipoRestriccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoId?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    todoElDia?: BoolFieldUpdateOperationsInput | boolean
    motivo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicioAdicionalUpdateWithoutCitasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicioAdicionalUncheckedUpdateWithoutCitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicioAdicionalUncheckedUpdateManyWithoutCitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
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