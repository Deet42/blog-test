/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Help } from "./help";
import { Params } from "./params";
import { Post } from "./post";

export const protobufPackage = "blog.blog";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetPostRequest {
  id: number;
}

export interface QueryGetPostResponse {
  Post: Post | undefined;
}

export interface QueryAllPostRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPostResponse {
  Post: Post[];
  pagination: PageResponse | undefined;
}

export interface QueryGetHelpRequest {
  id: number;
}

export interface QueryGetHelpResponse {
  Help: Help | undefined;
}

export interface QueryAllHelpRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllHelpResponse {
  Help: Help[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPostRequest(): QueryGetPostRequest {
  return { id: 0 };
}

export const QueryGetPostRequest = {
  encode(message: QueryGetPostRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPostRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetPostRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPostRequest>, I>>(object: I): QueryGetPostRequest {
    const message = createBaseQueryGetPostRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetPostResponse(): QueryGetPostResponse {
  return { Post: undefined };
}

export const QueryGetPostResponse = {
  encode(message: QueryGetPostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Post !== undefined) {
      Post.encode(message.Post, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Post = Post.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPostResponse {
    return { Post: isSet(object.Post) ? Post.fromJSON(object.Post) : undefined };
  },

  toJSON(message: QueryGetPostResponse): unknown {
    const obj: any = {};
    message.Post !== undefined && (obj.Post = message.Post ? Post.toJSON(message.Post) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPostResponse>, I>>(object: I): QueryGetPostResponse {
    const message = createBaseQueryGetPostResponse();
    message.Post = (object.Post !== undefined && object.Post !== null) ? Post.fromPartial(object.Post) : undefined;
    return message;
  },
};

function createBaseQueryAllPostRequest(): QueryAllPostRequest {
  return { pagination: undefined };
}

export const QueryAllPostRequest = {
  encode(message: QueryAllPostRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPostRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPostRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPostRequest>, I>>(object: I): QueryAllPostRequest {
    const message = createBaseQueryAllPostRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPostResponse(): QueryAllPostResponse {
  return { Post: [], pagination: undefined };
}

export const QueryAllPostResponse = {
  encode(message: QueryAllPostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Post) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Post.push(Post.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPostResponse {
    return {
      Post: Array.isArray(object?.Post) ? object.Post.map((e: any) => Post.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPostResponse): unknown {
    const obj: any = {};
    if (message.Post) {
      obj.Post = message.Post.map((e) => e ? Post.toJSON(e) : undefined);
    } else {
      obj.Post = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPostResponse>, I>>(object: I): QueryAllPostResponse {
    const message = createBaseQueryAllPostResponse();
    message.Post = object.Post?.map((e) => Post.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetHelpRequest(): QueryGetHelpRequest {
  return { id: 0 };
}

export const QueryGetHelpRequest = {
  encode(message: QueryGetHelpRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHelpRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHelpRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHelpRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetHelpRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetHelpRequest>, I>>(object: I): QueryGetHelpRequest {
    const message = createBaseQueryGetHelpRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetHelpResponse(): QueryGetHelpResponse {
  return { Help: undefined };
}

export const QueryGetHelpResponse = {
  encode(message: QueryGetHelpResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Help !== undefined) {
      Help.encode(message.Help, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHelpResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHelpResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Help = Help.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHelpResponse {
    return { Help: isSet(object.Help) ? Help.fromJSON(object.Help) : undefined };
  },

  toJSON(message: QueryGetHelpResponse): unknown {
    const obj: any = {};
    message.Help !== undefined && (obj.Help = message.Help ? Help.toJSON(message.Help) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetHelpResponse>, I>>(object: I): QueryGetHelpResponse {
    const message = createBaseQueryGetHelpResponse();
    message.Help = (object.Help !== undefined && object.Help !== null) ? Help.fromPartial(object.Help) : undefined;
    return message;
  },
};

function createBaseQueryAllHelpRequest(): QueryAllHelpRequest {
  return { pagination: undefined };
}

export const QueryAllHelpRequest = {
  encode(message: QueryAllHelpRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllHelpRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHelpRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllHelpRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllHelpRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllHelpRequest>, I>>(object: I): QueryAllHelpRequest {
    const message = createBaseQueryAllHelpRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllHelpResponse(): QueryAllHelpResponse {
  return { Help: [], pagination: undefined };
}

export const QueryAllHelpResponse = {
  encode(message: QueryAllHelpResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Help) {
      Help.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllHelpResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHelpResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Help.push(Help.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllHelpResponse {
    return {
      Help: Array.isArray(object?.Help) ? object.Help.map((e: any) => Help.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllHelpResponse): unknown {
    const obj: any = {};
    if (message.Help) {
      obj.Help = message.Help.map((e) => e ? Help.toJSON(e) : undefined);
    } else {
      obj.Help = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllHelpResponse>, I>>(object: I): QueryAllHelpResponse {
    const message = createBaseQueryAllHelpResponse();
    message.Help = object.Help?.map((e) => Help.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Post items. */
  Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse>;
  PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse>;
  /** Queries a list of Help items. */
  Help(request: QueryGetHelpRequest): Promise<QueryGetHelpResponse>;
  HelpAll(request: QueryAllHelpRequest): Promise<QueryAllHelpResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Post = this.Post.bind(this);
    this.PostAll = this.PostAll.bind(this);
    this.Help = this.Help.bind(this);
    this.HelpAll = this.HelpAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse> {
    const data = QueryGetPostRequest.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Query", "Post", data);
    return promise.then((data) => QueryGetPostResponse.decode(new _m0.Reader(data)));
  }

  PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse> {
    const data = QueryAllPostRequest.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Query", "PostAll", data);
    return promise.then((data) => QueryAllPostResponse.decode(new _m0.Reader(data)));
  }

  Help(request: QueryGetHelpRequest): Promise<QueryGetHelpResponse> {
    const data = QueryGetHelpRequest.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Query", "Help", data);
    return promise.then((data) => QueryGetHelpResponse.decode(new _m0.Reader(data)));
  }

  HelpAll(request: QueryAllHelpRequest): Promise<QueryAllHelpResponse> {
    const data = QueryAllHelpRequest.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Query", "HelpAll", data);
    return promise.then((data) => QueryAllHelpResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
