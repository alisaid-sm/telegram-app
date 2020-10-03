<template>
  <div class="cont-tele bgn-default d-flex justify-content-center align-items-center">
    <div class="card border-0 p-5" style="width: 40vw;">
        <div class="card-body">
            <h4 class="card-title color-default text-center font-weight-bold">Login</h4>
            <p class="card-text">Hi, Welcome back!</p>
            <form class="form-auth" >
                <div class="input-default">
                    <label>Username</label>
                    <input type="text" placeholder="telegram@mail.com" required>
                </div>
                <div class="input-default">
                    <label>Password</label>
                    <input type="password" placeholder="password" required>
                </div>
                <p class="mt-3 text-right">Forgot password?</p>
                <b-button class="mt-3 button-default" type="submit" block>Login</b-button>
            </form>
            <div class="row text-center mt-5">
                <div class="col-4"><hr></div>
                <div class="col-4"><p>Login with</p></div>
                <div class="col-4"><hr></div>
            </div>
            <b-button class="mt-3 button-reverse mb-3" type="submit" block><img class="mr-3" src="../assets/img/icon-G.png"> Google</b-button>
            <p class="text-center">Don’t have an account? <span class="color-default font-weight-bold">Sign Up</span></p>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.card {
    background: #FFFFFF;
    box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05) !important;
    border-radius: 30px;
}
.input-default label {
    font-size: 14px;
    line-height: 17px;
    color: #848484;
    opacity: 0.75;
    margin-bottom: 5px;
}
.form-auth .text-right {
    font-size: 16px;
    line-height: 19px;
    color: #7E98DF;
}
hr {
    border: 1px solid #848484;
}
.row .col-4 p {
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #848484;
}
.button-reverse {
    font-weight: 500 !important;
    font-size: 16px !important;
    line-height: 19px !important;
    text-align: center !important;
    color: #7E98DF !important;
    font-weight: bold !important;
}
</style>
