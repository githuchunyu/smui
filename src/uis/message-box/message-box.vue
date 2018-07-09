<template>
  <div class="smui-msgbox-wrapper">
    <transition name="msgbox-bounce">
      <div class="smui-msgbox" v-show="value" ref="content">
        <div class="smui-msgbox-header" v-if="title !== ''">
          <div class="smui-msgbox-title">{{ title }}</div>
        </div>
        <div class="smui-msgbox-content" v-if="message !== ''">
          <div class="smui-msgbox-message" v-html="message"></div>
          <div class="smui-msgbox-input" v-show="showInput">
            <input v-model="inputValue" :placeholder="inputPlaceholder" ref="input">
            <div class="smui-msgbox-errormsg" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{ editorErrorMessage }}</div>
          </div>
        </div>
        <div class="smui-msgbox-btns">
          <button :class="[ cancelButtonClasses ]" v-show="showCancelButton" @click="handleAction('cancel')">{{ cancelButtonText }}</button>
          <button :class="[ confirmButtonClasses ]" v-show="showConfirmButton" @click="handleAction('confirm')">{{ confirmButtonText }}</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="less" scoped>
@import url(../var.less);
  .smui-msgbox-wrapper {
    position: fixed;top:0;bottom:0;left:0;right:0;
    background: rgba(0,0,0,0.2);
  }
  .smui-msgbox {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    background-color: #fff;
    width: 85%;
    border-radius: 3px;
    font-size: 16px;
    -webkit-user-select: none;
    overflow: hidden;
    backface-visibility: hidden;
    transition: .2s;

    &-header {
      padding: 30px 0 0;
    }

    &-content {
      padding: 10px 20px 30px;
      min-height: 36px;
      position: relative;
    }

    &-input {
      padding-top: 15px;
      & input {
        border: 1px solid #dedede;
        border-radius: 5px;
        padding: 4px 15px;
        height:64px;
        width: 100%;
        appearance: none;
        outline: none;
      }
      & input.invalid {
        border-color: #ff4949;
        &:focus {
          border-color: #ff4949;
        }
      }
    }

    &-errormsg {
      color: red;
      font-size: 12px;
      min-height: 18px;
      margin-top: 2px;
    }

    &-title {
      text-align: center;
      padding-left: 0;
      margin-bottom: 0;
      font-size: 32px;
      font-weight: bold;
      color: #333;
    }

    &-message {
      color: #999;
      margin: 0;padding:15px 0;
      font-size: 24px;
      text-align: center;
      line-height: 36px;
    }

    &-btns {
      display: flex;
      border-top:1px solid #EEE;
    }

    &-btn {
      padding:15px 0;
      font-size: 24px;
      display: block;
      background-color: #fff;
      flex: 1;
      margin: 0;
      border: 0;

      &:focus {
        outline: none;
      }

      &:active {
        background-color: #fff;
      }
    }

    &-cancel {
      width: 50%;
      border-right: 1px solid #EEE;
      &:active {
        color: #333;
      }
    }

    &-confirm {
      color: @color-primary;
      width: 50%;
      &:active {
       color: @color-primary;
      }
    }
  }

  .msgbox-bounce-enter {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.7);
  }
  .msgbox-bounce-leave-active {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.9);
  }
</style>

<script>
  let CONFIRM_TEXT = '确定';
  let CANCEL_TEXT = '取消';

  export default {
    props: {
      modal: {
        default: true
      },
      showClose: {
        type: Boolean,
        default: true
      },
      lockScroll: {
        type: Boolean,
        default: false
      },
      closeOnClickModal: {
        default: true
      },
      closeOnPressEscape: {
        default: true
      },
      inputType: {
        type: String,
        default: 'text'
      }
    },

    computed: {
      confirmButtonClasses() {
        let classes = 'smui-msgbox-btn smui-msgbox-confirm ' + this.confirmButtonClass;
        if (this.confirmButtonHighlight) {
          classes += ' smui-msgbox-confirm-highlight';
        }
        return classes;
      },
      cancelButtonClasses() {
        let classes = 'smui-msgbox-btn smui-msgbox-cancel ' + this.cancelButtonClass;
        if (this.cancelButtonHighlight) {
          classes += ' smui-msgbox-cancel-highlight';
        }
        return classes;
      }
    },

    methods: {
      doClose() {
        this.value = false;
        this._closing = true;

        this.onClose && this.onClose();

        setTimeout(() => {
          if (this.modal && this.bodyOverflow !== 'hidden') {
            document.body.style.overflow = this.bodyOverflow;
            document.body.style.paddingRight = this.bodyPaddingRight;
          }
          this.bodyOverflow = null;
          this.bodyPaddingRight = null;
        }, 200);
        this.opened = false;

        if (!this.transition) {
          this.doAfterClose();
        }
      },

      removeDom(event){
        if (this.$el.parentNode) {
          this.$el.parentNode.removeChild(this.$el);
        }
      },

      handleAction(action) {
        if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
          return;
        }
        var callback = this.callback;
        this.value = false;
        callback(action);
      },

      validate() {
        if (this.$type === 'prompt') {
          var inputPattern = this.inputPattern;
          if (inputPattern && !inputPattern.test(this.inputValue || '')) {
            this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
            this.$refs.input.classList.add('invalid');
            return false;
          }
          var inputValidator = this.inputValidator;
          if (typeof inputValidator === 'function') {
            var validateResult = inputValidator(this.inputValue);
            if (validateResult === false) {
              this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
              this.$refs.input.classList.add('invalid');
              return false;
            }
            if (typeof validateResult === 'string') {
              this.editorErrorMessage = validateResult;
              return false;
            }
          }
        }
        this.editorErrorMessage = '';
        this.$refs.input.classList.remove('invalid');
        return true;
      },

      handleInputType(val) {
        if (val === 'range' || !this.$refs.input) return;
        this.$refs.input.type = val;
      }
    },

    watch: {
      inputValue() {
        if (this.$type === 'prompt') {
          this.validate();
        }
      },

      value(val) {
        this.handleInputType(this.inputType);
        if (val && this.$type === 'prompt') {
          setTimeout(() => {
            if (this.$refs.input) {
              this.$refs.input.focus();
            }
          }, 500);
        }
        if (val) {
          this.$refs['content'].removeEventListener('transitionend', this.removeDom);
        } else {
          this.$refs['content'].addEventListener('transitionend', this.removeDom);
        }
      },

      inputType(val) {
        this.handleInputType(val);
      }
    },

    data() {
      return {
        value:false,
        title: '',
        message: '',
        type: '',
        showInput: false,
        inputValue: null,
        inputPlaceholder: '',
        inputPattern: null,
        inputValidator: null,
        inputErrorMessage: '',
        showConfirmButton: true,
        showCancelButton: false,
        confirmButtonText: CONFIRM_TEXT,
        cancelButtonText: CANCEL_TEXT,
        confirmButtonClass: '',
        confirmButtonDisabled: false,
        cancelButtonClass: '',
        editorErrorMessage: null,
        callback: null
      };
    }
  };
</script>
