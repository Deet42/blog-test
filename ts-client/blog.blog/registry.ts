import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreatePost } from "./types/blog/blog/tx";
import { MsgDeleteHelp } from "./types/blog/blog/tx";
import { MsgUpdateHelp } from "./types/blog/blog/tx";
import { MsgCreateHelp } from "./types/blog/blog/tx";
import { MsgDeletePost } from "./types/blog/blog/tx";
import { MsgUpdatePost } from "./types/blog/blog/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/blog.blog.MsgCreatePost", MsgCreatePost],
    ["/blog.blog.MsgDeleteHelp", MsgDeleteHelp],
    ["/blog.blog.MsgUpdateHelp", MsgUpdateHelp],
    ["/blog.blog.MsgCreateHelp", MsgCreateHelp],
    ["/blog.blog.MsgDeletePost", MsgDeletePost],
    ["/blog.blog.MsgUpdatePost", MsgUpdatePost],
    
];

export { msgTypes }