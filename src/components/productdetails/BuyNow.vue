<template>
    <div>
      <button type="button" class="btn btn-primary btn-xl btn-full" data-bs-toggle="modal"
              data-bs-target="#exampleModal" @click="handleChoseItem">
        <div>
          <strong>
            MUA NGAY
          </strong>
        </div>
        <p>Giao hàng miễn phí hoặc nhận tại shop</p>
      </button>
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1"
           aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Có {{ itemCount }} sản phẩm trong giỏ hàng
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div v-for="product in order" :key="product.product.productid">
                <div class="modal-product" style="border-bottom: 1px solid #e0e0e0;">
                  <div class="modal-product__img">
                    <img :src="product.product.list?.[0]?.img"
                         alt="{{ product.product.productname }}">
                  </div>
                  <div class="product-cart__info">
                    <div class="product-cart__inside">
                      <h3 @click="handleProduct(product.product.productid, product.product.productname)" class="modal-product__name">
                        {{ product.product.productname }}
                      </h3>
                    </div>
                    <div class="modal-product__quantity">
                      <div class="product-cart__quality__wrap">
                        <button @click="decreaseQuantity(product)" :disabled="product.quantity === 1"
                                class="btn">
                          <font-awesome-icon icon="fa-solid fa-minus"/>
                        </button>
                        <span class="product-quantity"> {{ product.quantity }} </span>
                        <button @click="increaseQuantity(product)" :disabled="product.quantity === 4" class="btn">
                          <font-awesome-icon icon="fa-solid fa-plus"/>
                        </button>
                      </div>
                      <div class="product-cart__remove" @click="removeProduct(product)">
                                  <span>
                                    <font-awesome-icon icon="fa-solid fa-trash-can" />
                                  </span>
                        Xóa
                      </div>
                    </div>
                    <div class="modal-product__price">
                      <div style="color: #cb1c22; font-weight: 500;">
                        {{ formatCurrency(salePrice(product.product) * product.quantity) }}
                      </div>
                      <div style="text-decoration: line-through">
                        {{ formatCurrency(product.product.price * product.quantity) }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-product__pay">
                <div class="modal-product__coupon">
                  <div class="coupon-title">Mã giảm giá</div>
                  <div class="cs-input-group">
                    <input type="text" class="cs-input i-txt-voucher" placeholder="Nhập mã giảm giá">
                    <button type="button" class="cs-btn btn btn-primary btn-apvoucher">
                      Áp dụng
                    </button>
                  </div>
                </div>
                <div class="modal-product__total">
                  <p class="text-normal">
                    <span>Tổng tiền:</span>
                    <span>{{ formatCurrency(totalAmount) }}</span>
                  </p>
                  <p class="text-normal">
                    <span>Giảm:</span>
                    <span>- {{ formatCurrency(discountAmount) }}</span>
                  </p>
                  <p class="text--lg">
                    <span class="text-size--lg">Cần thanh toán:</span>
                    <span class="re-price re-red priceFinal">{{ formatCurrency(needToPay) }}</span>
                  </p>
                </div>
              </div>
              <div class="cart__form cart__form--type">
                <div class="cart__form__block">
                  <div class="form-customer" style="display: block">
                    <div class="cart__form__line margin-bottom cart__form__line--col">
                      <div class="namecus">
                        <input type="text" class="form-control" placeholder="Nhập họ và tên"
                               name="contactname"
                               id="contactname" v-model="contactname" required>
                      </div>
                      <div class="phonecus">
                        <input type="tel" class="form-control"
                               placeholder="Nhập số điện thoại"
                               name="contactphone"
                               id="contactphone"
                               v-model="contactphone"
                               pattern="\d*"
                               :minlength="10"
                               :maxlength="10"
                               required
                               autocomplete="off">
                      </div>
                      <input type="text" class="form-control" placeholder="Nhập địa chỉ của bạn"
                             id="address" v-model="address"
                             required style="margin-top: 8px">
                    </div>
                  </div>
                  <div class="cart__form__line form-delivery" style="display: block">
                    <div class="cart__title">Chọn hình thức thanh toán</div>
                    <div class="cart__payment">
                      <div class="cart__payment__wrap cart__methodship">
                        <div class="form-check margin-right" style="width: 180px">
                          <input readonly class="form-check-input" type="radio"
                                 id="cash" value="cash" name="paymentMethod"
                                 v-model="paymentMethod">
                          <label class="form-check-label" for="cash">
                            Thanh toán tiền mặt
                          </label>
                        </div>
                        <div class="form-check" style="width: 200px">
                          <input readonly class="form-check-input" type="radio"
                                 id="vnpay" value="vnpay" name="paymentMethod"
                                 v-model="paymentMethod">
                          <label class="form-check-label" for="vnpay">
                            Thanh toán qua ví VNPay
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary btn-xl cart-submit"
                      :disabled="!contactname || !contactphone || !address || !paymentMethod"
                      @click="finishOrder">
                HOÀN TẤT ĐẶT HÀNG
              </button>
              <p>
                Bằng cách đặt hàng, quý khách đồng ý với
                <a href="https://fptshop.com.vn/tos" class="re-link--gray"
                   style="text-decoration: underline;">
                  Điều khoản sử dụng
                </a>
                của FPTShop
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "BuyNow",
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    increaseQuantity() {
      this.quantity++
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--
      }
    }
  }
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