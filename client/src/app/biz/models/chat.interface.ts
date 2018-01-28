import { Message } from "./message.interface";

export interface Chat {
  id: string;
  messages: Message[];
  photoURL?: string;
  name?: string;
  ownUids: string[];
  isOpen: boolean;
  isPrivate: boolean;
  isManToMan: boolean;
}
