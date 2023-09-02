export interface TgMessage {
  message_id: number;
  from: MessageFrom;
  chat: Chat;
  date: number;
  reply_to_message: {
    message_id: number;
    from: MessageFrom;
    chat: Chat;
    date: number;
    text: string;
  };
  text: string;
}

export interface Chat {
  id: number;
  title: string;
  type: string;
  all_members_are_administrators: boolean;
}

export interface MessageFrom {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
}
