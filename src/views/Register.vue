<template>
<div>
<!-- Desktop -->
  <div class="d-sm-flex d-none cont-tele bgn-default justify-content-center align-items-center">
    <div class="card border-0 pr-3 pl-3" style="width: 40vw;">
        <div class="card-body">
            <router-link to="/login"><img src="../assets/img/backtologin.png"></router-link>
            <h4 class="card-title color-default text-center font-weight-bold">Register</h4>
            <p class="card-text">Let’s create your account!</p>
            <form class="form-auth" >
                <div class="input-default">
                    <label>Name</label>
                    <input type="text" placeholder="tele" required>
                </div>
                <div class="input-default">
                    <label>Email</label>
                    <input type="text" placeholder="telegram@mail.com" required>
                </div>
                <div class="input-default">
                    <label>Password</label>
                    <input type="password" placeholder="password" required>
                </div>
                <b-button class="mt-3 button-default" type="submit" block>Register</b-button>
            </form>
            <div class="row text-center mt-5">
                <div class="col-4"><hr></div>
                <div class="col-4"><p>Register with</p></div>
                <div class="col-4"><hr></div>
            </div>
            <b-button class="mt-3 button-reverse mb-3" type="submit" block><img class="mr-3" src="../assets/img/icon-G.png"> Google</b-button>
        </div>
    </div>
<!-- HP -->
  </div>
    <div class="d-sm-none d-block">
    <div class="card-body">
            <router-link to="/login"><img src="../assets/img/backtologin.png"></router-link>
            <h4 class="card-title color-default text-center font-weight-bold">Register</h4>
            <p class="card-text">Let’s create your account!</p>
            <form class="form-auth" >
                <div class="input-default">
                    <label>Name</label>
                    <input type="text" placeholder="tele" required>
                </div>
                <div class="input-default">
                    <label>Email</label>
                    <input type="text" placeholder="telegram@mail.com" required>
                </div>
                <div class="input-default">
                    <label>Password</label>
                    <input type="password" placeholder="password" required>
                </div>
                <b-button class="mt-3 button-default" type="submit" block>Register</b-button>
            </form>
            <div class="row text-center mt-5">
                <div class="col-4"><hr></div>
                <div class="col-4"><p>Register with</p></div>
                <div class="col-4"><hr></div>
            </div>
            <b-button class="mt-3 button-reverse mb-3" type="submit" block><img class="mr-3" src="../assets/img/icon-G.png"> Google</b-button>
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
