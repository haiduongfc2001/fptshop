<template>
  <div>
    <div v-if="showPhone">
      <div>
        Đăng Nhập Hoặc Tạo Tài Khoản
      </div>
      <div>
        <form @submit.prevent="sendOTP">
          <div class="input-phone">
            <input placeholder="Nhập số điện thoại"
                   type="tel"
                   class="form-control form-control-lg input-phone__focus"
                   id="phoneNumber"
                   v-model="data.phoneNumber"
                   pattern="\d*"
                   :minlength="10"
                   :maxlength="10"
                   required
                   autocomplete="off">
          </div>
          <div class="submit-login">
            <button type="submit" class="btn btn-primary">TIẾP TỤC</button>
          </div>
        </form>
      </div>
    </div>
    <div v-else>
      <div>
        <form @submit.prevent="verifyOTP">
          <input type="tel" class="otp-item inputotp is-invalid1"
                 min="0" max="9" maxlength="1" pattern="[0-9]"
                 id="input1">
          <div class="submit-login">
            <button type="submit" class="btn btn-primary">XÁC NHẬN</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script >
import axios from "axios";

export default {
  data: () => {
    return {
      showPhone: true,
      data:{
        phoneNumber:'',
        otp:'',
      },
      isSignUp: true,
      user: {},
    };
  },
  methods: {
    sendOTP() {
      this.showPhone = false;
      axios.
      post("http://localhost:4000/login", {
        phone: this.data.phoneNumber,
      }).then((response) => {
        console.log("OTP tra ve: ", response)
      })
          .catch((error) => {
            console.log(error.response);
          });
    },

    verifyOTP() {
      //
    }
  },
}
</script>