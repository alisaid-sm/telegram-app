<template>
  <div class="cont-tele" >
      <!-- desktop -->
      <div class="row no-gutters d-sm-flex d-none">
          <div class="col-3 chatlist">
              <div class="head">
                    <h3 class="float-left">Telegram</h3>
                     <b-dropdown size="sm" right class="float-right" variant="link" split-class="text-drdwn" menu-class="drdwn" toggle-class="text-decoration-none" no-caret>
                        <template v-slot:button-content>
                        <img src="../assets/img/icon-click-chatlist.png">
                        </template>
                        <div class="row">
                            <div class="col-2"><img class="pl-4" src="../assets/img/icon-setting.png"></div>
                            <div class="col-10"><b-dropdown-item v-b-toggle.sidebar-no-header>Settings</b-dropdown-item></div>
                            <div class="col-2"><img class="pl-4" src="../assets/img/icon-contact.png"></div>
                            <div class="col-10"><b-dropdown-item v-b-toggle.sidebar-no-header>Contacts</b-dropdown-item></div>
                            <div class="col-2"><img class="pl-4" src="../assets/img/icon-panggil.png"></div>
                            <div class="col-10"><b-dropdown-item v-b-toggle.sidebar-no-header>Calls</b-dropdown-item></div>
                            <div class="col-2"><img class="pl-4" src="../assets/img/icon-save-messege.png"></div>
                            <div class="col-10"><b-dropdown-item v-b-toggle.sidebar-no-header>Save messages</b-dropdown-item></div>
                            <div class="col-2"><img class="pl-4" src="../assets/img/icon-invite-friend.png"></div>
                            <div class="col-10"><b-dropdown-item v-b-toggle.sidebar-no-header>Invite Friends</b-dropdown-item></div>
                            <div class="col-2"><img class="pl-4" src="../assets/img/icon-FAQ.png"></div>
                            <div class="col-10"><b-dropdown-item v-b-toggle.sidebar-no-header>Telegram FAQ</b-dropdown-item></div>
                        </div>
                    </b-dropdown>
                        <b-sidebar id="sidebar-no-header" sidebar-class="w-25" aria-labelledby="sidebar-no-header-title" no-header>
                            <template v-slot:default="{ hide }">
                            <div class="p-3">
                                <img @click="hide" src="../assets/img/backtologin.png">
                                <h4 v-if="upProf !==0" @click="upProf = 0" class="text-danger text-right" >cancel</h4>
                             <h4 class="color-default text-center">{{dataUser.data.username==null? "is not setting": dataUser.data.username}}</h4>
                            <div class="w-100 text-center mt-5">
                                <img v-if="upProf !== 1" width="82px" height="82px" @click="updateProfile(1)" style="border-radius: 30px;" :src="`http://localhost:3000/${dataUser.data.image}`">
                                <b-form-file v-else id="file-small" @keyup.enter="editProfile()" @change="prosesFile($event)" size="sm"></b-form-file>
                                <button v-if="upProf === 1" class="btn color-default" @click="editProfile()" >Change</button>
                                <h4 v-if="upProf !==5" style="border-radius: 30px;" class="font-weight-bold mt-4" @click="upProf=5" >{{dataUser.data.name}}</h4>
                                <div v-else>
                                    <input type="text" @keyup.enter="editProfile()" v-model="profName">
                                </div>
                                <p style="color: #848484;" >{{dataUser.data.username=='' || dataUser.data.username==null? "is not setting": dataUser.data.username}}</p>
                            </div>
                            <div class="phone mt-4">
                                <h4 class="font-weight-bold">Account</h4>
                                <p v-if="upProf !== 2" style="letter-spacing: 1.335px;" @click="updateProfile(2)" class="mb-0">{{dataUser.data.phonenumber=='' || dataUser.data.phonenumber==null? "is not setting": dataUser.data.phonenumber}}</p>
                                <input v-else type="text" @keyup.enter="editProfile()" v-model="profPhone">
                                <p style="color: #7E98DF;">Tap to change phone number</p>
                            </div>
                            <div class="username">
                                <p v-if="upProf !== 3" class="font-weight-bold mb-0" @click="updateProfile(3)">{{dataUser.data.username=='' || dataUser.data.username==null? "tap to setting": dataUser.data.username}}</p>
                                <input v-else type="text" @keyup.enter="editProfile()" v-model="profUsername">
                                <p style="color: #848484;">Username</p>
                            </div>
                            <div class="bio" style="width: 262px;">
                                <p v-if="upProf !== 4" class="font-weight-bold mb-0" @click="updateProfile(4)">{{dataUser.data.bio=='' || dataUser.data.bio==null? "tap to setting": dataUser.data.bio}}</p>
                                <input v-else type="text" @keyup.enter="editProfile()" v-model="profBio">
                                <p style="color: #848484;">Bio</p>
                            </div>
                            <div class="setting">
                                <h4 class="font-weight-bold">Settings</h4>
                                <div class="row">
                                    <div class="col-2">
                                        <img src="../assets/img/lonceng-setting.png">
                                    </div>
                                    <div class="col-10">
                                        <p>Notification and Sounds</p>
                                    </div>
                                    <div class="col-2"><img src="../assets/img/gembok-setting.png"></div>
                                    <div class="col-10"><p>Privaty and Security</p></div>
                                    <div class="col-2"><img src="../assets/img/chart-setting.png"></div>
                                    <div class="col-10"><p>Data and Stronge</p></div>
                                    <div class="col-2"><img src="../assets/img/Chat-setting.png"></div>
                                    <div class="col-10"><p>Chat settings</p></div>
                                    <div class="col-2"><img src="../assets/img/Device-setting.png"></div>
                                    <div class="col-10"><p>Devices</p></div>
                                </div>
                            </div>
                            </div>
                        </template>
                        </b-sidebar>
              </div>
              <div class="search">
                  <div class="input-container">
                    <img src="../assets/img/icon-search.png" class="icon">
                    <input class="input-field" type="text" placeholder="Type your message..." name="usrnm">
                    <img src="../assets/img/icon-plus.png" class="icon">
                 </div>
              </div>
              <div class="filter">
                    <vueCustomScrollbar class="scroll-container">

                    <div class="filter-menu ml-2"><p>All</p></div>
                    <div class="filter-menu filter-menu-active"><p>Important</p></div>
                    <div class="filter-menu"><p>Unread</p></div>
                    <div class="filter-menu"><p>Read</p></div>

                    </vueCustomScrollbar>
              </div>
              <vueCustomScrollbar class="userlist">
                  <div v-for="(item, index) in listUsers" :key="index">
                      <div v-if="dataUser.data.name !== item.name" @click="selectUser(item)">
                          <div class="user">
                        <div class="row">
                          <div class="col-3">
                              <img class="img-fluid" alt="Responsive image" :src="`http://localhost:3000/${item.image}`">
                          </div>
                          <div class="col-9">
                              <div class="float-right clock">15:20</div>
                              <h5>{{item.name}} <img src="../assets/img/icon-lonceng.png"></h5>
                              <div class="float-right unread"><p>1</p></div>
                              <p>Hi, bro! Come to my house!</p>
                          </div>
                            </div>
                        </div>
                      </div>
                  </div>
              </vueCustomScrollbar>
          </div>
          <div class="col-9 chating bg-light">
              <div v-if="userReceiver !== ''">
                  <div class="head p-4 bg-white">
                  <div class="row no-gutters">
                      <div class="col-1"><img style="border-radius: 20px;" :src="`http://localhost:3000/${userReceiver.image}`"></div>
                      <div class="col-9">
                          <h4>{{userReceiver.name}}</h4>
                          <h5 style="color: #7E98DF;">Online</h5>
                      </div>
                      <div class="col-2"><img class="float-right mt-4" src="../assets/img/Profile menu.png"></div>
                  </div>
              </div>
              <vueCustomScrollbar class="chatbox p-5">
                  <div v-for="(item, index) in privateMessages" :key="index">
                      <div v-if="dataUser.data.name !== item.sender" >
                             <img class="mb-2" style="border-radius: 20px;" :src="`http://localhost:3000/${item.image}`">
                             <div class="mb-3 w-25" style="background: #7E98DF;border-radius: 35px 35px 35px 10px; padding:10px;" ><p class="text-white">{{item.message}}</p></div>
                        </div>
                      <div class="w-100 text-right m-0" v-else>
                          <div ><p>{{item.message}}<img class="ml-2" style="border-radius: 20px;" :src="`http://localhost:3000/${item.image}`"></p></div>
                      </div>
                  </div>
              </vueCustomScrollbar>
              <div class="keyup bg-white">
                  <div class="input-container pl-4 mt-4">
                    <input class="input-field" type="text" @keyup.enter="message===''? null : sendMessage()" placeholder="Type your message..." v-model="message" name="usrnm" required>
                    <img src="../assets/img/icon-plus.png" class="icon">
                    <img src="../assets/img/icon-emote.png" class="icon">
                    <img src="../assets/img/icon-foto-pesan.png" class="icon">
                 </div>
              </div>
              </div>
              <div v-else class="chatempty">
                  <p>Please select a chat to start messaging</p>
              </div>
          </div>
      </div>
      <!-- HP -->
      <div class="row no-gutters d-sm-none d-flex pl-3 pr-3 pt-5">
          <div class="col-6"><h3 class="float-left color-default font-weight-bold">Telegram</h3></div>
          <div class="col-6">
              <div class="d-inline">
                <b-dropdown size="sm" right class="float-right" variant="link" split-class="text-drdwn" menu-class="drdwn" toggle-class="text-decoration-none" no-caret>
                        <template v-slot:button-content>
                        <img src="../assets/img/icon-click-chatlist.png">
                        </template>
                        <div class="row">
                            <div class="col-2"><img class="pl-4" src="../assets/img/icon-setting.png"></div>
                            <div class="col-10"><b-dropdown-item v-b-toggle.sidebar-hp>Settings</b-dropdown-item></div>
                            <div class="col-2"><img class="pl-4" src="../assets/img/icon-contact.png"></div>
                            <div class="col-10"><b-dropdown-item v-b-toggle.sidebar-hp>Contacts</b-dropdown-item></div>
                            <div class="col-2"><img class="pl-4" src="../assets/img/icon-panggil.png"></div>
                            <div class="col-10"><b-dropdown-item v-b-toggle.sidebar-hp>Calls</b-dropdown-item></div>
                            <div class="col-2"><img class="pl-4" src="../assets/img/icon-save-messege.png"></div>
                            <div class="col-10"><b-dropdown-item v-b-toggle.sidebar-hp>Save messages</b-dropdown-item></div>
                            <div class="col-2"><img class="pl-4" src="../assets/img/icon-invite-friend.png"></div>
                            <div class="col-10"><b-dropdown-item v-b-toggle.sidebar-hp>Invite Friends</b-dropdown-item></div>
                            <div class="col-2"><img class="pl-4" src="../assets/img/icon-FAQ.png"></div>
                            <div class="col-10"><b-dropdown-item v-b-toggle.sidebar-hp>Telegram FAQ</b-dropdown-item></div>
                        </div>
                    </b-dropdown>
                <b-sidebar id="sidebar-hp" sidebar-class="w-100" aria-labelledby="sidebar-hp-title" no-header>
                    <template v-slot:default="{ hide }">
                    <div class="p-3">
                    <h4 id="sidebar-hp-title" class="text-left color-default" >
                        <img style="margin-right:7vw;" @click="hide" src="../assets/img/backtologin.png">
                        @wdlam
                    </h4>
                    <div class="w-100 text-center mt-5">
                        <img src="../assets/img/example-foto-profile.png">
                        <h4 style="border-radius: 30px;" class="font-weight-bold mt-4" >Calvin Flores</h4>
                        <p style="color: #848484;" >@wdlam</p>
                    </div>
                    <div class="phone mt-4">
                        <h4 class="font-weight-bold">Account</h4>
                        <p style="letter-spacing: 1.335px;" class="mb-0">+375(29)9638433</p>
                        <p style="color: #7E98DF;">Tap to change phone number</p>
                    </div>
                    <div class="username">
                        <p class="font-weight-bold mb-0">@wdlam</p>
                        <p style="color: #848484;">Username</p>
                    </div>
                    <div class="bio" style="width: 262px;">
                        <p class="font-weight-bold mb-0">I’m Senior Frontend Developer from Microsoft</p>
                        <p style="color: #848484;">Bio</p>
                    </div>
                    <div class="setting">
                        <h4 class="font-weight-bold">Settings</h4>
                        <div class="row">
                            <div class="col-2">
                                <img src="../assets/img/lonceng-setting.png">
                            </div>
                            <div class="col-10">
                                <p>Notification and Sounds</p>
                            </div>
                            <div class="col-2"><img src="../assets/img/gembok-setting.png"></div>
                            <div class="col-10"><p>Privaty and Security</p></div>
                            <div class="col-2"><img src="../assets/img/chart-setting.png"></div>
                            <div class="col-10"><p>Data and Stronge</p></div>
                            <div class="col-2"><img src="../assets/img/Chat-setting.png"></div>
                            <div class="col-10"><p>Chat settings</p></div>
                            <div class="col-2"><img src="../assets/img/Device-setting.png"></div>
                            <div class="col-10"><p>Devices</p></div>
                        </div>
                    </div>
                    </div>
                </template>
                </b-sidebar>
                <img class="float-right mr-3 mt-1" src="../assets/img/Search.png">
                <img class="float-right mr-3 mt-1" src="../assets/img/icon-plus.png">
              </div>
          </div>
          <div class="col-12">
              <div class="filter">
                    <vueCustomScrollbar class="mt-4 mb-4 scroll-container">

                    <div class="filter-menu ml-2"><p>All</p></div>
                    <div class="filter-menu filter-menu-active"><p>Important</p></div>
                    <div class="filter-menu"><p>Unread</p></div>
                    <div class="filter-menu"><p>Read</p></div>

                    </vueCustomScrollbar>
              </div>
              <vueCustomScrollbar class="userlist">
                  <div class="user">
                      <div class="row">
                          <div class="col-3">
                              <img class="img-fluid" alt="Responsive image" src="../assets/img/example-foto-profile.png">
                          </div>
                          <div class="col-9">
                              <div class="float-right clock">15:20</div>
                              <h5>Calvin Flores <img src="../assets/img/icon-lonceng.png"></h5>
                              <div class="float-right unread"><p>1</p></div>
                              <p>Hi, bro! Come to my house!</p>
                          </div>
                      </div>
                  </div>
                  <div class="user">
                      <div class="row">
                          <div class="col-3">
                              <img class="img-fluid" alt="Responsive image" src="../assets/img/example-foto-profile.png">
                          </div>
                          <div class="col-9">
                              <div class="float-right clock">15:20</div>
                              <h5>Calvin Flores <img src="../assets/img/icon-lonceng.png"></h5>
                              <div class="float-right unread"><p>1</p></div>
                              <p>Hi, bro! Come to my house!</p>
                          </div>
                      </div>
                  </div>
                  <div class="user">
                      <div class="row">
                          <div class="col-3">
                              <img class="img-fluid" alt="Responsive image" src="../assets/img/example-foto-profile.png">
                          </div>
                          <div class="col-9">
                              <div class="float-right clock">15:20</div>
                              <h5>Calvin Flores <img src="../assets/img/icon-lonceng.png"></h5>
                              <div class="float-right unread"><p>1</p></div>
                              <p>Hi, bro! Come to my house!</p>
                          </div>
                      </div>
                  </div>
                  <div class="user">
                      <div class="row">
                          <div class="col-3">
                              <img class="img-fluid" alt="Responsive image" src="../assets/img/example-foto-profile.png">
                          </div>
                          <div class="col-9">
                              <div class="float-right clock">15:20</div>
                              <h5>Calvin Flores <img src="../assets/img/icon-lonceng.png"></h5>
                              <div class="float-right unread"><p>1</p></div>
                              <p>Hi, bro! Come to my house!</p>
                          </div>
                      </div>
                  </div>
                  <div class="user">
                      <div class="row">
                          <div class="col-3">
                              <img class="img-fluid" alt="Responsive image" src="../assets/img/example-foto-profile.png">
                          </div>
                          <div class="col-9">
                              <div class="float-right clock">15:20</div>
                              <h5>Calvin Flores <img src="../assets/img/icon-lonceng.png"></h5>
                              <div class="float-right unread"><p>1</p></div>
                              <p>Hi, bro! Come to my house!</p>
                          </div>
                      </div>
                  </div>
              </vueCustomScrollbar>
          </div>
      </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
import { mapActions, mapGetters } from 'vuex'
import vueCustomScrollbar from 'vue-custom-scrollbar'
export default {
  components: {
    vueCustomScrollbar
  },
  data () {
    return {
      socket: io('http://localhost:3000'),
      message: '',
      upProf: 0,
      profPhone: '',
      profUsername: '',
      profBio: '',
      profName: '',
      profImage: null,
      listMessages: [],
      privateMessages: [],
      listUsers: [],
      userReceiver: '',
      settings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false
      }
    }
  },
  computed: {
    ...mapGetters({
      dataUser: 'profile/detailUser'
    })
  },
  methods: {
    ...mapActions({
      actionGetDetailUser: 'profile/getDetailUser',
      actionUpdateProfile: 'profile/updateProf'
    }),
    scrollHanle (evt) {
      console.log(evt)
    },
    sendMessage () {
      const name = localStorage.getItem('name')
      const msg = {
        sender: name,
        receiver: this.userReceiver.name,
        message: this.message,
        image: this.dataUser.data.image
      }
      this.listMessages = [...this.listMessages, msg]

      this.getPrivateMessages()

      this.socket.emit('send-message', {
        sender: this.dataUser.data.name,
        receiver: this.userReceiver.name,
        message: this.message,
        image: this.dataUser.data.image
      })
      this.message = ''
    },
    selectUser (user) {
      this.userReceiver = user
      this.getPrivateMessages()
    },
    async getPrivateMessages () {
      const name = localStorage.getItem('name')
      const privateMessage = await this.listMessages.filter((item) => {
        return (item.receiver === this.userReceiver.name || item.receiver === name) && (item.sender === this.userReceiver.name || item.sender === name)
      })
      this.privateMessages = privateMessage
    },
    updateProfile (key) {
      console.log(key)
      if (key === 1) {
        this.upProf = key
      } else if (key === 2) {
        this.upProf = key
      } else if (key === 3) {
        this.upProf = key
      } else {
        this.upProf = key
      }
    },
    prosesFile (event) {
      this.profImage = event.target.files[0]
    },
    editProfile () {
      const img = this.profImage === null ? this.dataUser.data.image : this.profImage
      const usrnm = this.profUsername === '' || this.profUsername === null ? this.dataUser.data.username : this.profUsername
      const phone = this.profPhone === '' || this.profPhone === null ? this.dataUser.data.phonenumber : this.profPhone
      const bio = this.profBio === '' || this.profBio === null ? this.dataUser.data.bio : this.profBio
      const nama = this.profName === '' || this.profName === null ? this.dataUser.data.name : this.profName
      console.log(this.profName)
      const fd = new FormData()
      fd.append('image', img)
      fd.append('username', usrnm)
      fd.append('phonenumber', phone)
      fd.append('bio', bio)
      fd.append('name', nama)
      this.actionUpdateProfile(fd)
        .then((response) => {
          console.log(response)
          if (response === 'image type must jpg, jpeg, or png') {
            alert(response)
          } else if (response === 'File too large, max size 100kb') {
            alert(response)
          } else if (response === `Error: Duplicate entry '${this.profName}' for key 'name'`) {
            alert('name sudah ada, coba yang lain')
          } else {
            alert(response)
            this.upProf = 0
            localStorage.setItem('name', nama)
            window.location = '/'
          }
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.socket.emit('get-all-users')
    this.socket.on('list-users', (data) => {
      this.listUsers = data
    })
    const name = localStorage.getItem('name')
    this.socket.emit('join-room', name)
    this.socket.on('list-messages', async (data) => {
      this.listMessages = await [...this.listMessages, data]
      if (this.userReceiver !== '') {
        this.getPrivateMessages()
      }
    })
    this.actionGetDetailUser()
  }
}
</script>

<style>
.row .chatlist {
    height: 100vh;
}
.row .chating {
    height: 100vh;
}
.head {
    width: 100%;
    height: 15vh;
    margin-bottom: 10px;
}
.chatbox {
    height: 70vh;
    overflow: auto;
}
.row .chatlist .head .float-left{
    margin-left: 20px;
    margin-top: 5vh;
    color: #7E98DF;
    font-weight: bold;
}
.row .chatlist .head .float-right{
    margin-right: 20px;
    margin-top: 5vh;
}
.row .chating .chatempty{
    text-align: center;
    margin-top: 50vh;
}
.row .chatlist .search {
    padding: 10px;
}
.input-container {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  width: 100%;
  margin-bottom: 10px;
}

.icon {
  padding: 10px;
  background: #FAFAFA;
  min-width: 50px;
  text-align: center;
}

.input-field {
  width: 100%;
  padding: 10px;
  outline: none;
  background: #FAFAFA;
  border-radius: 15px;
  border:none;
}

.input-field:focus {
  border: 0.1px solid #848484;
}
.row .filter .scroll-container{
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  text-align: center;
  margin-bottom: 10px;
}
.scroll-container{
    overflow-x: scroll;
    overflow-y: hidden;
}
.row .filter .scroll-container .filter-menu{
  width: 133px;
  height: 50px;
  display:inline-block;
  margin-right:10px;
}
.row .filter .scroll-container .filter-menu-active{
  background: #7E98DF;
  border-radius: 20px;
  color: white;
}
.row .filter .scroll-container .filter-menu p{
  margin-top: 12px;
}
.row .userlist {
    padding: 10px;
    height: 61vh;
    overflow-y: auto;
}
.row .userlist .user {
    height: 82px;
    margin-bottom: 10px;
    padding: 10px;
}
.row .userlist .user .row .col-3 img{
    border-radius: 20px;
}
.row .userlist .user .row .col-9 h5{
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: -0.165px;
    color: #232323;
    margin-top: 10px;
}
.row .userlist .user .row .col-9 p{
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.165px;
    color: #7E98DF;
}
.row .userlist .user .row .col-9 .clock{
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.165px;
    color: #848484;
}
.row .userlist .user .row .col-9 .unread{
    width: 20px;
    height: 20px;
    background: #7E98DF;
    border-radius: 30px;
}
.row .userlist .user .row .col-9 .unread p{
    text-align: center;
    color: white;
}
.drdwn  {
    background: #7E98DF;
    border-radius: 35px 10px 35px 35px;
    width: 250px;
    height: 360px;
    border:none;
    color: #FFFFFF;
    padding-top: 10px;
}
.dropdown-item {
    display: block;
    width: 100%;
    padding: 0.25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: white;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.165px;
    margin-bottom: 30px;
}
</style>
