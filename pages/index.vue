<template>
  <div class="landing">
    <div class="rectangle-5">
      <div style="text-align:center; font-size:60px;margin-top:100px;">
        C<br/>
        <span>S&nbsp;&nbsp;O&nbsp;&nbsp;O&nbsp;&nbsp;O&nbsp;&nbsp;N</span>
        <br/>M<br/>I<br/>N<br/>G<br/>
      </div>
    </div>
    <div class="landing-page">
      <p class="langing-text">
        <strong class="langing-text-emphasis-1">
          NEVER
          <br /> 
          MISS
          <br />
          AN EVENT
        </strong>
      </p>
      <img
        alt=""
        class="megaphone-png26-1"
        src="https://static.overlay-tech.com/assets/2393b46d-9034-4a83-bcc5-3abff2898442.png"
      />
      <div class="nav">
        <div class="frame-1">
          <p class="project-name">JAMA</p>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss">
// This is the project stylesheet

// Colors
$sandy-brown-2: rgba(255, 215, 73, 1);
$transparent-khaki: rgba(255, 219, 90, 0.06);
$white: rgba(255, 255, 255, 1);

// Typographies
@mixin roboto-18-regular {
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
}
@mixin roboto-28-medium {
  font-family: "Roboto";
  font-size: 28px;
  font-weight: 500;
  line-height: 29px;
}
@mixin rokkitt-144-black {
  font-family: "Rokkitt";
  font-size: 144px;
  font-weight: 900;
  line-height: 113px;
}
.landing {
  background-color: $transparent-khaki;
  padding: 0 0 131px;
  max-height: 100vh;
  overflow-y:hidden;
  position: relative;
}
.rectangle-5 {
  width: 799px;
  height: 720px;
  background-color: rgba(255, 219, 90, 1);
  position: absolute;
  right: 0;
  top: 0;
}
.landing-page {
}
.langing-text {
  height: 41.26%;
  width: 74.22%;
  display: flex;
  align-items: center;
  position: absolute;
  left: 50px;
  bottom: 74px;
  color: rgba(83, 45, 0, 1);
  @include rokkitt-144-black;
}
.langing-text-emphasis-1 {
  color: rgba(83, 45, 0, 1);
  letter-spacing: 96.48px;
  @include rokkitt-144-black;
}
.megaphone-png26-1 {
  width: 100vw;
  height: 100vh;
  position:relative;
  opacity: 0.3;
}
.button {
  position: absolute;
  right: 174px;
  bottom: 45px;
}
.nav {
  background-color: rgba(83, 45, 0, 1);
  padding: 8px 51px 9px 16px;
  display: flex;
  align-items: flex-start;
  position: absolute;
  left: 0;
  top: 0;
}
.frame-1 {
  width: calc(16.08% - 20px);
  margin-right: 470px;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  align-self: stretch;
}
.project-name {
  font-family: "Rokkitt";
  font-size: 64px;
  font-weight: 900;
  line-height: 46px;
  color: $white;
  letter-spacing: -2.56px;
}
.nav-links {
  margin-top: 25px;
  margin-right: 58px;
  display: flex;
  align-items: flex-start;
}
.nav-link-hom {
  width: 28.33%;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: $white;
  align-self: stretch;
  display: flex;
  &:not(:last-of-type) {
    margin-right: 27px;
  }
}
.button-two {
  margin-top: 10px;
}
</style>