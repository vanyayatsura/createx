<template>
  <div class="modal">
    <div class="modal__wrapper">
      <div class="modal__header">
        <div @click="closeModal" class="modal__icon-close"></div> 
      </div>
      <div class="modal__main">
        <div class="sing-in" v-if="whatShow">
          <h3 class="sing-in__title">Sign in</h3>
          <h6 class="sing-in__subtitle">Sign in to your account using email and password provided during registration.</h6>
          <div class="sing-in__form">
            <label class="sing-label" for="singEmail">Email</label>
            <input placeholder="Your working email" class="sing-input" id="singEmail" type="email">
            <div class="pasword__container">
              <label class="sing-label" for="singPassword">Password</label>
              <input placeholder="Password" class="sing-input" id="Password" :type="inputPype">
              <button @click="showPassword" class="show-password"><img src="../assets/Eye.svg" alt=""></button>
            </div>
          </div>
          <div class="sing-in__checkbox-fordot-pas">
            <input id="myCheckbox" class="checkbox" type="checkbox">
            <label for="myCheckbox">Keep me signed in</label>
            <a href="#">Forgot password?</a>
          </div>
          <input type="button" class="btn btn-gradient sing-in__btn" value="Sign in">
          <div class="link__sing-up">
            <div>Don't have an account?</div>
            <div class="sing__link-in" @click="whatShow = !whatShow">Sign up</div>
          </div>
        </div>
        <div class="sing-up" v-else>
          <h3 class="sing-up__title">Sign up</h3>
          <h6 class="sing-up__subtitle">Registration takes less than a minute but gives you full control over your studying.</h6>
          <div class="sing-up__form">
            <label class="sing-label" for="singName">Full Name</label>
            <input placeholder="Your full name" class="sing-input" id="singName" type="text">
            <label class="sing-label" for="singEmail">Email</label>
            <input placeholder="Your working email" class="sing-input" id="singEmail" type="email">
            <div class="pasword__container">
              <label class="sing-label" for="singPassword">Password</label>
              <input placeholder="Password" class="sing-input" id="Password" :type="inputPype">
              <button @click="showPassword" class="show-password"><img src="../assets/Eye.svg" alt=""></button>
            </div>
            <div class="pasword__container">
              <label class="sing-label" for="singConfirmPassword">Confirm Password</label>
            <input placeholder="Confirm password" class="sing-input" id="singConfirmPassword" :type="inputPypeConfirm">
            <button @click="showConfirmPassword" class="show-password"><img src="../assets/Eye.svg" alt=""></button>
            </div>
          </div>
          <div class="sing-in__checkbox-fordot-pas">
            <input id="myCheckbox" class="checkbox" type="checkbox">
            <label for="myCheckbox">Remember me</label>
          </div>
          <input type="button" class="btn btn-gradient sing-in__btn" value="Sign up">
          <div class="link__sing-up">
            <div>Already have an account?</div>
            <div class="sing__link-in" @click="whatShow = !whatShow">Sign in</div>
          </div>
        </div>
      </div>
      <div class="modal__footer">
        <div>Or sign in with</div>
        <div class="modal__socials"></div>
      </div>
    </div>
  </div>
</template>
<script>
 export default {
  data() {
    return {
      whatShow: true,
      btnForm: 'sing up',
      inputPype: 'password',
      inputPypeConfirm: 'password'

    }
  },
  methods: {
    closeModal(){
      this.$emit('close')
    },
    togelSing() {
      this.whatShow = !this.whatShow
      if (!this.whatShow) {
        this.btnForm = "sing in"
      }
      else {
        this.btnForm = "sing up"
      }
    },
    showPassword() {
      if(this.inputPype === 'password') {
        this.inputPype = 'text'
      }
      else {
        this.inputPype = 'password'
      }
    },
    showConfirmPassword() {
      if(this.inputPypeConfirm === 'password') {
        this.inputPypeConfirm = 'text'
      }
      else {
        this.inputPypeConfirm = 'password'
      }
    }
  },
  created() {
    this.$emit('closeModal', this.closeSing,)
  }
}
 
</script>

<style scoped>
  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
  }
  .modal::before{ 
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    background-color: #1E212C;
    opacity: 0.75;
  }
  .modal__wrapper {
    max-width: 486px;
    z-index: 500;
    background-color: #fff;
    color: #1E212C;
    overflow: auto;
    max-height: 100%;
  }
  .modal__header {
    padding: 24px 24px 0 0;
    position: relative;
    text-align: end;
  }
  .modal__icon-close {
    cursor: pointer;
    position: relative;
    display: inline-block;
    width: 24px;
    height: 24px;
  }
  .modal__icon-close::after,
  .modal__icon-close::before{
    display: inline-block;
    content: '';
    right: 0;
    bottom: calc(50% - 1px);
    width: 100%;
    height: 2px;
    background-color: #787A80;
    position: absolute;
  }
  .modal__icon-close::after{
    transform: rotate(45deg);
  }
  .modal__icon-close::before{
    transform: rotate(-45deg);
  }
  .sing-in {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 24px;
  }
  .sing-in__title {
    font-weight: 700;
    font-size: 28px;
    line-height: 1.5;
    padding-bottom: 24px;
  }
  .sing-in__subtitle {
    padding-bottom: 4px;
    font-size: 14px;
    line-height: 150%;
    color: #787A80;
    text-align: center;
  }
  .modal__main {
    padding: 0 24px;
    border-bottom: 1px solid #E5E8ED;
  }
  .sing-label {
    display: block;
    padding: 20px 0 8px;
    color: #424551;
    line-height: 1.5;
  }
  .sing-in__form {
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-self: start;
    width: 100%;
  }
  .sing-input {
    display: block;
    width: 100%;
    padding: 11px 16px;
    border: 1px solid #D7DADD;
    border-radius: 4px;
  }
  .pasword__container {
    position: relative;
  }
  .show-password {
    position: absolute;
    right: 16px;
    bottom: 12px;
  }
  .sing-in__checkbox-fordot-pas {
    padding-bottom: 24px;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .sing-in__checkbox-fordot-pas input{
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  .sing-in__checkbox-fordot-pas input+label{
    display: inline-flex;
    align-items: center;
    user-select: none; 
  }
  .sing-in__checkbox-fordot-pas input+label::before{
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    border: 1px solid #adb5bd;
    border-radius: 4px;
    margin-right: 12px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 80%;
    cursor: pointer;
  }
  .sing-in__checkbox-fordot-pas input:checked+label::before {
    border-color:  #FF3F3A;
    background-color: #FF3F3A;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
  .sing-in__checkbox-fordot-pas input:net(:disabled):active+label::before {
    background-color: #FF3F3A;
    border-color:  #FF3F3A;
  }
  .sing-in__checkbox-fordot-pas label{
    display: block;
    flex: 1 1 auto;
  }
  .sing-in__checkbox-fordot-pas a{
    display: block;
    color: #FF3F3A;
  }
  .sing-in__btn {
    width: 100%;
  }
  .link__sing-up {
    padding: 24px 0;
    width: 100%;
    display: flex;
    color: #424551;
  }
  .sing__link-in{
    color: #FF3F3A;
    padding-left: 3px;
    cursor: pointer;
  }
  .sing-up {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 24px;
    overflow-x: auto;
  }
  .sing-up__title {
    font-weight: 700;
    font-size: 28px;
    line-height: 1.5;
    padding-bottom: 24px;
  }
  .sing-up__subtitle {
    padding-bottom: 4px;
    font-size: 14px;
    line-height: 150%;
    color: #787A80;
    text-align: center;
  }
  .sing-up__form {
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-self: start;
    width: 100%;
  }
  .modal__footer {
    padding: 24px 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #787A80
  }
  .modal__footer div:first-child{
    padding-bottom: 16px;
  }
  .modal__socials {
    text-align: center;
  }
</style>