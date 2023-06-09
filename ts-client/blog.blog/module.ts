// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgCreatePost } from "./types/blog/blog/tx";
import { MsgDeleteHelp } from "./types/blog/blog/tx";
import { MsgUpdateHelp } from "./types/blog/blog/tx";
import { MsgCreateHelp } from "./types/blog/blog/tx";
import { MsgDeletePost } from "./types/blog/blog/tx";
import { MsgUpdatePost } from "./types/blog/blog/tx";

import { Help as typeHelp} from "./types"
import { Params as typeParams} from "./types"
import { Post as typePost} from "./types"

export { MsgCreatePost, MsgDeleteHelp, MsgUpdateHelp, MsgCreateHelp, MsgDeletePost, MsgUpdatePost };

type sendMsgCreatePostParams = {
  value: MsgCreatePost,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeleteHelpParams = {
  value: MsgDeleteHelp,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateHelpParams = {
  value: MsgUpdateHelp,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateHelpParams = {
  value: MsgCreateHelp,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeletePostParams = {
  value: MsgDeletePost,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdatePostParams = {
  value: MsgUpdatePost,
  fee?: StdFee,
  memo?: string
};


type msgCreatePostParams = {
  value: MsgCreatePost,
};

type msgDeleteHelpParams = {
  value: MsgDeleteHelp,
};

type msgUpdateHelpParams = {
  value: MsgUpdateHelp,
};

type msgCreateHelpParams = {
  value: MsgCreateHelp,
};

type msgDeletePostParams = {
  value: MsgDeletePost,
};

type msgUpdatePostParams = {
  value: MsgUpdatePost,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgCreatePost({ value, fee, memo }: sendMsgCreatePostParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreatePost: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreatePost({ value: MsgCreatePost.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreatePost: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeleteHelp({ value, fee, memo }: sendMsgDeleteHelpParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteHelp: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteHelp({ value: MsgDeleteHelp.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteHelp: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateHelp({ value, fee, memo }: sendMsgUpdateHelpParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateHelp: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateHelp({ value: MsgUpdateHelp.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateHelp: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateHelp({ value, fee, memo }: sendMsgCreateHelpParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateHelp: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateHelp({ value: MsgCreateHelp.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateHelp: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeletePost({ value, fee, memo }: sendMsgDeletePostParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeletePost: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeletePost({ value: MsgDeletePost.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeletePost: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdatePost({ value, fee, memo }: sendMsgUpdatePostParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdatePost: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdatePost({ value: MsgUpdatePost.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdatePost: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgCreatePost({ value }: msgCreatePostParams): EncodeObject {
			try {
				return { typeUrl: "/blog.blog.MsgCreatePost", value: MsgCreatePost.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreatePost: Could not create message: ' + e.message)
			}
		},
		
		msgDeleteHelp({ value }: msgDeleteHelpParams): EncodeObject {
			try {
				return { typeUrl: "/blog.blog.MsgDeleteHelp", value: MsgDeleteHelp.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteHelp: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateHelp({ value }: msgUpdateHelpParams): EncodeObject {
			try {
				return { typeUrl: "/blog.blog.MsgUpdateHelp", value: MsgUpdateHelp.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateHelp: Could not create message: ' + e.message)
			}
		},
		
		msgCreateHelp({ value }: msgCreateHelpParams): EncodeObject {
			try {
				return { typeUrl: "/blog.blog.MsgCreateHelp", value: MsgCreateHelp.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateHelp: Could not create message: ' + e.message)
			}
		},
		
		msgDeletePost({ value }: msgDeletePostParams): EncodeObject {
			try {
				return { typeUrl: "/blog.blog.MsgDeletePost", value: MsgDeletePost.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeletePost: Could not create message: ' + e.message)
			}
		},
		
		msgUpdatePost({ value }: msgUpdatePostParams): EncodeObject {
			try {
				return { typeUrl: "/blog.blog.MsgUpdatePost", value: MsgUpdatePost.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdatePost: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						Help: getStructure(typeHelp.fromPartial({})),
						Params: getStructure(typeParams.fromPartial({})),
						Post: getStructure(typePost.fromPartial({})),
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			BlogBlog: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;