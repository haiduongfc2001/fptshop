<template>
  <div class="slider">
    <div class="grid wide">
      <img src="@/assets/images/desk-header.png" style="width: 100%" alt="">
    </div>
    <div class="grid wide slider">
      <div class="row">
        <div class="col l-8 m-12 c-12">
          <!-- <div class="slider"> -->
          <div class="grid">
            <div class="wapper-slider">
              <div class="row no-warp main-slider">
                <div class="col l-12 m-12 c-12 wrapper-item-slider">
                  <div class="item-slider">
                    <img src="@/assets/img/637806895646282188_F-H1_800x300.jfif" alt="">
                  </div>
                </div>
                <div class="col l-12 m-12 c-12 wrapper-item-slider">
                  <div class="item-slider">
                    <img src="@/assets/img/slide-3.png" alt="">
                  </div>
                </div>
                <div class="col l-12 m-12 c-12 wrapper-item-slider">
                  <div class="item-slider">
                    <img src="@/assets/img/637811231329170645_F-H1_800x300.jfif" alt="">
                  </div>
                </div>
              </div>
              <button class="back">
                <i class="fa fa-chevron-left"></i>
              </button>
              <button class="next">
                <i class="fa fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <div style="text-align:center">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
        <div class="col l-4 c-12 m-12">
          <div class="banner-top">
            <div class="banner-img-item">
              <img src="@/assets/img/slide-1.png" alt="">
            </div>
            <div class="banner-img-item">
              <img src="@/assets/img/slide-2.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider"
}
</script>

<style>
  @import "@/assets/main.css";
  @import "@/assets/slider.css";
  @import "@/assets/slider-card.css";
  @import "@/assets/reponsive.css";
  @import "@/assets/grid.css";
  @import "@/assets/style.css";
</style>