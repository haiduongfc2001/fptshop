<template>
  <div class="main-background">
    <div class="grid wide">
      <div class="row">
        <div class="col l-12 m-12 c-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb breadcrumb-margin">
              <li class="breadcrumb-item">
                <router-link to="/">Trang chủ</router-link>
              </li>
              <li class="breadcrumb-item" aria-current="page">
                Laptop
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <div class="grid wide slider">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators" style="bottom: -22px">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/15/638066653187695492_F-C1_1200x300.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/14/638066562539296823_F-C1_1200x300.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028581732714199_F-C1_1200x300.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/15/638066628093843990_F-C1_1200x300.png" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <div class="round">
            <span class="carousel-control-prev-icon" aria-hidden="true" style="color: #52585f"></span>
            <span class="visually-hidden">Previous</span>
          </div>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <div class="round">
            <span class="carousel-control-next-icon" aria-hidden="true" style="color: #52585f"></span>
            <span class="visually-hidden">Next</span>
          </div>
        </button>
      </div>
    </div>
    <div class="main-product">
      <div class="grid wide">
        <div class="row" style="margin-left: -8px;
                                margin-right: -8px;">
          <div class="col l-3 m-2.5 c-0 list-product">
            <div class="sidebar-product">
              <!-- Hãng sản xuất -->
              <div class="sidebar-product-item item1">
                <h3 class="sidebar-product-title">Hãng sản xuất</h3>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" value="All" v-model="selectedSuppliers" @change="uncheckAllSuppliers">
                    Tất cả
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" value="1" v-model="selectedSuppliers" @change="uncheckAllSuppliers">
                    Apple
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" value="8" v-model="selectedSuppliers" @change="uncheckAllSuppliers">
                    Asus
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" value="10" v-model="selectedSuppliers" @change="uncheckAllSuppliers">
                    HP
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" value="9" v-model="selectedSuppliers" @change="uncheckAllSuppliers">
                    Lenovo
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" value="11" v-model="selectedSuppliers" @change="uncheckAllSuppliers">
                    MSI
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" value="12" v-model="selectedSuppliers" @change="uncheckAllSuppliers">
                    Gigabyte
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" v-model="selectedSuppliers" @change="uncheckAllSuppliers">
                    Acer
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" v-model="selectedSuppliers" @change="uncheckAllSuppliers">
                    LG
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" v-model="selectedSuppliers" @change="uncheckAllSuppliers">
                    Microsoft
                  </label>
                </div>
              </div>
              <!-- Mức giá -->
              <div class="sidebar-product-item">
                <h3 class="sidebar-product-title">Mức giá</h3>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" v-model="selectedPrices" value="All" @change="uncheckAllSuppliers">
                    Tất cả
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" v-model="selectedPrices" value="price10" @change="uncheckAllSuppliers">
                    Dưới 10 triệu
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" v-model="selectedPrices" value="price1015" @change="uncheckAllSuppliers">
                    Từ 10 - 15 triệu
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" v-model="selectedPrices" value="price1520" @change="uncheckAllSuppliers">
                    Từ 15 - 20 triệu
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" v-model="selectedPrices" value="price2025" @change="uncheckAllSuppliers">
                    Từ 20 - 25 triệu
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" v-model="selectedPrices" value="over25" @change="uncheckAllSuppliers">
                    Trên 25 triệu
                  </label>
                </div>
              </div>
              <!-- Tính năng đặt biệt -->
              <div class="sidebar-product-item">
                <h3 class="sidebar-product-title">Màn hình</h3>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" checked>
                    Tất cả
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                    Khoảng 13 inch
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" >
                    Khoảng 14 inch
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                    Trên 15 inch
                  </label>
                </div>
              </div>
              <!-- Pin -->
              <div class="sidebar-product-item">
                <h3 class="sidebar-product-title">CPU</h3>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" checked>
                    Tất cả
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                    Intel celeron
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" >
                    Intel pentium
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                    Intel core i3
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                    Intel core i5
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                    Intel core i5
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                    Intel core i7
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                    Amd ryzen 3
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                    Amd ryzen 5
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                    Amd ryzen 7
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                    Amd ryzen 9
                  </label>
                </div>
              </div>
              <!-- Ram -->
              <div class="sidebar-product-item">
                <h3 class="sidebar-product-title">Ram</h3>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" checked>
                    Tất cả
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                    Ram 4Gb
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" >
                    Ram 8Gb
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                    Ram 16Gb
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                    Ram 32Gb
                  </label>
                </div>
              </div>
              <!-- Trả góp -->
              <div class="sidebar-product-item">
                <h3 class="sidebar-product-title">Trả góp</h3>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" checked>
                    Tất cả
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                    Trả gớp 0đ
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" >
                    Trả gớp 0%
                  </label>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                    Trả gớp 0đ/0%
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="col l-9 m-9.5 c-12">
            <div class="product-category">
              <div class="grid wide product">
                <div class="product-wapper product">
                  <div class="row  no-gutters">
                    <div class="col l-12 m-12 c-12">
                      <p class="title-product">
                        SẢN PHẨM
                        <span class="title-product-note">
                          ({{ filteredProducts.length }} sản phẩm)
                        </span>
                      </p>
                    </div>
                    <div class="col l-0 m-0 c-12">
                      <div class="sidebar-product">
                        <div class="sidebar-product-item-product">
                          <h3 class="sidebar-product-title">Hãng sản xuất</h3>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" checked>
                              Tất cả
                            </label>
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                              Apple
                            </label>
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" >
                              Samsung
                            </label>
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                              Xiaomi
                            </label>
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" >
                              OPPO
                            </label>
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                              Nokia
                            </label>
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                              Vivo
                            </label>
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                              Realme
                            </label>
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                              Vsmart
                            </label>
                          </div>
                        </div>
                        <div class="sidebar-product-item-product">
                          <h3 class="sidebar-product-title">Mức giá</h3>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" checked>
                              Tất cả
                            </label>
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                              Từ 2 - 4 triệu
                            </label>
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" >
                              Từ 4 - 7 triệu
                            </label>
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue">
                              Từ 7 - 10 triệu
                            </label>
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" >
                              Từ 10 triệu
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row  no-gutters">
                    <div class="col l-12 m-12 c-12">
                      <div class="product-list-tab-wrapper">
                        <span class="tab-title">Ưu tiên xem:</span>
                        <ul class="product-list-tab">
                          <li class="product-list-tab-item active">Bán chạy nhất</li>
                          <li class="product-list-tab-item">Trả gớp 0đ</li>
                          <li class="product-list-tab-item">Giá thấp</li>
                          <li class="product-list-tab-item">Giá cao</li>
                          <li class="product-list-tab-item">Ưu đãi online</li>
                        </ul>
                      </div>
                    </div>
                    <div class="product-cate-card active">
                      <div class="row no-gutters">
                        <div v-for="product in filteredProducts"
                             :key="product.productid"
                             class="col l-4 m-6 c-6 product-card"
                             @click="handleProduct(product.productid, product.productname)">
                          <div class="product-card-item product-card-item-sale" style="cursor: pointer">
                            <div class="product-card-item-img">
                              <img :src="product.img"
                                   alt="{{ product.productname }}">
                              <div class="sticker">
                                <span class="stickers sticker-event">Trả góp 0%</span>
                                <br>
                                <span class="stickers sticker-sale">Lì xì {{ formatCurrency(product.discount) }}</span>
                              </div>
                            </div>
                            <div class="product-card-item-content">
                              <h3 class="title-card">
                                {{ product.productname }}
                              </h3>
                              <div class="price">
                                <div class="progress">
                                  {{ formatCurrency(salePrice(product)) }}
                                  <div class="progress-bar" role="progressbar" :style="{ width: progressBarWidth(product) }"
                                       aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <!--                    <span class="old-price">{{ formatCurrency(price) }}</span>-->
                                <div class="strike-price">
                                  <span style="text-decoration: line-through">
                                    {{ formatCurrency(product.price) }}
                                  </span>
                                </div>
                              </div>
                              <div class="card-item-info__promo">
                                <div class="card-item-info__promo-product">
                                  <span>
                                    <i><font-awesome-icon icon="fa-solid fa-laptop" /></i>
                                    {{ getMonitorSize(product.description.monitor) }}
                                  </span>
                                              <span>
                                    <i><font-awesome-icon icon="fa-solid fa-microchip" /></i>
                                    {{ product.description.cpu }}
                                  </span>
                                              <span>
                                    <i><font-awesome-icon icon="fa-solid fa-hard-drive" /></i>
                                    {{ product.description.disk }}
                                  </span>
                                              <span>
                                    <i><font-awesome-icon icon="fa-solid fa-microchip" /></i>
                                    {{ getMonitorSize(product.description.ram) }}
                                  </span>
                                              <span>
                                    <i><font-awesome-icon icon="fa-solid fa-weight-hanging" /></i>
                                    {{ getMonitorSize(product.description.gpu) }}
                                  </span>
                                </div>
                                <ItemInfoPromo />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MDBCheckbox } from "mdb-vue-ui-kit";
import ItemInfoPromo from "@/components/layouts/ItemInfoPromo.vue";
import { formatCurrency } from '@/utils'
import {ref} from "vue";
import axios from "axios";
import commonMixin from "@/mixins/commonMixin";

export default {
  name: "Laptop",
  components: {
    ItemInfoPromo,
    MDBCheckbox
  },
  mixins: [commonMixin],
  data() {
    return {
      selectedSuppliers: ['All'],
      selectedPrices: ['All'],
      products: [],
      product_id: "-1",
      product_name: "",
    }
  },

  methods: {
    getPriceRange(price, discount) {
      let price_goc = price - discount;
      if (price_goc < 10000000) {
        return 'price10';
      } else if (price_goc >= 10000000 && price_goc < 15000000) {
        return 'price1015';
      } else if (price_goc >= 15000000 && price_goc < 20000000) {
        return 'price1520';
      } else if (price_goc >= 20000000 && price_goc < 25000000) {
        return 'price2025';
      } else {
        return 'over25';
      }
    },

    formatCurrency,

    getMonitorSize(monitorString) {
      // Split the monitor string by comma and space
      const monitorArray = monitorString.split(", ");
      // Get the first element of the array
      const monitorSize = monitorArray[0];
      return monitorSize;
    },
    handleProduct(product_id, product_name) {
      this.product_id = product_id;
      this.product_name = product_name;
      // console.log(this.product_name_convert),
      this.$router.push({
        name: "productDetail",
        params: {product_id: `${this.product_id}`, product_name_convert: `${this.product_name_convert_computed}`},
      }).catch(() => true);
    },
    uncheckAllSuppliers() {
      if (this.selectedSuppliers.length > 1 && this.selectedSuppliers.includes("All")) {
        this.selectedSuppliers = this.selectedSuppliers.filter(supplier => supplier !== "All");
      }
    },
    uncheckAllPrices() {
      if (this.selectedPrices.length > 1 && this.selectedPrices.includes("All")) {
        this.selectedPrices = this.selectedPrices.filter(price => price !== "All");
      }
    }
  },

  mounted() {
    // Gọi API để lấy danh sách sản phẩm
    axios.get('http://localhost:4000/category/laptop')
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.log(error);
        });
  },

  computed: {
    salePrice() {
      return product => product.price - product.discount;
    },
    discountPercentage() {
      return product => `${((this.salePrice(product) / product.price) * 100).toFixed(2)}%`;
    },
    progressBarWidth() {
      return product => this.discountPercentage(product);
    },
    product_name_convert_computed(){
      return this.removeVietnameseTones(this.product_name).replaceAll(' ', '-').toLowerCase()
    },
    numProducts() {
      return this.products.length;
    },
    filteredProducts() {
      let suppliers = this.selectedSuppliers;
      if (suppliers.includes('All')) {
        suppliers = ['1','12','8','9','10','11'];
      }
      let prices = this.selectedPrices;
      if (prices.includes('All')) {
        prices = ['price10', 'price1015','price1520','price2025','over25'];
      }

      return this.products.filter((product) =>
          suppliers.includes(product.supplierid.toString()) &&
          prices.includes(this.getPriceRange(product.price, product.discount))
      );
    },
  },
}
</script>

<style>
@import "@/assets/main.css";
@import "@/assets/slider.css";
@import "@/assets/slider-card.css";
@import "@/assets/reponsive.css";
@import "@/assets/grid.css";
@import "@/assets/style.css";

.form-check-input[type=checkbox]:checked {
  border: solid 2px #cb1c22;
  background-color: #cb1c22;
  height: 16px;
  width: 16px;
}
</style>