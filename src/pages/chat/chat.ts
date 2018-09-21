import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Events, Content } from 'ionic-angular';
import { MessageService,ChatMessage } from "../../providers/message/message";
import { ChatService } from '../../providers/chat/chat';
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: ElementRef;
  msgList: any= [];
  responseData:any;
  editorMsg = '';
  showEmojiPicker = false;
  room:any;
  user:any;
  chatRoom:any;
  team:any;
  toUser:any;
  constructor(navParams: NavParams,
              private chatService: MessageService,
              private events: Events,private roomService:ChatService) {

                this.room = navParams.get('room');

                this.toUser = navParams.get('toUser');
                this.team = JSON.parse(localStorage.getItem('team'));

                if(this.room==null&&this.toUser!=null){

                  this.searchPrivateChat(this.toUser.id);
                }else
                if(this.room==null&&this.team!=null){

                  this.searchTeamChatRoom(this.team.id);
                }
                const data = JSON.parse(localStorage.getItem('userData'));
                this.user = data.user;
  }


  searchTeamChatRoom(id){
    console.log('ionViewDidLoad home page');
  
    this.roomService.getTeamChat(id).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        
        console.log("test 200");
        console.log("result", this.responseData.results.result);
        this.room = this.responseData.results.result;
        if(this.room!=null){

          this.getMsg();
        }

      }  else if(this.responseData.statusCode == "403") {
        console.log("unauthorrised");
	
       
      } else {
       
        console.log("error", this.responseData)
      }
      
    }, (err) => {
	
      // Error log
    });

  }

  searchPrivateChat(id){
    console.log('ionViewDidLoad home page');
  
    this.roomService.getPrivateChat(id).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        
        console.log("test 200");
        console.log("result", this.responseData.results.result);
        this.room = this.responseData.results.result;
        if(this.room!=null){

          this.getMsg();
        }

      }  else if(this.responseData.statusCode == "403") {
        console.log("unauthorrised");
	
       
      } else {
       
        console.log("error", this.responseData)
      }
      
    }, (err) => {
	
      // Error log
    });

  }
  ionViewWillLeave() {
    // unsubscribe
    this.events.unsubscribe('chat:received');
  }

  ionViewDidEnter() {
    if(this.room!=null){

      this.getMsg();
    }
    

    // Subscribe to received  new message events
    this.events.subscribe('chat:received', msg => {
      this.pushNewMsg(msg);
    })
  }

  onFocus() {
    this.showEmojiPicker = false;
    this.content.resize();
    this.scrollToBottom();
  }

  switchEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
    if (!this.showEmojiPicker) {
      this.focus();
    } else {
      this.setTextareaScroll();
    }
    this.content.resize();
    this.scrollToBottom();
  }

  getMsg() {
    // Get mock message list
    return this.chatService
    .getAllMessage(this.room.id)
    .subscribe(res => {
      if(res!=null){
      this.msgList = res;
      this.scrollToBottom();
      }
    });
  }

  /**
   * @name sendMsg
   */
  sendMsg() {
    if (!this.editorMsg.trim()) return;

    let newMsg: ChatMessage = {
      room:this.room,
    
      user: this.user,
     
      text: this.editorMsg
    };

    this.pushNewMsg(newMsg);
    this.editorMsg = '';

    if (!this.showEmojiPicker) {
      this.focus();
    }

    this.chatService.addMessage(newMsg)
    .then(() => {
     
    })
  }

  /**
   * @name pushNewMsg
   * @param msg
   */
  pushNewMsg(msg: ChatMessage) {
   
      this.msgList.push(msg);
    
    this.scrollToBottom();
  }



  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }

  private focus() {
    if (this.messageInput && this.messageInput.nativeElement) {
      this.messageInput.nativeElement.focus();
    }
  }

  private setTextareaScroll() {
    const textarea =this.messageInput.nativeElement;
    textarea.scrollTop = textarea.scrollHeight;
  }
}
